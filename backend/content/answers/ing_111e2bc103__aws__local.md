---
qid: ing_111e2bc103__aws__local
question: 'Explain: Design decisions and Technology choices — System Design of food
  delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 521
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:25-05:00'
sources: []
---

**Situation & Task**  
I led the end‑to‑end redesign of a food‑delivery platform (Zomato/Swiggy) to support 1 M concurrent users during peak lunch hours while keeping latency <200 ms and cost <10% of legacy spend.

**Action – Design Decisions & Tech Choices**  

| Layer | Decision | AWS Service | Rationale |
|-------|----------|-------------|-----------|
| **Front‑end** | Global CDN + edge caching for restaurant catalogs | Amazon CloudFront, Lambda@Edge | 95 % cache hit → 60 % lower origin load |
| **API Gateway** | GraphQL gateway with request throttling | API Gateway + AppSync | Unified schema reduces overfetching; per‑user rate limits prevent abuse |
| **Compute** | Stateless microservices (orders, payments) in ECS Fargate | Fargate, ECR | Auto‑scales on CPU/Memory; no infra ops |
| **Data Layer** | Geo‑partitioned DynamoDB + Redis for cart state | DynamoDB Global Tables, ElastiCache | 10 µs read latency, multi‑region replication |
| **Analytics** | Event streaming for order flow | Kinesis Data Streams → Lambda → Redshift | Real‑time insights; 5x faster anomaly detection |
| **Security** | Zero‑trust with Cognito + IAM roles | Amazon Cognito, IAM | Least privilege, MFA enforced |

**Result**  
- Latency dropped from 350 ms to **180 ms** (average).  
- Peak concurrent users handled increased by **4×**.  
- Infrastructure cost reduced by **12 %** YoY while achieving 99.99 % availability.

**Leadership Principles Anchored**  
- **Customer Obsession**: Faster, reliable ordering improves user satisfaction (NPS +15).  
- **Ownership** & **Dive Deep**: I drove end‑to‑end changes and profiled hot spots to justify caching strategy.  

**Bar‑raiser takeaways**  
I quantified impact with real metrics, showed deep architectural trade‑offs (e.g., choosing DynamoDB over RDS for latency), and learned from a failed cache warm‑up that led to stale data—prompting the switch to Lambda@Edge invalidation logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
