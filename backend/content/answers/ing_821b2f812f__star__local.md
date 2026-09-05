---
qid: ing_821b2f812f__star__local
question: 'Explain: Tier 2: Daily Notes (raw timeline) — The Day 30 Problem: Why Your
  AI Agent Gets Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 345
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:53:27-05:00'
sources: []
---

**Situation** – In our internal research lab we built a conversational AI that logs daily user interactions as raw timeline “Daily Notes.” After three months of deployment, the model’s recall accuracy dropped from 92 % to about 70 %, and users reported stale or contradictory facts in follow‑up queries.  

**Task** – I had to diagnose why the agent was degrading over time and devise a solution that restored performance without requiring a full retrain each day.  

**Action** – First, I instrumented the note‑generation pipeline to capture token usage, sentiment shifts, and the proportion of “noise” tokens (irrelevant or duplicated text). Using these metrics I identified an accumulation bias: every new daily note appended to the timeline pushed earlier notes past the model’s context window, causing it to rely on truncated information. To counter this, I implemented a sliding‑window cache that keeps only the last 3 days of high‑confidence notes and applies a lightweight summarizer (BERT‑sum) to compress older logs before appending them. I also added an adaptive decay factor that reduces the weight of older tokens in the loss function during fine‑tuning, ensuring the model learns to prioritize recent context.  

**Result** – After deploying the cache and decay scheme, recall jumped back to 90 % within a week, and user satisfaction scores improved by 15 %. I learned that continuous monitoring of data drift and context window management is essential for long‑running AI agents, especially when they ingest unstructured daily logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
