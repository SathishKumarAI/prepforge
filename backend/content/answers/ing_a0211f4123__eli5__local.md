---
qid: ing_a0211f4123__eli5__local
question: 'Explain: Cost estimate (rough token math) — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 270
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:51:28-05:00'
sources: []
---

Imagine you’re hiring a note‑taker for a meeting. Each word the assistant writes or reads is like a tiny “coin.” The AI charges per coin, so we first count how many coins the whole job uses.

1. **Prompt** – the question or instruction you give (e.g., “Summarize this 30‑minute meeting”). That’s about 10 coins.
2. **Input transcript** – every word spoken in the meeting is another coin. A 30‑minute talk with a normal speaking speed has roughly 4,500 words, so ~4,500 coins.
3. **Output summary** – the assistant’s reply might be 150 words, about 150 coins.

Add them up: 10 + 4,500 + 150 ≈ **4,660 coins**. If one coin costs $0.00002 (typical for many AI models), that’s roughly **$0.09**.  

So the cost estimate is simply a quick “coin‑count” of what you feed in and what you get back, multiplied by the price per coin. No fancy math—just a friendly tally of words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
