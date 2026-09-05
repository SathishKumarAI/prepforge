---
qid: ing_b35b48a5e7__star__local
question: 'Explain: Transforming Ads Personalization with Sequential Modeling and
  Hetero-MMoE'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 382
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:39-05:00'
sources: []
---

**Situation** – At a mid‑size e‑commerce platform we were seeing a 12 % drop in click‑through rates (CTR) for our display ads after a major site redesign. The existing model was a static MMoE that only used user demographics and last‑clicked items, so it couldn’t capture the evolving interests of shoppers during a session.

**Task** – Build an end‑to‑end system that boosts CTR by 15 % while keeping inference latency under 5 ms per ad request on our edge servers.

**Action** – I first engineered a sequential feature extractor: a lightweight Transformer encoder that ingests the last 10 interactions (clicks, views, dwell time) and outputs a context vector. This vector feeds into a Heterogeneous Multi‑Task MMoE layer where each expert is trained on a different downstream signal (CTR, conversion, average order value). I added a gating network conditioned on both user profile and session context to dynamically weight experts per request. The entire stack was built in PyTorch, converted with TorchScript, and deployed behind our existing ad‑serve API. During A/B testing we also introduced a real‑time feature store that refreshes every minute to keep the model up‑to‑date.

**Result** – The new system lifted CTR by 18 % (from 4.8 % to 5.6 %) and conversion rate by 9 %. Latency stayed below 4 ms on average, satisfying our SLA. I learned that blending sequential embeddings with hetero‑MMoE lets you capture both short‑term dynamics and long‑term preferences without exploding model size—critical for low‑latency ad serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
