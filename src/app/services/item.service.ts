import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { BehaviorSubject } from "rxjs";

interface ItemActions<T> {
    createItem: (obj: T) => T;
    updateItem: (obj: T) => T;
    deleteItem: (obj: T) => T;
}

@Injectable()
export class ItemService implements ItemActions<any>{
    private _items: any[];
    private _subj: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private _storage: StorageService) {
        this._items = [];
        this.loadItems();
    }

    //  flow
    get todos() {
        return this._subj.asObservable();
    }

    createItem(item: any) {
        this._items.push(item);
        this.saveItems();
    }

    updateItem(item: any){
        const index: number = this.getItemIndex(item.id);

        this._items[index] = item;
        this.saveItems();
    }
    deleteItem(item: any): void{
        const index: number = this.getItemIndex(item.id);

        this._items.splice(index,1);
        this.saveItems();
    }

    done(item: any): void{
        const index: number = this.getItemIndex(item.id);

        this._items[index].taskDone = !this._items[index].taskDone;
        this.saveItems();
    }

    loadItems(){
        this._items = this._storage.loadItems();
        this._subj.next(this._items);
    }

    saveItems(){
        this._storage.saveItems(this._items);
    }

    changeItemPriority(id: number, value: number): void{
        const index: number = this.getItemIndex(id);
        let curPriority = this._items[index].priority;

        curPriority += value;
        if(curPriority < 1) curPriority = 9;
        else if(curPriority > 9) curPriority = 1;
        this._items[index].priority = curPriority;
        this.saveItems();
    }

    sortItems(fieldName: string, mode: number): void{
        const byField = function(fieldName: string, mode: number){
            return (a: any,b: any) => a[fieldName] > b[fieldName] ? mode : -mode;
        }
        this._items.sort(byField(fieldName, mode));
        this.saveItems();
    }

    getItemIndex(id: number): number{
        return this._items.findIndex(item => item.id === id);
    }

}
