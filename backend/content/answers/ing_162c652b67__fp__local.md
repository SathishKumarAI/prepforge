---
qid: ing_162c652b67__fp__local
question: 'Explain: Customers who viewed this item also viewed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 448
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:40-05:00'
sources: []
---

**Why “Customers who viewed this item also viewed” works**

At its core the system solves a *similarity inference* problem: given an item *i*, we want to predict which other items *j* will be attractive to the same audience that interacted with *i*.  
The fundamental data are implicit feedback logs—clicks, page‑views, dwell time. For each user *u* we build a binary vector \(x_u\) over items: \(x_{ui}=1\) if *u* viewed item *i*, 0 otherwise. The problem reduces to estimating the probability that two items co‑occur in users’ view vectors:

\[
P(j \mid i)=\frac{\sum_u x_{ui}x_{uj}}{\sum_u x_{ui}}
\]

This is simply the *co‑occurrence* frequency normalized by how often *i* appears. It arises naturally from a maximum‑likelihood estimate of a sparse binary matrix factorisation under a Bernoulli likelihood—each view is an independent Bernoulli trial conditioned on item popularity.

**Underlying principle**

The method exploits **collaborative filtering**: users act as latent similarity anchors. Items that appear together in many user vectors share a high *pointwise mutual information* (PMI) with each other, indicating they belong to the same semantic cluster. The PMI‑based score is equivalent to the *log‑likelihood ratio* of observing both items versus independently.

**Non‑obvious insight**

Many think this is just “popular next item” logic. In fact, because the denominator normalises by view counts of *i*, it automatically down‑weights ubiquitous items (e.g., a generic category page). Thus, the algorithm highlights *contextual* associations—items that co‑occur more than chance—rather than sheer popularity. This subtle adjustment turns a raw frequency table into a powerful recommendation signal without any model training or side information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
