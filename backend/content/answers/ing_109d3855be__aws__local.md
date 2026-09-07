---
qid: ing_109d3855be__aws__local
question: 'Explain: Special IP Addresses — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 557
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:55-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to build a *Special IP Address* service that would expose internal and external endpoints for our SaaS platform while keeping the public‑facing IPs opaque to customers. The goal was to reduce DNS lookups by 30 % and cut the cost of public IP rotation from $0.5 / hour to $0.05 / hour.

**Action & Design**  
I designed a **serverless, highly available lookup layer**:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Ingestion | **AWS Lambda + API Gateway** | Fast, pay‑per‑call, zero servers |
| Persistence | **DynamoDB (global secondary index on `type`)** | 99.999 % availability and single‑digit millisecond latency |
| Caching | **Amazon CloudFront + Edge Lambda@Edge** | DNS‑level cache; reduces DynamoDB reads by ~70 % |
| Discovery | **AWS PrivateLink + VPC Endpoints** | Keeps traffic inside AWS, eliminates public IP exposure |
| Orchestration | **Step Functions** | Handles multi‑region replication and rollback on failure |

I added a *watcher* Lambda that scans the VPC Flow Logs every 5 minutes to detect new or terminated ENIs and updates DynamoDB in real time. The service also exposes an API for tenants to reserve “special” IPs (e.g., for legacy clients) with an SLA of <50 ms.

**Result**  
* **Latency:** 45 ms average lookup vs. 120 ms pre‑design.  
* **Cost:** $0.05/hour vs. $0.5/hour, saving ~90 % annually (~$12k).  
* **Reliability:** 99.999 % uptime over 18 months; zero outage incidents.

**Reflection (Bar‑raiser notes)**  
I owned the end‑to‑end pipeline, dived deep into VPC Flow Log parsing to avoid a naive polling loop, and quantified every trade‑off with real numbers. After an initial false‑positive spike during rollout, I introduced a circuit breaker in Step Functions—learning that even serverless systems need guardrails. This project exemplified **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
