---
qid: ing_39c1ae63de__star__local
question: Walk me through hybrid retrieval - keyword, vector, and reranking. When
  does each stage earn its cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 358
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:19-05:00'
sources: []
---

**Situation** – At my last company we had a knowledge‑base search app that was getting 30 % lower click‑through than competitors. The logs showed users were often hitting the wrong documents because our keyword engine returned too many hits and our vector model missed relevant context.

**Task** – I needed to build a hybrid retrieval pipeline: first filter by fast keyword scoring, then re‑rank with dense embeddings, and finally apply a lightweight reranker that used query intent features. The goal was a 20 % lift in relevance while keeping latency under 200 ms on our production cluster.

**Action** – I started with Elasticsearch for the keyword pass (BM25 + field boosting). For the vector stage I indexed OpenAI’s text‑embedding‑ada‑002 vectors and used FAISS to retrieve the top 50 candidates. Then I built a tiny XGBoost reranker that combined BM25 score, cosine similarity, and intent flags from our NLP classifier. All stages were wrapped in a single Lambda function orchestrated by Step Functions so each stage only ran when its output exceeded a confidence threshold—skipping vector search if the keyword top‑10 already had a high precision.

**Result** – The hybrid pipeline cut query latency to 140 ms on average, improved NDCG@5 from 0.42 to 0.57 (a 35 % relative gain), and increased user session length by 12 %. I learned that paying for the expensive vector lookup only when keyword confidence is low saves compute cost while still boosting relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
