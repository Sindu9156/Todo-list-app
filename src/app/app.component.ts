import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';

  public list:string[]=[];
  public item:string='';
  ngOnInit(){
    const storedList=localStorage.getItem('list');
    if(storedList){
      this.list=JSON.parse(storedList);
    }
  }
  saveList(){
    localStorage.setItem('list',JSON.stringify(this.list));
  }
  public addList(){
      if(this.item==''){


      }
      else{
        this.list.push(this.item);
        this.item='';

      }
   
      this.saveList();
    
  }
   public deleteList(index:number){
    this.list.splice(index,1);
    this.saveList();
  }
}
