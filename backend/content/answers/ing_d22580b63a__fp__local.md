---
qid: ing_d22580b63a__fp__local
question: 'Explain: Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 427
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:27:17-05:00'
sources: []
---

**Filtering in a publish‑subscribe system**

The *fundamental problem* is that many subscribers are interested only in a subset of the events produced by publishers. If every message were sent to all subscribers, the bandwidth and processing cost would grow linearly with the number of subscribers, which quickly becomes infeasible.

To solve this, we impose a **predicate‑based filter** on each subscription: a Boolean expression over event attributes (e.g., `type = "error" && priority > 5`). The broker must decide, for each incoming message, whether it satisfies any subscriber’s predicate. This is essentially a *decision problem* that can be viewed as an instance of **constraint satisfaction**: the message supplies values; each subscription supplies constraints; we test feasibility.

The optimal design treats this as a **geometric search** in attribute space. Each filter defines a region (often a hyper‑rectangle or a union of them). The broker builds an index—e.g., an R‑tree, interval tree, or bitmap index—so that the query “does message *m* belong to any region?” is answered in sub‑linear time. This mirrors range‑query algorithms in databases and spatial indexing.

**Non‑obvious insight:**  
Most designs focus on *how many* subscribers a broker can support, but overlook that **filter overlap** can be exploited. When two filters share common predicates (e.g., `type = "error"`), the broker can evaluate that predicate once per message and propagate the result to all overlapping subscriptions. This “shared evaluation” reduces CPU cycles dramatically, turning an otherwise linear‑time filter pass into a *logarithmic* one with respect to the number of distinct predicates rather than subscribers.

In short, filtering is not just a “drop if no match” trick; it is a constrained geometric search problem whose efficiency hinges on shared predicate evaluation and robust indexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
