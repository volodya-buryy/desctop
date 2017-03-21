import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'main',
  templateUrl: 'main.html',
   styleUrls: ['main.scss'],
})

export class Main {
    constructor () {
        console.log('main')
    }
}