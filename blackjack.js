const { Console } = require('console');
const readline = require('readline');

const hiddenCard = {
  'back': `
          ┌───────┐
          │       │
          │   ?   │
          │       │
          └───────┘
`
};
const asciiCards = {
  'Hearts': {
    'A': `
         ┌───────┐
         │   ♥️   │
         │   A   │
         │   ♥️   │
         └───────┘
         `,
    '2': `
         ┌───────┐
         │   ♥️   │
         │   2   │
         │   ♥️   │
         └───────┘
         `,
    '3': `
         ┌───────┐
         │   ♥️   │
         │   3   │
         │   ♥️   │
         └───────┘
         `,
    '4': `
         ┌───────┐
         │   ♥️   │
         │   4   │
         │   ♥️   │
         └───────┘
         `,
    '5': `
         ┌───────┐
         │   ♥️   │
         │   5   │
         │   ♥️   │
         └───────┘
         `,
    '6': `
         ┌───────┐
         │   ♥️   │
         │   6   │
         │   ♥️   │
         └───────┘
         `,
    '7': `
         ┌───────┐
         │   ♥️   │
         │   7   │
         │   ♥️   │
         └───────┘
         `,
    '8': `
         ┌───────┐
         │   ♥️   │
         │   8   │
         │   ♥️   │
         └───────┘
         `,
    '9': `
         ┌───────┐
         │   ♥️   │
         │   9   │
         │   ♥️   │
         └───────┘
         `,
    '10': `
         ┌───────┐
         │   ♥️   │
         │   10  │
         │   ♥️   │
         └───────┘
         `,
    'J': `
         ┌───────┐
         │   ♥️   │
         │   J   │
         │   ♥️   │
         └───────┘
         `,
    'Q': `
         ┌───────┐
         │   ♥️   │
         │   Q   │
         │   ♥️   │
         └───────┘
         `,
    'K': `
         ┌───────┐
         │   ♥️   │
         │   K   │
         │   ♥️   │
         └───────┘
         `,
  },
  'Diamonds': {
    'A': `
         ┌───────┐
         │   ♦️   │
         │   A   │
         │   ♦️   │
         └───────┘
         `,
    '2': `
         ┌───────┐
         │   ♦️   │
         │   2   │
         │   ♦️   │
         └───────┘
         `,
    '3': `
         ┌───────┐
         │   ♦️   │
         │   3   │
         │   ♦️   │
         └───────┘
         `,
    '4': `
         ┌───────┐
         │   ♦️   │
         │   4   │
         │   ♦️   │
         └───────┘
         `,
    '5': `
         ┌───────┐
         │   ♦️   │
         │   5   │
         │   ♦️   │
         └───────┘
         `,
    '6': `
         ┌───────┐
         │   ♦️   │
         │   6   │
         │   ♦️   │
         └───────┘
         `,
    '7': `
         ┌───────┐
         │   ♦️   │
         │   7   │
         │   ♦️   │
         └───────┘
         `,
    '8': `
         ┌───────┐
         │   ♦️   │
         │   8   │
         │   ♦️   │
         └───────┘
         `,
    '9': `
         ┌───────┐
         │   ♦️   │
         │   9   │
         │   ♦️   │
         └───────┘
         `,
    '10': `
         ┌───────┐
         │   ♦️   │
         │   10  │
         │   ♦️   │
         └───────┘
         `,
    'J': `
         ┌───────┐
         │   ♦️   │
         │   J   │
         │   ♦️   │
         └───────┘
         `,
    'Q': `
         ┌───────┐
         │   ♦️   │
         │   Q   │
         │   ♦️   │
         └───────┘
         `,
    'K': `
         ┌───────┐
         │   ♦️   │
         │   K   │
         │   ♦️   │
         └───────┘
         `,
  },
  'Clubs': {
    'A': `
         ┌───────┐
         │   ♣️   │
         │   A   │
         │   ♣️   │
         └───────┘
         `,
    '2': `
         ┌───────┐
         │   ♣️   │
         │   2   │
         │   ♣️   │
         └───────┘
         `,
    '3': `
         ┌───────┐
         │   ♣️   │
         │   3   │
         │   ♣️   │
         └───────┘
         `,
    '4': `
         ┌───────┐
         │   ♣️   │
         │   4   │
         │   ♣️   │
         └───────┘
         `,
    '5': `
         ┌───────┐
         │   ♣️   │
         │   5   │
         │   ♣️   │
         └───────┘
         `,
    '6': `
         ┌───────┐
         │   ♣️   │
         │   6   │
         │   ♣️   │
         └───────┘
         `,
    '7': `
         ┌───────┐
         │   ♣️   │
         │   7   │
         │   ♣️   │
         └───────┘
         `,
    '8': `
         ┌───────┐
         │   ♣️   │
         │   8   │
         │   ♣️   │
         └───────┘
         `,
    '9': `
         ┌───────┐
         │   ♣️   │
         │   9   │
         │   ♣️   │
         └───────┘
         `,
    '10': `
         ┌───────┐
         │   ♣️   │
         │   10  │
         │   ♣️   │
         └───────┘
         `,
    'J': `
         ┌───────┐
         │   ♣️   │
         │   J   │
         │   ♣️   │
         └───────┘
         `,
    'Q': `
         ┌───────┐
         │   ♣️   │
         │   Q   │
         │   ♣️   │
         └───────┘
         `,
    'K': `
         ┌───────┐
         │   ♣️   │
         │   K   │
         │   ♣️   │
         └───────┘
         `,
  },
  'Spades': {
    'A': `
         ┌───────┐
         │   ♠️   │
         │   A   │
         │   ♠️   │
         └───────┘
         `,
    '2': `
         ┌───────┐
         │   ♠️   │
         │   2   │
         │   ♠️   │
         └───────┘
         `,
    '3': `
         ┌───────┐
         │   ♠️   │
         │   3   │
         │   ♠️   │
         └───────┘
         `,
    '4': `
         ┌───────┐
         │   ♠️   │
         │   4   │
         │   ♠️   │
         └───────┘
         `,
    '5': `
         ┌───────┐
         │   ♠️   │
         │   5   │
         │   ♠️   │
         └───────┘
         `,
    '6': `
         ┌───────┐
         │   ♠️   │
         │   6   │
         │   ♠️   │
         └───────┘
         `,
    '7': `
         ┌───────┐
         │   ♠️   │
         │   7   │
         │   ♠️   │
         └───────┘
         `,
    '8': `
         ┌───────┐
         │   ♠️   │
         │   8   │
         │   ♠️   │
         └───────┘
         `,
    '9': `
         ┌───────┐
         │   ♠️   │
         │   9   │
         │   ♠️   │
         └───────┘
         `,
    '10': `
         ┌───────┐
         │   ♠️   │
         │   10  │
         │   ♠️   │
         └───────┘
         `,
    'J': `
         ┌───────┐
         │   ♠️   │
         │   J   │
         │   ♠️   │
         └───────┘
         `,
    'Q': `
         ┌───────┐
         │   ♠️   │
         │   Q   │
         │   ♠️   │
         └───────┘
         `,
    'K': `
         ┌───────┐
         │   ♠️   │
         │   K   │
         │   ♠️   │
         └───────┘
         `,
  }
};
let isMinBet = false;

// Function to generate a deck of cards
function generateDeck(shoeSize) {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];

  for (let i = 0; i < shoeSize; i++) {
    for (let suit of suits) {
      for (let value of values) {
        deck.push({ value, suit });
      }
    }
  }

  return deck;
}

// Function to shuffle the deck
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}
// Function to update count based on card value
function updateCount(card) {
  switch (card.value) {
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      count++;
      break;
    case '10':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      // For 7, 8, 9 - do nothing (count remains unchanged)
      break;
  }
}

// Function to calculate the value of a hand
function calculateHandValue(hand) {
  let sum = 0;
  let aceCount = 0;

  for (let card of hand) {
    if (card.value === 'A') {
      aceCount++;
      sum += 11;
    } else if (card.value === 'K' || card.value === 'Q' || card.value === 'J') {
      sum += 10;
    } else {
      sum += parseInt(card.value);
    }
  }

  while (sum > 21 && aceCount > 0) {
    sum -= 10;
    aceCount--;
  }

  return sum;
}

// Initialize game variables
let shoeSize = 6; // Default shoe size
const minBet = 50; // Default minimum bet
let betAmount;
let balance = 1000;
let deck = [];
let playerHand = [];
let dealerHand = [];
let isGameEnd = false;
let count = 0;

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to start a new round
function startNewRound() {
  if (deck.length < 10) {
    deck = generateDeck(shoeSize);
    shuffleDeck(deck);
    count = 0;
    console.log("\n");
    console.log('Deck shuffled.');
    console.log("\n");
  }
  playerHand = [];
  dealerHand = [];
  isGameEnd = false;

  console.log(`bet minimum: $${minBet}\n`);
  rl.question(`Current balance: $${balance}\n\n\nEnter your bet amount: `, (betInput) => {
    betAmount = parseInt(betInput);
    if (isNaN(betAmount) || betAmount > balance || betAmount < minBet) {
      console.log('Invalid bet amount. Using minimum bet.');
      startRoundWithMinBet(minBet);
      isMinBet = true;
    } else {
      startRoundWithBet(betAmount);
    }
  });
}
// Helper function to start the round with the specified bet
function startRoundWithBet(betAmount) {
  betAmount = betAmount;
  balance -= betAmount; // Deduct the bet amount from the balance
  dealCards();
}
function startRoundWithMinBet(minBet) {
  minBet = minBet;
  balance -= minBet; // Deduct the bet amount from the balance
  dealCards();
}

// Function to deal cards at the beginning of a round
function dealCards() {
  playerHand.push(deck.pop());
  updateCount(playerHand[playerHand.length - 1]); // Update count for player's card
  dealerHand.push(deck.pop());
  updateCount(dealerHand[dealerHand.length - 1]); // Update count for dealer's card
  playerHand.push(deck.pop());
  updateCount(playerHand[playerHand.length - 1]); // Update count for player's card
  dealerHand.push(deck.pop());
  updateCount(dealerHand[dealerHand.length - 1]); // Update count for dealer's card

  // Display the running count
  console.log("\n");


  displayGameStatus();
}


function displayGameStatus() {
  console.log(`Count: ${count}`);
  console.log("\n");
  console.log(`Balance: $${balance}`);
  console.log("\n");
  console.log('        Player hand:');
  const playerCards = playerHand.map((card) => asciiCards[card.suit][card.value].split('\n'));
  const playerHandHeight = playerCards[0].length;
  for (let i = 0; i < playerHandHeight; i++) {
    console.log(playerCards.map((card) => card[i]).join('\t'));
  }
  console.log(`        Player hand value: ${calculateHandValue(playerHand)}`);
  console.log("\n");
  console.log("\n");

  console.log('        Dealer hand:\n');
  if (!isGameEnd) {
    // Hide the first card of the dealer
    const dealerCards = dealerHand.map((card, index) => {
      if (index === 0) {
        return hiddenCard.back.split('\n'); // Split the hidden card ASCII art into an array
      }
      return asciiCards[card.suit][card.value].split('\n');
    });

    const dealerHandHeight = dealerCards[0].length;
    for (let i = 0; i < dealerHandHeight; i++) {
      console.log(dealerCards.map((card) => card[i]).join('\t'));
    }
    console.log("\n");
  } else {
    // Show all cards in the dealer's hand
    const dealerCards = dealerHand.map((card) => asciiCards[card.suit][card.value].split('\n'));
    const dealerHandHeight = dealerCards[0].length;
    for (let i = 0; i < dealerHandHeight; i++) {
      console.log(dealerCards.map((card) => card[i]).join('\t'));
    }
    console.log("\n");

    console.log(`Dealer hand value: ${calculateHandValue(dealerHand)}`);
    console.log("\n");
    determineWinner();
  }

  if (isGameEnd) {
  } else {
    rl.question('\nEnter your action h for HIT s for STAND (h / s): ', (action) => {
      if (action.toLowerCase() === 'h') {
        playerHand.push(deck.pop());
        if (calculateHandValue(playerHand) > 21) {
          isGameEnd = true;
          displayGameStatus();
        } else {
          displayGameStatus();
        }
      } else if (action.toLowerCase() === 's') {
        dealerPlay();
      } else {
        console.log('Invalid action. Please enter "h" or "s".');
        displayGameStatus();
      }
    });
  }
}








// Function for dealer's turn
function dealerPlay() {
  while (calculateHandValue(dealerHand) < 17) {
    dealerHand.push(deck.pop());

  }

  isGameEnd = true;
  displayGameStatus();
}

// Function to determine the winner and adjust balance
function determineWinner() {
  const playerValue = calculateHandValue(playerHand);
  const dealerValue = calculateHandValue(dealerHand);
  if (!isMinBet) {
    if (playerValue === 21) {
      console.log('BLACKJACK!!! 200:1 PAYOUT\n')
      balance += (200 * betAmount);
    } else if (playerValue > 21) {
      console.log('Player busted. Dealer wins.');
    } else if (dealerValue > 21) {
      console.log('Dealer busted. Player wins.');
      balance += (2 * betAmount);
    } else if (playerValue === dealerValue) {
      console.log('It\'s a push (tie).');
      balance += betAmount;
    } else if (playerValue > dealerValue) {
      console.log('Player wins.');
      balance += (2 * betAmount);
    } else {
      console.log('Dealer wins.');
    }
  } else {
    if (playerValue === 21) {
      console.log('BLACKJACK!!! 200:1 PAYOUT\n')
      balance += (200 * minBet);
    } else if (playerValue > 21) {
      console.log('Player busted. Dealer wins.');
    } else if (dealerValue > 21) {
      console.log('Dealer busted. Player wins.');
      balance += (2 * minBet);
    } else if (playerValue === dealerValue) {
      console.log('It\'s a push (tie).');
      balance += minBet;
    } else if (playerValue > dealerValue) {
      console.log('Player wins.');
      balance += (2 * minBet);
    } else {
      console.log('Dealer wins.');
    }

  }

  console.log(`New balance: $${balance}`);
  console.log(`Count: ${count}`);

  rl.question('\nPlay another round? (y / n): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      startNewRound();
    } else if (answer.toLowerCase() === 'n') {
      console.log('Thanks for playing!');
      rl.close();
    } else {
      console.log('Invalid.');
      startNewRound();
    }
  });
}

// Start the game
rl.question('\nEnter shoe size (number of decks): ', (size) => {
  shoeSize = parseInt(size) || shoeSize;
  startNewRound();
});
