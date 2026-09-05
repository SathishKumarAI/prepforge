---
qid: ing_3856165a9e__star__local
question: 'Explain: Outdated Fact Poisoning — The Day 30 Problem: Why Your AI Agent
  Gets Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 353
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:07-05:00'
sources: []
---

**Situation** – At my previous company we launched a customer‑support chatbot that pulled product specs from an internal wiki. Within the first week of deployment it was answering over 70 % of queries correctly, but by day 30 its accuracy had dropped to 45 %. We noticed that the bot kept recommending features that were already deprecated.

**Task** – My goal was to diagnose why the AI’s knowledge regressed and design a mitigation strategy so the agent stayed up‑to‑date without manual re‑training each time a spec changed.

**Action** – I first logged every API call the model made to the wiki and compared timestamps against the page’s last‑modified field. I discovered that the caching layer was set to 30 days, so stale facts persisted for an entire month—an “outdated fact poisoning” scenario. I rewrote the cache policy to use a content‑hash invalidation system: whenever a page changed, its hash would trigger a purge of all related cached embeddings. I also introduced a lightweight watchdog that ran nightly, scanning for high‑confidence answers that referenced deprecated features and flagged them for human review.

**Result** – After implementing the hash‑based cache, we saw accuracy climb back to 92 % by day 15 and stayed there. The bot’s monthly maintenance overhead dropped from hours of manual edits to just a few minutes of automated checks. I learned that even small caching misconfigurations can poison an AI’s knowledge base and that proactive data validation is essential for long‑term reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
