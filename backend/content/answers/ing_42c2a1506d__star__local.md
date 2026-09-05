---
qid: ing_42c2a1506d__star__local
question: 'Explain: Hybrid retrieval & reranking — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:05-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an internal knowledge‑base chatbot for a multinational consulting firm that had over 120 TB of unstructured documents and a legacy search engine that returned irrelevant results during client briefings.

**Task** – My goal was to create a “Hybrid Retrieval & Reranking” system that could surface the most contextually relevant passages in under 800 ms, while keeping the cost per query below $0.01 for the cloud provider.

**Action** – I first used ElasticSearch with BM25 scoring to fetch the top‑10 documents based on keyword overlap. Then I fed those snippets into a lightweight transformer (DistilBERT fine‑tuned on the firm’s FAQ corpus) that generated similarity scores relative to the user query. The reranker applied a learned weighting scheme: 0.6 for BM25 rank, 0.4 for semantic relevance, and added a penalty for duplicate content across documents. I wrapped this pipeline in an async Lambda function with caching of embeddings to stay under budget.

**Result** – User satisfaction scores rose from 68 % to 92 %, average response time dropped from 1.5 s to 0.75 s, and the per‑query cost fell to $0.006. I learned that blending sparse retrieval with dense reranking yields a sweet spot between speed, relevance, and cost in enterprise RAG scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
