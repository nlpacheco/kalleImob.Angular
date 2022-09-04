/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ErrorPageComponent } from './error-page.component';

let component: ErrorPageComponent;
let fixture: ComponentFixture<ErrorPageComponent>;

describe('error-page component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ErrorPageComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ErrorPageComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});