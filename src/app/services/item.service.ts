import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ItemService{
    private _items: any[] = [];
    private _subj: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(private _storage: StorageService) {
        this.loadItems();
    }

    //  flow
    get todos() {
        return this._subj.asObservable();
    }

    createItem(taskText: string) {
        const task = {
             id: Date.now(),
             priority: 1,
             date: Date.now(),
             textAssignment: taskText,
             taskDone: false
        };

        this._items.push(task);
        this._subj.next(this._items);
        this.saveItems();
    }

    updateItem(id: number, newText: string){
        const index: number = this.getItemIndex(id);

        this._items[index].textAssignment = newText;
        this.saveItems();
    }
    deleteItem(id: number): void{
        const index: number = this.getItemIndex(id);

        this._items.splice(index,1);
        this._subj.next(this._items);
        this.saveItems();
    }

    done(id: number): void{
        const index: number = this.getItemIndex(id);

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
        this._subj.next(this._items);
        this.saveItems();
    }

    getItemIndex(id: number): number{
        return this._items.findIndex(item => item.id === id);
    }

}