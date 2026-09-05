---
qid: ing_447243f5cd__star__local
question: 'Explain: A customer 10x''d their indexed documents and reports answer quality
  "got noticeably worse." Drive the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 318
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:51-05:00'
sources: []
---

**Situation** – A SaaS client had just expanded their document corpus from 1 M to 10 M indexed PDFs for an internal Q&A bot. After the roll‑out, users complained that answer relevance dropped; precision at top‑3 fell from 78% to 42%.  

**Task** – I needed to pinpoint why scaling hurt quality and restore or improve precision while keeping latency under 200 ms.

**Action** – First, I compared vector similarity distributions pre‑ and post‑scale using Faiss index statistics. The new embeddings were more densely packed, causing nearest‑neighbour noise. I re‑tuned the retriever: switched to IVF+PQ with 256 lists, added a cosine‑similarity reweighting layer, and introduced a short‑term caching of high‑confidence vectors. Next, I ran an A/B test on a sample query set, measuring recall@10 and latency. Finally, I implemented a dynamic threshold that backs off the number of retrieved docs when the cosine score drop exceeds 0.15.

**Result** – Precision at top‑3 rose to 72%, matching pre‑scale levels; latency stayed below 190 ms for 95% of queries. The investigation taught me that scaling embeddings often compresses vector space, so proactive index tuning and adaptive thresholds are essential to maintain QA quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
