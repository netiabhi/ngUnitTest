import { TestBed, inject, fakeAsync } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('Hero service', ()=>{
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service:HeroService;

    beforeEach(()=>{
        mockMessageService = jasmine.createSpyObj(['add']);
        TestBed.configureTestingModule({
            imports:[ HttpClientTestingModule],
            providers: [
                HeroService,
                {provide: MessageService, useValue: mockMessageService}
            ]
        });

        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(HeroService);
    });

    describe('getHero', () =>{
        it('should call get with correct URL',()=>{
                
            service.getHero(4).subscribe();

            /*const req = httpTestingController.expectOne((request)=>{
                console.log(request.url);
                return true;
            });*/

            const req = httpTestingController.expectOne('api/heroes/4');
            
            req.flush({id:4, name:'Abhishek', strength: 100});
            // no unexpected requests are made
            httpTestingController.verify();
        });
    });
});