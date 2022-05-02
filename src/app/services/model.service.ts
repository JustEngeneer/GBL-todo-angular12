import { Injectable } from "@angular/core";

@Injectable()
export class ModelService{
    storage: any = window.localStorage;
    readonly Key: string = 'ITEMS';

    constructor(){

    }

    save(data: any){
        let dataStr = JSON.stringify(data);
        this.storage.setItem(this.Key, dataStr);
    }

    load(){
        let dataStr = this.storage.getItem(this.Key);
        return dataStr ? JSON.parse(dataStr) : [];
    }
}