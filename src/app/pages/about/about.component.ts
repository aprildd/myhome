import { Component } from '@angular/core';
import { TimelineEvent } from 'ngx-timeline';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = '关于这个主页';

  events: Array<TimelineEvent>;

  constructor(public translateService: TranslateService) {

  }

  ngOnInit() {
    var sarray:string[] = ['GRATUDATE'];

    this.translateService.get(sarray).subscribe((res: any) => {
      this.initEvent(res);
    });

    console.log('tst');

    this.events = new Array<TimelineEvent>();
  }

  initEvent(res: any) {
    this.events.push({
      "date": new Date(1309449600000),
      //"header": res['GRATUDATE'],
      "header": '{{"GRATUDATE" | translate}}',
      "body": "毕业于中国哈尔滨商业大学计算机科学与技术专业。"
    });

    this.events.push({
      "date": new Date(1500759898000),
      "header": "专为微信设计的 UI 库 WeUI", 
      "body": "WeUI 是一套同微信原生视觉体验一致的基础样式库，为微信 Web 开发量身设计，可以令用户的使用感知更加统一。包含button、cell、dialog、toast、article、icon等各式元素。",
      "footer": "test body"
    });
    this.events.push({
      "date": new Date(1500969898000),
      "header": "JavaScript 图表库 ECharts", 
      "body": "ECharts是一款由百度前端技术部开发的，基于Javascript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。"
    });
  }
}
