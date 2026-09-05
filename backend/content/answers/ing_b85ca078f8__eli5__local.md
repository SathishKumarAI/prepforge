---
qid: ing_b85ca078f8__eli5__local
question: How is structured output actually enforced at the serving layer, and what
  does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 230
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:41-05:00'
sources: []
---

Imagine you’re ordering a pizza through an app that guarantees you’ll always get exactly the toppings you asked for. The “structured output” is like that guarantee: the system makes sure the answer it sends back follows a specific shape (e.g., a list of items, each with a name and price).  

At the serving layer—where the model’s raw thoughts become an actual response—the software wraps the model’s text in a container called a *schema*. It checks that every piece fits the schema: no missing fields, no extra garbage. If something is wrong, it either corrects it or rejects the answer and asks the model to try again.  

The cost? Twofold. First, you add a little CPU time for these sanity‑checks; second, if the model keeps failing the checks, you may have to run it multiple times, which uses more GPU cycles. In practice, the extra time is small—often just a few milliseconds per request—while the safety and consistency gains are huge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
