import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {ActivatedRoute} from '@angular/router';
import {GameDetails} from '../GameDetails';
import {ActionService} from '../action.service';

@Component({
  selector: 'app-gaiamap',
  templateUrl: './gaiamap.component.html',
  styleUrls: ['./gaiamap.component.css']
})
export class GaiamapComponent implements OnInit {

  constructor(private actionservice: ActionService, private gameService: GameService, private route: ActivatedRoute) { }
  gameid: string;
  okokok: string;
  action: string;
  gamedetails: GameDetails;
  listOfData;
  chooserace(gameid: string, race: string) {
// tslint:disable-next-line:max-line-length
if (localStorage.getItem('current_user') === this.gamedetails.currentuserid) {this.actionservice.chooserace(gameid, race).subscribe(); } else {
  console.log(localStorage.getItem('current_user'));
}
  }
  doaction(gameid: string, action: string) {
    // tslint:disable-next-line:max-line-length
    if (localStorage.getItem('current_user') === this.gamedetails.currentuserid) {this.actionservice.doaction(gameid, action).subscribe(); } else {
      console.log(localStorage.getItem('current_user'));
    }
  }
  showGame(gameid: string) {
    console.log('show special game');
    this.gameService.showGame(gameid)
      .subscribe((data) => {
        this.gamedetails = data;
        this.listOfData = [
          {
            dengji: '等级5',
            terra: 'TerraTown:',
            navi: 'BlackStar,4Ship',
            quan: '4Q',
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
        console.log(this.gamedetails);
        const c: any = document.getElementById('myCanvas');
        const ctx = c.getContext('2d');
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.scale(0.68, 0.68);
        for (let i = 1 ; i < 4 ; i++) {
          this.drawPolygon(ctx, {
            x: 52,
            y: 361 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[1][i],
            coordinate: 'A' + i
          });
        }
        for (let i = 1 ; i < 5 ; i++) {
          this.drawPolygon(ctx, {
            x: 130,
            y: 316 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[2][i],
            coordinate: 'B' + i
          });
        }
        for (let i = 1 ; i < 9 ; i++) {
          this.drawPolygon(ctx, {
            x: 208,
            y: 271 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[3][i],
            coordinate: 'C' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 286,
            y: 46 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[4][i],
            coordinate: 'D' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 364,
            y: 1 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[5][i],
            coordinate: 'E' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 442,
            y: -44 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[6][i],
            coordinate: 'F' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 520,
            y: 1 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[7][i],
            coordinate: 'G' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 598,
            y: 46 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[8][i],
            coordinate: 'H' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 676,
            y: 91 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[9][i],
            coordinate: 'I' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 754,
            y: 46 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[10][i],
            coordinate: 'J' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 832,
            y: 1 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[11][i],
            coordinate: 'K' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 910,
            y: 46 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[12][i],
            coordinate: 'L' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 988,
            y: 91 + 90 * i,
            structure: 'm',
            structurecolor: '#FF0000',
            fillStyle:  this.gamedetails.mapsituation[13][i],
            coordinate: 'M' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 1066,
            y: 136 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[14][i],
            coordinate: 'N' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 1144,
            y: 91 + 90 * i,
            fillStyle:  this.gamedetails.mapsituation[15][i],
            coordinate: 'O' + i
          });
        }
        for (let i = 1 ; i < 13 ; i++) {
          this.drawPolygon(ctx, {
            x: 1222,
            y: 46 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[16][i],
            coordinate: 'P' + i
          });
        }
        for (let i = 1 ; i < 12 ; i++) {
          this.drawPolygon(ctx, {
            x: 1300,
            y: 91 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[17][i],
            coordinate: 'Q' + i
          });
        }
        for (let i = 1 ; i < 9 ; i++) {
          this.drawPolygon(ctx, {
            x: 1378,
            y: 136 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[18][i],
            coordinate: 'R' + i
          });
        }
        for (let i = 1 ; i < 5 ; i++) {
          this.drawPolygon(ctx, {
            x: 1456,
            y: 451 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[19][i],
            coordinate: 'S' + i
          });
        }
        for (let i = 1 ; i < 4 ; i++) {
          this.drawPolygon(ctx, {
            x: 1534,
            y: 136 + 360 + 90 * i,
            fillStyle: this.gamedetails.mapsituation[20][i],
            coordinate: 'T' + i
          });
        }
        ctx.scale(1 / 0.68, 1 / 0.68);
/*        const cc: any = document.getElementById('mCanvas');
        const cctx = cc.getContext('2d');
        const img = new Image();
        img.src = 'assets/races/Ambas.jpg'
        cctx.drawImage(img, 0, 0);*/
      });
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gameid = params.get('gameid');
      this.showGame(this.gameid);
    });
  }

    drawPolygon(ctx, conf): void {
 /*     ctx.rotate(Math.PI / 2);*/
      const x = conf && conf.x || 0;  // 中心点x坐标
      const y = conf && conf.y || 0;  // 中心点y坐标
      const num = conf && conf.num || 3;   // 图形边的个数
      const r = conf && conf.r || 50;   // 图形的半径
      const width = conf && conf.width || 5;
      const strokeStyle = conf && conf.strokeStyle || 'silver';
      const fillStyle = conf && conf.fillStyle;
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
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = width;
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        if (conf.structurecolor) {
          ctx.fillStyle = conf.structurecolor;
          ctx.fill();
        }
      }
      ctx.fillStyle = 'lightblue';
      ctx.font = '15px Arial';
      ctx.fillText(conf.coordinate, conf.x - 9, conf.y + 35);
  }
}
