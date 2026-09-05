---
qid: ing_3e1ffc1628__eli5__local
question: What is distributed tracing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 233
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:32-05:00'
sources: []
---

Think of a machine‑learning model as a long relay race that runs on many runners (servers) scattered around the world. Each runner receives a baton (a request), does its part (computes a layer or serves data), and hands it to the next runner. Distributed tracing is like having a tiny GPS tracker glued to every baton. It records where each runner is, how long they take, and any hiccups along the way.

When you look at the tracker’s log, you can see exactly which runner slowed down or dropped the baton, making it easy to spot bottlenecks, debug failures, or optimize performance across the entire system.

*Unavoidable terms:*  
- **Trace** – a record of a single request as it moves through all parts of the system.  
- **Span** – one leg of that trace, representing a specific operation on one runner (server).  

Distributed tracing gives you a clear, end‑to‑end view of your ML pipeline without guessing where problems hide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
