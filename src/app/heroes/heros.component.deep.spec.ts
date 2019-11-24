import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { of } from "rxjs/internal/observable/of";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";

describe('Heros compoent (deep)', ()=>{
    let fixture: ComponentFixture<HeroesComponent>;
    let HEROS;
    let mockService;

    beforeEach(()=>{
        HEROS = [ 
            { id: 11, name: 'Abhishek', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 },
            { id: 14, name: 'Celeritas', strength: 15 }];

        mockService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent, HeroComponent],
            providers: [{provide: HeroService, useValue: mockService}],
            schemas:[NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
        
    });
    
    it('should render each her as hero compoent',()=>{
        mockService.getHeroes.and.returnValue(of(HEROS));
        // invoking ngOnInit
        fixture.detectChanges();

        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDEs.length).toBe(4);
        for(let i=0; i< heroComponentDEs.length; i++) {
            expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROS[i]);
        }
    });
})