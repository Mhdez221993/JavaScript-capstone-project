/**      A function for test the button that clears all the completed tasks.       */
import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect.js';
import 'regenerator-runtime/runtime.js';
import {
  testStart,
  displayItem,
  displayComments,
  displayReserve,
} from './test_files/dom-calls.js';

testStart();

describe('Counter functions ', () => {
  test('retrieves the items from api and counts them', () => {
    const oldCountItems = 0;
    expect(oldCountItems).not.toBe(window.menu);
  });

  test('retrieves the likes from api and counts them', () => {
    const oldLikes = [];
    window.likes.forEach((l) => oldLikes.push(l));
    displayItem(window.menu[0]);
    const btn = document.getElementById('btn-star');
    fireEvent.click(btn);
    expect(oldLikes).not.toBe(window.likes);
  });

  test('retrieves the comments from api and counts them', () => {
    const oldComments = [];
    window.menu[0].comments.forEach((c) => oldComments.push(c));
    displayItem(window.menu[0]);
    displayComments(window.menu[0]);
    expect(oldComments).not.toBe(window.menu[0].comments);
  });

  test('retrieves the reservations from api and counts them', () => {
    const oldReservations = [];
    window.menu[0].reservations.forEach((r) => oldReservations.push(r));
    displayItem(window.menu[0]);
    displayReserve(window.menu[0]);
    expect(oldReservations).not.toBe(window.menu[0].reservations);
  });
});
