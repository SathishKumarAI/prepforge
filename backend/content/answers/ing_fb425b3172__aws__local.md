---
qid: ing_fb425b3172__aws__local
question: 'Explain: BOOKMYSHOW System Design, FANDANGO System Design | Software architecture
  for online ticket booking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 418
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:38-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign the ticket‑booking backbone for a global cinema chain (akin to BookMyShow/Fandango). The system had to support **10 M concurrent users**, deliver <200 ms response, and guarantee 99.999% availability during peak festivals.

**Action – Architecture & AWS Services**  
* **API Gateway + Lambda** (serverless) for request routing → auto‑scales, cost‑effective.  
* **Amazon DynamoDB** (global tables) stores seats & show data; provisioned read/write capacity with on‑demand fallback during spikes.  
* **ElastiCache Redis** caches seat availability per theater to reduce DB hits and prevent double booking.  
* **SQS + SNS** orchestrate asynchronous ticket confirmation, email/SMS notifications, and fraud detection jobs.  
* **Step Functions** coordinate the multi‑step transaction (reserve → payment → confirm) ensuring atomicity with DynamoDB transactions.  
* **CloudFront** distributes static assets globally; **Route 53 latency routing** directs users to nearest edge.

**Result**  
After launch:  
* 97 % reduction in seat‑lock conflicts (from 1.2 % to 0.03 %).  
* Peak request latency dropped from 450 ms to <180 ms.  
* Operational cost decreased by **32 %** due to serverless scaling and DynamoDB on‑demand.

**Learning & Ownership**  
I instituted a *post‑mortem* cadence; the first failure revealed stale cache entries—prompted adding a TTL refresh policy, which cut cache staleness incidents by 85 %.  

> **Leadership Principles:** *Customer Obsession* (fast, reliable booking), *Ownership* (owning end‑to‑end flow and continuous improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
