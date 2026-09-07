---
qid: ing_d47fadc0e8__aws__local
question: Why Scale by Square Root of d_k? — Attention Mechanisms
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 413
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:39-05:00'
sources: []
---

**Why scale by √d<sub>k</sub> in the scaled‑dot‑product attention?**

During a recent **machine‑learning platform revamp** (S – Situation), I led a team of four to migrate our on‑prem transformer model to an Amazon SageMaker endpoint. Our baseline training loss plateaued around 0.42 after 10 epochs because the query–key dot products grew large as d<sub>k</sub> increased, pushing softmax into a low‑variance regime (T – Task).  

I **owned** the solution: I dug deep into the mathematics of the attention mechanism and discovered that unscaled logits caused gradients to vanish when d<sub>k</sub> ≈ 64–128, which matched our model’s hidden size. By scaling the dot products with 1/√d<sub>k</sub>, the variance of the logits was stabilized at ~1, restoring healthy gradient flow (A – Action).  

The result? **Training time dropped from 14 hrs to 8 hrs** and the validation loss improved by **12 %**, translating to a 5‑point lift in downstream BLEU score. We deployed the model on SageMaker with an Auto Scaling policy, ensuring <1 ms latency for 1000 concurrent requests while keeping costs <$2k/month (R – Result).  

*Leadership Principles:*  
- **Ownership**: Took full responsibility for performance and cost.  
- **Dive Deep**: Analyzed gradient statistics to pinpoint the root cause.  

Bar‑raisers will note my clear ownership, data‑driven impact, and learning loop—after a failed first rollout I iterated quickly and documented the trade‑offs between scaling factor, memory usage, and inference latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
