---
qid: ing_85d6c92fc9__fp__local
question: 'Explain: Um how much you personalize the search — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 445
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:49:35-05:00'
sources: []
---

**Why Google personalizes search**

At its core, a search engine is an *information‑retrieval* system: given a query *q*, it must rank documents *d* by relevance *R(d|q)*.  
Without any user context, the only signal we have is the content of *q* and the static link structure. That yields a *generic* ranking \( \hat{R}(d|q) \).  

But real users are heterogeneous: their past clicks, location, device, and even recent interactions encode a latent vector **u** that biases which documents satisfy them.  
Formally we want
\[
R(d|q,\mathbf{u}) = \mathbb{E}_{\theta}\!\left[\,P(\text{click on } d \mid q, \mathbf{u}, \theta)\right],
\]
where \(\theta\) captures the unobserved relevance model.  
Personalization is thus an *online Bayesian update*: each click refines our posterior over \(\theta\), shrinking uncertainty about which documents a particular user will value.  

**Why it must be fast and scalable**

We cannot afford to recompute a full ranking for every query-user pair from scratch; the system must serve millions of queries per second.  
Hence Google trains a *global* relevance model once, then applies lightweight user‑specific bias terms (e.g., a learned vector added to document embeddings). This is an instance of *parameter sharing* in deep learning: most parameters are shared across users, while only a tiny personal subspace varies.

**Non‑obvious insight**

Personalization is not just about “show me what I liked before”; it also improves *cold‑start* relevance.  
When the system has no user history, it can treat the user vector as an *average* over the entire population—effectively a Bayesian prior that regularizes predictions toward the global optimum.  
Thus personalization simultaneously sharpens individual experience and stabilizes performance for unseen users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
