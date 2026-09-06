---
qid: ing_535715398d__fp__local
question: 'Q: How do you decide how many candidates to rerank?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 437
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:02:16-05:00'
sources: []
---

When a retrieval system returns an initial list of \(N\) results, the re‑ranking module does not have to touch all of them; it only needs enough candidates to approximate the true optimum under its own objective function.  

**Fundamental problem** – we want the top‑\(k\) items according to a richer model (e.g., neural ranking score) while keeping latency and memory linear in \(k\), not in \(N\). The optimal \(k\) is thus the smallest number that guarantees, with high probability, that the true best item lies within the candidate set.

**Why this must hold** – consider the distribution of scores produced by the first‑stage ranker. If the tail decays rapidly (e.g., exponential), a small \(k\) already captures most of the mass; if it is heavy‑tailed, we need larger \(k\). Mathematically, we require
\[
P(\exists\, i > k \text{ with } s_i^{(2)} > s_{(1)}^{(2)}) < \epsilon,
\]
where \(s^{(2)}\) are the second‑stage scores. Using concentration bounds on order statistics gives a principled estimate of \(k\).

**Non‑obvious insight** – the *effective* candidate size is not a function of raw ranker quality alone; it depends on the **entropy gap** between successive items. If the top few scores are nearly identical (low entropy), re‑ranking must examine more candidates to break ties; if there’s a clear “gap” the system can safely truncate earlier.

In practice, one computes the empirical cumulative distribution of first‑stage scores, selects \(k\) so that the tail probability matches the desired \(\epsilon\), and then fine‑tunes by measuring recall versus latency on validation data. This principled, entropy‑aware approach guarantees both efficiency and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
