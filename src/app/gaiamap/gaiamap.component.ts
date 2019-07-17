import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaiamap',
  templateUrl: './gaiamap.component.html',
  styleUrls: ['./gaiamap.component.css']
})
export class GaiamapComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    const c: any = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    ctx.scale(0.7, 0.7);
    this.drawPolygon(ctx, {
      x: 442,
      y: 46,
      fillStyle: '#9da',
      coordinate: 'F1'
    });
    this.drawPolygon(ctx, {
      x: 442,
      y: 136,
      fillStyle: '#9da',
      coordinate: 'F2'
    });
    this.drawPolygon(ctx, {
      x: 520,
      y: 91,
      fillStyle: '#9da',
      coordinate: 'G1'
    });
    this.drawPolygon(ctx, {
      x: 364,
      y: 91,
      fillStyle: '#9da',
      coordinate: 'E1'
    });
    this.drawPolygon(ctx, {
      x: 52,
      y: 451,
      fillStyle: '#9da',
      coordinate: 'A1'
    });
    this.drawPolygon(ctx, {
      x: 52,
      y: 541,
      fillStyle: '#9da',
      coordinate: 'A2'
    });
    this.drawPolygon(ctx, {
      x: 52,
      y: 631,
      fillStyle: '#9da',
      coordinate: 'A3'
    });
    this.drawPolygon(ctx, {
      x: 130,
      y: 406,
      fillStyle: '#9da',
      coordinate: 'B1'
    });
    this.drawPolygon(ctx, {
      x: 130,
      y: 496,
      fillStyle: '#9da',
      coordinate: 'B2'
    });
    this.drawPolygon(ctx, {
      x: 130,
      y: 586,
      fillStyle: '#9da',
      coordinate: 'B3'
    });
    this.drawPolygon(ctx, {
      x: 130,
      y: 676,
      fillStyle: '#9da',
      coordinate: 'B4'
    });
    this.drawPolygon(ctx, {
      x: 208,
      y: 361,
      fillStyle: '#9da',
      coordinate: 'C1'
    });
    this.drawPolygon(ctx, {
      x: 208,
      y: 451,
      fillStyle: '#9da',
      coordinate: 'C2'
    });
    this.drawPolygon(ctx, {
      x: 208,
      y: 541,
      fillStyle: '#9da',
      coordinate: 'C3'
    });
    this.drawPolygon(ctx, {
      x: 208,
      y: 631,
      fillStyle: '#9da',
      coordinate: 'C4'
    });
    this.drawPolygon(ctx, {
      x: 208,
      y: 721,
      fillStyle: '#9da',
      coordinate: 'C5'
    });
    this.drawPolygon(ctx, {
      x: 286,
      y: 136,
      fillStyle: '#9da',
      coordinate: 'D1'
    });
    this.drawPolygon(ctx, {
      x: 286,
      y: 226,
      fillStyle: '#9da',
      coordinate: 'D2'
    });
    this.drawPolygon(ctx, {
      x: 286,
      y: 316,
      fillStyle: '#9da',
      coordinate: 'D3'
    });
    this.drawPolygon(ctx, {
      x: 286,
      y: 406,
      fillStyle: '#9da',
      coordinate: 'D4'
    });
    this.drawPolygon(ctx, {
      x: 286,
      y: 496,
      fillStyle: '#9da',
      coordinate: 'D5'
    });
    this.drawPolygon(ctx, {
      x: 286,
      y: 586,
      fillStyle: '#9da',
      coordinate: 'D6'
    });
    this.drawPolygon(ctx, {
      x: 286,
      y: 676,
      fillStyle: '#9da',
      coordinate: 'D7'
    });
  }

    drawPolygon(ctx, conf): void {
 /*     ctx.rotate(Math.PI / 2);*/
      const x = conf && conf.x || 0;  // 中心点x坐标
      const y = conf && conf.y || 0;  // 中心点y坐标
      const num = conf && conf.num || 3;   // 图形边的个数
      const r = conf && conf.r || 50;   // 图形的半径
      const width = conf && conf.width || 5;
      const strokeStyle = conf && conf.strokeStyle || 'black';
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
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText(conf.coordinate, conf.x - 9, conf.y + 35);
  }
}
