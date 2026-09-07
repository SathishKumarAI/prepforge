---
qid: ing_302330211b__faang__local
question: 'Explain: Non-functional — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 472
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:36:22-05:00'
sources: []
---

**Clarify**

The interviewer wants an explanation of *semantic search* as a **non‑functional requirement (NFR)**—i.e., how it impacts system quality attributes rather than user stories or data models.  
Assumptions: we’re building a search service for a large text corpus, with typical functional goals (relevance, speed) already defined.

**Approach**

1. Define the NFR domain (performance, scalability, usability).  
2. Map semantic search to those domains.  
3. Discuss trade‑offs and measurement strategies.

**Depth**

| NFR | Semantic Search Impact | Mitigation / Metrics |
|-----|------------------------|----------------------|
| **Performance** | Embedding generation & similarity lookup are compute‑heavy; latency ↑. | GPU acceleration, approximate nearest neighbor (FAISS), batching. Measure query latency (p95). |
| **Scalability** | Index size grows with embeddings; storage & memory pressure. | Shard the embedding index, use compressed vectors, auto‑scale GPU nodes. Track throughput per node. |
| **Reliability** | Model drift or corruption can degrade relevance. | Continuous monitoring of similarity scores, model versioning, fallback to keyword search. Log error rates. |
| **Usability / Accessibility** | Users expect “semantic” results; unclear failures hurt trust. | A/B test result quality, collect user feedback, provide explainable similarity explanations. |

**Edge Cases**

- Zero‑shot queries (no close embeddings) → fall back to keyword ranking.  
- Out‑of‑vocabulary terms → use subword embeddings or prompt‑based retrieval.  
- Distributed index inconsistencies → eventual consistency guarantees.

**Optimize & Communicate**

Highlight that semantic search is a *quality* lever: it improves relevance but adds compute and storage costs. Trade‑offs between embedding dimensionality, latency, and index size should be quantified early. Explain the decision to use an ANN index (FAISS) for sub‑millisecond lookups, and how we’ll instrument latency dashboards so that any regression triggers an alert. This structured narrative demonstrates clear problem framing, technical depth, and a focus on measurable outcomes—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
