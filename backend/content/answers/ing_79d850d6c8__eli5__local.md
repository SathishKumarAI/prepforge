---
qid: ing_79d850d6c8__eli5__local
question: 'Explain: p95 time-to-first-token on answers regressed from 1.2 s to 3 s
  after a release. Walk me through finding and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 313
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:49:33-05:00'
sources: []
---

Imagine you’re waiting for a pizza delivery (the answer). The “time‑to‑first‑token” is how long it takes the pizza truck to show up at your door after you order—once it’s there, the rest of the pie comes quickly.

After a new recipe update (release), the first slice started arriving 1.2 s faster than before, but suddenly the wait jumped to 3 s. To fix this, follow three simple steps:

1. **Track the delay** – Log every order’s start time and the moment the truck is detected at the curb. Compare the two sets of times; the gap that grew is your culprit.

2. **Find the blocker** – Look where the system hands off the order to the delivery engine. If a new “traffic‑control” routine was added, it might be pausing too long before the truck leaves the kitchen.

3. **Revert or tweak** – Either roll back that routine or shorten its pause window so the truck can leave as soon as the pizza is ready. Once you test with fresh orders and see the 1.2 s time again, the problem’s solved.

In short: log the start‑and‑arrival times, spot where the new code inserts a delay, then adjust that insertion until the first token (pizza) returns quickly again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
