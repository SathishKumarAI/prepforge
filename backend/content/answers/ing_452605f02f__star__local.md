---
qid: ing_452605f02f__star__local
question: 'Explain: Your agent needs to remember things across sessions. Would you
  use a vector store or rolling summarisation? Defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 314
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:06-05:00'
sources: []
---

**Situation** – In my last project I built an AI concierge for a hotel chain. Guests could ask about past bookings, preferences, or special requests across multiple visits, but the system had to stay stateless between sessions to comply with GDPR and keep server costs low.

**Task** – I needed a lightweight yet accurate way to persist user context so that each new session felt personalized without storing full transcripts in memory.

**Action** – I chose a small vector store (Faiss on top of sentence‑BERT embeddings) over rolling summarisation. For every interaction I generated an embedding from the user’s last message and any relevant system reply, then upserted it into the vector index with a short TTL. When a new session began, I queried the nearest vectors to retrieve the most recent context snippets (top‑3), which were fed back into the LLM as a prompt. This approach preserved fine‑grained details—like “prefers room on 5th floor” or “allergic to peanuts”—that summarisation often lost, and it kept latency under 150 ms.

**Result** – User satisfaction scores rose from 82% to 94%, and the average number of repeat questions dropped by 35%. I learned that for short‑term cross‑session memory, a vector store gives better fidelity than rolling summaries while still being cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
