import { Component, OnInit } from '@angular/core';
import { AppConfigService, IConfig } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sampletwelvefactorapp';

  config: IConfig;

  constructor(private configService: AppConfigService) {}


  ngOnInit() {
    this.config = this.configService.getConfig();
  }

}
