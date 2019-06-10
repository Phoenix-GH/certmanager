import { LitElement, html } from 'lit-element';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import { Icon } from "@material/mwc-icon";

// These are the shared styles needed by this element.
import { SharedStyles } from './cert-manager-style.js';
import { ElementStyles } from './element-styles.js';

class EthicalHackerMembers extends LitElement {
  static get styles() {
    return [
      SharedStyles,
      ElementStyles
    ];
  }

  shouldUpdate() {
    return { users: this.users, ascending: this.ascending};
  }

  static get properties() {
    return {
      ascending: { type: Boolean},
      users: { type: String },
    };
  }

  formattedDate(date) {
    let current_datetime = new Date(date);
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
    return formatted_date;
  }

  _sortChange() {
    const ascending = !this.ascending;
    this.ascending = ascending;
    let users = JSON.parse(this.users);
    users.sort(function(a, b) {
      if(ascending) {
        if(a.userName < b.userName) {
          return -1;
        } else if(a.userName > b.userName) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if(a.userName > b.userName) {
          return -1;
        } else if(a.userName < b.userName) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    this.users = JSON.stringify(users);
  }

  render() {
    const users = JSON.parse(this.users);
   
    return html`
      <section>
        <h3>Certification Members</h3>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th class="tdleft"> 
                User
                <a @click="${this._sortChange}">${this.ascending ? html`<mwc-icon class="sort-icon">arrow_upward</mwc-icon>` : html`<mwc-icon class="sort-icon">arrow_downward</mwc-icon>`}</a>
              </th>
              <th class="tdleft">
                Full Name
              </th>
              <th class="tdleft">
                Organization
              </th>
              <th class="tdleft">
                Earned
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            ${users.map((item) =>
              html`
                <tr>
                  <td>
                    ${item.userName}
                  </td>
                  <td>
                    ${item.fullName}
                  </td>
                  <td class="tdright">
                    <div class="certtd">
                      ${item.organization}<mwc-icon class="table-icon">av_timer</mwc-icon>
                    </span>
                  </td>
                  <td class="tdright">
                    <span class="certtd">
                      ${this.formattedDate(item.earned_at)}<mwc-icon class="table-icon">event</mwc-icon>
                    </span>
                  </td>
                  <td class="action-column">
                    <a href='#'><mwc-icon>remove_red_eye</mwc-icon></a>
                  </td>
                </tr>
              `
            )}
          </tbody>
        </table>
      </section>
    `;
  }
}

window.customElements.define('ethical-hacker-members', EthicalHackerMembers);
