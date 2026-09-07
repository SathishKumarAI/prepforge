---
qid: ing_1a1842174a__aws__local
question: 'Explain: Functional Requirements — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 472
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:25:20-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked with building a unified map service for an e‑commerce platform that required real‑time store locations, user reviews from Yelp, and navigation from Google Maps—all in one API endpoint. The goal was to reduce friction so shoppers could find the nearest pickup point in under 200 ms while keeping infrastructure cost < $0.02/lookup.

**Approach (Dive Deep + Invent & Simplify)**  
1. **Data ingestion** – Scheduled Lambda jobs pull store data from our DB, Yelp’s public API, and Google Places via API Gateway.  
2. **Storage** – A single DynamoDB table with a composite key (`LocationID#Source`) stores the enriched records; TTL cleans outdated Yelp reviews.  
3. **Query layer** – An AWS App Runner microservice exposes `/map?lat=&lon=`. It uses a Redis‑cached geohash index (ElastiCache) to filter by radius, then aggregates results from DynamoDB and enriches with Google Directions via async SQS worker.  
4. **Scalability & Availability** – Multi‑AZ deployment, Auto Scaling on App Runner, and Global Accelerator for low latency worldwide.  
5. **Cost** – Lambda charges are negligible; DynamoDB provisioned throughput at 2 WCU/RCU yields $0.015 per million reads; Redis cache costs $0.10/hour.

**Result (Deliver Results)**  
- Latency dropped from 650 ms to **180 ms** average, meeting the SLA.  
- User drop‑off on store‑finder decreased by **12%**, increasing conversion by **4.3k orders/month** (~$1.2M revenue).  
- Cost per lookup fell from $0.04 to **$0.017**.

**Learning & Bar‑raiser Insight**  
I assumed Yelp’s API limits would be a blocker, but by caching reviews I avoided hitting quotas entirely—an example of *bias for action* and *ownership*. The bar‑raiser will note my end‑to‑end design, data‑driven metrics, and the trade‑off between real‑time freshness vs. cost, demonstrating deep technical ownership and customer focus.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
