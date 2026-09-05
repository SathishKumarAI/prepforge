---
qid: ing_888c09b2e8__star__local
question: 'Explain: Why BM25 Still Matters — Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:49-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the search experience for a large e‑commerce catalog that had over 2 million product listings. The existing semantic retrieval model based on BERT embeddings was great at understanding intent but it struggled with exact phrase matching, causing many relevant products to rank too low.

**Task:**  
I needed to build a hybrid system that leveraged the strengths of both models: contextual relevance from embeddings and precise keyword matching from a classic IR algorithm. The goal was to boost top‑10 click‑through rate by at least 12 % while keeping latency under 200 ms per query.

**Action:**  
I implemented BM25 as a re‑ranking layer. First, the BERT model generated an initial candidate set (top 50). Then I computed BM25 scores on the product titles and descriptions using Apache Lucene, normalizing for field length and term frequency. The final score was a weighted sum: 0.7 × BERT similarity + 0.3 × BM25. I tuned the weights via A/B testing and added a small cache layer to keep latency low.

**Result:**  
After deployment, the top‑10 click‑through rate increased by 14 %, exceeding our target. Query latency stayed below 180 ms on average. I learned that classic IR techniques like BM25 still provide indispensable precision in real‑world retrieval, especially when combined thoughtfully with modern contextual models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
