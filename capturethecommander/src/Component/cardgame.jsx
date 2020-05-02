import React, { Component } from "react";
import "../Css/cardgame.css";
import Card from "./card";
import GameBoard from "./GameBoard";
import Home from "./Home";
import { Link } from "react-router-dom";

class CardGame extends Component {
  constructor() {
    super();

    this.state = {
      cardDeck: [
        {
          cardNum: 1,
          suit: "♠︎",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884151_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 2,
          suit: "♠︎",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884155_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 3,
          suit: "♠︎",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884160_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 4,
          suit: "♠︎",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884165_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 5,
          suit: "♠︎",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884170_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 6,
          suit: "♠︎",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884174_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 7,
          suit: "♠︎",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884178_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 8,
          suit: "♠︎",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/spades-884183_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 9,
          suit: "♠︎",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/spades-884147_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 10,
          suit: "♠︎",
          num: "J",
          numVal: 11,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884192_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 11,
          suit: "♠︎",
          num: "Q",
          numVal: 12,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884203_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 12,
          suit: "♠︎",
          num: "K",
          numVal: 13,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884197_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 13,
          suit: "♠︎",
          num: "A",
          numVal: 14,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884187_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 14,
          suit: "♢",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/diamonds-884149_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 15,
          suit: "♢",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884153_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 16,
          suit: "♢",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884157_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 17,
          suit: "♢",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884162_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 18,
          suit: "♢",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884168_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 19,
          suit: "♢",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884172_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 20,
          suit: "♢",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884176_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 21,
          suit: "♢",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884180_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 22,
          suit: "♢",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/diamonds-884145_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 23,
          suit: "♢",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/diamonds-884195_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 24,
          suit: "♢",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/diamonds-884199_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 25,
          suit: "♢",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/diamonds-884189_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 26,
          suit: "♢",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/diamonds-884185_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 27,
          suit: "♡",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/hearts-884150_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 28,
          suit: "♡",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884154_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 29,
          suit: "♡",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884159_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 30,
          suit: "♡",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884163_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 31,
          suit: "♡",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884169_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 32,
          suit: "♡",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884173_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 33,
          suit: "♡",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884177_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 34,
          suit: "♡",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884181_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 35,
          suit: "♡",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/hearts-884146_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 36,
          suit: "♡",
          num: "K",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884196_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 37,
          suit: "♡",
          num: "Q",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884201_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 38,
          suit: "♡",
          num: "J",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884191_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 39,
          suit: "♡",
          num: "A",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884186_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 40,
          suit: "♣︎",
          num: "2",
          numVal: 2,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/clubs-884148_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 41,
          suit: "♣︎",
          num: "3",
          numVal: 3,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884152_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 42,
          suit: "♣︎",
          num: "4",
          numVal: 4,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884156_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 43,
          suit: "♣︎",
          num: "5",
          numVal: 5,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884161_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 44,
          suit: "♣︎",
          num: "6",
          numVal: 6,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884167_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 45,
          suit: "♣︎",
          num: "7",
          numVal: 7,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884171_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 46,
          suit: "♣︎",
          num: "8",
          numVal: 8,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884175_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 47,
          suit: "♣︎",
          num: "9",
          numVal: 9,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884179_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 48,
          suit: "♣︎",
          num: "10",
          numVal: 10,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/55/clubs-884144_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 49,
          suit: "♣︎",
          num: "J",
          numVal: 11,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/clubs-884188_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 50,
          suit: "♣︎",
          num: "Q",
          numVal: 12,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/clubs-884198_1280.png",

          isFlipped: false,
        },
        {
          cardNum: 51,
          suit: "♣︎",
          num: "K",
          numVal: 13,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/57/clubs-884194_1280.png",
          isFlipped: false,
        },
        {
          cardNum: 52,
          suit: "♣︎",
          num: "A",
          numVal: 14,
          backImg:
            "https://cdn.pixabay.com/photo/2014/03/06/20/40/flora-281141_1280.png",
          frontImg:
            "https://cdn.pixabay.com/photo/2015/08/11/11/56/clubs-884184_1280.png",
          isFlipped: false,
        },
      ],
      player1hand: [],
      player2hand: [],
      gameStart: false,
      isActive: false,
    };
  }

  componentDidMount() {
    this.handleStart();
  }

  shuffleDeck = (cardDeck) => {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * cardDeck.length);
      let location2 = Math.floor(Math.random() * cardDeck.length);
      let tmp = cardDeck[location1];
      cardDeck[location1] = cardDeck[location2];
      cardDeck[location2] = tmp;
    }
    this.setState({
      cardDeck: cardDeck,
    });
  };

  dealHands = () => {
    const { cardDeck } = this.state;
    let player1 = [];
    let player2 = [];
    for (let i = 0; i < 26; i++) {
      if (i % 2 === 0) {
        player1.push(cardDeck[i]);
      } else {
        player2.push(cardDeck[i]);
      }
    }
    this.setState({
      player1hand: player1,
      player2hand: player2,
    });
  };

  firstMove = () => {
    let coin = Math.floor(Math.random() * 100);
    if (coin % 2 === 0) {
      console.log("player 1", coin);
      this.setState({
        isActive: true,
      });
    } else {
      console.log("player 2", coin);
    }
  };

  handleStart = () => {
    const { cardDeck } = this.state;
    this.shuffleDeck(cardDeck);
    this.dealHands();
    this.firstMove();
    this.setState({
      gameStart: true,
    });
  };

  flipped = (e) => {
    let { player1hand, player2hand, isActive } = this.state;
    console.log("target: ", e.target.id);

    if (e.target.dataset.hand === "player1" && isActive === true) {
      if (player1hand[e.target.id].isFlipped === false) {
        player1hand[e.target.id].isFlipped = true;
        console.log("false", player1hand[e.target.id]);
      } else {
        player1hand[e.target.id].isFlipped = false;
      }

      this.setState({
        player1hand: player1hand,
      });
    }
    if (e.target.dataset.hand === "player2" && isActive === true) {
      if (player2hand[e.target.id].isFlipped === false) {
        player2hand[e.target.id].isFlipped = true;
        console.log("false", player2hand[e.target.id]);
      } else {
        player2hand[e.target.id].isFlipped = false;
      }

      this.setState({
        player2hand: player2hand,
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { gameStart, player1hand, cardDeck, player2hand } = this.state;
    if (gameStart) {
      return (
        <GameBoard
          player1hand={player1hand}
          flipped={this.flipped}
          cardDeck={cardDeck}
          player2hand={player2hand}
          firstMove={this.firstMove}
        />
      );
    }
    return null;
  }
}

export default CardGame;
