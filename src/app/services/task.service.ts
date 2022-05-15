import { Injectable } from "@angular/core";
import { ModelService } from "../services/model.service";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TaskService{
    private items: any[] = [];
    private subj: BehaviorSubject<any> = new BehaviorSubject([]);

    constructor(
        private model: ModelService
    ) {
        this.load();
    }

    //  flow
    get todos() {
        return this.subj.asObservable();
    }

    add(taskText: string) {
        let task = {
             id: this.items.length,
             priority: 1,
             date: Date.now(),
             textAssignment: taskText,
             taskDone: false
        }
        this.items.push(task);
        this.subj.next(this.items);
        this.save();
    }

    edit(id: number, newText: string){

        console.log(id, newText)

        let index: number = this.getItemIndex(id);
        this.items[index].textAssignment = newText;
        this.save();
    }

    done(id: number): void{
        let index: number = this.getItemIndex(id);

        this.items[index].taskDone = !this.items[index].taskDone;
        this.save();
    }

    remove(id: number): void{
        let index: number = this.getItemIndex(id);

        this.items.splice(index,1);
        this.subj.next(this.items);
        this.save();
    }

    load(){
        this.items = this.model.load();
        this.subj.next(this.items);
    }

    save(){
        this.model.save(this.items);
    }

    changePriority(id: number, value: number): void{
        let index: number = this.getItemIndex(id);
        let curPriority = this.items[index].priority;

        curPriority += value;
        if(curPriority < 1) curPriority = 9;
        else if(curPriority > 9) curPriority = 1;
        this.items[index].priority = curPriority;
        this.save();
    }

    sortItems(fieldName: string, mode: number): void{
        const byField = function(fieldName: string, mode: number){
            return (a: any,b: any) => a[fieldName] > b[fieldName] ? mode : -mode;
        }
        this.items.sort(byField(fieldName, mode));
        this.subj.next(this.items);
        this.save();
    }

    getItemIndex(id: number): number{
        return this.items.findIndex(item => item.id === id);
    }

}
