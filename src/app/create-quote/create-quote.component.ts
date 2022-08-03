import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  quote=new FormControl('',[Validators.required])
  constructor(private db:DbService, private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.quote.value)
    this.db.saveQuote(this.quote.value)
    this.router.navigate(['/'])
  }

}
