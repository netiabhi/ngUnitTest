import { StrengthPipe } from "./strength.pipe"

describe('strength pipe', ()=>{
    it('should display weak if strength is 5', ()=>{
        let pipe = new  StrengthPipe();

        expect(pipe.transform(5)).toEqual("5 (weak)")
    })

    it('should display strong if strength is 10', ()=>{
        let pipe = new  StrengthPipe();

        expect(pipe.transform(10)).toEqual("10 (strong)")
    })

    it('should display unbelievable if stregth is 21', ()=>{
        let pipe = new  StrengthPipe();

        expect(pipe.transform(21)).toEqual("21 (unbelievable)")
    })
})