import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class StorageService{
    private _storage: any = window.localStorage;
    private readonly _key = 'ITEMS';

    saveItems(data: any){
        const dataStr = JSON.stringify(data);

        this._storage.setItem(this._key, dataStr);
    }
    loadItems(){
        const dataStr = this._storage.getItem(this._key);

        return dataStr ? JSON.parse(dataStr) : [];
    }
}
