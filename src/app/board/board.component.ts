import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squeares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squeares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number){
    if (!this.squeares[index]){
      this.squeares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }
  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squeares[a] &&
        this.squeares[a] === this.squeares[b] &&
        this.squeares[a] === this.squeares[c]
      ){
        return this.squeares[a];
      }
    }
    return null;
}}

