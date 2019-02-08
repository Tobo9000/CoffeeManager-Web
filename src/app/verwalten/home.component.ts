import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { Order } from '../models/Order';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  searchString: String = '';
  selectedCoffee2: Order;
  coffeecopy2: Order;
  suchListe: Order[];
  filteredList: Order[] = [];

  orders: Order[] = [];
  

  constructor(public requestService: RequestService) { }
  
  search(){
    this.filteredList = [];
    console.log(this.suchListe);
    console.log("Suche: "+ this.searchString);
    for(var s=0; s< this.orders.length; s++){
      
      if(this.searchString === this.suchListe[s].amount.toString() || this.searchString === this.suchListe[s].date.toDateString()){
        this.filteredList.push(this.suchListe[s]);
        console.log("Ausgabe:")
        console.log(this.suchListe[s]);
      }

    }
  }
  
  resetListe(){
    if(this.filteredList.length != 0){
      this.filteredList = [];
    }
  }
  
  selectCoffeeCopy(coffee2: Order) {
    this.selectedCoffee2 = coffee2;
    this.coffeecopy2 = Object.assign({}, coffee2);
    console.log(this.coffeecopy2) 
  }
  
  ueberschreiben(){
    this.selectedCoffee2.date = this.coffeecopy2.date;
    this.selectedCoffee2.amount = this.coffeecopy2.amount;
  }
  
  loeschen(order: Order){  
    
    for(var i=0; i< this.orders.length; i++){
    
      if(this.orders[i]._id === order._id){
        this.orders.splice(i,1);
        this.suchListe = this.orders;
        this.filteredList = [];
        console.log(order);

        this.requestService.delete(`order/deleteItem/${order._id}`).subscribe(res=>{
          console.log(res);
        }, error=>{
          console.log(error);
        })
      }
    }
   }
   
   
   
   ngOnInit() {
     this.requestService.get("order").subscribe(res=>{
       console.log(res);
       if(res !== null){
         this.orders = res;
         this.suchListe = res;
      }
    }, error=>{
      
    });
  }

}
