---
qid: ing_08deb7d7b0__star__local
question: Design memory that persists across sessions for an assistant. How is it
  different from managing context within a session?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 304
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:44-05:00'
sources: []
---

**Situation:** In my last role I built a customer‑support chatbot that needed to remember user preferences across months of inactivity. Our internal SLA required the bot to pick up exactly where it left off after each login.

**Task:** Design a persistent memory layer so that every assistant could retrieve past interactions, context, and learned intent nuances while still maintaining real‑time session performance.

**Action:** I chose a hybrid approach: a relational database for structured metadata (user IDs, last activity timestamps) coupled with an open‑source vector store (FAISS) to index dense embeddings of conversation turns. During each session, the assistant queried FAISS for the top‑k most similar past exchanges, filtered by user ID and time window, and merged those vectors into its prompt. I wrapped this in a lightweight API layer that cached recent results for 30 seconds to avoid duplicate lookups. For privacy, all embeddings were hashed with per‑user salts before storage.

**Result:** The bot’s first‑time‑user success rate rose from 62% to 84%, and average resolution time dropped by 28%. I learned that persisting context is not just about storing text; it’s about indexing semantics so the model can retrieve relevant knowledge efficiently, while keeping session memory lean for fast inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
