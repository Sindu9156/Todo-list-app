import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
        public list=[""];
        public item='';
    
        public addList(){
          if(this.item=='')
          {

          }
          else{
        
            this.list.push(this.item);
            this.item='';
          }
        }
         public deleteList(){
          this.list.splice(1);
        }


}
