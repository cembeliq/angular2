import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/index';

@Component({
    // moduleId: module.id,
    selector: 'alert',
    templateUrl: 'app/_directives/alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor( private alertService: AlertService ) {
        
    }
    
    ngOnInit(){
        this.alertService.getMessage()
            .subscribe((message: any) => { this.message = message; });
    }
}