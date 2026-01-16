import { Component } from '@angular/core';

@Component({
  selector: 'app-jwt-copy-privacy-policy',
  standalone: true,
  template: `
    <article class="privacy-policy">
      <h1>Privacy Policy for JWT Copy</h1>
      <p><strong>Last Updated:</strong> January 13, 2026</p>
      
      <p><strong>JWT Copy</strong> ("the Extension") is dedicated to protecting your privacy. This Privacy Policy explains how we handle your data.</p>
      
      <section>
        <h2>1. No Data Collection</h2>
        <p><strong>We do not collect, store, or transmit any personal data.</strong></p>
        <p>The Extension operates entirely locally on your device. It does not communicate with any external servers, analytics services, or third-party data processors.</p>
      </section>

      <section>
        <h2>2. Local Data Usage</h2>
        <p>The Extension functions by scanning the active tab and its local storage to find JSON Web Tokens (JWTs). This process happens exclusively within your browser:</p>
        <ul>
          <li><strong>JWT Scanning:</strong> The Extension reads <code>localStorage</code>, <code>sessionStorage</code>, cookies, and network request headers (<code>Authorization: Bearer</code>) from the active tab.</li>
          <li><strong>In-Memory Processing:</strong> Tokens are identified and displayed in the Extension's popup window. They are temporarily held in your browser's memory while the Extension is open.</li>
          <li><strong>Copy Functionality:</strong> If you choose to copy a token, it is written to your system clipboard.</li>
        </ul>
      </section>

      <section>
        <h2>3. Permissions</h2>
        <p>The Extension requires specific permissions solely to perform its core function:</p>
        <ul>
          <li><strong><code>activeTab</code></strong>: To scan the current page for tokens when you click the icon.</li>
          <li><strong><code>cookies</code></strong>: To detect tokens stored in authentication cookies.</li>
          <li><strong><code>webRequest</code></strong>: To detect tokens in network headers.</li>
          <li><strong><code>clipboardWrite</code></strong>: To allow you to copy tokens to your clipboard.</li>
        </ul>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>The Extension does not integrate with or share data with any third-party services.</p>
      </section>

      <section>
        <h2>5. Changes to This Policy</h2>
        <p>Since we do not collect data, we do not anticipate significant changes to this policy. However, any future updates will be posted here.</p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>If you have questions about this policy, please contact us via the Chrome Web Store support tab.</p>
      </section>
    </article>
  `,
  styles: [`
    .privacy-policy {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 0 4rem 0;
      color: #e2e8f0;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, #64ffda 0%, #48bfe3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #64ffda;
    }
    p, li {
      line-height: 1.6;
      margin-bottom: 1rem;
      color: #94a3b8;
    }
    section {
      margin-bottom: 2rem;
    }
    ul {
      padding-left: 1.5rem;
      margin-bottom: 1rem;
    }
    code {
      background: rgba(100, 255, 218, 0.1);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      color: #64ffda;
      font-family: 'Fira Code', monospace;
    }
  `]
})
export class JwtCopyPrivacyPolicyComponent { }
