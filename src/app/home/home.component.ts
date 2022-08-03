import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allQuotes:any[]=[]
  constructor(private db:DbService) { }

  ngOnInit(): void {
    this.db.getAllQuotes().then(docsData=>{
      this.allQuotes= docsData.docs.map(doc=>doc.data());
      this.allQuotes.sort((a,b)=>{
       return Number(new Date(a.time))-Number(new Date(b.time))
      })
      console.log('allQuotes',this.allQuotes)
    })
  }

}
