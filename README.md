# Command Line Blackjack Game

A fully-featured **command-line Blackjack** game built with Node.js, featuring ASCII card graphics, multi-deck support, a betting system, and Hi-Lo card counting. Designed for interactive play with realistic dealer logic and automatic deck reshuffling.

## Features

- 🎴 ASCII art card visualization for all suits and values
- 🎲 Configurable shoe size (number of decks)
- 💰 Betting system with minimum bet enforcement
- 🔢 Hi-Lo card counting system (running count displayed)
- 🎮 Interactive hit/stand gameplay
- 💵 Balance tracking and automated payouts
- ♠️ Standard casino rules implemented (dealer hits 16, stands on 17)
- 🔄 Automatic deck reshuffling when cards run low
- 🧩 Modular, object-oriented code for easy extension and maintenance

## Prerequisites

- Node.js installed on your system
- Terminal/Command Prompt

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory.
3. Run the game:
    ```bash
    node blackjack.js
    ```

Follow the prompts to:
- Enter the shoe size (number of decks).
- Place your bet (minimum bet: $50).
- Choose your actions during gameplay.

## Game Controls

- `h` - Hit (draw another card)
- `s` - Stand (keep current hand)
- `y` - Play another round
- `n` - End game

## Game Rules

- Starting balance: $1,000
- Minimum bet: $50
- Blackjack pays 2:1
- Regular win pays 1:1
- Dealer must hit on 16 and stand on 17
- Aces count as 1 or 11

## Card Counting System

The game implements a Hi-Lo card counting system:

- +1 for cards 2-6
- 0 for cards 7-9
- -1 for cards 10-Ace

The running count is displayed after each hand.

## Features in Detail

### Betting System

- Players must bet at least the minimum amount ($50).
- Invalid bets default to the minimum bet.
- Balance is updated automatically based on game outcomes.

### Dealer Logic

- First dealer card is hidden until the end of the round.
- Dealer automatically plays according to standard casino rules.
- All cards are revealed at the end of each round.

### Hand Evaluation

- Automatic detection of Blackjack (21).
- Proper handling of Aces (1 or 11).
- Bust detection (over 21).
- Push handling (ties).

## Technical Implementation

- Written in JavaScript (Node.js).
- Uses readline interface for user input.
- Implements object-oriented card deck management.
- Features modular code structure with separate functions for:
  - Deck generation
  - Card dealing
  - Hand calculation
  - Game state management
  - Display rendering

## Card Representation
````
┌───────┐
│   ♥️  
│   A   |
│   ♥️
└───────┘
`````
