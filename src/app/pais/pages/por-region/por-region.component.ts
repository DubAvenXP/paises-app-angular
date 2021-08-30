import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClaseCSS(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary me-3'
      : 'btn btn-outline-primary me-3';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paisService.buscarPorRegion(region).subscribe((paises: Country[]) => {
      this.paises = paises;
    });
  }
}
