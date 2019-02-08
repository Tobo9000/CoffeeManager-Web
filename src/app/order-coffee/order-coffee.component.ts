import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { Order } from '../models/Order';

@Component({
  selector: 'app-order-coffee',
  templateUrl: './order-coffee.component.html',
  styleUrls: ['./order-coffee.component.css']
})

export class OrderCoffeeComponent implements OnInit {
  liste: Order[] = [];
  selectedCoffee: Order;
  coffeecopy: Order;


  constructor(public requestService: RequestService) { }

 
  submit(coffeeForm) {
    this.liste.push(coffeeForm.value)
    console.log(coffeeForm.value)
    coffeeForm.reset();
  }

  bestaetigen(){
    this.saveOrders(this.liste) 
    this.liste = [];   
  }
  
  saveOrders(liste: Order[]): void {
    for(var i=0; i< liste.length; i++){
        // this.orders.push(liste[i]);  // Verwalten-Liste direkt (ohne Server)
        this.hinzufuegen(liste[i]);                   
    }  
  }

  selectCoffeeCopy(coffee: Order) {
    this.selectedCoffee = coffee;
    this.coffeecopy = Object.assign({}, coffee);
    console.log(this.coffeecopy) 
  }

  ueberschreiben(){
    this.selectedCoffee.firstname = this.coffeecopy.firstname;
    this.selectedCoffee.lastname = this.coffeecopy.lastname;
    this.selectedCoffee.email = this.coffeecopy.email;
    this.selectedCoffee.amount = this.coffeecopy.amount;
  }

  loeschen(l: Order){
    for(var i=0; i< this.liste.length; i++){
      if(this.liste[i] === l){
        this.liste.splice(i,1); 
        // this.requestService.orders.splice(i,1);
      }
    }
  }


hinzufuegen(order: Order){
  console.log(order)
  this.requestService.post("order/addOrder", order).subscribe(res => {
    console.log(res)
  }, err => {
    console.log(err)
  });
}

  ngOnInit(){
  }
  
}

