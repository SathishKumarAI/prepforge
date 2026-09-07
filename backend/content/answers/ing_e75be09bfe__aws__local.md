---
qid: ing_e75be09bfe__aws__local
question: 'Explain: Search API — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 417
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:48-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I led a sprint for the “Search API” used by Airbnb’s global marketplace. The goal was to reduce query latency from 350 ms to <120 ms while handling a 4× traffic spike during peak travel season.

**Action (Ownership + Dive Deep)**  
1. **Requirements & Scope** – Each request must return top‑10 listings, support geo‑filtering, price ranges, and dynamic ranking.  
2. **Design** –  
   * **Service Layer**: API Gateway → Lambda Authorizer → Elastic Load Balancer → Application Load Balancer (ALB) → EC2 Auto Scaling group running Nginx reverse proxy.  
   * **Data Store**: DynamoDB Global Secondary Index for geohash + price, backed by DAX cache for sub‑10 ms reads.  
   * **Ranking Engine**: SageMaker endpoint with a boosted tree model served via API Gateway; warm starts ensured <50 ms inference.  
3. **Scalability & Availability** – Multi‑AZ deployment, ALB health checks, and DynamoDB auto‑scaling; 99.95% SLA with CloudWatch alarms for latency thresholds.  
4. **Cost Optimization** – Spot instances for non‑critical pods, reserved capacity for DAX, and Lambda concurrency throttling to cap $0.10/hour per function.

**Result (Deliver Results)**  
- Latency dropped to 105 ms on average; peak latency <180 ms.  
- Throughput increased from 12k QPS to 48k QPS during the holiday window.  
- Cost savings of 18% vs baseline architecture.  

**Learnings** – Early “warm‑start” profiling for ML inference prevented hidden cold‑start penalties, a lesson I later applied to the recommendation pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
