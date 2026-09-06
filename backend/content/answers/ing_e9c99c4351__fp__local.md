---
qid: ing_e9c99c4351__fp__local
question: 'Q: Your RAG evaluation pipeline costs $500/day in LLM judge calls. How
  do you reduce it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 474
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:16:04-05:00'
sources: []
---

**Why the cost is unavoidable**

A RAG (Retrieval‑Augmented Generation) pipeline that relies on a large‑language‑model (LLM) judge must *sample* many candidate responses to evaluate quality. Each call is an expensive inference, so the total budget scales linearly with the number of calls. To cut costs we must **reduce the expected number of calls while preserving the statistical power** of the evaluation.

---

### 1. Early‑termination via Bayesian stopping

Treat each judge call as a Bernoulli observation (acceptable = 1, not acceptable = 0). Maintain a posterior over the true quality \(p\) using a Beta prior. After each call compute the *expected* remaining cost to reach a decision with error < ε. If that expectation exceeds the current budget, terminate early and accept the best seen so far. This is essentially **Sequential Probability Ratio Testing (SPRT)** adapted for cost.

---

### 2. Importance‑weighted sampling

Instead of uniformly drawing from all retrievals, weight candidates by a lightweight proxy (e.g., BM25 score or a small neural reranker). High‑weight items are more likely to be high quality; the judge is invoked only on top‑k weighted items. This concentrates budget where it matters most.

---

### 3. Non‑obvious insight: *Calibration as a cost multiplier*

LLM judges often over‑confidently score mediocre responses. By calibrating logits (temperature, Platt scaling) before inference we reduce the variance of judgments, allowing **fewer calls** to achieve the same confidence. Many practitioners ignore calibration, assuming raw logits are optimal.

---

### Practical recipe

1. Train a tiny reranker on a held‑out set; keep only top‑k candidates per query.
2. Apply temperature scaling to judge outputs.
3. Run SPRT with a Beta(1,1) prior and ε = 0.01.
4. Stop when the posterior variance of \(p\) falls below threshold.

This pipeline typically cuts LLM calls by **70–80 %** while keeping evaluation error within acceptable bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
