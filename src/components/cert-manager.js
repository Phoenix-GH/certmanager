import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { Icon } from "@material/mwc-icon";
import '@polymer/paper-fab/paper-fab.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './cert-manager-style.js';

import { store } from '../store.js';
import { getAllCertifications } from '../actions/certification.js';

class CertManager extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      ascending: { type: Boolean},
      certifications: { type: Object }
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  _sortChange() {
    const ascending = !this.ascending;
    this.ascending = ascending;
    
    this.certifications.sort(function(a, b) {
      if(ascending) {
        if(a.vendor < b.vendor) {
          return -1;
        } else if(a.vendor > b.vendor) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if(a.vendor > b.vendor) {
          return -1;
        } else if(a.vendor < b.vendor) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }

  firstUpdated() {
    store.dispatch(getAllCertifications());
  }

  render() {
    return html`
      <style>
        :host {
          margin: 0 67px 0 67px;
        }
      </style>
      <section>
        <span class="title">
          <h2>Certification Manager</h2>
          <a href='/new'>
            <paper-fab mini id="add-button" icon="add"></paper-fab>
          </a>
        </span>
        <h3>Active Certifications</h3>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th> 
                Vendor
                <a @click="${this._sortChange}">${this.ascending ? html`<mwc-icon class="sort-icon">arrow_upward</mwc-icon>` : html`<mwc-icon class="sort-icon">arrow_downward</mwc-icon>`}</a>
              </th>
              <th>
                Certification
              </th>
              <th>
              </th>
              <th class="tdright">
                CEUs
              </th>
              <th class="tdright">
                Lifespan
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            ${this.certifications && this.certifications.length > 0 && this.certifications.map((item) =>
              html`
                <tr>
                  <td class="td-center">
                    <img src="${item.vendor}" />
                  </td>
                  <td class="td-center">
                      <img src="${item.certLogo}" />
                  </td>
                  <td>
                    ${item.certification}
                  </td>
                  <td class="tdright">
                    <div class="certtd tdright right">
                      ${item.CEUs}<mwc-icon class="table-icon">av_timer</mwc-icon>
                    </span>
                  </td>
                  <td class="tdright">
                    <span class="certtd tdright right">
                      ${item.lifeSpan}<mwc-icon class="table-icon">event</mwc-icon>
                    </span>
                  </td>
                  <td class="action-column">
                    <a href='#'><mwc-icon>link</mwc-icon></a>
                    <a href='/details/${item._id}'><mwc-icon>remove_red_eye</mwc-icon></a>
                  </td>
                </tr>
              `
            )}
          </tbody>
        </table>
      </section>
    `;
  }

  stateChanged(state) {
    this.certifications = state.certification.certifications;
  }

}

window.customElements.define('cert-manager', CertManager);
