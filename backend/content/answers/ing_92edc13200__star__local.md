---
qid: ing_92edc13200__star__local
question: 'Explain: Indexing — How Do Search Engines Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 303
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:48-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a new document‑search feature for our compliance platform. Users needed to find relevant policy PDFs within seconds, but our initial full‑text scan on every query was slamming the CPU and causing latency spikes during peak hours.

**Task:**  
I had to design an indexing solution that would let us retrieve documents in under 200 ms while keeping memory usage below 4 GB, all without rewriting the existing search API.

**Action:**  
I built a two‑layer inverted index using Lucene’s Java library. First, I tokenized each PDF with Apache Tika, normalizing case and removing stopwords. Then, for every term I stored postings lists of document IDs and term frequencies, compressed with Golomb coding to reduce space. To support partial matches, I added a n‑gram suffix array so “confidentiality” could be found via “confide”. Finally, I implemented an LRU cache for the most frequently queried terms in Redis, which cut disk seeks dramatically.

**Result:**  
The new index reduced average query latency from 1.2 s to 120 ms and lowered CPU load by 70%. We handled a 3× traffic surge during regulatory audits without scaling infrastructure. This project taught me that thoughtful data structures—like inverted indexes with compression—are the backbone of efficient search engines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
