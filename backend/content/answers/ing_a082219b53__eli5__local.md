---
qid: ing_a082219b53__eli5__local
question: 'Explain: 1.3. Stateless — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 205
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:52:16-05:00'
sources: []
---

Imagine you’re ordering coffee at a café that only takes orders by phone. Every time you call, the clerk has no memory of your previous order; you must say everything again: “I’d like a latte with oat milk, two sugars.” That’s *stateless*—each request contains all the information needed, and the server (the clerk) doesn’t keep track between calls.

A **REST API** is like that café but for computers. REST stands for *Representational State Transfer*. It’s a set of rules that let programs talk to each other over the internet by sending simple messages (“GET this data”, “POST new info”). Because every message is self‑contained, servers can scale easily: any server can answer the request without remembering past interactions.

So, statelessness means no hidden history; REST is the polite phone‑order system that lets many programs chat smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
