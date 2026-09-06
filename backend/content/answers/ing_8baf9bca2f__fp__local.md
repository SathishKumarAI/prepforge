---
qid: ing_8baf9bca2f__fp__local
question: 'Explain: Step 5: Message Creation and Formatting — Design Notification
  Service | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 404
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:02:08-05:00'
sources: []
---

### Step 5: Message Creation & Formatting – Why It Matters

At the heart of any notification system lies a **message generator** that turns raw events into user‑facing payloads.  
From first principles this component solves two intertwined problems:

| Problem | Fundamental Insight |
|---------|---------------------|
| *What to say?* | **Information bottleneck**: an event may contain dozens of fields, but the user can only process ~4–5 bits per second. We must compress the data while preserving relevance. |
| *How to say it?* | **Human‑centered encoding**: the same information can be conveyed with different tones or formats (e.g., “Your order shipped” vs. “🚚 Your package is on its way”). The choice affects engagement, which is a measurable utility function. |

Thus, message creation must:

1. **Select salient attributes** by maximizing mutual information between the event and the user’s action intent.
2. **Apply template‑based or ML‑generated rendering** that satisfies a *semantic fidelity* constraint (the rendered text must be logically equivalent to the chosen attributes).
3. **Embed contextual metadata** (priority, channel, locale) in a machine‑readable envelope for downstream routing.

A non‑obvious insight: **formatting is not merely cosmetic; it modulates the effective bandwidth of the communication channel.** For example, using emojis or concise phrasing reduces cognitive load, effectively increasing the *information rate* and leading to higher click‑through rates. Ignoring this can turn a perfectly functional system into one that feels clunky and loses users.

In summary, Step 5 transforms raw events into a compressed, context‑aware signal that balances informativeness with human perception—an optimization of both data and design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
