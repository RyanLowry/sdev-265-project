export class Recipe {
    public id? : number;
    public name? : string;
    public description? : string;
    public isntructions? : string;
    constructor(id?:number,name?:string,description?:string,instructions?:string){
        this.id = id;
        this.description = description;
        this.isntructions = instructions;
        this.name = name;
    }
}
