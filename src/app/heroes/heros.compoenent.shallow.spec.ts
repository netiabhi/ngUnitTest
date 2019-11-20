import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { of } from "rxjs/internal/observable/of";
import { By } from "@angular/platform-browser";

describe('Heros compoent (shallow)', ()=>{
    let fixture: ComponentFixture<HeroesComponent>;
    let HEROS;
    let mockService;

    @Component({
        selector: 'app-hero',
        template: '<div></div>'
      })
      class FakeHeroComponent {
        @Input() hero: Hero;
      }
    beforeEach(()=>{
        HEROS = [ 
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 },
            { id: 14, name: 'Celeritas', strength: 15 }];

        mockService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent, FakeHeroComponent],
            providers: [{provide: HeroService, useValue: mockService}],
            //schemas:[NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('it should create one li for each hero', ()=>{
        mockService.getHeroes.and.returnValue(of(HEROS));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(4);
    });
});