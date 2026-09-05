---
qid: ing_54e5f60e93__star__local
question: 'Explain: F7: Catastrophic forgetting on rarely-seen tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 294
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:44-05:00'
sources: []
---

**Situation** – While working on a continual learning pipeline for an autonomous drone fleet, I noticed that after training on new navigation scenarios, the model’s performance dropped by over 40 % on older, rarely‑visited terrains like snowy slopes.

**Task** – I had to devise a strategy that preserved knowledge of those low‑frequency tasks while still allowing rapid adaptation to fresh data streams.

**Action** – I implemented Elastic Weight Consolidation (EWC) with a small replay buffer. First, I computed the Fisher information matrix on the old datasets to identify critical weights. Then, during each fine‑tuning session, I added a quadratic penalty that restrained those important parameters from drifting too far. Simultaneously, I sampled a handful of past examples into a reservoir buffer and performed joint mini‑batches so the network never forgot exact patterns. I tuned λ (regularization strength) via Bayesian optimization to balance retention versus plasticity.

**Result** – After three training cycles, accuracy on the snowy terrain rose from 58 % to 94 %, while new scenario performance improved by 12 %. The system now generalizes without catastrophic forgetting, and I learned that combining EWC with a lightweight replay buffer is an effective trade‑off for edge devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
