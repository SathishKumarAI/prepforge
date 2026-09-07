---
qid: ing_57c7116f9f__aws__local
question: 'Explain: Cost Analysis (500 Tenants) — Multi Tenant Saas'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 498
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:06-05:00'
sources: []
---

**Situation** – While leading a product team at my previous company, we were asked to build a *Cost‑Analysis* module for a SaaS platform that would serve **500 tenants** (each tenant could have up to 200k monthly usage events). The goal was to deliver real‑time insights while keeping the cost per tenant below $0.05/month.

**Task** – Design an architecture that ingests, processes and stores telemetry at scale, exposes a clean API for tenants, and guarantees strong data isolation and compliance with GDPR.

**Action** –  
1. **Event ingestion**: Used *Amazon Kinesis Data Streams* (shards tuned to 5 MB/s) to guarantee high‑throughput and low latency.  
2. **Processing & aggregation**: Deployed *AWS Lambda* functions triggered by stream records, partitioned by tenant ID, performing on‑the‑fly calculations and writing results to a *DynamoDB* table (partition key = TenantID).  
3. **Analytics & reporting**: Leveraged *Amazon Athena* over data exported nightly from DynamoDB to S3, enabling ad‑hoc queries without moving data.  
4. **Cost control**: Enabled *Reserved Capacity* on Kinesis and DynamoDB, and used Lambda’s provisioned concurrency only for the 10 busiest tenants.  
5. **Security & isolation**: Applied IAM resource policies and VPC endpoints to ensure each tenant’s data is physically isolated.

**Result** – The solution processed 50 M events/day with <200 ms latency, cost per tenant fell to $0.03/month (30% below target), and we reduced operational overhead by 40% thanks to serverless components.  

*Leadership Principles*: **Ownership**, **Dive Deep**, **Bias for Action** – I took full responsibility for the end‑to‑end pipeline, delved into metrics to fine‑tune throughput, and delivered a production system within 6 weeks.  
*A bar‑raiser would note:* clear ownership of tenant data, quantitative impact (cost savings), deep technical justification, and lessons learned from early load testing failures that led to shard adjustments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
