import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppNgBootstrapComponent} from './ng-bootstrap/app.ngbootstrap.component';

@NgModule({
    imports:        [BrowserModule, FormsModule, NgbModule.forRoot()],
    declarations:   [AppNgBootstrapComponent],
    bootstrap:      [AppNgBootstrapComponent]
})
export class AppModule{}