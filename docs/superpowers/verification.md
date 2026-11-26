# Verification — November 26, 2026

## Confirmed
- Both JavaScript files pass `node --check`.
- 32 automated behavior/layout checks passed in headless desktop Chrome.
- Both pages resolve their local links, images, styles, scripts, and font.
- No horizontal overflow at viewport widths 320, 375, 390, 650, 768, 1024, 1440, and 1920 pixels.
- Mobile navigation opens, closes after choosing a link, responds to Escape, and restores focus.
- The project explanation expands with the native details control.
- The inquiry dialog supports native modal keyboard behavior, Escape, and focus return, including when opened from the mobile menu.
- Required fields and whitespace-only names are rejected.
- The original copy/email-draft flow was replaced by direct email-service submission. Current delivery checks are recorded below.
- Stillday filters correctly show four coffee items, two tea items, and all six items, with matching selected states.
- Reduced-motion mode removes the entrance motion and smooth scrolling.
- No uncaught JavaScript errors occurred in the tested flows.
- Axe scans using the WCAG 2 A/AA and 2.1 A/AA tags reported zero violations on both desktop pages, both mobile pages, and the open inquiry dialog. This is an automated check, not a claim of full conformance.
- Desktop and mobile screenshots were visually inspected. Small text contrast was corrected, the local font was confirmed variable-weight, and the hero preview caption was separated from the preview.
- The portfolio loads its images when index.html is opened directly from disk.
- An independent static review and scoped re-review approved the content, interaction structure, contrast fixes, and README instructions.

## Delivery limits
The recipient is `leoureweb@gmail.com`. This is an editable portfolio with one fictional concept project, not a claim of paid client work. No domain was configured and the site was not publicly deployed. Test sending again from the final published address before taking customer inquiries.

Browser verification used temporary QA tooling outside the project. The delivered website has no runtime package dependencies or build step.

## Direct contact delivery — November 26, 2026

- Checked FormSubmit's official AJAX example, field options, and activation help before implementation.
- `node --check site.js` passes after the change.
- A scoped Playwright suite passed 22 browser checks, intercepting every provider request; these automated cases sent no real email.
- Confirmed the endpoint and recipient, POST payload, trimmed values, customer reply-email field, fixed subject, and honeypot.
- Required fields, invalid email, and whitespace-only name/project details are rejected before sending.
- A pending request disables controls and rejects a second submit event. Closing and reopening the dialog preserves sending feedback.
- HTTP errors, provider rejection, invalid JSON, network failures, activation requirements (including a misleading positive flag), and a 20-second timeout preserve details, restore editable controls, and never display sent status.
- A confirmed response resets the form. Retrying after failure works. Fallback email links, Escape, and focus restoration work.
- Desktop and 390-pixel mobile inquiry scans returned zero axe WCAG 2/2.1 A/AA violations. The dialog has no horizontal overflow at that mobile width. No uncaught JavaScript errors occurred.
- Independent scoped code review found no material submission-state, response-handling, or recipient issues.
- One actual browser setup POST received HTTP 200 with `success: "false"` and an activation-required message. FormSubmit confirmed it sent an activation email; the website correctly showed awaiting-confirmation feedback.
- After the owner reported completing activation, one clearly labeled live delivery test received HTTP 200 with `success: "true"` and “The form was submitted successfully.” The website displayed its sent confirmation. The owner then explicitly confirmed that the test email arrived at `leoureweb@gmail.com`, completing the website-to-inbox check.
- Exactly two live submissions were made during setup: the activation request and the post-activation delivery test. The remaining browser cases were mocked.
