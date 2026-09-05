---
qid: ing_0614ea3a01__star__local
question: What query understanding techniques would you apply before retrieval, and
  when is each worth it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 352
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:40:56-05:00'
sources: []
---

**Situation** – While leading the search‑as‑you‑type feature for a fintech app, we saw a 25 % drop in click‑through after a new regulatory update that added legal jargon to user queries.

**Task** – I had to improve relevance before the document retrieval step so the system could surface up‑to‑date compliance guides without overloading the backend with too many candidates.

**Action** – First, I implemented an intent classifier using FastText to detect “information‑seeking” vs. “transactional” queries; for the former we routed to a dedicated knowledge base. Next, I added entity linking with spaCy’s built‑in NER and a custom gazetteer of legal terms to normalize entities (e.g., “GDPR” → “General Data Protection Regulation”). For ambiguous short queries, I used query expansion via Word2Vec embeddings trained on the company’s corpus to add synonyms like “privacy law.” Finally, I set up a fallback rule that only triggers full‑text BM25 retrieval when the confidence scores from all three steps fall below 0.3.

**Result** – The combined approach lifted precision@10 by 18 % and reduced server load by 35 %. I learned that intent filtering is worth it for high‑volume traffic, entity linking shines with domain‑specific terminology, and semantic expansion helps when user queries are terse but the content space is dense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
