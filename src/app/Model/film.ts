
export class Film{
	public title: string = "";
	public release_date: string = "";
	public director: string = "";
	public producer: string = "";
	public episode_id: string = "";
	public opening_crawl: string = "";
	public isShown: boolean = false;

	constructor(title, release_date, director, producer, episode_id, opening_crawl)
	{
		this.title = title;
		this.release_date = release_date;
		this.director = director;
		this.producer = producer;
		this.episode_id = episode_id;
		this.opening_crawl = opening_crawl;
		this.isShown = false;
	}
}
