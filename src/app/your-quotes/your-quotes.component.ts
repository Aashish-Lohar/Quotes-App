import { Component, OnInit } from '@angular/core';
import { CurrentuserService } from '../service/currentuser.service';
import { DbService } from '../service/db.service';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
@Component({
  selector: 'app-your-quotes',
  templateUrl: './your-quotes.component.html',
  styleUrls: ['./your-quotes.component.css']
})
export class YourQuotesComponent implements OnInit {
  yourQuotes:any[]=[];
  quoteObj:any[]=[];
  dataIds:any[]=[];
  constructor(private db:DbService,private currentUser:CurrentuserService) { }

  ngOnInit(): void {
    this.quotes()
  }

  quotes(){
    const currentEmail=localStorage.getItem('currentUser');
    this.db.getAllQuotes().then(docsData=>{
      this.yourQuotes=docsData.docs.map(doc=>{
        return {id:doc.id,quote:doc.data()}
      })
      // console.log('yourQuotes',currentEmail,this.yourQuotes)
      this.yourQuotes=this.yourQuotes.filter(d=>{
        return d.quote.by==currentEmail})
      console.log('yourQuotes',currentEmail,this.yourQuotes)
    })
  }
  
  deleteData(id:any,i:any){
    console.log('your',this.yourQuotes)
    this.yourQuotes.splice(i,1)
    const docRef=firebase.firestore().collection('quotes').doc(id).delete().then((data)=>{
      M.toast({html: 'Quote deleted succesfully',classes:'green'})
    }).catch(err=>{
      console.log(err)
      M.toast({html: 'Error deleting quote',classes:'red'})
    })
  }

}
