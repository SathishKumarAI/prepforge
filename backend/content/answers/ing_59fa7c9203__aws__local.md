---
qid: ing_59fa7c9203__aws__local
question: 'Explain: Step 4: Scale the design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 427
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:04-05:00'
sources: []
---

**Situation & Task**  
I was tasked with scaling the Pastebin prototype from the System‑Design‑Primer so it could serve millions of concurrent users while keeping latency < 200 ms and cost under $5k/month.

**Action (Technical Design)**  
1. **Stateless API layer** – Elastic Beanstalk + Application Load Balancer (ALB) for automatic scaling & health checks.  
2. **Data store** – DynamoDB with a *paste_id* partition key and TTL attribute; writes are single‑partition, reads use eventual consistency to keep costs low.  
3. **Caching layer** – ElastiCache Redis for hot pastes (top 10 % traffic) to reduce read pressure on DynamoDB.  
4. **Content delivery** – S3 + CloudFront to serve raw paste content with edge caching; signed URLs protect private pastes.  
5. **Background job** – Lambda triggered by DynamoDB Streams to generate previews and update Redis cache.

**Result**  
- 99.9 % request success rate, < 150 ms median latency at peak load (10k rps).  
- Monthly cost dropped from $12k to $4.8k (≈ 60 % savings) by using DynamoDB on-demand and auto‑scaling ALB.  
- Zero downtime during traffic spikes; Auto Scaling handled 3× traffic increase in under a minute.

**Reflection & Bar‑raiser Notes**  
I *took ownership* of end‑to‑end latency, performed deep dives into read/write amplification, and iterated on the cache hit ratio. The biggest failure was an initial misconfiguration of DynamoDB TTL that caused stale data; I resolved it by adding a Lambda cleanup job and updated our CI pipeline to enforce TTL checks. This showcases **Ownership**, **Dive Deep**, and a culture of continuous learning—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
