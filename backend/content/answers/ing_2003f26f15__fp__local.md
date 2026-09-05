---
qid: ing_2003f26f15__fp__local
question: 'Explain: Example — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 361
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:09-05:00'
sources: []
---

**Event‑Sourcing as a Data‑Lineage Principle for Machine‑Learning Pipelines**

At its core, a learning system transforms raw observations into predictions. The *fundamental problem* is that intermediate artefacts—feature vectors, model checkpoints, evaluation metrics—must be reproducible and audit‑able while scaling to millions of updates.  
Event sourcing resolves this by **recording every atomic state change as an immutable event** (e.g., “user clicked ad,” “model 1.2 trained on batch 42”). Instead of persisting a snapshot of the current feature matrix or model weights, we persist the *sequence* of events that produced them.  

Why must it work this way?  
- **Causal reconstruction:** Any state is the deterministic composition of its preceding events; replaying guarantees exact reproducibility without storing large intermediate artefacts.  
- **Optimisation‑friendly provenance:** Gradients or loss values can be attached to events, enabling fine‑grained credit assignment across distributed training steps.  
- **Information‑theoretic compression:** Since events are minimal (e.g., indices and deltas), the entropy of the stored log is lower than that of full snapshots, yet all necessary information remains.  

A subtle insight often overlooked: *event stores naturally implement a form of “backward‑compatibility” for models.* If you add a new feature extractor, replaying past events with the updated projection automatically yields new representations without re‑labeling or re‑engineering historical data. This gives event sourcing an edge over snapshot‑only systems in continual learning and federated settings where data is immutable but the model evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
