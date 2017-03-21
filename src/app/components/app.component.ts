import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Main } from '../main/main.controller';

@Component({
    // The selector is what angular internally uses
    selector: 'ae-app', // <app></app>
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <div [class.m2app-dark]="isDarkTheme">
        <main>
            <router-outlet></router-outlet>
            <br/>
        </main>
    </div>
    `
})

export class AppComponent {
    constructor(){
        console.log('wqeqwe')
    }
}
