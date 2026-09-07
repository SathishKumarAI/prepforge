---
qid: ing_bb818848ad__aws__local
question: 'Explain: Functional — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 403
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:45-05:00'
sources: []
---

**Functional – Semantic Search**

*Situation*: In my last role I led a project to replace a keyword‑based search for our e‑commerce catalog (≈ 12 M SKUs). The team’s goal was to improve conversion by surfacing more relevant products when users typed ambiguous queries (“wireless”).

*Task*: Design a semantic search pipeline that could ingest product titles, descriptions, and user reviews, rank results by intent similarity, and serve under 200 ms latency for 10k QPS.

*Action*:  
- **Data‑layer**: Ingested all text into an Amazon OpenSearch domain with the `text_semantic` analyzer (BERT‑based embeddings).  
- **Feature‑engineering**: Trained a fine‑tuned Sentence‑Transformers model on our own review corpus, stored vectors in DynamoDB for quick lookup.  
- **Query‑time**: Built a Lambda@Edge function that first performed an approximate nearest‑neighbor search (FAISS) over the vector store, then merged results with OpenSearch relevance scores.  
- **Scalability/Cost**: Used Auto Scaling on OpenSearch and provisioned burst capacity; cost dropped 35 % vs the legacy cluster by eliminating full‑text replicas.  
- **Result**: A/B test showed a 12 % lift in add‑to‑cart rate, translating to $1.8 M incremental revenue per quarter.

*Learning*: I realized early that embedding quality matters more than index size; iteratively refining the model reduced false positives by 18 %.  

> **Leadership Principles**: *Customer Obsession* (delivering a better search experience), *Ownership* (owning the end‑to‑end pipeline), *Dive Deep* (profiling latency and cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
