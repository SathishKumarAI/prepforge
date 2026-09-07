---
qid: ing_50023b0c8c__aws__local
question: 'Explain: Users-Table — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 526
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:56-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fast‑growing SaaS startup that needed a URL‑shortening service for its marketing partners. The existing “Users” table stored millions of user accounts and the product team wanted to add a `tinyurl` column so each user could generate branded short links. We had to do this without impacting the 99.9 % uptime SLA, while keeping costs under $0.05 per link.

**Action – Design & Implementation**  
* **Data model** – Added a new table `UserTinyURL (user_id PK, tiny_url VARCHAR(10) UNIQUE, created_at TIMESTAMP)` to avoid altering the hot Users table.  
* **Generation logic** – Implemented an id‑to‑hash algorithm using a 6‑character base62 encoder seeded by AWS KMS‑encrypted UUIDs for uniqueness and collision resistance.  
* **AWS services** –  
  * **Amazon DynamoDB** (single‑AZ, provisioned capacity with auto‑scaling) for low‑latency writes/reads.  
  * **Lambda** to generate URLs on demand; invoked via API Gateway with a 5 ms timeout.  
  * **S3 + CloudFront** to serve static landing pages that redirect from the short URL.  

* **Scalability & Availability** – DynamoDB handles >10k QPS, auto‑scales with traffic spikes; Lambda scales out instantly. The service is stateless and globally replicated via API Gateway stages.

* **Cost** – $0.25/month for DynamoDB table + $0.15 for Lambda invocations (≈ 1M links/day). Below the target budget.

**Result**  
Within 4 weeks, we shipped the feature with 99.97 % availability during a 2‑month beta. The beta users generated 3.2 M short URLs, each redirecting at 98.5 % success rate. Revenue from partner referrals rose 12 % YoY.  

**Learning & Ownership**  
I proactively ran chaos tests to validate failover and documented the “TinyURL” schema migration plan, ensuring zero downtime for future rollouts—demonstrating **Ownership** and **Dive Deep**. The bar‑raiser will note my data‑driven impact (3 M URLs, 12 % revenue lift) and the end‑to‑end ownership from requirement to post‑launch monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
