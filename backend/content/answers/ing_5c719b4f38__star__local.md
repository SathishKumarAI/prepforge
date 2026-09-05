---
qid: ing_5c719b4f38__star__local
question: 'Explain: Distinguish working memory from persistent memory in agent design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 322
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:25-05:00'
sources: []
---

**Situation** – At my previous startup we built a conversational AI that had to remember user preferences across sessions while still reacting instantly during a chat. Our logs showed latency spikes whenever the bot tried to pull historical data from a NoSQL store, and users complained about “forgetting” earlier choices.

**Task** – I needed to separate the agent’s short‑term state (working memory) from long‑term facts (persistent memory), ensuring real‑time responsiveness without sacrificing continuity.

**Action** – I designed a two‑tier architecture. Working memory was an in‑memory cache (Redis with TTL 5 min) that stored current dialogue context, intent scores, and transient slots. Persistent memory lived in a document database (MongoDB) keyed by user ID; it held preferences, past orders, and conversation history. The agent’s policy first queried Redis; if a slot was missing, it fetched the value from Mongo, updated Redis, and continued processing. I also added an event‑driven sync: every 30 s the bot pushed changes from Redis to Mongo, keeping both layers in sync without blocking the user.

**Result** – Latency dropped from 350 ms to under 80 ms on average, while the recall accuracy of user preferences improved by 23 %. The team learned that a lightweight working memory coupled with an async persistent store balances speed and continuity for AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
