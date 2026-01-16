# Privacy Policy for JWT Copy

**Last Updated:** January 13, 2026

**JWT Copy** ("the Extension") is dedicated to protecting your privacy. This Privacy Policy explains how we handle your data.

## 1. No Data Collection
**We do not collect, store, or transmit any personal data.**

The Extension operates entirely locally on your device. It does not communicate with any external servers, analytics services, or third-party data processors.

## 2. Local Data Usage
The Extension functions by scanning the active tab and its local storage to find JSON Web Tokens (JWTs). This process happens exclusively within your browser:

- **JWT Scanning:** The Extension reads `localStorage`, `sessionStorage`, cookies, and network request headers (`Authorization: Bearer`) from the active tab.
- **In-Memory Processing:** Tokens are identified and displayed in the Extension's popup window. They are temporarily held in your browser's memory while the Extension is open.
- **Copy Functionality:** If you choose to copy a token, it is written to your system clipboard.

## 3. Permissions
The Extension requires specific permissions solely to perform its core function:

- **`activeTab`**: To scan the current page for tokens when you click the icon.
- **`cookies`**: To detect tokens stored in authentication cookies.
- **`webRequest`**: To detect tokens in network headers.
- **`clipboardWrite`**: To allow you to copy tokens to your clipboard.

## 4. Third-Party Services
The Extension does not integrate with or share data with any third-party services.

## 5. Changes to This Policy
Since we do not collect data, we do not anticipate significant changes to this policy. However, any future updates will be posted here.

## 6. Contact
If you have questions about this policy, please contact us via the Chrome Web Store support tab.
