import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  roomType
  CheckIn
  CheckOut
  Adults
  Kids

  navArray  = [{path:"rooms",name:"Welcome"},
               {path:"contact",name:"Contact"}]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onNavigate(item){
    this.router.navigateByUrl(item.path)
  }
  onBook(){
    this.router.navigate(['/form'], { queryParams:{roomType: this.roomType, CheckIn: this.CheckIn, CheckOut: this.CheckOut, Adults: this.Adults, 
      Kids: this.Kids}})
  }
}
