import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent {
  constructor(private translateService: TranslateService) {}
  setUserText(text: string) {
    this.translateService.instant(text);
  }
}
