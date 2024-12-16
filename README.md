# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error when using Firebase's onAuthStateChanged function: forgetting to unsubscribe.  Failure to unsubscribe can lead to memory leaks, especially in React or other component-based frameworks.

## Bug
The `authBug.js` file shows the incorrect usage: the onAuthStateChanged listener is attached, but never removed.  This will keep the listener active even after the component is unmounted, leading to potential memory leaks.

## Solution
The `authSolution.js` file provides the correct implementation.  The listener is unsubscribed using the `unsubscribe()` function when it's no longer needed. This ensures that resources are released properly.

## How to reproduce
1. Clone this repository.
2. Install dependencies:  `npm install firebase`
3. Run the buggy version and observe the behavior.  (Add Firebase config). 
4. Run the corrected version and observe the behavior.