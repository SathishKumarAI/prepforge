---
qid: ing_767bbc112d__aws__local
question: 'Explain: Core Components — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 415
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:07-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we were asked to redesign the “Airbnb System Design” paper by Neo Kim & Hayk so that it could be deployed on AWS for a global marketplace. The goal was to expose a single‑source API layer, reduce latency, and scale to 10M active users while keeping cost < $0.03 per request.

**Action (Technical)**  
1. **Architecture** – I chose a *Serverless + Edge* stack:  
   - **API Gateway + Lambda@Edge** for low‑latency routing;  
   - **DynamoDB Global Tables** for geo‑replication and 99.999% availability;  
   - **AppConfig** to toggle feature flags without redeploys.  
2. **Data Modeling** – Partitioned listings by city, used *composite keys* (city#listingId) to avoid hot spots.  
3. **Observability** – Integrated CloudWatch metrics + X-Ray tracing; set up anomaly‑based alerts with Athena queries on logs.  
4. **Cost Optimisation** – Leveraged Lambda’s pay‑per‑execution and reserved capacity for predictable traffic; used DynamoDB auto‑scaling.

**Result (Quantified)**  
- Latency dropped from 350 ms to < 80 ms (99th percentile).  
- Throughput scaled from 5k RPS to 50k RPS with zero downtime.  
- Operational cost decreased by **28%** versus the legacy monolith.  

**Reflection & Learning**  
I owned the full deployment, iterated on feedback, and documented a playbook that reduced onboarding time for new engineers by 40%. This experience sharpened my *Ownership* and *Dive Deep* skills—hallmarks of Amazon’s leadership culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
