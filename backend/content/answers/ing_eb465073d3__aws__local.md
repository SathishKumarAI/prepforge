---
qid: ing_eb465073d3__aws__local
question: 'Explain: Solution — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 461
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:14-05:00'
sources: []
---

**Situation / Task**  
In a prior role I led the migration of a monolithic e‑commerce platform to a microservices architecture on AWS. The product team required each service (catalog, cart, payments) to own its own data store so that teams could evolve independently without cross‑service schema changes.

**Action**  
I introduced the *Database per Service* pattern and designed the following stack:

| Service | DB type | Rationale |
|---------|--------|-----------|
| Catalog | **Amazon Aurora Serverless (PostgreSQL)** | Complex queries, relational integrity, auto‑scaling on traffic spikes. |
| Cart | **DynamoDB** | Low latency key‑value access, fine‑grained scaling, pay‑per‑request cost model. |
| Payments | **Amazon RDS MySQL** + **Aurora Global Database** | Strong consistency, cross‑region replication for high‑availability and disaster recovery. |

I also added **AWS Secrets Manager** for credential rotation, **AWS IAM** roles for least‑privilege access, and **CloudWatch** metrics to monitor each DB’s CPU and I/O usage.

*Bias for Action*: The migration was completed in 8 weeks, ahead of the 12‑week sprint plan.  
*Dive Deep*: We used **Aurora Serverless**’s “Pause” feature during low traffic periods, saving ~30 % on database costs.

**Result**  
- Team autonomy increased; catalog engineers reduced schema‑related blockers by **70 %**.  
- End‑to‑end latency dropped from 250 ms to 120 ms (average).  
- Operational cost of databases fell from $12k/month to $8.5k/month, a **29 %** savings.

**Learning & Ownership**  
I documented the trade‑offs between relational vs NoSQL choices and conducted a post‑mortem with each team, reinforcing a culture of continuous improvement. This experience exemplifies *Customer Obsession* (better UX) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
