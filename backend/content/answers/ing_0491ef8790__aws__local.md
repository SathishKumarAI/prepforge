---
qid: ing_0491ef8790__aws__local
question: 'Explain: Amazon System Design Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 492
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:15-05:00'
sources: []
---

**Situation / Task**  
At my previous company we launched a city‑wide parking‑management platform that needed an on‑prem “parking garage” microservice to handle real‑time spot allocation for 500 k daily users and support future IoT sensors. I was asked to design the architecture from scratch.

**Action (Design)**  
* **Requirements & Constraints** – <5 ms latency, 99.999% availability, GDPR compliant data retention, cost ≤$0.05/transaction.  
* **Core Services** – *Amazon DynamoDB* for spot metadata (partitioned by garage ID) with global tables for multi‑AZ; *AWS Lambda* + *API Gateway* as the stateless entry point; *Amazon SQS* to queue sensor updates; *Amazon Kinesis Data Streams* for real‑time analytics.  
* **Scalability** – Provisioned throughput 10 k RCU/WCU per garage, auto‑scaling on CloudWatch metrics; Lambda concurrency limits set to 5 000 to absorb traffic spikes during events.  
* **Availability & Cost** – DynamoDB global tables eliminate single‑point failure; cold starts mitigated by provisioned Lambda concurrency (≈$0.20/h). Total projected cost: $2.4M/yr vs legacy on‑prem ($3.6M).  
* **Security** – IAM roles with least privilege, encryption at rest and in transit (TLS 1.3), VPC endpoints for DynamoDB.

**Result**  
Deployment reduced average spot‑allocation latency from 120 ms to 4 ms (95th percentile <10 ms). User satisfaction scores jumped by 18% (NPS +12). The system handled a 30× traffic spike during the city festival with no downtime.  

**Reflection & Learning**  
I realized early that DynamoDB’s write‑throughput limits could become a bottleneck; we introduced a “reserve spot” queue to smooth bursts, learning the importance of *Dive Deep* and *Bias for Action*. This design earned me the bar‑raiser’s nod: clear ownership, quantified impact, and a post‑mortem plan for future sensor‑driven edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
