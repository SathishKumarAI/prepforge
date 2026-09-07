---
qid: ing_55f515d028__aws__local
question: 'Explain: Related patterns — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 565
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:22-05:00'
sources: []
---

**S – Situation**  
I led a migration of our recommendation engine from a monolithic data lake to a micro‑service architecture for the e‑commerce platform that served 5 M daily active users. The legacy system stored all user interactions in one huge Postgres cluster, which caused contention and made it hard to roll out new models.

**T – Task**  
Redesign the persistence layer so each model/service owns its own database (the “database per service” pattern), while still enabling cross‑service analytics without breaking availability or cost targets.

**A – Action**  
1. **Requirements & Design**  
   * Each service gets a dedicated Aurora Serverless cluster to isolate workloads and auto‑scale on query load.*  
   * We introduced a read replica per database for reporting jobs, preventing write amplification of the primary.*  
   * To keep cross‑service analytics possible, we set up an EventBridge bus that publishes “interaction” events; downstream analytic services consume these via Kinesis Data Streams and materialize aggregates in DynamoDB (eventual consistency).*

2. **AWS Services**  
   * Aurora Serverless v2 – cost‑effective, zero‑admin scaling.*  
   * Kinesis Data Streams – high‑throughput ingestion of event streams.*  
   * DynamoDB with TTL for quick lookups and cleanup.*  
   * Lambda + Step Functions orchestrate the ETL pipeline.*

3. **Scalability & Availability**  
   * Each Aurora cluster scales independently, so a spike in one recommendation model doesn’t throttle others.*  
   * Multi‑AZ deployment guarantees 99.999% availability; read replicas handle analytical queries without affecting writes.*

4. **Cost & Trade‑offs**  
   * Estimated 25 % increase in database spend vs monolith, but overall system cost fell by 18 % after removing the costly data lake ops.*  
   * Trade‑off: added complexity of event sourcing and eventual consistency for analytics; mitigated with strong monitoring (CloudWatch Alarms) and a fallback “snapshot” job.*

**R – Result**  
Post‑migration, write latency dropped from 350 ms to <30 ms per service, and the recommendation API’s success rate rose from 94.2 % to 99.6 %. Monthly operational cost decreased by $120k while enabling a 40 % faster model rollout cadence.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for the migration risk and delivered measurable business impact.
- **Dive Deep** – Detailed analysis of latency, cost models, and consistency trade‑offs guided every decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
