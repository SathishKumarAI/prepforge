---
qid: ing_c4fb41b0c6__eli5__local
question: 'Explain: Load Balancer — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 207
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:48:09-05:00'
sources: []
---

Imagine a busy post office that receives thousands of letters every minute. A **load balancer** is like the clerk who stands at the front desk and decides which mailbox (server) each letter should go to, so no single mailbox gets overwhelmed while others sit idle.

In a URL‑shortener system, many users hit the “create short link” or “click short link” endpoints all at once. The load balancer sits in front of several identical web servers that can generate or redirect URLs. When a request arrives, it looks at the current traffic on each server (or uses a simple round‑robin rule) and forwards the request to one with spare capacity.

By spreading work evenly, the load balancer keeps response times low and prevents any single server from crashing under heavy load—just like the clerk ensures all mailboxes stay busy but never overfull.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
