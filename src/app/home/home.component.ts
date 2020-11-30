import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['css/home/bootstrap.min.css', 'css/home/waves.min.css', 'css/home/feather.css', 'css/home/font-awesome-n.min.css', 'css/home/chartist.css', 'css/home/style.css', 'css/home/widget.css']
})
export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService, private renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        const s = this.renderer2.createElement('script');
        s.onload = this.loadNextScript.bind(this);
        s.type = 'text/javascript';
        s.src = 'js/jquery.min.js';
        s.text = ``;
        this.renderer2.appendChild(this._document.body, s);
    }

    loadNextScript() {
        var arr = [
            'js/jquery-ui.min.js',
            'js/popper.min.js',
            'js/bootstrap.min.js',
            'js/waves.min.js',

            'js/jquery.slimscroll.js',

            'js/jquery.flot.js',
            'js/jquery.flot.categories.js',
            'js/curvedlines.js',
            'js/jquery.flot.tooltip.min.js',

            'js/chartist.js',

            'js/pcoded.min.js',
            'js/vertical-layout.min.js',
            'js/custom-dashboard.min.js',
            'js/script.min.js',


            'js/rocket-loader.min.js',
        ];
        var s = []
        for (let i = 0; i < arr.length; i++) {
            s[i] = this.renderer2.createElement('script');
            s[i].type = 'text/javascript';
            s[i].src = arr[i];
            s[i].text = ``;
            this.renderer2.appendChild(this._document.body, s[i]);
        }
    }

    // ngOnInit() {
    //     var arr = [
    //         'js/jquery.min.js',
    //         'js/jquery-ui.min.js',
    //         'js/popper.min.js',
    //         'js/bootstrap.min.js',
    //         'js/waves.min.js',

    //         'js/jquery.slimscroll.js',

    //         'js/jquery.flot.js',
    //         'js/jquery.flot.categories.js',
    //         'js/curvedlines.js',
    //         'js/jquery.flot.tooltip.min.js',

    //         'js/chartist.js',

    //         'js/amcharts.js',
    //         'js/serial.js',
    //         'js/light.js',

    //         'js/pcoded.min.js',
    //         'js/vertical-layout.min.js',
    //         'js/custom-dashboard.min.js',
    //         'js/script.min.js',


    //         'js/rocket-loader.min.js',
    //     ];
    //     var s = []
    //     for (let i = 0; i < arr.length; i++) {
    //         s[i] = this.renderer2.createElement('script');
    //         s[i].type = 'text/javascript';
    //         s[i].src = arr[i];
    //         s[i].text = ``;
    //         this.renderer2.appendChild(this._document.body, s[i]);
    //     }
    //     const s1 = this.renderer2.createElement('script');
    //     s1.type = 'text/javascript';
    //     s1.txt = `window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());

    //     gtag('config', 'UA-23581568-13');`;
    //     this.renderer2.appendChild(this._document.body, s1);

    // }
}