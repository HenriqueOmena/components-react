import React from 'react'
import "./react-tuto.style.scss";

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }

  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
      return (
        <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} //ora nós iremos passar duas props do Tabuleiro para o Quadrado: value e onClick. A propriedade onClick é uma função que será chamada quando o
        />
      );
    }

    render() {
      const status = 'Next player: X';

      return (
        <div>
          <div className="status">Status: {status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

        </div>
      );
    }
  }

  export class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

