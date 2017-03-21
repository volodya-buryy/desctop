import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'main',
  template: '<h1>Hello world</h1>'
})

export class Main {
    constructor () {
        console.log('main')
    }
}