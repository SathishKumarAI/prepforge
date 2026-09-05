---
qid: ing_a1e09bc823__star__local
question: 'Explain: Full-Text, Spatial, and Inverted Indexes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 315
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:25-05:00'
sources: []
---

**Situation** – At my last role I was tasked with revamping the company’s internal knowledge base so that developers could quickly find code snippets, diagrams, and design docs in a single search bar.

**Task** – The goal was to support three kinds of queries: keyword searches (full‑text), location‐based lookups within documents (spatial), and fast retrieval by exact terms or phrases (inverted). I had to choose the right indexing strategy for each type while keeping latency under 200 ms.

**Action** – I started with a Lucene‑style inverted index, mapping every token to a postings list of document IDs. For full‑text we added n‑gram filters and synonym expansion. To handle spatial queries (e.g., “find the diagram that shows the microservice layout in section 3”), I built a separate R‑tree index on bounding boxes extracted from PDF annotations. Finally, for exact phrase matching I implemented a positional inverted index that stored term offsets, enabling quick phrase lookups without scanning entire documents.

**Result** – The new search engine reduced average query time from 1.2 s to 0.18 s and increased click‑through on relevant docs by 37%. I learned how each index type trades off storage vs speed, and that combining them in a layered architecture yields the best user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
