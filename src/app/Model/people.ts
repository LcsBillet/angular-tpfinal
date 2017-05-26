import { Film } from '../Model/film';

export class People{
	public name: string = "";
	public height: string = "";
	public mass: string = "";
	public hair_color: string = "";
	public skin_color: string = "";
	public eye_color: string = "";
	public birth_year: string = "";
	public gender: string = "";
	public films: Array<string> = [""];
	public species: Array<string> = [""];
	public vehicles: Array<string> = [""];
	public starships: Array<string> = [""];
	public created: string = "";
	public edited: string = "";
	public url: string = "";

	constructor(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films, species, vehicles, starships, created, edited, url)
	{
		this.name = name;
		this.height = height;
		this.mass = mass;
		this.hair_color = hair_color;
		this.skin_color = skin_color;
		this.eye_color = eye_color;
		this.birth_year = birth_year;
		this.gender = gender;
		this.films = films;
		this.species = species;
		this.vehicles = vehicles;
		this.starships = starships;
		this.created = created;
		this.edited = edited;
		this.url = url;
	}
}
