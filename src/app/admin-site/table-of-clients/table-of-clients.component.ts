import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-of-clients',
  templateUrl: './table-of-clients.component.html',
  styleUrls: ['./css/table-of-clients.component.css','./css/mobile.table-of-clients.component.css']
})
export class TableOfClientsComponent implements OnInit {

  listOfClients=[
    {name:'Симонов Максим Леонидович', 
     phone:'8-908-019-98-90', 
     rate:'студенческий',
     equipment:'Доска 1шт\nКрепы 1шт\nХоба 1шт',
     cost:'1500р', 
     dateStart:'09.11.2021', 
     dateFinish:'15.11.2021',
     comment:'редкостный долбоеб, больше ему экипу не выдаем',
     state:'prepayment'},

     {name:'Петров Андрей Степанович', 
     phone:'8-950-432-50-78', 
     rate:'день',
     equipment:'Доска 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт',
     cost:'4500р', 
     dateStart:'10.11.2021', 
     dateFinish:'12.11.2021',
     comment:'попросил позвонить в случае просрочки',
     state:''},
     
     {name:'Петров Андрей Степанович', 
     phone:'8-950-432-50-78', 
     rate:'день',
     equipment:'Доска 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт',
     cost:'4500р', 
     dateStart:'10.11.2021', 
     dateFinish:'12.11.2021',
     comment:'попросил позвонить в случае просрочки',
     state:''},
    
     {name:'Петров Андрей Степанович', 
     phone:'8-950-432-50-78', 
     rate:'день',
     equipment:'Доска 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт\nКрепы 3шт',
     cost:'4500р', 
     dateStart:'10.11.2021', 
     dateFinish:'12.11.2021',
     comment:'попросил позвонить в случае просрочки',
     state:'delayedRefund'},
    
     {name:'Петров Андрей Степанович', 
     phone:'8-950-432-50-78', 
     rate:'день',
     equipment:'Доска 3шт',
     cost:'4500р', 
     dateStart:'10.11.2021', 
     dateFinish:'12.11.2021',
     comment:'попросил позвонить в случае просрочки',
     state:''},
    
     {name:'Петров Андрей Степанович', 
     phone:'8-950-432-50-78', 
     rate:'день',
     equipment:'Доска 3шт\nКрепы 3шт',
     cost:'4500р', 
     dateStart:'10.11.2021', 
     dateFinish:'12.11.2021',
     comment:'попросил позвонить в случае просрочки',
     state:'delayedRefund'},
    
     {name:'Петров Андрей Степанович', 
     phone:'8-950-432-50-78', 
     rate:'день',
     equipment:'Доска 3шт\nКрепы 3шт',
     cost:'4500р', 
     dateStart:'10.11.2021', 
     dateFinish:'12.11.2021',
     comment:'попросил позвонить в случае просрочки',
     state:''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
