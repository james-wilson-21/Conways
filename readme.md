# Conway's Game of Life — Browser Extension

A lightweight, zero-dependency browser extension that simulates Conway's Game of Life right from your browser toolbar. Built using modern Manifest V3 and native JavaScript ES modules.

## Features
* **Zero Dependencies:** Pure HTML, CSS, and modern JavaScript modules.
* **Self-Contained:** Runs safely inside the extension popup without requesting intrusive browser permissions.
* **Automated Stability Detection:** The simulation automatically detects when the board becomes static or frozen and safely stops the main loop.

## Rules of the Game
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

---

##  Installation Instructions

You can load this project into any Chromium-based browser (Chrome, Edge ... etc):

### 1. Clone or Download the Repository
Download this folder to your local machine, or clone it via your terminal:
```bash
git clone git@github.com:james-wilson-21/Conways.git
```

### 2. Open Your Browser Extensions Page
Open your browser and navigate to the extension management dashboard:
* **Chrome:** Go to `chrome://extensions/`
* **Edge:** Go to `edge://extensions/`
 etc.

### 3. Enable Developer Mode
In the top-right corner of the extensions page, toggle the **Developer mode** switch to **ON**.

### 4. Load the Unpacked Extension
1. In the top-left corner, click the **Load unpacked** button.
2. Select the root `conways` folder (the directory containing your `manifest.json` file).
3. The extension will instantly appear in your list!

### 5. Pin and Play
Click the puzzle piece icon (Extensions) in your browser toolbar, find **Conway's Game of Life**, and click the pin icon. Click the extension logo anytime to start a fresh, randomised simulation!

---

## Project Structure
 Coming Soon...
