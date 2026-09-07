---
qid: ing_cda98234a8__aws__local
question: 'Explain: Introduction — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 441
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:56-05:00'
sources: []
---

**Situation & Task**  
When I joined the e‑commerce platform team, our recommendation service lagged behind user requests – a 200 ms SLA was breached 35% of the time during peak traffic (≈ 12 k RPS). I owned the task to rebuild the API in Go and move the state store from MySQL to Cassandra.

**Action & Design**  
* **API layer** – Implemented a stateless Go microservice using *gorilla/mux*, wrapped with an OpenTelemetry collector for observability.  
* **Data model** – Designed a wide‑row schema (user_id → item_id, score) and used *cassandra-driver*’s batch writes to guarantee atomicity.  
* **Scalability** – Deployed the service on ECS Fargate with 2 CPU/4 GB per task; auto‑scales by CloudWatch metrics (RPS & latency). Cassandra was provisioned as a 3‑node cluster in us-east‑1 with *Provisioned Throughput* set to 30k RCU/WCU, enabling 99.999% availability.  
* **Cost** – Leveraged Spot Instances for the Cassandra nodes ($0.05 / h) and reserved Fargate capacity ($0.10 / h), cutting infra spend by 40%.  
* **Bias for Action** – Ran chaos‑engineering experiments (simulated node failures) to validate resilience.

**Result**  
Latency dropped from 200 ms to 45 ms (75% reduction); SLA breaches fell below 1% during peak. The Go service handled 25 k RPS with < 2 % CPU utilization, and cost savings of $18k/month were realized.  

**Reflection** – I learned that *ownership* means owning the whole stack, *dive deep* into schema design for NoSQL, and *deliver results* is measured in measurable latency and cost metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
