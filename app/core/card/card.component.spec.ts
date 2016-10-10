import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By }                               from "@angular/platform-browser";
import { DebugElement }                     from "@angular/core";

import { CardComponent } from "./card.component";

describe('CardComponent', () => {

    let comp: CardComponent;
    let fixture: ComponentFixture<CardComponent>;
    let titleEl: DebugElement;

    // async beforeEach
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [ CardComponent ],
        }).compileComponents(); // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        comp    = fixture.componentInstance;

        comp.title   = "Greatest title";
        fixture.detectChanges(); // trigger initial data binding

        titleEl   = fixture.debugElement.query(By.css('.card-title'));
    });

    it('Check title', () => {
        expect(titleEl.nativeElement.textContent).toContain("Greatest title");
    });
});