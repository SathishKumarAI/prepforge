---
qid: ing_51ffec414d__fp__local
question: 'Explain: Interview Follow-Up Questions — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 387
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:32-05:00'
sources: []
---

**Why the interviewer asks follow‑up questions on fraud‑detection models**

Fraud is a *hidden* concept: the true label (fraud/not) never appears in the training data; we only observe proxy signals (transaction amount, device ID, etc.).  
Mathematically, we must learn \(p(y|x)\) where \(y\in\{0,1\}\) is unobserved. The model therefore optimises a *surrogate* loss (e.g., cross‑entropy on labelled samples or an unsupervised anomaly score).  

The follow‑up questions probe whether the candidate:

1. **Recognises the label noise** – without this, a high‑accuracy classifier can overfit to spurious correlations that disappear in production.  
2. **Balances precision/recall via cost‑sensitive learning** – fraud detection is an *optimization* problem with asymmetric mis‑classification costs; you must formulate it as minimizing expected loss \(E[c_{FP}P(\hat y=1|y=0)+c_{FN}P(\hat y=0|y=1)]\).  
3. **Handles concept drift** – fraud tactics evolve, so the distribution \(p(x)\) shifts. The candidate should mention online learning or periodic re‑training as a *geometric* adaptation of decision boundaries.  

A non‑obvious insight: many teams treat fraud detection like any other classification task and ignore *sample selection bias*. The observed “non‑fraud” class is itself enriched with suspicious cases that were flagged but not confirmed, leading to an inflated false‑negative rate if left unchecked. A robust interview answer should surface this subtlety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
