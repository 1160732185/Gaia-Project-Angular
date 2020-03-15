import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {ActivatedRoute} from '@angular/router';
import {GameDetails} from '../GameDetails';
import {ActionService} from '../action.service';
import {IntervalMessage} from '../IntervalMessage';
import {AppComponent} from '../app.component';
import {HttpResponse} from '@angular/common/http';
import {Game} from '../Game';

@Component({
  selector: 'app-gaiamap',
  templateUrl: './gaiamap.component.html',
  styleUrls: ['./gaiamap.component.css']
})
export class GaiamapComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private actionservice: ActionService, private gameService: GameService, private route: ActivatedRoute, private appComponent: AppComponent) {
    this.gamedetails = new GameDetails();
    this.gamedetails.game = new Game();
    this.gamedetails.game.gamemode = '';
    this.gamedetails.townremain = ['0', '0', '0', '0', '0', '0'];
    this.gamedetails.vpdetail = [[], [], [], []];
    this.gamedetails.roundscore = [];
    this.windowsize = window.innerWidth;
    this.route.paramMap.subscribe(params => {
      console.log('clearrrrrr');
      clearInterval(IntervalMessage.intervalMsg);
      this.gameid = params.get('gameid');
      this.showGame(this.gameid);
      console.log('iv' + this.inputValue);
      this.actionservice.showlog(this.gameid, this.user)
        .subscribe((data) => {console.log('ivvv' + this.inputValue); this.inputValue = data.body.message; });
    });
    const th: any = this;
    if (this.windowsize < 1000) {
      IntervalMessage.intervalMsg = setInterval(() => {
        th.route.paramMap.subscribe(params => {
          th.gameid = params.get('gameid');
          th.showGame(th.gameid);
        });
      }, 60000);
    } else {
      IntervalMessage.intervalMsg = setInterval(() => {
        th.route.paramMap.subscribe(params => {
          th.gameid = params.get('gameid');
          th.showGame(th.gameid);
        });
      }, 10000);
    }
  }
  windowsize: number;
  loginrace: string;
  gameid: string;
  science: string;
  action: string;
  errormessage: string;
  o = 'O';
  actionorder = '';
  isVisible0 = false;
  isVisible1 = false;
  isVisible2 = false;
  isVisible3 = false;
  isVisibleBuild = false;
  shoujixinghao = '';
  isVisibleAdvance = false;
  isVisibleUpgradeTc = false;
  isVisibleUpgradeRLSH = false;
  isVisibleUpgradeShMad = false;
  isVisibleUpgradeAC = false;
  isVisiblePass = false;
  isVisibleGaia = false;
  isVisiblePWQ = false;
  isVisibleUpgradeMAD = false;
  gamedetails: GameDetails;
  user: string;
  localStorage: object;
  canvass: any;
  inputValue = 'abc';
  listOfData;
  dddiv: any;
  modeltitle: string;
  location = '';
  gamerecordlength: number;
  qtop = '4Q';
  selectedFsAct: any;
  selectedBugAct: any;
  bid0: any;
  chooserace(gameid: string, race: string, avarace: number) {
    // tslint:disable-next-line:max-line-length
    if (this.gamedetails.avarace[avarace] === false) {// 如果种族还没被选择&& this.gamedetails.currentuserid === localStorage.getItem('current_user')
      this.actionservice.chooserace(gameid, race, localStorage.getItem('current_user')).subscribe((data) => {
        this.showGame(this.gameid);
      });
    }
  }
  click(event) {
    let adjustmobile = 0;
    if (this.windowsize < 1000) {
      adjustmobile = 10;
    }
    let x = 0;
    let y = 0;
    const element = document.getElementById('myCanvas');
    const scroll = document.documentElement.scrollTop - document.getElementById('myCanvas').offsetTop * 0.8 + 82.4;
    console.log('ost' + document.getElementById('myCanvas').offsetTop);
    let eventleft = 100;
    if (!this.appComponent.isCollapsed) { eventleft += 120; }
    if (this.windowsize < 1000) {eventleft = 0; }
    // tslint:disable-next-line:max-line-length
    const row: string[][] = [[''], ['A', '310' , '360' , '410'], ['B' , '285' , '335' , '385' , '435'], ['C' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610'], ['D' , '135' , '185' , '235', '285' , '335' , '385' , '435' , '485' , '535' , '585' , '635'],
      // tslint:disable-next-line:max-line-length
      ['E' , '110' , '160' , '210' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610' , '660'], ['F', '85' , '135' , '185' , '235', '285' , '335' , '385' , '435' , '485' , '535' , '585' , '635'], ['G' , '110' , '160' , '210' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610'], ['H' , '135' , '185' , '235', '285' , '335' , '385' , '435' , '485' , '535' , '585' , '635'], ['I' , '160' , '210' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610' , '660'], ['J', '135' , '185' , '235', '285' , '335' , '385' , '435' , '485' , '535' , '585' , '635' , '685'], ['K', '110' , '160' , '210' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610' , '660'], ['L', '135' , '185' , '235', '285' , '335' , '385' , '435' , '485' , '535' , '585' , '635'], ['M', '160' , '210' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610' , '660'], ['N', '185' , '235', '285' , '335' , '385' , '435' , '485' , '535' , '585' , '635' , '685'], ['O', '160' , '210' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610' , '660' , '710'], ['P', '135' , '185' , '235', '285' , '335' , '385' , '435' , '485' , '535' , '585' , '635' , '685'], ['Q', '160' , '210' , '260' , '310' , '360' , '410' , '460' , '510' , '560' , '610' , '660'], ['R', '185' , '235', '285' , '335' , '385' , '435' , '485' , '535'], ['S', '360' , '410' , '460' , '510'], ['T' , '385' , '435' , '485']];
    console.log('x' + event.clientX + 'y' + event.clientY);
    for (let i = 1; i <= 20; i++) {
      if ((event.clientX - eventleft) > (i - 1) * 45 && (event.clientX - eventleft) <= i * 45) {
        x = i;
        this.location = row[i][0];
        for (let j = 1; j <= row[i].length; j++) {
          // tslint:disable-next-line:max-line-length
          if ((event.clientY + scroll) + adjustmobile > Number(row[i][j])  && (event.clientY + scroll) + adjustmobile <= (Number(row[i][j]) + 50)) {
            this.location += j;
            y = j;
          }
        }
      }
    }
    console.log('结果是' + this.location);
    if (y === 0) { return; }
    // tslint:disable-next-line:max-line-length
    if (this.actionorder.substring(0, 4) === 'form' || this.actionorder.substring(0, 7) === 'actiond' || this.actionorder.substring(0, 7) === 'actiont' || this.actionorder.substring(0, 7) === 'actionf') {this.add(' ' + this.location); } else if (this.actionorder.substring(0, 7) === 'actionz') {
      this.add(' ' + this.location + ' ');
    } else {
      // tslint:disable-next-line:max-line-length
      if ((this.gamedetails.structure[x][y] === null || this.gamedetails.structure[x][y] === 'gtu') && this.gamedetails.mapsituation[x][y] !== '#000000' && this.gamedetails.mapsituation[x][y] !== '#9400d3') {
        this.modeltitle = '在' + this.location + '建造矿场基地？';
        this.isVisibleBuild = true;
      } else if (this.loginrace === '亚特兰斯星人' && this.gamedetails.structurecolor[x][y] !== '#4275e5' && this.gamedetails.mapsituation[x][y] !== '#000000' && this.gamedetails.mapsituation[x][y] !== '#9400d3') {
          this.modeltitle = '寄生' + this.location + '？';
          this.isVisibleBuild = true;
        } else if (this.gamedetails.structure[x][y] === null && this.gamedetails.mapsituation[x][y] === '#9400d3') {
        this.modeltitle = '盖亚' + this.location + '？';
        this.isVisibleGaia = true;
      } else
      if (this.gamedetails.structure[x][y] === 'm') {
        this.modeltitle = '将' + this.location + '升级为贸易站？';
        this.isVisibleUpgradeTc = true;
      } else
      if (this.gamedetails.structure[x][y] === 'tc' && this.loginrace === '疯狂机器') {
        console.log(this.loginrace);
        this.modeltitle = '将' + this.location + '升级为实验室/大学院？';
        this.isVisibleUpgradeMAD = true;
      } else if (this.gamedetails.structure[x][y] === 'tc') {
        console.log(this.loginrace);
        this.modeltitle = '将' + this.location + '升级为实验室/要塞？';
        this.isVisibleUpgradeRLSH = true;
      } else
      if (this.gamedetails.structure[x][y] === 'rl' && this.loginrace === '疯狂机器') {
        this.modeltitle = '将' + this.location + '升级为要塞？';
        this.isVisibleUpgradeShMad = true;
      } else if (this.gamedetails.structure[x][y] === 'rl') {
        this.modeltitle = '将' + this.location + '升级为大学院1/2？';
        this.isVisibleUpgradeAC = true;
      }
    }
  }
  doaction(gameid: string, action: string, userid: string) {
    action = action.replace('+', '%2B');
    // tslint:disable-next-line:max-line-length  if中添加localStorage.getItem('current_user') === this.gamedetails.currentuserid
    if (true) {this.actionservice.doaction(gameid, action, userid).subscribe((data) => {if (data.body.message !== '成功') {this.errormessage = data.body.message; } else {this.actionorder = ''; this.errormessage = null; }this.showGame(this.gameid); }); } else {
      // console.log(localStorage.getItem('current_user'));
    }
  }
  leechpower(gameid: string, giverace: string, receiverace: string, location: string, structure: string, accept: string) {
    // tslint:disable-next-line:max-line-length
    this.actionservice.leechpower(gameid, giverace, receiverace, location, structure, accept).subscribe((data) => {console.log(data); this.showGame(this.gameid); });
  }
  savelog() {
    console.log('iv' + this.inputValue);
    this.actionservice.savelog(this.gamedetails.game.gameId, this.user, this.inputValue).subscribe((data) => {console.log(data); });
  }
  dofastaction() {
    this.actionorder += this.selectedFsAct + '.';
  }
  add(order: string): void {
    this.actionorder += order;
  }
  handleOk0(): void {
    this.isVisible0 = false;
  }

  handleCancel0(): void {
    this.isVisible0 = false;
  }

  handleOk1(): void {
    this.isVisible1 = false;
  }

  handleCancel1(): void {
    this.isVisible1 = false;
  }

  handleOk2(): void {
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    this.isVisible2 = false;
  }

  handleOkBuild(): void {
    this.actionorder +=  'build ' + this.location;
    this.isVisibleBuild = false;
  }

  handleOkGaia(): void {
    this.actionorder +=  'gaia ' + this.location;
    this.isVisibleGaia = false;
  }

  handleOkUpgradeTc(): void {
    this.actionorder =  'upgrade ' + this.location + ' to tc ';
    this.isVisibleUpgradeTc = false;
  }
  handleOkUpgradeRl(): void {
    this.actionorder =  'upgrade ' + this.location + ' to rl ';
    this.isVisibleUpgradeRLSH = false; this.isVisibleUpgradeMAD = false;
  }
  handleOkUpgradeSh(): void {
    this.actionorder =  'upgrade ' + this.location + ' to sh ';
    this.isVisibleUpgradeRLSH = false;
    this.isVisibleUpgradeShMad = false;
  }
  handleOkUpgradeAC1(): void {
    this.actionorder =  'upgrade ' + this.location + ' to ac1 ';
    this.isVisibleUpgradeAC = false; this.isVisibleUpgradeMAD = false;
  }
  handleOkUpgradeAC2(): void {
    this.actionorder =  'upgrade ' + this.location + ' to ac2 ';
    this.isVisibleUpgradeAC = false; this.isVisibleUpgradeMAD = false;
  }
  handleOkPass(): void {
    this.actionorder =  'pass ' + this.location;
    this.isVisiblePass = false;
  }

  pass(bon: string, color: string): void {
    if (bon === 'BON1' && color !== '#FFFFFF') {
    this.actionorder += 'actionbon1 ';
    } else if (bon === 'BON2' && color !== '#FFFFFF') {
      this.actionorder += 'actionbon2 ';
    } else {
      this.modeltitle =  'pass ' + bon + '?';
      this.location = bon;
      this.isVisiblePass = true;
    }
  }

  pwqaction(no: string): void {
    this.modeltitle =  '执行魔力/量子行动 ' + no + '?';
    this.location = no;
    this.isVisiblePWQ = true;
  }

  handleOkPWQ(): void {
    this.actionorder =  'action' + this.location + ' ';
    this.isVisiblePWQ = false;
  }

  handleOkAdvance(): void {
    this.actionorder +=  'advance ' + this.science + ' ';
    this.isVisibleAdvance = false;
  }

  handleCancelBuild(): void {
    this.isVisibleBuild = false;
    this.isVisibleUpgradeTc = false;
    this.isVisiblePass = false;
    this.isVisibleAdvance = false;
    this.isVisibleGaia = false;
    this.isVisiblePWQ = false;
    this.isVisibleUpgradeRLSH = false;
    this.isVisibleUpgradeMAD = false;
    this.isVisibleUpgradeShMad = false;
    this.isVisibleUpgradeAC = false;
  }

  showModal(i: number): void {
    if (i === 0) {this.isVisible0 = true; }
    if (i === 1) {this.isVisible1 = true; }
    if (i === 2) {this.isVisible2 = true; }
    if (i === 3) {this.isVisible3 = true; }
  }

  handleOk3(): void {
    this.isVisible3 = false;
  }

  handleCancel3(): void {
    this.isVisible3 = false;
  }

  advance(science: string): void {
    this.science = science;
    this.isVisibleAdvance = true;
    if (science === 'terra') { this.modeltitle = '确认升级地形改造科技？'; }
    if (science === 'ship') { this.modeltitle = '确认升级航行科技？'; }
    if (science === 'q') { this.modeltitle = '确认升级量子智能科技？'; }
    if (science === 'gaia') { this.modeltitle = '确认升级盖亚计划科技？'; }
    if (science === 'eco') { this.modeltitle = '确认升级经济科技？'; }
    if (science === 'sci') { this.modeltitle = '确认升级科学科技？'; }
  }

  showGame(gameid: string) {
    this.canvass = document.getElementById('myCanvas');
/*    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) { this.canvass.height = 500; }*/
    this.localStorage = localStorage;
    this.user = localStorage.getItem('current_user');
    this.gameService.showGame(gameid, this.user)
      .subscribe((data) => {
        this.gamerecordlength = data.gamerecord.length;
        this.gamedetails = data;
        this.bid0 = data.bid[0];
        console.log(data);
        for (let i = 0 ; i <= 3 ; i++) {
          if (this.user === this.gamedetails.resource[i][0]) { this.loginrace = this.gamedetails.resource[i][1]; }
            }
        if (this.gamedetails.game.gamemode.charAt(0) !== '0') { this.qtop = '4Q,1Q1VP'; }
        this.listOfData = [
          {
            dengji: '等级5',
            terra: 'Town:' + this.gamedetails.tt[17],
            navi: 'BlackStar,4Ship',
            quan: this.qtop,
            gaia: '4VP,1G1VP',
            eco: '3O,6C,6PW',
            sci: '9K',
          },
          {
            dengji: '高级科技',
            terra: this.gamedetails.tt[0],
            navi: this.gamedetails.tt[1],
            quan: this.gamedetails.tt[2],
            gaia: this.gamedetails.tt[3],
            eco: this.gamedetails.tt[4],
            sci: this.gamedetails.tt[5],
          },
          {
            dengji: '等级4',
            terra: '2O',
            navi: '3Ship',
            quan: '2Q',
            gaia: '3GTU,GA->3PWB',
            eco: '+2O,+4C,+4PW',
            sci: '+4K',
          },
          {
            dengji: '等级3',
            terra: '1O->Terra',
            navi: '1Q',
            quan: '2Q',
            gaia: '2GTU,GA->4PWB',
            eco: '+1O,+3C,+3PW',
            sci: '+3K',
          },
          {
            dengji: '',
            terra: '3PW',
            navi: '3PW',
            quan: '3PW',
            gaia: '3PW',
            eco: '3PW',
            sci: '3PW',
          },
          {
            dengji: '等级2',
            terra: '2O->Terra',
            navi: '2Ship',
            quan: '1Q',
            gaia: '3PWB',
            eco: '+1O,+2C,+2PW',
            sci: '+2K',
          },
          {
            dengji: '等级1',
            terra: '2O',
            navi: '1Q',
            quan: '1Q',
            gaia: '1GTU,GA->6PWB',
            eco: '+2C,+1PW',
            sci: '+1K',
          },
          {
            dengji: '等级0',
            terra: '3O->Terra',
            navi: '1Ship',
            quan: '',
            gaia: '',
            eco: '',
            sci: '',
          },
          {
            dengji: '专属科技板',
            terra: this.gamedetails.tt[6],
            navi: this.gamedetails.tt[7],
            quan: this.gamedetails.tt[8],
            gaia: this.gamedetails.tt[9],
            eco: this.gamedetails.tt[10],
            sci: this.gamedetails.tt[11],
          },
          {
            dengji: '通用科技板',
            terra: this.gamedetails.tt[12],
            navi: this.gamedetails.tt[13],
            quan:  this.gamedetails.tt[14],
            gaia: '终局计分：',
            eco:  this.gamedetails.tt[15],
            sci:  this.gamedetails.tt[16],
          },
        ];
     /*   console.log(document.getElementById('roundscore0'));*/
        document.getElementById('roundscore1') .style.backgroundColor = 'white';
        document.getElementById('roundscore2') .style.backgroundColor = 'white';
        document.getElementById('roundscore3') .style.backgroundColor = 'white';
        document.getElementById('roundscore4') .style.backgroundColor = 'white';
        document.getElementById('roundscore5') .style.backgroundColor = 'white';
        document.getElementById('roundscore6') .style.backgroundColor = 'white';
        document.getElementById('roundscore' + this.gamedetails.game.round).style.backgroundColor = 'Khaki';
        const c: any = document.getElementById('myCanvas');
        const ctx = c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        // ctx.scale(0.72, 0.72);
        ctx.scale(0.72, 0.72);
        this.shoujixinghao = navigator.userAgent;
        for (let i = 1 ; i < 4 ; i++) {
          this.drawPolygon(ctx, {
            x: 52,
            y: 361 + 90 * i,
            row: 1,
            column: i,
            structure: this.gamedetails.structure[1][i],
            structurecolor: this.gamedetails.structurecolor[1][i],
            jisheng: this.gamedetails.jisheng[1][i],
            fillStyle: this.gamedetails.mapsituation[1][i],
            coordinate: 'A' + i
          });
        }
        for (let i = 1 ; i < 5 ; i++) {
          this.drawPolygon(ctx, {
            x: 130,
            y: 316 + 90 * i,
            row: 2,
            column: i,
            structure: this.gamedetails.structure[2][i],
            structurecolor: this.gamedetails.structurecolor[2][i],
            jisheng: this.gamedetails.jisheng[2][i],
            fillStyle: this.gamedetails.mapsituation[2][i],
            coordinate: 'B' + i
          });
        }
        for (let i = 1 ; i < 9 ; i++) {
          this.drawPolygon(ctx, {
            x: 208,
            y: 271 + 90 * i,
            row: 3,
            column: i,
            structure: this.gamedetails.structure[3][i],
            structurecolor: this.gamedetails.structurecolor[3][i],
            jisheng: this.gamedetails.jisheng[3][i],
            fillStyle: this.gamedetails.mapsituation[3][i],
            coordinate: 'C' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 286,
            y: 46 + 90 * i,
            row: 4,
            column: i,
            structure: this.gamedetails.structure[4][i],
            structurecolor: this.gamedetails.structurecolor[4][i],
            jisheng: this.gamedetails.jisheng[4][i],
            fillStyle: this.gamedetails.mapsituation[4][i],
            coordinate: 'D' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 364,
            y: 1 + 90 * i,
            row: 5,
            column: i,
            structure: this.gamedetails.structure[5][i],
            structurecolor: this.gamedetails.structurecolor[5][i],
            jisheng: this.gamedetails.jisheng[5][i],
            fillStyle:  this.gamedetails.mapsituation[5][i],
            coordinate: 'E' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 442,
            y: -44 + 90 * i,
            row: 6,
            column: i,
            structure: this.gamedetails.structure[6][i],
            structurecolor: this.gamedetails.structurecolor[6][i],
            jisheng: this.gamedetails.jisheng[6][i],
            fillStyle:  this.gamedetails.mapsituation[6][i],
            coordinate: 'F' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 520,
            y: 1 + 90 * i,
            row: 7,
            column: i,
            structure: this.gamedetails.structure[7][i],
            structurecolor: this.gamedetails.structurecolor[7][i],
            jisheng: this.gamedetails.jisheng[7][i],
            fillStyle:  this.gamedetails.mapsituation[7][i],
            coordinate: 'G' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 598,
            y: 46 + 90 * i,
            row: 8,
            column: i,
            structure: this.gamedetails.structure[8][i],
            structurecolor: this.gamedetails.structurecolor[8][i],
            jisheng: this.gamedetails.jisheng[8][i],
            fillStyle: this.gamedetails.mapsituation[8][i],
            coordinate: 'H' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 676,
            y: 91 + 90 * i,
            row: 9,
            column: i,
            structure: this.gamedetails.structure[9][i],
            structurecolor: this.gamedetails.structurecolor[9][i],
            jisheng: this.gamedetails.jisheng[9][i],
            fillStyle:  this.gamedetails.mapsituation[9][i],
            coordinate: 'I' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 754,
            y: 46 + 90 * i,
            row: 10,
            column: i,
            structure: this.gamedetails.structure[10][i],
            structurecolor: this.gamedetails.structurecolor[10][i],
            jisheng: this.gamedetails.jisheng[10][i],
            fillStyle: this.gamedetails.mapsituation[10][i],
            coordinate: 'J' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 832,
            y: 1 + 90 * i,
            row: 11,
            column: i,
            structure: this.gamedetails.structure[11][i],
            structurecolor: this.gamedetails.structurecolor[11][i],
            jisheng: this.gamedetails.jisheng[11][i],
            fillStyle:  this.gamedetails.mapsituation[11][i],
            coordinate: 'K' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 910,
            y: 46 + 90 * i,
            row: 12,
            column: i,
            structure: this.gamedetails.structure[12][i],
            structurecolor: this.gamedetails.structurecolor[12][i],
            jisheng: this.gamedetails.jisheng[12][i],
            fillStyle:  this.gamedetails.mapsituation[12][i],
            coordinate: 'L' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 988,
            y: 91 + 90 * i,
            row: 13,
            column: i,
            structure: this.gamedetails.structure[13][i],
            structurecolor: this.gamedetails.structurecolor[13][i],
            jisheng: this.gamedetails.jisheng[13][i],
            fillStyle:  this.gamedetails.mapsituation[13][i],
            coordinate: 'M' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 1066,
            y: 136 + 90 * i,
            row: 14,
            column: i,
            structure: this.gamedetails.structure[14][i],
            structurecolor: this.gamedetails.structurecolor[14][i],
            jisheng: this.gamedetails.jisheng[14][i],
            fillStyle:  this.gamedetails.mapsituation[14][i],
            coordinate: 'N' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 1144,
            y: 91 + 90 * i,
            row: 15,
            column: i,
            structure: this.gamedetails.structure[15][i],
            structurecolor: this.gamedetails.structurecolor[15][i],
            jisheng: this.gamedetails.jisheng[15][i],
            fillStyle:  this.gamedetails.mapsituation[15][i],
            coordinate: 'O' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 1222,
            y: 46 + 90 * i,
            row: 16,
            column: i,
            structure: this.gamedetails.structure[16][i],
            structurecolor: this.gamedetails.structurecolor[16][i],
            jisheng: this.gamedetails.jisheng[16][i],
            fillStyle: this.gamedetails.mapsituation[16][i],
            coordinate: 'P' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 1300,
            y: 91 + 90 * i,
            row: 17,
            column: i,
            structure: this.gamedetails.structure[17][i],
            structurecolor: this.gamedetails.structurecolor[17][i],
            jisheng: this.gamedetails.jisheng[17][i],
            fillStyle: this.gamedetails.mapsituation[17][i],
            coordinate: 'Q' + i
          });
        }
        for (let i = 1 ; i < 9 ; i++) {
          this.drawPolygon(ctx, {
            x: 1378,
            y: 136 + 90 * i,
            row: 18,
            column: i,
            structure: this.gamedetails.structure[18][i],
            structurecolor: this.gamedetails.structurecolor[18][i],
            jisheng: this.gamedetails.jisheng[18][i],
            fillStyle: this.gamedetails.mapsituation[18][i],
            coordinate: 'R' + i
          });
        }
        for (let i = 1 ; i < 5 ; i++) {
          this.drawPolygon(ctx, {
            x: 1456,
            y: 451 + 90 * i,
            row: 19,
            column: i,
            structure: this.gamedetails.structure[19][i],
            structurecolor: this.gamedetails.structurecolor[19][i],
            jisheng: this.gamedetails.jisheng[19][i],
            fillStyle: this.gamedetails.mapsituation[19][i],
            coordinate: 'S' + i
          });
        }
        for (let i = 1 ; i < 4 ; i++) {
          this.drawPolygon(ctx, {
            x: 1534,
            y: 136 + 360 + 90 * i,
            row: 20,
            column: i,
            structure: this.gamedetails.structure[20][i],
            structurecolor: this.gamedetails.structurecolor[20][i],
            jisheng: this.gamedetails.jisheng[20][i],
            fillStyle: this.gamedetails.mapsituation[20][i],
            coordinate: 'T' + i
          });
        }
/*        ctx.scale(1 / 0.72, 1 / 0.72);*/
        ctx.scale(1 / 0.72, 1 / 0.72);
/*        const cc: any = document.getElementById('mCanvas');
        const cctx = cc.getContext('2d');
        const img = new Image();
        img.src = 'assets/races/Ambas.jpg'
        cctx.drawImage(img, 0, 0);*/
      });
  }

  ngOnInit() {
  }

    drawPolygon(ctx, conf): void {
 /*     ctx.rotate(Math.PI / 2);*/
      const x = conf && conf.x || 0;  // 中心点x坐标
      const y = conf && conf.y || 0;  // 中心点y坐标
      const num = conf && conf.num || 3;   // 图形边的个数
      const r = conf && conf.r || 50;   // 图形的半径
      const width = conf && conf.width || 5;
      const strokeStyle = conf && conf.strokeStyle || 'silver';
      const fillStyle = conf && conf.fillStyle || 'black';
      const row = conf && conf.row || 0;
      const column = conf && conf.column || 0;
      const color =  conf && conf.color || 0;

      ctx.beginPath();
      ctx.arc(100, 75, 20, 0, 2 * Math.PI);
      ctx.closePath();
      if (strokeStyle) {
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      ctx.fillStyle = '#4275e5';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(150, 102, 20, 0, 2 * Math.PI);
      ctx.closePath();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = width;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(50, 102, 20, 0, 2 * Math.PI);
      ctx.closePath();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = width;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      ctx.fillStyle = '#E0FFFF';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(30, 152, 20, 0, 2 * Math.PI);
      ctx.closePath();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = width;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      ctx.fillStyle = 'grey';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(170, 152, 20, 0, 2 * Math.PI);
      ctx.closePath();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = width;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      ctx.fillStyle = '#FF8C00';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(70, 200, 20, 0, 2 * Math.PI);
      ctx.closePath();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = width;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      ctx.fillStyle = '#8b4c39';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(130, 200, 20, 0, 2 * Math.PI);
      ctx.closePath();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = width;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
      ctx.fillStyle = '#ffd700';
      ctx.fill();

      // 开始路径
      ctx.beginPath();
      const startX = x + r * Math.cos(2 * Math.PI * 0 / 6);
      const startY = y + r * Math.sin(2 * Math.PI * 0 / 6);
      ctx.moveTo(startX, startY);
      for ( let i = 1; i <= 6; i++) {
        const newX = x + r * Math.cos(2 * Math.PI * i / 6);
        const newY = y + r * Math.sin(2 * Math.PI * i / 6);
        ctx.lineTo(newX, newY);
    }
      ctx.closePath();
    // 路径闭合
      if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = width;
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
      if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
      if (conf.x === 442 && conf.y === 226) {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(0), conf.x - 35, conf.y + 10);
      }
      if (conf.x === 832 && conf.y === 271) {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(2), conf.x - 35, conf.y + 10);
      }
      if (conf.x === 1222 && conf.y === 316) {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(4), conf.x - 35, conf.y + 10);
      }
      if (conf.x === 208 && conf.y === 541) {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(6), conf.x - 35, conf.y + 10);
      }
      if (conf.x === 598 && conf.y === 586) {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(8), conf.x - 35, conf.y + 10);
      }
      if (conf.x === 988 && conf.y === 631) {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(10), conf.x - 35, conf.y + 10);
      }
      if (conf.x === 1378 && conf.y === 676) {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(12), conf.x - 35, conf.y + 10);
      }
      if (conf.coordinate === 'E10') {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(14), conf.x - 35, conf.y + 10);
      }
      if (conf.coordinate === 'J10') {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(16), conf.x - 35, conf.y + 10);
      }
      if (conf.coordinate === 'O10') {
        ctx.fillStyle = 'wheat';
        ctx.font = '30px Arial';
        ctx.fillText(this.gamedetails.game.mapseed.charAt(18), conf.x - 35, conf.y + 10);
      }
      if (conf.structure === 'hive') {
        // 开始路径
        ctx.beginPath();
        ctx.ellipse(x, y, 30, 10, 40, 0, Math.PI * 2);
        ctx.ellipse(x, y, 30, 10, -40, 0, Math.PI * 2);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      // 画矿场
      if (conf.structure === 'm') {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x + 10, y - 25);
        ctx.lineTo(x + 10, y - 5);
        ctx.lineTo(x + 20, y - 5);
        ctx.lineTo(x + 20, y + 15);
        ctx.lineTo(x - 20, y + 15);
        ctx.lineTo(x - 20, y - 5);
        ctx.lineTo(x + 5, y - 5);
        ctx.lineTo(x + 5, y - 25);
        ctx.lineTo(x + 10, y - 25);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      // 画贸易站
      if (conf.structure === 'tc') {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x , y - 25);
        ctx.lineTo(x + 20, y + 15);
        ctx.lineTo(x - 20, y + 15);
        ctx.lineTo(x - 20, y - 30);
        ctx.lineTo(x - 10, y - 30);
        ctx.lineTo(x - 10, y - 10);
        ctx.lineTo(x , y - 10);
        ctx.lineTo(x, y - 25);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      if (conf.structure === 'rl') {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x , y - 10);
        ctx.arc(x, y - 10, 25, 0, 360);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      if (conf.structure === 'sh') {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x - 20 - 2, y - 30);
        ctx.lineTo(x - 5 - 2, y - 30);
        ctx.lineTo(x - 5 - 2, y - 22);
        ctx.lineTo(x + 10 - 2, y - 22);
        ctx.lineTo(x + 10 - 2, y - 30);
        ctx.lineTo(x + 25 - 2, y - 30);
        ctx.lineTo(x + 25 - 2, y - 15);
        ctx.lineTo(x + 17 - 2, y - 15);
        ctx.lineTo(x + 17 - 2, y);
        ctx.lineTo(x + 25 - 2, y);
        ctx.lineTo(x + 25 - 2, y + 15);
        ctx.lineTo(x + 10 - 2, y + 15);
        ctx.lineTo(x + 10 - 2, y + 7);
        ctx.lineTo(x - 5 - 2, y + 7);
        ctx.lineTo(x - 5 - 2, y + 15);
        ctx.lineTo(x - 20 - 2, y + 15);
        ctx.lineTo(x - 20 - 2, y);
        ctx.lineTo(x - 12 - 2, y);
        ctx.lineTo(x - 12 - 2, y - 15);
        ctx.lineTo(x - 20 - 2, y - 15);
        ctx.lineTo(x - 20 - 2, y - 30);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      if (conf.structure === 'ac') {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x , y - 10);
        ctx.arc(x, y - 10, 25, 0, 360);
        ctx.moveTo(x - 10 , y + 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x + 10, y + 30);
        ctx.lineTo(x - 10, y + 30);
        ctx.lineTo(x - 10, y + 10);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      if (conf.structure === 'gtu') {
        // 开始路径
        const ra = 25;
        ctx.beginPath();
        const tX = x + ra * Math.cos(2 * Math.PI * 0 / 6);
        const tY = y + ra * Math.sin(2 * Math.PI * 0 / 6);
        ctx.moveTo(tX, tY);
        for ( let i = 1; i <= 6; i++) {
          const wX = x + ra * Math.cos(2 * Math.PI * i / 6);
          const wY = y + ra * Math.sin(2 * Math.PI * i / 6);
          ctx.lineTo(wX, wY);
        }
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      if (this.gamedetails.townbuilding[row][column][0] === true) {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x, y - 5);
        ctx.lineTo(x + 7.5, y + 15);
        ctx.lineTo(x - 10, y + 2.5);
        ctx.lineTo(x + 10, y + 2.5);
        ctx.lineTo(x - 7.5, y + 15);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      // 画矿场
      if (conf.jisheng === true && this.gamedetails.townbuilding[row][column][1] === false) {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x - 25, y - 25);
        ctx.lineTo(x - 15, y - 35);
        ctx.lineTo(x - 5, y - 25);
        ctx.lineTo(x - 5, y - 15);
        ctx.lineTo(x - 25, y - 15);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width / 2;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = 'blue';
          ctx.fill();
        }
      }
      if (conf.jisheng === true && this.gamedetails.townbuilding[row][column][1] === true) {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x - 20, y - 30);
        ctx.lineTo(x - 12.5, y - 10);
        ctx.lineTo(x - 30, y - 22.5);
        ctx.lineTo(x - 10, y - 22.5);
        ctx.lineTo(x - 27.5, y - 10);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width / 2;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = 'blue';
          ctx.fill();
        }
      }
      if (this.gamedetails.satellite[row][column].length === 1) {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x - 10 , y - 10);
        ctx.lineTo(x + 10, y - 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x - 10, y + 10);
        ctx.lineTo(x - 10, y - 10);
        ctx.closePath();
        // 路径闭合
        if (strokeStyle) {
          ctx.strokeStyle = 'black';
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        ctx.fillStyle = this.gamedetails.satellite[row][column][0];
        ctx.fill();
      }
      if (this.gamedetails.satellite[row][column].length === 2) {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x - 30 , y - 10);
        ctx.lineTo(x - 10, y - 10);
        ctx.lineTo(x - 10, y + 10);
        ctx.lineTo(x - 30, y + 10);
        ctx.lineTo(x - 30, y - 10);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][0];
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + 10 , y - 10);
        ctx.lineTo(x + 30, y - 10);
        ctx.lineTo(x + 30, y + 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x + 10, y - 10);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][1];
        ctx.fill();
      }
      if (this.gamedetails.satellite[row][column].length === 3) {
        // 开始路径
        ctx.beginPath();
        ctx.moveTo(x - 30 , y - 10);
        ctx.lineTo(x - 10, y - 10);
        ctx.lineTo(x - 10, y + 10);
        ctx.lineTo(x - 30, y + 10);
        ctx.lineTo(x - 30, y - 10);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][0];
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + 10 , y - 10);
        ctx.lineTo(x + 30, y - 10);
        ctx.lineTo(x + 30, y + 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x + 10, y - 10);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][1];
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 10 , y - 30);
        ctx.lineTo(x + 10, y - 30);
        ctx.lineTo(x + 10, y - 10);
        ctx.lineTo(x - 10, y - 10);
        ctx.lineTo(x - 10, y - 30);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][2];
        ctx.fill();
      }
      if (this.gamedetails.satellite[row][column].length === 4) {
        ctx.beginPath();
        ctx.moveTo(x - 30 , y - 10);
        ctx.lineTo(x - 10, y - 10);
        ctx.lineTo(x - 10, y + 10);
        ctx.lineTo(x - 30, y + 10);
        ctx.lineTo(x - 30, y - 10);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][0];
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + 10 , y - 10);
        ctx.lineTo(x + 30, y - 10);
        ctx.lineTo(x + 30, y + 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x + 10, y - 10);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][1];
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 10 , y - 30);
        ctx.lineTo(x + 10, y - 30);
        ctx.lineTo(x + 10, y - 10);
        ctx.lineTo(x - 10, y - 10);
        ctx.lineTo(x - 10, y - 30);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][2];
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 10 , y - 10);
        ctx.lineTo(x + 10, y - 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x - 10, y + 10);
        ctx.lineTo(x - 10, y - 10);
        ctx.closePath();
        ctx.fillStyle = this.gamedetails.satellite[row][column][2];
        ctx.fill();
      }
      ctx.fillStyle = 'lightblue';
      ctx.font = '15px Arial';
      ctx.fillText(conf.coordinate, conf.x - 9, conf.y + 35);
  }
}
