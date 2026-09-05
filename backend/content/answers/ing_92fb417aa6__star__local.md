---
qid: ing_92fb417aa6__star__local
question: 'Explain: Retrieving a Context Window Around a Sentence'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:56-05:00'
sources: []
---

**Situation** – In my last role I built an NLP pipeline for a legal tech startup that needed to extract clauses from contracts. The system had to surface the surrounding paragraphs of any sentence flagged as “confidential” so attorneys could review context without scanning whole documents.

**Task** – My goal was to design a fast, memory‑efficient routine that would retrieve a 200‑token window (100 tokens before and after) around each target sentence while handling PDFs converted to plain text. The pipeline had to run in under two seconds per contract on our production servers.

**Action** – I first tokenized the entire document with spaCy’s `nlp` model, storing offsets of every sentence start index. For each flagged sentence I calculated its byte offset and then sliced a buffer from the pre‑computed token list, padding with sentinel tokens if at the beginning or end. To avoid re‑tokenizing, I cached the token array per file in Redis and used a simple LRU policy to keep memory low. I also wrapped the extraction in a coroutine so multiple contracts could be processed concurrently.

**Result** – The context window extractor reduced the average processing time from 5 s to 1.8 s per contract, boosting throughput by ~70%. Accuracy improved because attorneys now saw full clause context, cutting manual review time by 40 hours a month. I learned how careful offset bookkeeping and caching can turn a heavy NLP task into a real‑time service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
