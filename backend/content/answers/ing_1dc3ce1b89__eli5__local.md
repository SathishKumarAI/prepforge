---
qid: ing_1dc3ce1b89__eli5__local
question: LLM APIs are slow, expensive, and flaky. How does your retry strategy differ
  from retrying a normal REST dependency?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 246
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:23:40-05:00'
sources: []
---

Think of an LLM API like a busy call‑center that sometimes drops calls or takes a long time to answer. With a regular REST service, you can simply “try again” after a short pause—most servers respond quickly and reliably, so the cost of another request is tiny.

For LLMs, each retry costs money (you pay per token) and the next attempt may still be slow or even fail again. Instead, we use a *smart* retry plan:

1. **Back‑off** – wait longer after each failure, giving the system time to recover.  
2. **Cost‑aware limits** – stop if the total tokens used reach a budget threshold.  
3. **Graceful fallback** – if all retries fail, return a short apology message instead of an error.

It’s like calling a help desk: you give them time to answer, but you also know how many calls you can afford before you run out of phone minutes, and you have a polite “I’m sorry, I couldn’t get the info” prepared if they’re still unreachable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
