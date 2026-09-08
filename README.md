# Tic-Tac-Toe React Native Application

A two-player Tic-Tac-Toe mobile application built with **React Native**, **TypeScript**, and **Expo**. This project features screen navigation, state management, win detection across all 8 possible combinations, and tile overwrite protection.

---

## Features

- **Player Name Input:** Custom screen for entering player names before beginning the game.
- **Screen Navigation:** Uses `@react-navigation/native-stack` to seamlessly transition between the setup screen and the game board.
- **Turn Alternation:** Automatically toggles turns between Player 1 (X) and Player 2 (O).
- **Win Detection:** Evaluates 8 winning line combinations (3 rows, 3 columns, and 2 diagonals) after every move.
- **Game Lock & Overwrite Protection:** Prevents players from overwriting already filled cells and locks the board once a winner is declared.

---

## Tech Stack

- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **Navigation:** React Navigation (Native Stack)
- **State Management:** React `useState` Hook

---

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone [https://github.com/ST10518149/icetask2_xo_game.git](https://github.com/ST10518149/icetask2_xo_game.git)
