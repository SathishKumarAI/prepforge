---
qid: ing_924a857303__aws__local
question: 'Explain: Example — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 422
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:53-05:00'
sources: []
---

**Situation / Task**  
I was leading the redesign of our recommendation engine for a global e‑commerce platform that served 1 M active users daily. The legacy monolith used a single shared PostgreSQL database, causing tight coupling between microservices and frequent lock contention.

**Action**  
*Customer Obsession & Ownership*: I championed **Database per Service** as the architectural pattern to isolate data concerns. Each microservice (catalog, inventory, pricing) received its own Amazon RDS Aurora PostgreSQL cluster with point‑in‑time recovery enabled.  
*Dive Deep & Bias for Action*: I wrote a Terraform module that auto‑scales read replicas across three AZs, set up cross‑region read replicas for latency‑critical regions, and implemented automated backups (15‑day retention). I added Amazon CloudWatch metrics and Alarms to trigger Aurora Serverless v2 when traffic dipped below 20 % of peak.  
*Invent & Simplify*: To keep the schema clean, I used AWS Glue to schedule nightly data migrations from the monolith into the new clusters via Snowflake‑style “copy” jobs, avoiding manual ETL scripts.

**Result**  
- **Availability**: 99.999% uptime during the migration window (no service disruption).  
- **Performance**: Query latency dropped 35 %, and the catalog service’s write throughput increased from 300 ops/s to 1,200 ops/s.  
- **Cost**: Leveraging Aurora Serverless reduced compute spend by 28 % during off‑peak periods.

**Reflection**  
The biggest learning was that a single “shared” database is a hidden bottleneck; decoupling services early prevented future scaling crises. I documented the migration playbook and shared it with all teams, fostering a culture of ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
