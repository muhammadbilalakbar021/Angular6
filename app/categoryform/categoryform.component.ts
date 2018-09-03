import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query,stagger} from '@angular/animations';

@Component({
  //selector: 'app-categoryform',
  selector: 'app-root',
  templateUrl: './categoryform.component.html',
  styleUrls: ['./categoryform.component.css'],

  animations:[
    trigger('goals-anim',[transition('* =>*',[query(':enter',style({opacity:0}),{optional:true}),
    query(':enter',stagger('300ms',[
      animate('.6s ease-in',keyframes([
        style({opacity:0,transform:'translateX(-75%)',offset:0}),
        style({opacity:.5,transform:'translateX(35px)',offset:.3}),
        style({opacity:.1,transform:'translateX(0)',offset:.7}),
        //style({opacity:.1,transform:'translateX(100%)',offset:.7}),
        
      ]))
    ]),{optional:true}),
    query(':leave',stagger('300ms',[
      animate('.6s ease-in',keyframes([
        style({opacity:1,transform:'translateY(0)',offset:0}),
        style({opacity:.5,transform:'translateY(35px)',offset:.3}),
        style({opacity:0,transform:'translateY(-75%)',offset:1}),
      ]))
    ]),{optional:true}) 
  ])
])
]
})
export class CategoryformComponent implements OnInit {

  itemCount:number;
  btnText:String="Submit";
  goalText:string="";
  //status:string="yes";
  submitStatus:boolean=false;  
  goals=[];
  selectedStatus=''
  status:any=[
    '1',
    '0'
  ];

  radioChangeHandler(event:any)
  {
    this.selectedStatus=event.target.value;
  }


  constructor() { } 

  ngOnInit() 
  {
    this.itemCount=this.goals.length
  }
  
  addItems()
  {
    this.goals.push(this.goalText+" Status= "+this.selectedStatus);    
    this.goalText=''
    this.itemCount=this.goals.length
  }
  removeItem(i)
  {
    this.goals.splice(i,1)
    this.itemCount=this.goals.length
  }
  bilal()
  {
    this.submitStatus=true;
  }

}


