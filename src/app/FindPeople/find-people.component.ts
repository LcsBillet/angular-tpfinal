import {Component} from '@angular/core';
import { People } from '../Model/people';
import  { DataService } from '../Services/data.service';


@Component({
	selector: 'find-people',
	templateUrl: './find-people.component.html',
	styleUrls: ['find-people.component.css']
})


export class FindPeopleComponent{
	public keyWord: string = "";
	public searchOk: boolean = false;
	public error: boolean = false;
	public listPeople: People[] = [];
	public errorText: string = "";
	public pages: number = 0;
	public pageCourante: number = 0;

	constructor(private dataService : DataService){}

  ngOnInit() {
    this.dataService.rechercherHistorique()
      .subscribe(
      ((recherche) => {
        this.pageCourante = recherche.page;
        this.pages = recherche.pages;
        this.listPeople = recherche.people;
      }),
      (error) => {
        //console.log("Pas d'historique");
      });
  }

	rechercherTous() {
		this.searchOk = true;
		this.error = false;
		this.listPeople = [];
		this.keyWord = "";
		this.dataService.rechercherFilms("", 1)
			.subscribe(
			((recherche) => {
				this.pageCourante = recherche.page;
				this.pages = recherche.pages;
				this.listPeople = recherche.people;
			}),
			(error) => {
				//console.log("Aucun résultat");
			});
	}

	rechercher() {
    this.errorText = "";
    if (this.keyWord.length < 1) {
			this.error = true;
			this.searchOk = false;
      this.errorText = "Please type at least one caracter.";
    } else {
      this.searchOk = true;
			this.error = false;
      this.listPeople = [];
      this.dataService.rechercherFilms(this.keyWord, 1)
        .subscribe(
        ((recherche) => {
          this.pageCourante = recherche.page;
          this.pages = recherche.pages;
          this.listPeople = recherche.people;
        }),
        (error) => {
          //console.log("Aucun résultat");
        });
    }
  }

	changerPage(numeroPage: number) {
    this.dataService.rechercherFilms(this.keyWord, numeroPage)
      .subscribe(
      ((recherche) => {
        this.pageCourante = recherche.page;
        this.pages = recherche.pages;
        this.listPeople = recherche.people;
      }),
      (error) => {
        //console.log("Aucun résultat");
      });
  }
}
