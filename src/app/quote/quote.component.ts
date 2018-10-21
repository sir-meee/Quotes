import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
 @Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,"'When you play the Game of thrones, you win or you die! There's no middle ground.'","Cersei Lannister","Owen",0,0,new Date())
        ];
  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
    this.quotes[index].showFan=!this.quotes[index].showFan;
  }
  upvote(index){
    this.quotes[index].upvotes++;
  }
  downvote(index){
    this.quotes[index].downvotes++;
  }
  deleteQuote(isComplete,index){
         if (isComplete){
             let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
              if(toDelete){
                 this.quotes.splice(index,1)
             }
         }
     }
  constructor() { }
   ngOnInit() {
  }
 }