import React from "react";
import "../CSS/gameboard.css";
import Card from "./card";

export default function GameBoard(props) {
  const { player1hand, flipped } = props;

  let firstRow = player1hand.slice(0, 4); //0,1,2,3
  let secondRow = player1hand.slice(4, 7);
  let thirdRow = player1hand.slice(7, 10);
  let fourthRow = player1hand.slice(10, 12);
  let fifthRow = [player1hand[player1hand.length - 1]];

  let cardFormation = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
  console.log(player1hand);

  // rule about what cards can be flipped?

  return (
    <div className="board">
      <section className="row1">
        {firstRow.map((card, i) => {
          return (
            <Card
              key={card.suit + card.num}
              id={i}
              isFlipped={card.isFlipped}
              clicked={flipped}
              cardbackImg={card.backImg}
              cardNum={card.num}
              classname="card1"
            />
          );
        })}
        <section className="row2">
          {secondRow.map((card, i) => {
            return (
              <Card
                key={card.suit + card.num}
                id={i}
                isFlipped={card.isFlipped}
                clicked={flipped}
                cardbackImg={card.backImg}
                cardNum={card.num}
                classname="card1"
              />
            );
          })}
        </section>
        <section className="row3">
          {thirdRow.map((card, i) => {
            return (
              <Card
                key={card.suit + card.num}
                id={i}
                isFlipped={card.isFlipped}
                clicked={flipped}
                cardbackImg={card.backImg}
                cardNum={card.num}
                classname="card1"
              />
            );
          })}
        </section>
        <section className="row4">
          {fourthRow.map((card, i) => {
            return (
              <Card
                key={card.suit + card.num}
                id={i}
                isFlipped={card.isFlipped}
                clicked={flipped}
                cardbackImg={card.backImg}
                cardNum={card.num}
                classname="card1"
              />
            );
          })}
        </section>
        <section className="row5">
          {fifthRow.map((card, i) => {
            return (
              <Card
                key={card.suit + card.num}
                id={i}
                isFlipped={card.isFlipped}
                clicked={flipped}
                cardbackImg={card.backImg}
                cardNum={card.num}
                classname="card1"
              />
            );
          })}
        </section>

        {/* {cardFormation.map((cardRow, idx) => {
          let row = cardRow;
          return row.map( (card, i) => {
            // console.log(card.suit)
            
            
            return <Card
            key = {card.suit + card.num}
            id = {i}
            isFlipped ={card.isFlipped}
            clicked ={flipped}
            cardbackImg ={card.backImg}
            cardNum = {card.num}
            classname="card1"  
            
            //   handleCardFlip={() => handleCardFlip(idx + 1, card)}
            />
          });
        })} */}
      </section>
    </div>
  );
}
