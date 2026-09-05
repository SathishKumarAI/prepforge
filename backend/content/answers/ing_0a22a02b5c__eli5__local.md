---
qid: ing_0a22a02b5c__eli5__local
question: 'Explain: 2013 - Sentinel — How Redis Architecture Evolved'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 215
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:46-05:00'
sources: []
---

Imagine a busy post office where every letter (data) is sorted and delivered by a single clerk, *Redis*. In the early days this clerk worked alone—fast but risky: if he fell sick or left, the whole system stopped.

In 2013, the post office hired two new roles. First, *Sentinel* acts like a vigilant supervisor who watches over the clerk, noting when he’s busy or out of service. If the clerk can’t keep up, Sentinel instantly assigns a backup clerk (a replica) to take over, and then promotes that backup to the main role—no manual switch needed.

Second, Redis added *replication* so each letter is copied to several clerks in real time, ensuring no single point of failure. Together, these changes turned one‑handed Redis into a resilient team that can scale, recover automatically, and keep delivering data smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
