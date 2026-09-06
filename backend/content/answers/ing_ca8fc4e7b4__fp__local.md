---
qid: ing_ca8fc4e7b4__fp__local
question: 'Explain: Optimal Candidate Count — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 448
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:11:20-05:00'
sources: []
---

**Optimal Candidate Count – Reranking Strategies**

When a retrieval or generation system produces *k* candidates, the goal is to choose the best one with minimal cost. The fundamental problem is: **maximize expected reward while minimizing computational budget**.  
Let \(R_i\) be the (unknown) reward of candidate \(i\), and let \(\hat{R}_i\) be an inexpensive proxy score from a lightweight model. We must decide how many candidates, \(k^\*\), to generate before applying a costly reranker.

From decision theory, the *value of information* for each extra candidate is  
\[
V(k)=E[\max_{1\le i\le k} R_i]-E[\max_{1\le i\le k-1} R_i].
\]
If \(V(k)\) falls below a cost threshold (e.g., GPU time per token), we stop. Since the reward distribution of top‑ranked candidates is heavy‑tailed, *sampling variance* dominates for small \(k\). Thus, an optimal strategy often uses **adaptive sampling**: start with a modest pool, evaluate variance; if high, increase \(k\) until the marginal gain per added candidate drops below cost.

A non‑obvious insight: *ranking order matters*. If we sort candidates by \(\hat{R}_i\) before reranking, the expected maximum reward after the expensive reranker is **higher** than if we rerank in random order. This arises because the cheap score captures a monotone transformation of the true reward distribution’s tail; thus early filtering concentrates probability mass where the expensive model can act most effectively.

In practice, one sets a *budget‑aware* \(k^\*\) via a simple threshold on \(V(k)\), and always pre‑sort by \(\hat{R}\). This guarantees that each reranker call is justified, yielding optimal performance under fixed resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
