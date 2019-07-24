import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {ActivatedRoute} from '@angular/router';
import {GameDetails} from '../GameDetails';

@Component({
  selector: 'app-gaiamap',
  templateUrl: './gaiamap.component.html',
  styleUrls: ['./gaiamap.component.css']
})
export class GaiamapComponent implements OnInit {

  constructor(private gameService: GameService, private route: ActivatedRoute) { }
  gameid: string;
  gamedetails: GameDetails;
  showGame(gameid: string) {
    console.log('show special game');
    this.gameService.showGame(gameid)
      .subscribe((data) => {
        this.gamedetails = data;
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
      ctx.fillStyle = 'lightblue';
      ctx.font = '20px Arial';
      ctx.fillText(conf.coordinate, conf.x - 9, conf.y + 35);
  }
}
