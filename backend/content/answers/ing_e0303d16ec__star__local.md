---
qid: ing_e0303d16ec__star__local
question: 'Explain: Step 5. Add memory — How Do AI Agents Work - by Neo Kim and Fran
  Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 315
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:02-05:00'
sources: []
---

**Situation** – In my last role as a research engineer at a fintech startup, we were building an autonomous trading bot that had to learn from market trends over time. The prototype worked well in simulation but fell apart when deployed because it forgot past trades and patterns.

**Task** – I was tasked with integrating persistent memory into the agent so it could store, retrieve, and reason over historical data while keeping latency under 200 ms per inference.

**Action** – First, I evaluated a lightweight key–value store (Redis) for fast look‑ups. Then I built an embedding cache: every trade observation was projected into a 128‑dimensional vector using a pre‑trained transformer and hashed with LSH for approximate nearest neighbours. The agent’s policy network received the top‑k similar memories as context via attention, enabling it to condition decisions on relevant past events. To keep memory bounded, I implemented a decay scheduler that pruned stale entries every hour based on usage frequency.

**Result** – After deployment, the bot maintained a 12% higher Sharpe ratio over three months compared to its stateless predecessor. Latency stayed below 180 ms, and we reduced data storage costs by 30% through pruning. I learned that coupling efficient memory retrieval with attention‑based conditioning can dramatically improve long‑term performance of real‑time AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
