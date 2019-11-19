import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("Hero Component (Shallow)", ()=>{
    let fixture : ComponentFixture<HeroComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should render the hero name in anchor tag', ()=>{
        fixture.componentInstance.hero = {id: 1, name: 'Abhishek', strength: 3};
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Abhishek');
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('Abhishek');
    });
})