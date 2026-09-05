---
qid: ing_96690e89b7__eli5__local
question: 'Explain: Stage 5: Read Replicas (2M-10M users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 245
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:12-05:00'
sources: []
---

Imagine a popular online recipe book that gets millions of cooks clicking through each day. The first page of every recipe is stored on one big kitchen counter (the primary database). When the traffic grows, that single counter becomes crowded and slow.  
The solution is to set up extra “read‑only” counters—**Read Replicas**—that copy the same recipes from the main counter but only let people look at them, not edit them. A smart traffic‑router (load balancer) directs most visitors to these spare counters, so each one sees fewer cooks and can serve pages faster.  
*Primary database*: the original source that accepts writes.  
*Read replica*: a copy that answers read queries only.  
*Load balancer*: software that evenly distributes user requests among available replicas.  

By adding more replicas as users grow from 2 million to 10 million, you keep response times low without overloading the main counter—just like giving each kitchen enough space for all the chefs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
