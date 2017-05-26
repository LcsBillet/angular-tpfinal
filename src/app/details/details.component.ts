import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../Model/people';
import { Film } from '../Model/film';
import  { DataService } from '../Services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public id: string = "";
  private sub: any;
  public peopleDetails : People = new People("", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  public listFilm : Film[] = [];

  constructor(private route: ActivatedRoute, private dataService : DataService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.dataService.getDetails(this.id).
   			then((result) => {
   				//console.log(result)
   				this.peopleDetails = result;
          for (var filmUrl of this.peopleDetails.films) {
            this.dataService.getFilm(filmUrl).
             subscribe(
               result => {
                 //console.log(result);
                 this.listFilm.push(new Film(result["title"], result["release_date"], result["director"], result["producer"], result["episode_id"], result["opening_crawl"]));
               },
               error => {
                 console.log(error);
               });
          };
   			})
   			.catch((error) => {
   				console.log(error);
   			 });
    });
  }

  show(item){
    item.isShown = true;
    //console.log(item.title + " est affiché !");
  }

  hide(item){
    item.isShown = false;
    //console.log(item.title + " est masqué !");
  }

}
