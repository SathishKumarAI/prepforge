---
qid: ing_eee9838e22__star__local
question: 'Explain: 2.3 Partition Tolerance — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 387
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:09-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with redesigning the real‑time fraud detection pipeline for a payment platform that processed ~12 M transactions per day. Our existing monolith had a single database shard; when network latency spiked during peak hours, we saw 4–5 % of alerts delayed or dropped, causing revenue loss and regulatory risk.

**Task:**  
I needed to build a system that could keep processing fraud rules even if the network between data centers failed (partition tolerance), while still providing acceptable consistency for audit logs and maintaining high availability for end‑users.

**Action:**  
I broke the pipeline into microservices and deployed them across two AWS regions. For state I used Amazon DynamoDB with its *eventual consistency* mode, adding a local cache in each region via Redis to serve read‑heavy rule checks instantly. To preserve strong audit guarantees, I implemented a write‑through pattern: every transaction was first logged to an S3 “write‑ahead” log and then replicated asynchronously using DynamoDB Streams. When a partition occurred, the services continued operating on the local cache; once connectivity restored, a background job reconciled divergent state using conflict‑resolution based on timestamps and rule severity.

**Result:**  
The system remained 99.8 % available during simulated cross‑region outages, and fraud detection latency dropped from 1.2 s to 250 ms on average. We reduced false positives by 18 % thanks to the eventual consistency model, and audit compliance scores improved from 83 % to 97 %. I learned that partition tolerance often requires a hybrid consistency strategy—strong where it matters (audit) and eventual where speed wins (real‑time alerts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
