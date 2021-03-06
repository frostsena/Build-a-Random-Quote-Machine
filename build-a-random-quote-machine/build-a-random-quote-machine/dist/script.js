import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
{ text: `“Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.”`, author: "Johann Wolfgang von Goethe" },
{ text: `“Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.”`, author: "Matthew 7:7" },
{ text: `“Life is not measured by the number of breaths we take, but by the moments that take our breath away.”`, author: "Maya Angelou" },
{ text: `“Happiness is not something readymade.  It comes from your own actions.”`, author: "Dalai Lama" },
{ text: `“If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.”`, author: "Oprah Winfrey" },
{ text: `“Do what you can, where you are, with what you have.”`, author: "Teddy Roosevelt" },
{ text: `“Life is what we make it, always has been, always will be.”`, author: "Grandma Moses" },
{ text: `“Certain things catch your eye, but pursue only those that capture the heart.”`, author: "Ancient Indian Proverb" },
{ text: `“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.”`, author: "Plato" },
{ text: ` “Fall seven times and stand up eight.”`, author: "Japanese Proverb" }];


const QuoteBox = ({ quote, handleNewQuote }) => /*#__PURE__*/
React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
React.createElement("h2", { id: "text" }, quote.text), /*#__PURE__*/
React.createElement("p", { id: "author" }, quote.author), /*#__PURE__*/
React.createElement("div", { class: "actions" }, /*#__PURE__*/
React.createElement("button", {
  id: "new-quote",
  class: "button",
  onClick: handleNewQuote }, "New Quote"), /*#__PURE__*/



React.createElement("a", {
  href: "twitter.com/intent/tweet",
  id: "tweet-quote",
  target: "_blank" }, "Tweet")));







const getRandomIndex = (max) =>
Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(QuoteBox, { handleNewQuote: handleNewQuote, quote: quote })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));