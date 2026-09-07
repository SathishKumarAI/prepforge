---
qid: ing_10a95a02ba__aws__local
question: 'Explain: Design a connector framework that syncs content and permissions
  from 100+ SaaS apps into one index.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 436
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:10-05:00'
sources: []
---

**Situation** – While leading a data‑engineering team at my previous company, we were asked to unify content and permission metadata from **100+ SaaS apps (Salesforce, Slack, GSuite, etc.)** into a single searchable index for the new “Unified Search” product.  

**Task** – Build an event‑driven connector framework that ingests both *content* and *access control lists*, transforms them into a common schema, and writes to an Elasticsearch cluster with **99.9 % latency SLA**.

**Action** –  
1. **Event ingestion**: Set up an AWS EventBridge bus for SaaS webhook events; fallback SQS queues for polling APIs.  
2. **Transformation & enrichment**: A Lambda‑driven *Connector Service* (Python/Node) normalizes payloads, applies ACL mapping via DynamoDB tables, and writes to a Kinesis Data Firehose stream.  
3. **Indexing layer**: Kinesis → Amazon OpenSearch Service (dedicated cluster, auto‑scaling).  
4. **Governance**: Use AWS IAM roles per SaaS tenant; encrypt data at rest with SSE‑KMS.  
5. **Monitoring**: CloudWatch dashboards + X-Ray traces to maintain < 200 ms ingestion latency.

**Result** – The framework processed 1.2 M events/day, reduced search latency from 3 s to 0.25 s (80 % improvement), and cut operational costs by 35 % versus a monolithic Java batch solution.  

*Leadership Principles*: **Ownership** (took end‑to‑end responsibility) and **Dive Deep** (architected with fine‑grained metrics).  

*A bar‑raiser would check*: clear ownership, data‑driven impact, deep understanding of AWS services, and lessons learned from initial 30 % spike in failure rates that led to adding retry logic and circuit breakers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
