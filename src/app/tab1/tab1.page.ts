import { Component } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  isPlay = false;
  note = '';
  tone = new Audio('../../assets/group1/G.mp3');
  musicalNotes = [
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
  ];

  async play(note: string) {
    if (this.isPlay && this.note === note) {
      await this.resetValues();
    } else {
      this.note = '';
      this.isPlay = false;
      this.tone.pause();
      this.setToneByNote(note);
      this.setValues(note);
      const promise = this.tone.play();
      await this.playSound(promise);
    }
  }

  setValues(note: string) {
    this.isPlay = true;
    this.note = note;
  }

  async resetValues() {
    this.note = '';
    this.isPlay = false;
    await this.delaySound(true);
    this.tone.pause();
  }

  async delaySound(downVolumen?: boolean) {
    for (let index = 0; index < 100 ; index++) {
      console.log(index);
      await this.setTimeOut();

      downVolumen ? this.volumenDown(index) :  this.volumenUp(index);
    }
  }

  async setTimeOut() {
    return new Promise((resolve) => setTimeout(resolve, 20));
  }

  volumenUp(index: number) {
    this.tone.volume = 0.01 * index;
  }

  volumenDown(index: number) {
    this.tone.volume = 1 - 0.01 * index;
  }

  async playSound(promise: any) {
    if (promise) {
      await promise
        .then(async () => {
          this.delaySound();
          console.log('Playing...');
        })
        .catch(function (error: any) {
          console.error('error play', error);
        });
    }
  }

  setToneByNote(note: string) {
    switch (note) {
      case 'C':
        this.tone = new Audio('../../assets/group1/C.mp3');
        break;
      case 'Db':
        this.tone = new Audio('../../assets/group1/Db.mp3');
        break;
      case 'D':
        this.tone = new Audio('../../assets/group1/D.mp3');
        break;
      case 'Eb':
        this.tone = new Audio('../../assets/group1/Eb.mp3');
        break;
      case 'E':
        this.tone = new Audio('../../assets/group1/E.mp3');
        break;
      case 'F':
        this.tone = new Audio('../../assets/group1/F.mp3');
        break;
      case 'Gb':
        this.tone = new Audio('../../assets/group1/Gb.mp3');
        break;
      case 'G':
        this.tone = new Audio('../../assets/group1/G.mp3');
        break;
      case 'Ab':
        this.tone = new Audio('../../assets/group1/Ab.mp3');
        break;
      case 'A':
        this.tone = new Audio('../../assets/group1/A.mp3');
        break;
      case 'Bb':
        this.tone = new Audio('../../assets/group1/Bb.mp3');
        break;
      case 'B':
        this.tone = new Audio('../../assets/group1/B.mp3');
        break;
      default:
        break;
    }
  }
  
  getFill(currentNote: string) {
    if (this.note === currentNote) {
      return 'solid';
    } else {
      return 'outline';
    }
  }
}
