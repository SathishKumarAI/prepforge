---
qid: ing_edc43e96ee__eli5__local
question: 'Explain: Design a rate limiter for an LLM API where cost scales with tokens,
  not requests.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 240
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:47-05:00'
sources: []
---

Imagine your LLM API is like a grocery store that charges you per pound of produce, not per visit. If you only care about how many times people enter (requests), you might let anyone in for free and later be shocked by the bill. Instead, count the weight of each basket (tokens) and stop new shoppers once the weekly budget runs out.

**How to build that “token‑budget” limiter**

1. **Track tokens** – Each request tells you how many words it will use.  
2. **Set a cap** – Decide the monthly token limit based on cost.  
3. **Check before serving** – When a new request arrives, add its token count to the running total. If the sum would exceed the cap, reject or queue it.  
4. **Reset periodically** – At the start of each billing cycle, clear the counter.

This way you’re limiting spend, not just traffic, just like a grocery store that bills by weight, ensuring your budget never blows up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
