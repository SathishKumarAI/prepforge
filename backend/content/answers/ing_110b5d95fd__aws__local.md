---
qid: ing_110b5d95fd__aws__local
question: 'Explain: were optional maybe an email or i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 459
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:15-05:00'
sources: []
---

**Situation & Task**  
While working on a new retail chain, I was asked to build an end‑to‑end **Parking Garage Management System** that would handle 3 000 vehicles per hour and reduce parking‑related customer churn by 15 %.  

**Action (Design)**  
*Requirements*: real‑time spot availability, dynamic pricing, mobile reservation, and integration with the store’s loyalty program.  
*Architecture*:  
- **Front‑end**: React Native app + web portal.  
- **API Gateway** → **Lambda** for stateless business logic.  
- **Database**: DynamoDB (global tables) for spot metadata; **RDS Aurora PostgreSQL** for transactional reservations (ACID).  
- **Pricing engine**: Event‑driven Lambda triggered by CloudWatch alarms on occupancy thresholds, updating a Redis‑cached price map via ElastiCache.  
- **Analytics**: Kinesis → Glue → Redshift for 30‑day reporting.  

*Scalability*: Auto‑scaling Lambdas (10 000 req/s) + DynamoDB provisioned throughput with adaptive capacity.  
*Availability*: Multi‑AZ deployment, 99.95 % SLA via Route 53 health checks and failover to a secondary region.  
*Cost*: ~\$12k/month; avoided $40k in legacy hardware by using serverless compute.  

**Result**  
Within six months, parking wait times dropped from 7 min to <2 min (70 % reduction), increasing customer satisfaction scores by **18 %** and driving an additional \$0.5M in quarterly revenue through dynamic pricing.  

**Reflection (Bar‑raiser focus)**  
I owned the project end‑to‑end, dove deep into latency trade‑offs between DynamoDB vs RDS, quantified impact via A/B testing, and learned that early adoption of serverless reduced operational overhead—an insight I later applied to the company’s event ticketing platform.  

*Leadership Principles*: **Customer Obsession**, **Ownership**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
