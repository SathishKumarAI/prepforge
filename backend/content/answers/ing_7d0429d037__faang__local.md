---
qid: ing_7d0429d037__faang__local
question: What caching strategies apply to RAG systems, and what are the invalidation
  traps?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 567
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:35:30-05:00'
sources: []
---

**Clarify**  
We’re asked which cache‑ing patterns work for Retrieval‑Augmented Generation (RAG) pipelines and where naïve invalidation can break them. I’ll assume a typical RAG stack: an embedding index, a vector store, a text retriever, and a generative model that stitches retrieved chunks into an answer.

**Approach**  
1. Identify cache boundaries: embeddings, retrieved passages, pre‑formatted prompts, and final LLM outputs.  
2. Choose strategy per boundary (LRU, write‑through, read‑only).  
3. Outline invalidation rules tied to source data changes or model updates.

**Depth**  

| Boundary | Strategy | Rationale | Invalidation Trap |
|----------|----------|-----------|-------------------|
| **Embeddings** | LRU / time‑based cache per document chunk | Embeddings change rarely; keep a “last‑seen” timestamp. | Forgetting to refresh after re‑embedding (e.g., new model version) leads to stale vectors that mis‑rank queries. |
| **Passage Retrieval** | Query‑result cache with TTL or fingerprint of query+index | Same query often appears; avoid hitting vector store. | If underlying index is updated, cached hits may return obsolete passages—must invalidate on *any* document addition/deletion. |
| **Prompt Templates** | Compile‑time cache (static strings) | Prompt formatting is deterministic. | Changing the prompt schema without clearing compiled templates causes mismatched tokenization and hallucinations. |
| **LLM Output** | Cache per query+retrieved set (content‑addressable) | LLM inference is expensive; identical inputs yield identical outputs. | If retrieved passages change, the cached answer remains; must key on passage hash. |

**Edge Cases**  
- Incremental document updates that modify only a fragment: partial invalidation of affected chunks’ embeddings.  
- Model upgrades that alter tokenization or prompt style: clear all cached prompts and LLM outputs.  
- Distributed caches across shards: ensure consistency via version tags.

**Optimize & Communicate**  
I’d start with a *content‑addressable* cache for the final answer, keyed by a hash of (query + sorted passage IDs). This gives O(1) hit rate for repeated queries while guaranteeing freshness when passages change. For embeddings and retrievals, use an LRU that evicts after a configurable TTL and listens to index‑change events. I’d document the invalidation contract (“on any document mutation, invalidate embeddings & downstream caches”) and expose it in the CI pipeline so regressions are caught early. This balances performance with correctness—critical for production RAG services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
