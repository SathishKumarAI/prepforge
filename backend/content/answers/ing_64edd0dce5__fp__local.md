---
qid: ing_64edd0dce5__fp__local
question: 'Explain: Read-only enforcement & row-level security - defence in depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 481
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:36-05:00'
sources: []
---

**Read‑only enforcement & row‑level security – a defence‑in‑depth strategy**

At its core, data access is an *information‑theoretic* problem: we want to maximise the useful information that legitimate users can extract while minimising the leakage available to adversaries.  
The simplest constraint is **read‑only** (RO). In relational terms this means “no `INSERT`, `UPDATE` or `DELETE` privileges”. Formally, a RO policy defines a partial order on operations:  
\[
\text{Read} \;\leq\; \text{Write}
\]
and enforces the lower bound. By cutting off the upper edge of the lattice we eliminate all *state‑changing* side channels—no attacker can alter audit trails, inject malicious rows, or pivot through cascading foreign keys.

However, RO alone leaves a *semantic* leak: any row that matches a user’s predicate is still visible. Row‑level security (RLS) slices the relation into disjoint “views” \(V_u\) per principal \(u\), ensuring that for all rows \(r\in R\),
\[
r \in V_u \;\Leftrightarrow\; \text{policy}(u,r)=\text{TRUE}
\]
This is a *conditional independence* constraint: the probability of observing a row given the user’s identity is either 0 or 1. It reduces the adversary’s posterior distribution over sensitive attributes to a point mass, eliminating inference even from aggregated statistics.

**Non‑obvious insight:**  
RLS can be *implemented as a transparent filter* in the query planner rather than an extra join or view materialisation. Because the planner rewrites `SELECT * FROM T` into `SELECT * FROM T WHERE policy(user_id, id)`, it preserves index locality and cache hit rates. This subtle optimisation turns what could be a quadratic blow‑up (filtering rows after full scans) into linear time, keeping defence in depth without sacrificing performance.

In short, read‑only removes all mutable leakage channels; row‑level security then collapses the observable state space to the minimal set consistent with policy, yielding an information‑theoretically optimal protection layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
