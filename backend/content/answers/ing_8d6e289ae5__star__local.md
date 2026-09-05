---
qid: ing_8d6e289ae5__star__local
question: 'Explain: Context vs. Memory Engineering in Agentic AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 315
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:34-05:00'
sources: []
---

**Situation** – While leading a prototype for an autonomous customer‑support chatbot at my last company, we hit a bottleneck: the bot could answer a single user query accurately but failed to keep track of earlier messages in long conversations, resulting in 35% repeat‑question rates.

**Task** – I had to redesign how the agent managed context versus memory so it could recall past interactions without bloating its real‑time inference pipeline.

**Action** – First, I mapped the conversation flow and identified two distinct data layers: *context* (the current turn’s text plus a 512‑token window of recent turns) fed into a transformer for immediate response, and *memory* (compressed embeddings of entire session history). I built a lightweight LRU cache that stored sentence‑level embeddings in an HNSW index. At each turn, the bot queried the nearest memory vectors to retrieve salient facts and merged them with the current context via cross‑attention before decoding. I also implemented a decay schedule so older memories automatically faded unless re‑activated.

**Result** – After deployment, repeat‑question rates dropped from 35% to 12%, while response latency stayed under 200 ms. The system now balances real‑time context processing with deep memory recall, and I learned that separating short‑term context from long‑term memory is key for scalable agentic AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
