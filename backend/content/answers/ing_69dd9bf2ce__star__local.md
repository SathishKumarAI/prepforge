---
qid: ing_69dd9bf2ce__star__local
question: 'Explain: Parallel State (Fork/Join) — State Management Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:59-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time analytics dashboard for an e‑commerce platform that needed to pull data from three independent microservices (orders, inventory, and shipping) and render them on the same page without blocking UI updates.

**Task** – I had to design a state machine that could initiate all three API calls simultaneously, keep each service’s loading and error states separate, and only update the dashboard once every stream had responded or failed gracefully.

**Action** – Using XState’s parallel state (fork) feature, I created a top‑level `dashboard` machine with three child substates: `orders`, `inventory`, and `shipping`. Each substate was an independent fetch cycle with its own `loading`, `success`, and `error` states. I leveraged the `onDone` transition to capture payloads into context variables, and used a final “ready” state that awaited all three child machines via the built‑in `parallel` exit condition (`all`). When any child entered an error state, I fired a global `ERROR_HANDLED` event to surface a toast notification while still allowing other streams to finish.

**Result** – The dashboard rendered within 350 ms on average, with each API call completing in roughly 120–180 ms. Error handling became deterministic: a single failed service no longer blocked the others, improving overall reliability by 25 % and reducing user‑reported timeouts from 12 % to <2 %. I learned that structuring complex async flows as parallel substates keeps concerns isolated and makes cancellation or partial updates trivial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
