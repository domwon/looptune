import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class InputPage {

  minCO: number = 0;
  maxCO: number = 100;
  minPV: number = 0;
  maxPV: number = 100;
  unit: string = 'sec';
  deltaCO: number = 3;
  inputDeadTime: number = 6;
  elapsedTime: number = 37;
  initialPV: number = 13.5;
  finalPV: number = 16;
  processGain: number;
  OLTimeConstant: number;
  deadTime: number;
  scaledKc: number = 1;
  unscaledKc: number;
  resetTime: number;
  rate: number = 0;
  finalTime: number;
  timeStep: number;
  adjustedOLTimeConstant: number;
  adjustedDeadTime: number;
  gain: {
    conservative: number,
    moderate: number,
    aggressive: number,
    custom: number,
    cohenCoon: any
  } = {
    conservative: 1,
    moderate: 2,
    aggressive: 3,
    custom: 4,
    cohenCoon: 'N/A'
  };
  CLTimeConstant: {
    conservative: number;
    moderate: number;
    aggressive: number,
    custom: number
  } = {
    conservative: 1,
    moderate: 2,
    aggressive: 3,
    custom: 31
  };
  inputSetpoint: number;
  inputGain: number;
  inputReset: number = 31;
  reset: number = 31;
  cohenCoonReset: any;
  tuningCalculated: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toast: ToastController) {
    
  }

  roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
  }

  openLoopCalcs() {

    // calc process gain
    this.processGain = (this.finalPV - this.initialPV) / this.deltaCO

    // calc time constant
    this.OLTimeConstant = this.elapsedTime - this.inputDeadTime

    // calc dead time
    if (this.elapsedTime * 4 < 30) {
      this.deadTime = this.roundUp(this.inputDeadTime, 2)
    } else if (this.elapsedTime * 4 < 300) {
      this.deadTime = this.roundUp(this.inputDeadTime, 1)
    } else {
      this.deadTime = Math.round(this.inputDeadTime)
    }

    console.log('Open Loop Parameters\n\nProcess Gain: ' + this.processGain +
    '\nOL Time Constant ' + this.OLTimeConstant +
    '\nDead Time ' + this.deadTime)
  }

  miscellaneousCalcs() {

    // calc unscaled process gain
    if (this.processGain > 0) {
      this.unscaledKc = this.scaledKc * (this.maxCO - this.minCO) /
        (this.maxPV - this.minPV)
    } else {
      this.unscaledKc = -1 * this.scaledKc * (this.maxCO - this.minCO) /
        (this.maxPV - this.minPV)
    }
    console.log(this.unscaledKc);

    // calc final time
    if (this.unit == 'sec') {
      this.finalTime = this.OLTimeConstant * 12 + this.deadTime
    } else {
      this.finalTime = 60 * (this.OLTimeConstant * 12 + this.deadTime)
    }

    // calc time step
    this.timeStep = this.finalTime / 2000

    // calc adjusted time constant & dead time
    this.adjustedOLTimeConstant = this.OLTimeConstant
    this.adjustedDeadTime = this.deadTime
    if (this.unit != 'sec') {
      this.adjustedOLTimeConstant = this.OLTimeConstant * 60
      this.adjustedDeadTime = this.deadTime * 60
    }
    if (this.deadTime == 0) {
      this.adjustedDeadTime = this.timeStep
    }
  }

  tuningCalcs() {

    // calc reset
    this.reset = this.adjustedOLTimeConstant

    // calc recommended closed loop time constants
    if (this.unit == 'sec') {
      this.CLTimeConstant.conservative = this.adjustedOLTimeConstant
      this.CLTimeConstant.moderate = this.adjustedOLTimeConstant * 0.8
      this.CLTimeConstant.aggressive = this.adjustedOLTimeConstant * 0.65
    } else {
      this.CLTimeConstant.conservative = this.adjustedOLTimeConstant / 60
      this.CLTimeConstant.moderate = this.adjustedOLTimeConstant * 0.8 / 60
      this.CLTimeConstant.aggressive = this.adjustedOLTimeConstant * 0.65 / 60
    }

    // calc recommended gains
    this.gain.conservative = this.calcGainForTuning(this.CLTimeConstant.conservative)
    this.gain.moderate = this.calcGainForTuning(this.CLTimeConstant.moderate)
    this.gain.aggressive = this.calcGainForTuning(this.CLTimeConstant.aggressive)
    

    // Cohen Coon
    if (this.deadTime == 0) {
      this.gain.cohenCoon = 'N/A'
      this.cohenCoonReset = 'N/A'
    } else {
      this.gain.cohenCoon = 0.45 / Math.abs(this.processGain) *
        (this.adjustedOLTimeConstant / this.adjustedDeadTime + 0.092) *
        ((this.maxPV - this.minPV) / this.maxCO - this.minCO)

      this.cohenCoonReset = 3.33 * this.adjustedDeadTime * (this.adjustedOLTimeConstant +
        0.092 * this.adjustedDeadTime) / (this.adjustedOLTimeConstant + 2.22 *
          this.adjustedDeadTime)
    }

    this.gain.custom = this.calcGainForTuning(this.CLTimeConstant.custom)
  }

  // function for calculating recommended gain for tuning
  calcGainForTuning(cl) {
    if (this.unit == 'sec') {
      return Math.abs(this.adjustedOLTimeConstant /
        (this.processGain * (cl + this.adjustedDeadTime)) *
          ((this.maxPV - this.minPV) / (this.maxCO - this.minCO)))
    } else {
      return Math.abs(this.adjustedOLTimeConstant /
        (this.processGain * (cl * 60 + this.adjustedDeadTime)) *
          ((this.maxPV - this.minPV) / (this.maxCO - this.minCO)))
    }
  }

  alert() {
    this.openLoopCalcs()
    this.miscellaneousCalcs()
    this.tuningCalcs()
    
    console.log('Custom\nGain: ' + this.gain.custom + '\nReset: '
      + this.reset + '\nCL: ' + this.CLTimeConstant.custom)

    this.tuningCalculated = true;

    this.presentToast('Tuning parameters calculated. Scroll down to enter.')
  }

  presentToast(message) {
    let toast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }
}
