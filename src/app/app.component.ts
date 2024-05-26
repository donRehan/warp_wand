import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  param = { value: 'world' };
  selected_lang: string | null = null;

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a
    // translation isn't found in the current language
    //translate.setDefaultLang('en');
    //translate.addLangs(['en', 'fr']);
    //translate.use('en');
  }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'fr','es']);
    this.selected_lang = localStorage.getItem('userLang');
    this.translate.use(this.selected_lang || 'en');
  }

  changeLang(lang: string){
    this.translate.use(lang);
    localStorage.setItem('userLang', lang);
  }
}
