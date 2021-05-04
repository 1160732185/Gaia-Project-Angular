import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {Info} from '../Info';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor(private gameService: GameService) { }

  info: Info[];
  size: 'small';
  sortName: string | null = null;
  sortValue: string | null = null;
  // tslint:disable-next-line:max-line-length
  listOfName = [{ text: '人类', value: '人类' }, { text: '亚特兰斯星人', value: '亚特兰斯星人' }, { text: '圣禽族', value: '圣禽族' }, { text: '蜂人', value: '蜂人' }, { text: '晶矿星人', value: '晶矿星人' }, { text: '炽炎族', value: '炽炎族' }, { text: '翼空族', value: '翼空族' }, { text: '格伦星人', value: '格伦星人' }, { text: '大使星人', value: '大使星人' }, { text: '利爪族', value: '利爪族' }, { text: '章鱼人', value: '章鱼人' }, { text: '疯狂机器', value: '疯狂机器' }, { text: '伊塔星人', value: '伊塔星人' }, { text: '超星人', value: '超星人' }];
  listOfSearchName: string[] = [];
  listOfDisplayData: Info[];

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    console.log(sort.key);
    console.log(sort.value);
    this.search();
  }

  filter(listOfSearchName: string[]): void {
    this.listOfSearchName = listOfSearchName;
    console.log(this.listOfSearchName);
    this.search();
  }

  search(): void {

    const filterFunc = (item: Info) =>
      (this.listOfSearchName.length ? this.listOfSearchName.some(racename => item.race.indexOf(racename) !== -1) : true);
    const data = this.info.filter(item => filterFunc(item));
/*    console.log(this.info[1][this.sortName]);*/
    if (this.sortName && this.sortValue) {
      this.listOfDisplayData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          // tslint:disable-next-line:no-non-null-assertion
          ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
          // tslint:disable-next-line:no-non-null-assertion
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
      console.log(this.listOfDisplayData);
    } else {
      this.listOfDisplayData = data;
    }
  }

  ngOnInit() {
    this.gameService.getInfo()
      .subscribe((data) => {
        this.info = data;
        this.listOfDisplayData = data;
        console.log('aaa' + this.info[1]);
      });
  }

}
