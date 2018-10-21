export class Quote {
  
  public showAuthor:boolean;
  constructor(public id:number, public name:string, public author:string, public upvotes:number, public downvotes:number){
    this.showAuthor=false
  }

}
