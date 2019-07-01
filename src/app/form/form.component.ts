import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() roomType
  @Input() CheckIn
  @Input() CheckOut
  @Input() Adults
  @Input() Kids
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.roomType = params.roomType
      console.log(this.roomType),

      this.CheckIn = params.CheckIn
      console.log(this.CheckIn),

      this.CheckOut = params.CheckOut
      console.log(this.CheckOut),

      this.Adults = params.Adults
      console.log(this.Adults),

      this.Kids = params.Kids
      console.log(this.Kids)
    })
  }

  onConfirm(){
    this.router.navigateByUrl("rooms")
  }

}
