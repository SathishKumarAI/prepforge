---
qid: ing_85ff31837e__fp__local
question: 'Q: How do you handle multi-tenant data security in RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 514
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:49:52-05:00'
sources: []
---

**Why the problem exists**

In Retrieval‑Augmented Generation (RAG) a model reads a *retrieved* document set and then generates an answer.  
For multi‑tenant systems the *same* infrastructure must keep tenant A’s data opaque to tenant B, yet still allow efficient retrieval across all tenants. The naïve approach—separate indexes per tenant—fails because it ignores two core constraints:

1. **Index scalability**: the index size grows linearly with tenants; linear scans become prohibitive.
2. **Semantic leakage**: embeddings are high‑dimensional vectors that can be reverse‑engineered to reveal content.

Thus a solution must *partition* data in a way that preserves privacy without destroying semantic utility or incurring linear overhead.

---

### The principled design

1. **Tenant‑aware hashing (HNSW + mask)**  
   Build a single HNSW graph but attach a *tenant ID mask* to each node’s vector:  
   \[
   v_{\text{masked}} = v \odot M_{t}
   \]
   where \(M_t\) is a binary mask that zeroes out dimensions reserved for other tenants.  
   This keeps the global graph dense (no linear growth) while guaranteeing that any nearest‑neighbor query can only traverse edges whose masks overlap with the query tenant.

2. **Differential‑privacy noise on embeddings**  
   Add calibrated Laplace noise to each vector before masking.  
   This ensures *information‑theoretic* secrecy: even if a malicious tenant obtains the masked vector, they cannot reconstruct the original text beyond an \(\epsilon\)-DP bound.

3. **Secure retrieval protocol**  
   The query is first encrypted with the tenant’s public key; only the server can decrypt the mask to filter neighbors.  
   Because the HNSW structure is shared, the search cost remains \(O(\log N)\) regardless of tenant count.

---

### Non‑obvious insight

The mask trick turns a *privacy* requirement into a *data‑structural* one: by embedding privacy directly into the graph topology we avoid costly per‑tenant re‑indexing or on‑the‑fly partitioning. This dual use of masking simultaneously enforces tenant isolation and preserves search efficiency, a synergy that most designs overlook in favor of separate indexes or heavy encryption schemes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
