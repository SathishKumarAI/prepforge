---
qid: ing_432491e595__star__local
question: 'Explain: How It Improves Retrieval — Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 336
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:04-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our customer support chatbot was returning generic FAQ answers that didn’t match the nuanced context of user queries. The support ticket volume grew by 40% during peak season, and our CSAT dropped from 92 % to 78 %.  

**Task** – I needed to redesign the retrieval layer so the bot could surface the most relevant knowledge‑base article or internal policy based on the conversation’s context, not just keyword matching. The goal was a 15% lift in first‑contact resolution and a CSAT above 90 %.  

**Action** – I implemented a contextual retrieval pipeline using BERT embeddings fine‑tuned on our support logs. Each incoming message was encoded into a dense vector; we indexed all articles with FAISS for approximate nearest‑neighbor search. To capture conversation history, we concatenated the last two turns before encoding, ensuring the model considered prior intent. We added a lightweight relevance classifier (logistic regression) to filter out low‑confidence hits and used real‑time A/B testing to tune similarity thresholds.  

**Result** – After three weeks of rollout, first‑contact resolution rose by 18 % and CSAT climbed back to 94 %. The model reduced the average retrieval time from 2.3 s to 0.8 s, proving that contextual embeddings can dramatically improve user experience while keeping latency low. I learned that combining deep semantic search with lightweight filtering yields both relevance and speed in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
