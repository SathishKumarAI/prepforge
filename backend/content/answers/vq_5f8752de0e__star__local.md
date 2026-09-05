---
qid: vq_5f8752de0e__star__local
question: Can a DIALOG WINDOW have scroll bar attached to it ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:00-05:00'
sources: []
---

**Situation:** In my last role at TechNova, we were revamping the legacy reporting module that shipped a modal dialog for displaying detailed audit logs. Users complained the logs could be dozens of pages long and the dialog would grow beyond the screen, causing truncation.

**Task:** I needed to redesign the dialog so it stayed within the viewport while allowing users to scroll through arbitrarily large content without compromising performance or accessibility.

**Action:** First, I evaluated the UI framework (React + Ant Design) and confirmed that `<Modal>` supports a `scrollable` prop. However, simply enabling it caused the modal header to stick but the footer overlapped when scrolling. To fix this, I wrapped the body in a `<div>` with `max-height: 70vh; overflow-y: auto;` and used CSS Flexbox to keep the header/footer fixed. I added an “Expand” button that toggles the modal to full-screen, which triggers a class change to set `height: 100vh`. For accessibility, I ensured focus trapping remained intact by updating the `aria-modal` attributes when toggling.

**Result:** The new dialog now fits within any screen size; users can scroll through logs up to 5,000 rows without layout issues. Load times dropped by 30% because the body only renders visible rows via virtual scrolling (`react-window`). Feedback from QA was overwhelmingly positive, and we saw a 25% reduction in support tickets related to log viewing. I learned how subtle CSS tweaks combined with framework features can solve seemingly rigid UI constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
