/**
 * Uniform Residential Appraisal Report (Form 1004) Client
 * Renders the URAR form using the Atlassian Design System theme
 */

import { SignalWatcher } from "@lit-labs/signals";
import { provide } from "@lit/context";
import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { v0_8 } from "@a2ui/lit";
import * as UI from "@a2ui/lit/ui";

// Import Atlassian theme
import { atlassianTheme } from "./atlassian-theme.js";

// Import form messages
import urlaFormMessages from "./urla-form-messages.json";

// Custom styles to inject into A2UI component shadow DOMs
const checkboxStyles = `
  input[type="checkbox"] {
    width: 16px !important;
    height: 16px !important;
    flex-shrink: 0 !important;
    margin: 2px 0 0 0 !important;
  }
`;

const selectStyles = `
  select {
    height: 36px !important;
    box-sizing: border-box !important;
  }
`;

const inputStyles = `
  input {
    height: 36px !important;
    box-sizing: border-box !important;
    border-radius: 3px !important;
    border: 2px solid #C1C7D0 !important;
    padding: 8px !important;
  }
`;

const buttonStyles = `
  button {
    color: #FFFFFF !important;
  }
`;

const rowStyles = `
  :host {
    align-items: flex-start !important;
  }
`;

@customElement("urla-form-client")
export class URLAFormClient extends SignalWatcher(LitElement) {
  // Provide the Atlassian theme to all child components
  @provide({ context: UI.Context.themeContext })
  theme: v0_8.Types.Theme = atlassianTheme;

  @state()
  loading = true;

  @state()
  submitting = false;

  @state()
  submitSuccess = false;

  @state()
  error: string | null = null;

  static styles = [
    unsafeCSS(v0_8.Styles.structuralStyles),
    css`
      :host {
        display: block;
        max-width: 1200px;
        margin: 0 auto;
        padding: 24px;
        min-height: 100vh;
        font-family: "Atlassian Sans", ui-sans-serif, -apple-system,
          BlinkMacSystemFont, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue",
          sans-serif;

        /* Button text color override */
        --button-text-color: #FFFFFF;
      }

      #form-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        animation: fadeIn 0.5s ease-out;
      }

      .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        gap: 12px;
        color: #505f79;
      }

      .loading-spinner {
        width: 24px;
        height: 24px;
        border: 3px solid #dfe1e6;
        border-top-color: #0052cc;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      .error-banner {
        background-color: #ffebe6;
        border: 1px solid #ff5630;
        border-radius: 3px;
        padding: 16px;
        color: #ae2e24;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .success-banner {
        background-color: #e3fcef;
        border: 1px solid #36b37e;
        border-radius: 3px;
        padding: 24px;
        color: #006644;
        text-align: center;
      }

      .success-banner h2 {
        margin: 0 0 8px 0;
        font-size: 24px;
        font-weight: 600;
      }

      .success-banner p {
        margin: 0;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ];

  // A2UI message processor
  private processor = v0_8.Data.createSignalA2uiMessageProcessor();

  private styleSheets: Map<string, CSSStyleSheet> = new Map();
  private observer: MutationObserver | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.initializeForm();
    this.setupStyleInjection();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupStyleInjection() {
    // Create component-specific stylesheets
    const checkboxSheet = new CSSStyleSheet();
    checkboxSheet.replaceSync(checkboxStyles);
    this.styleSheets.set('a2ui-checkbox', checkboxSheet);

    const selectSheet = new CSSStyleSheet();
    selectSheet.replaceSync(selectStyles);
    this.styleSheets.set('a2ui-multiplechoice', selectSheet);

    const inputSheet = new CSSStyleSheet();
    inputSheet.replaceSync(inputStyles);
    this.styleSheets.set('a2ui-datetimeinput', inputSheet);
    this.styleSheets.set('a2ui-textfield', inputSheet);

    const buttonSheet = new CSSStyleSheet();
    buttonSheet.replaceSync(buttonStyles);
    this.styleSheets.set('a2ui-button', buttonSheet);

    const rowSheet = new CSSStyleSheet();
    rowSheet.replaceSync(rowStyles);
    this.styleSheets.set('a2ui-row', rowSheet);

    // Inject into existing A2UI components (with delay for shadow roots to be ready)
    setTimeout(() => this.injectStylesIntoShadowRoots(this), 100);
    setTimeout(() => this.injectStylesIntoShadowRoots(this), 500);

    // Watch for new components being added
    this.observer = new MutationObserver(() => {
      // Debounce and delay to let shadow roots initialize
      setTimeout(() => this.injectStylesIntoShadowRoots(this), 50);
    });

    this.observer.observe(this, { childList: true, subtree: true });
  }

  private injectStylesIntoShadowRoots(root: Element | ShadowRoot) {
    // Get all elements to check
    const elements = root.querySelectorAll('*');

    for (const element of elements) {
      this.injectStyleForElement(element);

      // Recursively check inside shadow root
      if (element.shadowRoot) {
        this.injectStylesIntoShadowRoots(element.shadowRoot);
      }
    }

    // Also check if root itself is an element
    if (root instanceof Element) {
      this.injectStyleForElement(root);
    }
  }

  private injectStyleForElement(element: Element) {
    if (!element.shadowRoot) return;

    const tagName = element.tagName.toLowerCase();
    const styleSheet = this.styleSheets.get(tagName);

    if (styleSheet) {
      const adopted = element.shadowRoot.adoptedStyleSheets;
      if (!adopted.includes(styleSheet)) {
        element.shadowRoot.adoptedStyleSheets = [...adopted, styleSheet];
      }
    }
  }

  private async initializeForm() {
    try {
      this.loading = true;

      // Process the form messages
      this.processor.clearSurfaces();
      this.processor.processMessages(
        urlaFormMessages as v0_8.Types.ServerToClientMessage[]
      );

      this.loading = false;
    } catch (err) {
      this.error = `Failed to initialize form: ${err}`;
      this.loading = false;
    }
  }

  render() {
    if (this.loading) {
      return this.renderLoading();
    }

    if (this.error) {
      return this.renderError();
    }

    if (this.submitSuccess) {
      return this.renderSuccess();
    }

    return this.renderForm();
  }

  private renderLoading() {
    return html`
      <div class="loading">
        <div class="loading-spinner"></div>
        <span>Loading appraisal form...</span>
      </div>
    `;
  }

  private renderError() {
    return html`
      <div class="error-banner">
        <span>Error: ${this.error}</span>
      </div>
    `;
  }

  private renderSuccess() {
    return html`
      <div class="success-banner">
        <h2>Appraisal Report Submitted Successfully!</h2>
        <p>
          Your Uniform Residential Appraisal Report has been received and is
          being processed.
        </p>
        <p style="margin-top: 16px;">
          <strong>Reference Number:</strong> URAR-${Date.now()
            .toString(36)
            .toUpperCase()}
        </p>
      </div>
    `;
  }

  private renderForm() {
    const surfaces = this.processor.getSurfaces();

    if (surfaces.size === 0) {
      return html`<div class="loading">No form data available</div>`;
    }

    return html`
      <div id="form-container">
        ${repeat(
          surfaces,
          ([surfaceId]) => surfaceId,
          ([surfaceId, surface]) => html`
            <a2ui-surface
              @a2uiaction=${this.handleAction}
              .surfaceId=${surfaceId}
              .surface=${surface}
              .processor=${this.processor}
            ></a2ui-surface>
          `
        )}
      </div>
    `;
  }

  private async handleAction(evt: v0_8.Events.StateEvent<"a2ui.action">) {
    const actionName = evt.detail.action.name;
    const surfaceId = "urla-form";

    console.log("Action triggered:", actionName);

    // Build context from the action
    const context: Record<string, unknown> = {};
    if (evt.detail.action.context) {
      for (const item of evt.detail.action.context) {
        if (item.value.literalBoolean !== undefined) {
          context[item.key] = item.value.literalBoolean;
        } else if (item.value.literalNumber !== undefined) {
          context[item.key] = item.value.literalNumber;
        } else if (item.value.literalString !== undefined) {
          context[item.key] = item.value.literalString;
        } else if (item.value.path) {
          const path = this.processor.resolvePath(
            item.value.path,
            evt.detail.dataContextPath
          );
          const value = this.processor.getData(
            evt.detail.sourceComponent,
            path,
            surfaceId
          );
          context[item.key] = value;
        }
      }
    }

    switch (actionName) {
      case "submit_application":
        await this.submitApplication(context);
        break;
      case "save_draft":
        this.saveDraft();
        break;
      default:
        console.log("Unknown action:", actionName, context);
    }
  }

  private async submitApplication(context: Record<string, unknown>) {
    this.submitting = true;

    try {
      // Simulate API call
      console.log("Submitting application with data:", context.formData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      this.submitSuccess = true;
    } catch (err) {
      this.error = `Submission failed: ${err}`;
    } finally {
      this.submitting = false;
    }
  }

  private saveDraft() {
    // Get current form data from processor
    const formData = this.processor.getData(undefined, "/", "urla-form");

    // Save to localStorage
    localStorage.setItem("urla-draft", JSON.stringify(formData));
    console.log("Draft saved:", formData);

    // Show confirmation
    alert("Draft saved successfully!");
  }
}

// Export for use in HTML
declare global {
  interface HTMLElementTagNameMap {
    "urla-form-client": URLAFormClient;
  }
}
