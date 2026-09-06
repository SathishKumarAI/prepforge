---
qid: ing_e837f312d8__think__local
question: 'Explain: Title: Display Advertising with Real-Time Bidding (RTB) and Behavioural
  Targeting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 449
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:21:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- Identify the core concepts: *display advertising*, *real‑time bidding (RTB)*, and *behavioural targeting*.
- Assume a typical online ad ecosystem (DSPs, SSPs, exchanges) and that the reader knows basic ad terminology but not deep technical details.

**2️⃣ Adopt a mental framework**

- **Process flow**: user request → page load → ad slot → RTB auction → winner’s creative → behavioural context.
- **Layered view**: (a) technology stack, (b) data & signals, (c) economic model, (d) privacy/legal constraints.

**3️⃣ Step‑by‑step reasoning**

1. *Display advertising* – ads shown on web pages or apps; target by placement or audience.
2. *RTB* – every ad impression triggers a micro‑auction in milliseconds; bidders submit bids based on the context they receive (user, page, time).
3. *Behavioural targeting* – bidders use historical browsing/interaction data to predict user intent and value of that impression.
4. Combine: In RTB, behavioural signals are packaged into “bid requests” (e.g., cookies, device ID, inferred interests). DSPs evaluate the win probability and decide a bid price = expected revenue × click‑through likelihood.
5. Winner’s creative is served; subsequent analytics feed back to improve future predictions.

**4️⃣ Avoid common pitfalls**

- Don’t conflate *contextual* vs *behavioural* targeting—RTB can use both, but behavioural adds user history.
- Don’t assume RTB guarantees higher CPMs; it depends on bid strategy and data quality.
- Ignore privacy laws (GDPR, CCPA) that limit the data you can pass in a bid request.

**5️⃣ Sanity‑check & verbalize**

- Re‑explain each component in one sentence to confirm coherence.
- Verify that the economic rationale (bid = value × probability) matches real DSP logic.
- Highlight how privacy constraints change the available behavioural signals, ensuring the explanation stays realistic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
