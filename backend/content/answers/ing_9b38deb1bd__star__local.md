---
qid: ing_9b38deb1bd__star__local
question: Explain contextual retrieval. What problem does it solve, and how does late
  chunking relate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 318
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:45-05:00'
sources: []
---

**Situation**  
While leading a search‑as‑you‑type feature for our enterprise knowledge base, we noticed click‑through dropped by 32% after the first 1 kB of results. Users were overwhelmed with irrelevant snippets that didn’t match their intent.

**Task**  
I had to redesign the retrieval pipeline so that each returned document fragment was highly contextually relevant and only delivered when the user’s query fully specified what they needed, without sacrificing latency.

**Action**  
I implemented *contextual retrieval*: first a lightweight semantic encoder (sentence‑BERT) mapped every chunk of our documents into a dense vector space. When a query arrived, we fetched top‑N candidates via ANN search, then re‑ranked them by computing similarity to the full user context (including previous queries). To avoid exploding memory, I introduced *late chunking*: instead of indexing every paragraph separately from the start, we first stored whole documents as coarse chunks. Only when a query hit a document did we split it into fine‑grained sentences on demand, thus keeping the index compact and retrieval fast.

**Result**  
Click‑through rose 47%, average dwell time increased by 18 seconds, and CPU usage dropped 25% thanks to the on‑demand chunking. I learned that balancing semantic depth with operational efficiency is key in real‑world AI search systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
