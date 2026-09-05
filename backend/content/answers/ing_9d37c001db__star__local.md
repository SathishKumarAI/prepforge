---
qid: ing_9d37c001db__star__local
question: 'Explain: Pitfall 7: Misunderstanding Context Windows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 322
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:42-05:00'
sources: []
---

**Situation** – In my last role I was building a chatbot for a legal‑tech startup that needed to pull relevant case law from PDFs and generate concise summaries. The team had been using GPT‑4 with a 32k token context window, assuming we could feed entire documents at once.

**Task** – My goal was to design an ingestion pipeline that let the model understand document structure without exceeding its true effective context limits, while keeping latency under two seconds per query.

**Action** – I first profiled the model’s real‑world memory usage and discovered that only about 8k tokens of useful content were actually retained after tokenization. I then implemented a hierarchical chunking strategy: split PDFs into paragraph blocks (~500 tokens), embed each block with OpenAI’s text‑embedding‑3, and store them in an approximate nearest neighbor index (FAISS). For each user query I retrieved the top 10 relevant chunks, concatenated them, and fed only that to GPT‑4 along with a concise prompt. I also added a sanity check that discarded any retrieval result exceeding 7k tokens.

**Result** – The bot’s response quality improved by 35% in manual review scores, and average latency dropped from 3.8 s to 1.9 s. We also reduced token usage per request by ~60%, cutting costs dramatically. I learned that understanding the true context window—beyond the advertised limit—is critical for efficient, scalable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
