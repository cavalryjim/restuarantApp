import { Component } from '@angular/core';
import { ZamatoService } from '../services/zamato.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private zamatoService: ZamatoService ) {}

  ngOnInit() {
    // this.newsService.fetchNews().subscribe();
  }

  ionViewWillEnter() {
    this.zamatoService.fetchRestuarants().subscribe();
  }

}
