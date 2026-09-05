---
qid: ing_f330de4cc8__star__local
question: 'Explain: Bi-Encoder vs Cross-Encoder — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 325
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:22-05:00'
sources: []
---

**Situation** – At my last company we built an internal search for technical docs. The first-pass ranking was fine for relevance, but users complained that the top 10 hits were too generic and missed niche tutorials.  

**Task** – I had to implement a reranking step that could quickly surface the most useful documents while keeping latency under 200 ms per query.

**Action** – I compared two architectures: a **bi‑encoder** that pre‑encodes every document into a fixed vector with a transformer (using FAISS for approximate nearest neighbors), and a **cross‑encoder** that runs a joint BERT on the query–document pair at rerank time.  
I first built the bi‑encoder pipeline, which allowed instant retrieval of 1 000 candidates. Then I added a lightweight cross‑encoder (distilBERT) to re‑score only those top 10 candidates. I tuned the trade‑off by adjusting the batch size and using mixed precision on GPU, keeping latency at ~180 ms while reducing CPU load.

**Result** – After deployment, click‑through rate for the search rose from 12% to 27%, and user satisfaction scores improved by 18 points. I learned that a hybrid approach—fast bi‑encoder retrieval plus selective cross‑encoder reranking—balances speed and accuracy in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
