/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';
import './ethical-hacker-details.js';
import './ethical-hacker-members.js';
import { store } from '../store.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './cert-manager-style.js';
import { getCertification, getUsers, deleteCertification, clearCertification } from '../actions/certification.js';

class CertifiedHacker extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _page: { type: String },
      certification: { type: Object },
      users: { type: Array },
      isDialogVisible: { type: Boolean, value: false },
      mode: { type: String },
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  firstUpdated() {
    const param = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if(this.mode !== 'new') {
      console.log('update--');
      store.dispatch(getCertification(param));
    } else {
      console.log('new---');
      store.dispatch(clearCertification());
    }
  }

  _tabChanged(e) {
    const param = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    this._page = e;
    if(this.mode !== 'new') {
      if(e === 'members') {
        store.dispatch(getUsers(param));
      } 
      else if(e === 'details') {
        store.dispatch(getCertification(param));
      }
    }
  }

  _delete() {
    this.isDialogVisible = true;
  }

  _confirmDelete() {
    const param = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    store.dispatch(deleteCertification(param));
    this.isDialogVisible = false;
    location.href = '/';
  }

  render() {
    return html`
      <style>
        :host {
          margin: 0 67px 0 67px;
        }
      </style>
      <paper-dialog id="actions" ?opened=${this.isDialogVisible}>
        <h3>Confirm</h3>
        <p>Are you sure to delete?</p>
        <div class="buttons">
          <paper-button dialog-dismiss>No</paper-button>
          <paper-button dialog-confirm autofocus @click="${this._confirmDelete}">Yes</paper-button>
        </div>
      </paper-dialog>
      <section>
        <span class="title">
          <h2>Certification Ethical Hacker(CEH)</h2>
          <paper-fab mini id="delete-button" icon="delete" @click="${this._delete}"></paper-fab>
        </span>
        <paper-tabs hideScrollButtons disableDrag selected="0" scrollable>
          <paper-tab @click="${() => this._tabChanged('details')}">Details</paper-tab>
          <paper-tab @click="${() => this._tabChanged('members')}">Members</paper-tab>
        </paper-tabs>
      </section>

      ${this._page === 'members' ? 
        html`<ethical-hacker-members users=${JSON.stringify(this.users)}></ethical-hacker-members>`
      : html`<ethical-hacker-details certification="${JSON.stringify(this.certification)}"></ethical-hacker-details>`}
    `;
  }

  stateChanged(state) {
    this.certification = state.certification.certification;
    this.users = state.certification.users;
  }
  
}

window.customElements.define('certified-hacker', CertifiedHacker);
