export default class DVD {
  name: string;
  releaseYear: number;
  director: string;

  constructor({
    name,
    releaseYear,
    director,
  }: {
    name: string;
    releaseYear: number;
    director: string;
  }) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.director = director;
  }
}
