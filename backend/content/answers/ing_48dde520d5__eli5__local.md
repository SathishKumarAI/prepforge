---
qid: ing_48dde520d5__eli5__local
question: 'Explain: Horizontal Scaling (Scale Out) — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 226
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:34-05:00'
sources: []
---

Think of a giant pizza shop that wants to serve more customers without making the ovens bigger (that’s vertical scaling). Instead of adding a single huge oven, they open many small ovens in different kitchens across town—this is horizontal scaling or “scale‑out.”  

In the same way, when Instagram’s traffic explodes, engineers don’t just upgrade one powerful server; they add more servers (or “nodes”) that all work together. Each node handles a slice of the workload—receiving photos, storing them, and serving feeds to users in its region. If one kitchen runs out of dough, another can pick up the slack.  

*Node*: A single computer or virtual machine running part of the service.  
*Load balancer*: Like a dispatcher that sends each order to an available oven, keeping all ovens busy but not overloaded.  

By adding nodes, Instagram keeps pace with millions of uploads without needing ever‑larger hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
