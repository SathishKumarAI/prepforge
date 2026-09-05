---
qid: ing_e6c5e32a8a__star__local
question: 'Explain: Hybrid retrieval: why both, and how to fuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 344
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:35-05:00'
sources: []
---

**Situation** – In my last role I was building a search engine for an e‑commerce platform that had millions of product listings and user queries. The existing keyword‑based retriever returned high recall but low precision, while the newer neural dense retriever gave better relevance on short queries but struggled with long-tail terms.

**Task** – My goal was to create a hybrid retrieval pipeline that combined both models so we could achieve higher overall relevance without sacrificing speed, and then design a fusion strategy to merge their ranked lists into a single, coherent result set.

**Action** – I first benchmarked each retriever on the same query log, noting that the keyword model had 78 % recall but only 55 % precision at top‑10, whereas the dense model hit 65 % precision and 70 % recall. To fuse them, I implemented a weighted linear combination of their relevance scores (λ=0.6 for keyword, 0.4 for dense) and introduced a query‑type detector that shifted λ when the query length exceeded 3 words. I also added a small re‑ranking step using a lightweight BERT model trained on click‑through data to correct any residual ranking errors.

**Result** – After deploying the hybrid system, precision@10 rose from 55 % to 68 %, recall@20 increased by 12 %, and latency stayed under 200 ms per request. The exercise taught me that blending complementary retrieval signals—exact match plus semantic similarity—and carefully tuning their fusion weights can dramatically improve user satisfaction while keeping performance in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
