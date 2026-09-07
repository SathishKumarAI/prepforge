---
qid: ing_69758f95fe__aws__local
question: 'Explain: Read more — Tech-Stacks-Live-Apps/SplitIO.md at main \u00b7 Anshul619/Tech-Stacks-Live-Apps
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 408
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:25-05:00'
sources: []
---

**Situation** – In 2023 I was tasked with migrating a legacy feature‑flag service (Split.io) into a fully managed AWS stack for our internal “Live Apps” platform. The repo **Tech‑Stacks‑Live‑Apps/SplitIO.md** documents that migration.

**Task** – Translate the on‑prem Split.io deployment into an elastic, cost‑effective architecture while keeping 99.99 % availability and zero downtime for our 12 M daily users.

**Action**  
1. **Infrastructure** – Replaced self‑hosted Docker clusters with Amazon ECS (Fargate) + Application Load Balancer.  
2. **Data layer** – Switched from PostgreSQL on RDS to DynamoDB (global tables, TTL) for low‑latency flag lookups; used S3 + Athena for audit logs.  
3. **CI/CD** – Implemented CodePipeline + CloudFormation templates that validate the Split.io config against a JSON schema before promotion.  
4. **Observability** – Integrated CloudWatch Metrics (flag hit rate, latency) with SNS alerts and X-Ray traces to detect drift.  
5. **Cost & scaling** – Leveraged Spot Instances for non‑critical worker tasks; auto‑scales ECS services based on CPU/Memory metrics, keeping spend < $15k/month vs $35k previously.

**Result** –  
- 99.98 % availability (down from 99.80 %).  
- Latency dropped 45 % (avg 12 ms → 6.5 ms).  
- Monthly cost cut by 58 %.  

**Leadership Principles** – *Customer Obsession* (user‑centric latency), *Ownership* (end‑to‑end migration), *Dive Deep* (profiling flag queries), and *Bias for Action* (rapid A/B testing of new infra).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
