import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('Heros Component', () =>{
    let component: HeroesComponent;
    let HEROS;
    let mockHeroService;

    beforeEach(()=> {
        HEROS = [ 
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 },
            { id: 14, name: 'Celeritas', strength: 15 }];
        
        mockHeroService = jasmine.createSpyObj(['deleteHero']);
        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', ()=>{
        it('should delete indicated hero from the heros list', ()=> {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROS;
            component.delete(HEROS[0]);

            expect(component.heroes.length).toBe(3);
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[0]);
        })
    });
})