---
qid: ing_6c9e3b82ca__fp__local
question: 'Explain: Design retrieval for a multi-tenant SaaS product where users have
  different document permissions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 448
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:19-05:00'
sources: []
---

**Why a permission‑aware retrieval engine is unavoidable**

In a multi‑tenant SaaS, each tenant owns a private corpus plus shared resources. The *fundamental problem* is: given a query vector **q**, we must return documents that are both *relevant* (high similarity to **q**) and *permitted* (the querying user has access). This is a constrained optimization:

\[
\max_{d \in C}\; \langle q, v_d\rangle \quad \text{s.t.}\; d \in \mathcal{A}_u
\]

where \(C\) is the global collection, \(v_d\) the document embedding, and \(\mathcal{A}_u\) the user’s access set.  
If we ignore the constraint, a tenant may see another’s data—violating confidentiality and regulations. Thus the retrieval pipeline must *intertwine* similarity scoring with permission filtering at every stage.

**Design principle: hierarchical indexing**

1. **Tenant‑level index** – build an ANN index (IVF, HNSW) per tenant to localise search.
2. **Shared‑resource index** – a global index for public documents, tagged with tenant masks.
3. **Permission mask** – store each document’s access bitmap; at query time intersect the candidate set with the user’s mask.

Because ANN algorithms prune aggressively, the intersection can be performed *after* retrieving the top‑k candidates, keeping latency low while guaranteeing security.

**Non‑obvious insight**

Most implementations apply a blanket “deny” filter after retrieval. However, by **encoding permissions into the index itself**, we avoid generating forbidden candidates entirely. This reduces memory traffic and cache misses—critical at scale—and ensures that even malicious queries cannot trigger a denial‑of‑service via expensive post‑filtering.

In short, the system must solve an *optimization with hard constraints*, and the most efficient way is to weave those constraints into the index structure rather than treating them as a downstream filter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
