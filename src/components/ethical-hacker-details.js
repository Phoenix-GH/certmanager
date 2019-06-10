/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from 'lit-element';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

import { SharedStyles } from './cert-manager-style.js';
import { ElementStyles } from './element-styles.js';
import { Icon } from "@material/mwc-icon";

class EthicalHackerDetails extends LitElement {
  shouldUpdate() {
    return this.certification;
  }

  static get properties() {
    return {
      certification: { type: String },
    };
  }
  
  static get styles() {
    return [
      SharedStyles,
      ElementStyles
    ];
  }

  render() {
    const certification = JSON.parse(this.certification);
    console.log('certification---', this.certification);
    return html`
      <section class="row">
        <section class="info-section">
          <h3>Certification Details</h3>
          <paper-dropdown-menu label="Vendor">
            <paper-listbox slot="dropdown-content" selected="0">
              ${certification.vendor && html`<paper-item>${certification.vendor}</paper-item>`}
            </paper-listbox>
          </paper-dropdown-menu>
          <paper-input always-float-label label="Title" value=${certification.certification ? certification.certification : ''}></paper-input>
          <paper-input always-float-label label="URL" value=${certification.url ? certification.url : ''}></paper-input>
          <span class="row">
            <paper-input always-float-label label="Required CEUs" value=${certification.CEUs ? certification.CEUs : ''}>
              <paper-icon-button slot="suffix" icon="av-timer"></paper-icon-button>
            </paper-input>
            <paper-input always-float-label label="Lifespan (years)" value=${certification.lifeSpan ? certification.lifeSpan : ''}>
              <paper-icon-button slot="suffix" icon="event"></paper-icon-button>
            </paper-input>
          </span>
        </section>
        <section class="img-section">
          ${certification.certLogo && html`<img src=${certification.certLogo} />`}
        </section>
      </section>
    `;
  }
}

window.customElements.define('ethical-hacker-details', EthicalHackerDetails);
