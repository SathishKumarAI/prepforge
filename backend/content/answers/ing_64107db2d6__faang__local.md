---
qid: ing_64107db2d6__faang__local
question: 'Explain: Sources — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 453
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:37:06-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of the “Sources” feature in **Glean**, an internal knowledge‑search platform used at companies like Meta. I’ll assume the interviewer wants to hear what sources are, how they’re configured, and why they matter for search relevance.

---

**Approach**  
1. Define *sources* as data repositories that Glean ingests (e.g., Confluence pages, GitHub repos, email).  
2. Explain the ingestion pipeline: connectors → canonicalization → indexing.  
3. Highlight how source metadata (owner, permissions, freshness) feeds ranking and filtering.

---

**Depth**  
- **Connector types**: pre‑built (Slack, Salesforce) vs custom via REST/GraphQL.  
- **Ingestion frequency**: real‑time push or scheduled pull; incremental updates using change‑detection APIs.  
- **Canonicalization**: deduplication across sources; content hashing to avoid duplicate hits.  
- **Indexing**: tokenization, embedding generation (e.g., BERT‑based), and vector storage in a distributed search cluster.  
- **Permissions**: source‑level ACLs map to user roles; Glean enforces read‑access before returning results.  
- **Ranking signals**: recency from source metadata, source authority score, user interaction history.

---

**Edge Cases**  
- *Conflicting permissions*: a document appears in multiple sources with different ACLs—Glean merges the most restrictive set.  
- *Stale connectors*: if a source’s API changes, ingestion fails; need graceful degradation and alerting.  
- *Large binary files*: skip or store only metadata to avoid index bloat.

---

**Optimize & Communicate**  
To improve relevance, we can introduce *source weighting*—allow admins to boost or demote sources during query time. For production, monitor ingestion lag and cache embeddings for frequently accessed docs. I’d conclude by emphasizing that a well‑managed source layer is the backbone of Glean’s ability to surface accurate, timely information across an organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
