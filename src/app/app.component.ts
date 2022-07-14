import { Component } from '@angular/core';
import { firebaseConfig } from './firebaseconfig';
// import {initializeApp} from 'firebase/app'
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  ngOnInit(){
    firebase.initializeApp(firebaseConfig);
  }
}
