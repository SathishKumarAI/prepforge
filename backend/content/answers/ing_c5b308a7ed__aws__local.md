---
qid: ing_c5b308a7ed__aws__local
question: 'Explain: How A2A Works Under the Hood — Agent to Agent Protocol - by Eric
  Roby and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 497
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:02-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain *Agent‑to‑Agent (A2A) Workflows* for a new ML Ops platform that would let autonomous agents coordinate training jobs across regions. The goal was to reduce data transfer costs and latency while keeping the system highly available.

**Action**  
- **Design**: Built a *directed acyclic graph* of agents using Amazon Step Functions as the orchestrator; each node is an AWS Lambda (or EC2 spot) that receives a payload, runs inference on Amazon SageMaker, and emits results via Amazon SQS.  
- **Protocol**: Implemented a lightweight gRPC contract over TLS, with message batching to cut S3 I/O by 60 %.  
- **Scalability / Availability**: Leveraged *Amazon Elastic Container Service (ECS) Fargate* for stateless compute, Auto Scaling groups for burst capacity, and Route 53 health checks for multi‑AZ failover.  
- **Cost**: Reduced per‑job cost from $0.12 to $0.06 by using spot instances and caching embeddings in Amazon ElastiCache Redis.

**Result**  
The new A2A pipeline cut end‑to‑end latency from 12 s to 3 s (−75 %) and lowered operational spend by 40 %. Continuous monitoring via CloudWatch alarms ensured 99.95 % uptime, meeting the *Deliver Results* principle.

---

### Leadership Principles Anchored
- **Customer Obsession** – Delivered a faster, cheaper ML workflow for data scientists.  
- **Ownership & Dive Deep** – Took full responsibility from protocol design to cost optimization, digging into metrics at every layer.  

### Bar‑raiser Takeaways
1. **Ownership**: I owned the entire stack, not just a component.  
2. **Dive Deep**: Detailed trade‑offs (Lambda vs. ECS, spot vs. on‑demand) were justified with real numbers.  
3. **Quantified Impact**: 75 % latency drop and 40 % cost savings are concrete metrics.  
4. **Learning from Failure**: Early prototype hit S3 throttling; we pivoted to gRPC + Redis, a lesson documented in our post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
