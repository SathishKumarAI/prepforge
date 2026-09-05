---
qid: ing_f9df6442d6__star__local
question: How do chunk size and overlap affect retrieval quality, and what numbers
  would you start with?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 306
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:15-05:00'
sources: []
---

**Situation:** In my last role I was building a document‑search feature for an internal knowledge base that served over 5,000 employees. The search had to return relevant answers from PDFs and long reports, but our initial queries were returning too many irrelevant snippets.

**Task:** My goal was to tune the chunking strategy—specifically the size of each text segment and how much they overlapped—to maximize precision while keeping latency low for real‑time responses.

**Action:** I started with a 2,000‑character chunk size (≈3–4 sentences) and a 200‑character overlap. Using Elasticsearch’s “flattened” analyzer, I measured mean reciprocal rank (MRR). After iterating, I reduced the chunk to 1,500 characters and increased overlap to 300 characters; this captured sentence boundaries better and preserved context across splits. I also added a lightweight caching layer for frequently queried segments to keep response times under 200 ms.

**Result:** The final configuration raised MRR from 0.42 to 0.68—an 62% improvement—and reduced the number of false positives by 35%. I learned that moderate overlap is essential when chunk boundaries cut through sentences, and that a smaller chunk size improves relevance without hurting performance if latency constraints are respected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
