---
qid: ing_81cc0315c0__star__local
question: 'Explain: RAD-O: Retrieval Augmented Decoding — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 322
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:53-05:00'
sources: []
---

**Situation**  
At my last company we were launching a conversational AI that needed to pull up-to-date legal statutes in real time. The latency of fetching the relevant documents from our knowledge base was killing user experience; each query took 1.2 s on average.

**Task**  
I had to reduce response time to under 300 ms while still ensuring the model could incorporate fresh context for every turn.

**Action**  
I implemented Retrieval Augmented Decoding (RAD) with two layers of caching. First, a **KV cache** stored key‑value pairs from the language model’s self‑attention for each token, so repeated sub‑queries reused attention weights instead of recomputing them. Second, I built a **context cache** that held pre‑retrieved document embeddings for common legal topics; when a user asked about “contract law,” the system pulled the cached embeddings and only fetched new documents if the topic drifted. We used Redis for low‑latency storage and integrated it into the decoding pipeline so the model could access both caches on the fly.

**Result**  
Latency dropped from 1.2 s to 260 ms, a 78% improvement, and we saw a 35% increase in user satisfaction scores. I learned that coupling retrieval with efficient caching turns a heavy‑weight LLM into a real‑time assistant without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
