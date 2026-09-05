---
qid: ing_e1b274d11f__eli5__local
question: Tell me about a time an AI feature failed in production. What happened and
  what did you change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 203
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:04-05:00'
sources: []
---

Imagine a smart kitchen assistant that can order groceries automatically when the fridge runs low. One day it was deployed to a busy hospital cafeteria. The AI read the inventory sensor data and decided “buy more spinach.” It didn’t notice that the sensor had been temporarily stuck at zero because of a software glitch, so the system kept ordering spinach every hour. After a week, the kitchen was full of spinach but no other vegetables—patients got bland meals, and staff had to stop the bot.

We fixed it by adding two safety layers: first, a “confidence check” that required the sensor reading to change over several minutes before making an order; second, a human‑override dashboard where a staff member could see why the bot was ordering and cancel or adjust the request. Now the AI only orders when it’s really sure the fridge is empty, and people can step in if something looks off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
