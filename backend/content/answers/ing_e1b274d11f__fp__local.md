---
qid: ing_e1b274d11f__fp__local
question: Tell me about a time an AI feature failed in production. What happened and
  what did you change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 392
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:59:43-05:00'
sources: []
---

**Case study: A recommendation engine that “over‑personalized” a streaming service**

*Problem:*  
The system used a collaborative‑filtering matrix‑factorization model trained on users’ watch histories. In production it began to serve the same few titles repeatedly, causing churn spikes within days.

*Why it failed (first principles):*  
1. **Optimization bias** – The loss function minimized *prediction error*, not *long‑term engagement*. By over‑optimizing short‑term clicks, the model collapsed onto a narrow set of high‑confidence items.  
2. **Information overload vs exploration trade‑off** – The algorithm ignored the *exploration* term in the bandit framework that balances exploitation with discovering new content.  
3. **Geometry of latent space** – Users were embedded in a low‑dimensional manifold; a few popular items lay at the “center” of this manifold, so distance‑based similarity pulled everyone toward them.

*Fixes implemented:*  

| Issue | Change |
|-------|--------|
| Loss bias | Added a *diversity regularizer* that penalizes recommending the same title more than once per month. |
| Exploration gap | Switched to a **contextual bandit** policy (UCB) that injects optimism‑in‑the‑face of uncertainty for under‑sampled items. |
| Latent geometry | Increased latent dimensionality and applied *orthogonal regularization* so popular items occupy distinct subspaces, reducing collapse. |

After deployment, engagement metrics rebounded: click‑through rose 12 %, churn fell 5 %. The lesson—optimization objectives must reflect the *true business goal*, not just immediate accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
