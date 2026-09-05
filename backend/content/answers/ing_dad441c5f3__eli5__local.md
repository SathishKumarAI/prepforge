---
qid: ing_dad441c5f3__eli5__local
question: 'Explain: Connect Your First Channel (Telegram) — Openclaw Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 246
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:45-05:00'
sources: []
---

Imagine your AI is a chef that needs ingredients from different markets to make a dish. Each market is a “channel” – a place where information (ingredients) comes in. Telegram is one of the easiest markets to set up because it already has a big, friendly storefront and clear directions.

**How it works**

1. **Create a bot on Telegram** – think of this as opening a shop window. The bot gets an ID and a secret key (the “cash register” that lets you take orders).
2. **Give the bot permission to read messages** – like letting your staff see what customers are asking for.
3. **Connect the bot to Openclaw** – plug the bot’s ID into Openclaw’s settings, so every time someone writes in Telegram, Openclaw receives that text as an “ingredient” and can reply back.

Now, whenever a user sends a question on Telegram, your AI instantly picks it up, processes it, and returns the answer right there—just like a chef serving a fresh dish straight from the market.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
