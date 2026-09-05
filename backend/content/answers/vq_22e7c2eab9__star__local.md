---
qid: vq_22e7c2eab9__star__local
question: What is a RADIO GROUP ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 368
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:33-05:00'
sources: []
---

**Situation**  
During a redesign of our customer‑onboarding web app, the UX team wanted to replace the old “select one” dropdown with a cleaner radio group so that new users could see all options at once and pick their preferred account type.

**Task**  
I had to implement a reusable Radio Group component in React that handled accessibility, state management, and validation, while ensuring it stayed lightweight for mobile devices.

**Action**  
First I scoped the API: `RadioGroup` would accept an array of option objects, a controlled value prop, and callbacks. I used `useReducer` to manage internal focus and keyboard navigation, emitting ARIA roles (`radiogroup`, `radio`) for screen‑reader support. To keep bundle size low, I lazy‑loaded the component with React.lazy and code‑splitting, and memoized options to avoid re‑renders. For styling I leveraged CSS modules, adding a subtle “selected” outline that adapts to our theme. Finally, I wrote unit tests with Jest/React Testing Library to verify keyboard navigation (Arrow keys) and form integration via `react-hook-form`.

**Result**  
The new Radio Group cut the onboarding time by 18 % because users could choose faster, and it reduced form errors by 25 %. It also earned a 4.8‑star rating in our internal usability survey. I learned how to balance accessibility with performance, and how a well‑designed reusable component can improve both UX metrics and developer efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
