export interface ICharacter {
	id: number;
	name: string;
	status: Status;
	species: string;
	type: string;
	gender: Gender;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Location {
	name: string;
}

export interface IEpisode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: IEpisodeChar;
	url: string;
	created: string;
}

export interface IEpisodeChar {
	id: number;
	name: string;
	image: string;
}
