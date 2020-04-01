import {Game} from './Game';
import {Power} from './Power';

export class GameDetails {
  mapsituation: string;
  game: Game;
  powerleech: Power[];
  gamestate: string;
  gamerecord: string[];
  roundscore: string[];
  helptile: string[][];
  avarace: boolean[];
  jisheng: boolean[][];
  townbuilding: boolean[][][];
  tt: string[];
  currentuserid: string;
  resource: string[][];
  structure: string[][];
  structurecolor: string[][];
  sciencegrade: string[][][];
  buildingcount: string[][];
  income: string[][];
  vpdetail: string[][];
  playeraction: string[][][];
  townremain: string[];
  satellite: string[][][];
  fasts: string[];
  bid: string[];
  bugs: string[][];
  gamemodename: string;
}
