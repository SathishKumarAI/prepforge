---
qid: ing_51d9a62b16__star__local
question: 'Q: What is the "Asymmetric Retrieval" problem?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 283
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:53-05:00'
sources: []
---

**Situation:** In a recent product sprint at my previous company we were building an internal knowledge‑base search for our support team. The dataset was a mix of structured FAQs and unstructured chat logs, and we noticed that users were repeatedly searching for the same “how‑to” queries but only getting a handful of hits from the FAQ section.

**Task:** I needed to redesign the retrieval layer so it could surface relevant content across both structured and unstructured sources while keeping latency under 300 ms per query.

**Action:** I introduced an asymmetric retrieval strategy: first, a lightweight inverted index on the FAQs (exact keyword matching) for instant hits; second, a dense vector search using Sentence‑BERT embeddings over the chat logs, but only after the FAQ lookup failed. I tuned the vector similarity threshold to 0.75 and added a cache of the top 20 vectors per user query. We also implemented an A/B test harness in Go to measure recall versus latency.

**Result:** The asymmetric approach raised overall retrieval precision from 58 % to 82 %, reduced duplicate answers by 40 %, and kept average latency at 280 ms. I learned that hybrid indexing can effectively bridge the gap between deterministic rule‑based lookup and probabilistic semantic search, especially in mixed data environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
