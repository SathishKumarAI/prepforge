---
qid: ing_dab5bc97cc__faang__local
question: 'Explain: What We Would Do Differently — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 448
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:07:03-05:00'
sources: []
---

**Clarify**  
The interview asks how we would redesign an enterprise Retrieval‑Augmented Generation (RAG) system—one that indexes corporate data and feeds relevant snippets to a language model for answering user queries.  
Assumptions:  
- Data resides in multiple silos (docs, tickets, databases).  
- Latency < 200 ms is required for interactive chat.  
- Security/compliance must be upheld.

**Approach**  
1. **Unified ingestion pipeline** that normalizes formats and tags metadata.  
2. **Vector index with locality‑aware partitioning** to keep related vectors together.  
3. **Dynamic relevance scoring** combining BM25, semantic similarity, and business rules (e.g., policy updates).  
4. **Context‑aware prompt construction** that limits token usage while preserving answer fidelity.  
5. **Audit & explainability layer** for compliance.

**Depth**  
- Use a hybrid index: FAISS + ElasticSearch; shard by department to reduce cross‑cluster query cost.  
- Pre‑compute “hot” vectors for frequently asked topics, updating them via incremental learning every 6 h.  
- Prompt template embeds the top‑k snippets plus a short summary of policy context, keeping token budget ~1/3 of model limit.  
- Complexity: O(log N) lookup in FAISS; overall latency < 150 ms with caching.  
- Trade‑off: higher storage for duplicate vectors vs lower query time.

**Edge Cases**  
- Outdated documents → stale answers; mitigate via version tags and freshness score.  
- Ambiguous queries → fallback to policy FAQ or human escalation.  
- Security breach → data isolation per tenant and encryption at rest.

**Optimize & Communicate**  
Iterate on relevance metrics using A/B tests (e.g., click‑through vs. manual review). Explain the design by mapping user needs → ingestion → indexing → retrieval → generation, highlighting how each component satisfies latency, accuracy, and compliance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
