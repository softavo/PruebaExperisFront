import { Injectable } from '@angular/core';
import { Tecnologia } from '../models/tecnologia';

@Injectable()
export class TecnologiasService {
  public tecnologias: Array<Tecnologia>;

  constructor() { 
      this.tecnologias = [
			new Tecnologia(1, '.Net', 'Asp.Net'),
      new Tecnologia(2, '.Net', 'MVVM'),
      new Tecnologia(3, '.Net', 'Ado.Net'),
      new Tecnologia(4, '.Net', 'Entity FrameWork'),
      new Tecnologia(5, '.Net', 'LinQ'),
      new Tecnologia(1, 'Java', 'Java Server Pages'),
      new Tecnologia(2, 'Java', 'Java Server Faces'),
      new Tecnologia(3, 'Java', 'Enterprise Java Beans'),
      new Tecnologia(4, 'Java', 'Java Persistence Api'),
      new Tecnologia(5, 'Java', 'Java Messagining Services'),
		];

  }

  getTecnologias(): Array<Tecnologia>{
		return this.tecnologias;
	}
}
