---
qid: ing_488df5cc71__fp__local
question: 'Explain: Step 3: Design core components — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 412
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:40-05:00'
sources: []
---

**Step 3: Design Core Components – why it’s the linchpin of system‑design interviews**

At its heart, a large‑scale ML service is an *information pipeline*: data → feature extraction → model inference → decision delivery. The interview asks you to break this pipeline into modular, composable units that can be scaled independently.

1. **Identify functional boundaries** – Each boundary should encapsulate a single source of change (e.g., retraining vs. serving). This mirrors the *Open/Closed Principle* in software engineering: we add new behavior without touching existing code.
2. **Decouple via contracts** – Define clear APIs (REST, gRPC) that hide implementation details. Decoupling turns the system into a set of *black boxes*, allowing each to be optimized for latency, throughput, or consistency independently—exactly what distributed systems theory dictates.
3. **Model resource constraints as a multi‑objective optimization problem** – Latency, cost, and accuracy are competing objectives. By treating each component’s performance as a variable in an objective function (e.g., minimize `α·latency + β·cost - γ·accuracy`), you can reason about trade‑offs quantitatively rather than heuristically.
4. **Leverage “eventual consistency” where possible** – For non‑critical updates (e.g., feature store refreshes) you can relax strict consistency, reducing coordination overhead per CAP theorem.

*Non‑obvious insight:* Most candidates treat the model inference layer as a monolith. In practice, **feature extraction and model serving should be split into microservices**, because the former is data‑heavy and can be batched offline, while the latter demands low latency. This separation lets you scale GPU clusters for training without impacting real‑time inference traffic—a subtle but crucial architectural choice that often earns extra interview points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
