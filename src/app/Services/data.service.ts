import  {Injectable} from "@angular/core";
import  {Http, Response} from "@angular/http";
import { People } from '../Model/people';
import { Film } from '../Model/film';
import { Recherche } from '../Model/recherche';
import { Observable } from 'rxjs/Observable';

import "rxjs";


@Injectable()
export class DataService{

	private page: number = 0;
	private titreRecherche: String = "";

	constructor(private http : Http){ }

  rechercherHistorique(): Observable<Recherche> {
     if (this.titreRecherche === "") {
       return Observable.throw("Pas de recherche historique");
      } else {
        return this.rechercherFilms(this.titreRecherche, this.page);
      }
  }

	rechercherFilms(nom: String, page: number): Observable<Recherche> {
    this.titreRecherche = nom;
    this.page = page;
      return this.http.get("https://swapi.co/api/people/?search=" + nom + "&page=" + page)
      .map((response : Response) => {
        let resultat = response.json();

        if (resultat && resultat["results"]) {
          let recherche = new Recherche();
          recherche.people = resultat["results"];
          recherche.pages = Math.ceil(Number(resultat["count"]) / 10);
          recherche.page = page;
          return recherche;
        } else {
          return Observable.throw("Bad response");
        }
      });
  }

	searchFilm(motClef): Observable<People[]>{
		return this.http.get("https://swapi.co/api/people/?search="+motClef)
				.map((res: Response) => {
						let resultat = res.json()["results"];
						return resultat;
				})
				.catch((error: any) => Observable.throw(error.json().error));
	}

	getDetails(id): Promise<People>{
		return this.http.get("https://swapi.co/api/people/"+id)
		.map((response) => response.json())
		.toPromise();
	}

	getFilm(url): Observable<Film[]>{
		return this.http.get(url)
				.map((res: Response) => {
						let resultat = res.json();
						return resultat;
				})
				.catch((error: any) => Observable.throw(error.json().error));
	}
}
