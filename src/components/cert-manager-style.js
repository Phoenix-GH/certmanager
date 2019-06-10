/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: inline-block;
    box-sizing: border-box;
  }

  section {
    background: var(--app-section-odd-color);
    font-family: Roboto;
    font-style: normal;
    flex: 1;
  }

  section > * {
    margin-right: auto;
    margin-left: auto;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 39px;
  }

  .title h2 {
    margin-right: 40px;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h3 {
    margin-block-start: 23px;
    margin-block-end: 15px;
  }

  #add-button {
    --paper-fab-background: #0077c8;
  }

  #delete-button {
    --paper-fab-background: #cb001a;
  }

  #add-button iron-icon {
    width: 20px;
    height: 20px;
  }

  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table th {
    font-weight: 500;
    font-size: 12px;
    line-height: 36px;
    color: rgba(0, 0, 0, 0.4);
  }

  table td {
    border-top: 0;
    border-width: 1px;
    border-style: solid none none none;
    border-color: rgba(0, 0, 0, 0.2);
    font-size: 16px;
    line-height: 21px;
  }

  table td:last {
    border-top-width: 1px;
  }

  table td img {
    max-height: 55px;
    max-width: 75px;
  }

  .certtd {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .tdleft {
    text-align: left;
  }

  .tdright {
    text-align: right;
  }
  
  .td-center {
    text-align: center;
  }

  .table-icon {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.25);
    margin: 0 0 3px 3px;
  }

  .action-column {
    text-align: center;
  }

  .action-column mwc-icon {
    color: rgb(0, 0, 0, 0.5);
    margin: 0 11px 0 11px;
  }

  .right {
    float: right;
  }

  .sort-icon {
    font-size: 15px;
    line-height: 36px;
    color: rgba(0, 0, 0, 0.6);
  }

  paper-tabs {
    margin-left: 0;
    --paper-tabs-selection-bar-color: #0E8BFF;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    --paper-tabs-container: none;
  }

  section {
    flex: 1;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .row paper-input {
    flex: 1;
  }

  .img-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  span.row paper-input:first-child {
    margin-right: 40px;
  }
`;
