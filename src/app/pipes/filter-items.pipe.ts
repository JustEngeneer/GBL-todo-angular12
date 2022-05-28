import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterItems',
    pure: false
})
export class FilterItemsPipe implements PipeTransform {
    transform(value: any[], filterExp: string): any[] {
        let items: any[] = value;
        
        if(filterExp.length > 0)
            items = value.filter(item => item.textAssignment.indexOf(filterExp) > -1);

        return items;
    }
}