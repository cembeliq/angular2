import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app/notfound/notfound.component.html',
    styleUrls: ['css/notfound/main.css']
})

export class NotFoundComponent implements OnInit {
    constructor(
        private renderer2: Renderer2,
        @Inject(DOCUMENT) private _document: Document
    ) {
    }

    ngOnInit() {
        const s = this.renderer2.createElement('script');
        s.onload = this.loadNextScript.bind(this);
        s.type = 'text/javascript';
        s.src = 'vendor/jquery/jquery-3.2.1.min.js';
        s.text = ``;
        this.renderer2.appendChild(this._document.body, s);
    }

    loadNextScript() {
        var arr = [
            'js/notfound/main.js'
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
}


