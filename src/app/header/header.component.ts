import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{
    // @Output () onRecipes = new EventEmitter<boolean>();
    // @Output () onShopping = new EventEmitter<boolean>();
    @Output() featureSelected = new EventEmitter<string>();
    
    onSelect(feature:string){
        this.featureSelected.emit(feature);
    }


    ngOnInit(){
        
    }



    // onClickRecipes(){
    //     this.onRecipes.emit(true);
    // }

    // onClickShopping(){
    //     this.onShopping.emit(true);

    // }

}