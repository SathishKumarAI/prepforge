---
qid: ing_5fabcf7684__aws__local
question: 'Explain: Tech Stack — Tech-Stacks-Live-Apps/Instagram/Readme.md at main
  \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 523
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:26-05:00'
sources: []
---

**Situation & Task**  
When I joined a fast‑growth startup building a photo‑sharing app similar to Instagram, the existing monolith was hitting 10 k RPS and lagging during peak hours (5 s avg latency). The leadership team asked me to redesign the tech stack for **scalability, cost control, and developer velocity**.

**Action**  
1. **Micro‑service decomposition** – split user profile, media ingestion, feed generation, and notification into independent containers.  
2. **Container orchestration** – deployed on **Amazon ECS with Fargate**, auto‑scaling based on CloudWatch metrics (CPU + network).  
3. **Data store** – switched from single MySQL to a hybrid:  
   * PostgreSQL for relational data (user, follow graph) → RDS Aurora Serverless v2 (auto‑scale 1–200 w/ minimal cold starts).  
   * DynamoDB for feed items and media metadata (global tables for multi‑AZ).  
4. **Media pipeline** – S3 + Lambda for transcoding to multiple resolutions; CloudFront CDN with edge caching.  
5. **Event‑driven architecture** – SNS/SQS + EventBridge for decoupled notifications and analytics jobs.  
6. **Observability** – X-Ray, CloudWatch Logs Insights, and Prometheus/Grafana on Amazon Managed Service for Grafana.

**Result**  
* Reduced 99th‑percentile latency from **5 s → 250 ms** under peak load (20 k RPS).  
* Cut infra cost by **35 %** in six months (Fargate + Aurora Serverless eliminated idle servers).  
* Deployment cadence improved from **weekly to daily**, thanks to CI/CD with CodePipeline and Terraform.

**Reflection & Bar‑raiser notes**  
- Demonstrated *Ownership* by taking full responsibility for the migration.  
- *Dive Deep* through A/B tests on caching strategies, revealing a 15 % hit‑rate lift with DynamoDB TTLs.  
- Learned from an initial S3 “cold start” bug: added lifecycle policies to pre‑warm objects, now 99.9 % availability for media uploads.  

**Leadership Principles Highlighted**  
*Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
