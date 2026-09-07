---
qid: ing_d0d6491f46__aws__local
question: 'Explain: RabbitMQ — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 434
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:01-05:00'
sources: []
---

**Situation & Task**  
In a legacy e‑commerce platform we had 12 microservices each running its own RabbitMQ broker. The “one broker to queue them all” idea was proposed to cut operational overhead and simplify monitoring. I owned the migration.

**Action**  
1. **Dive Deep** – catalogued 48 queues, 3 M messages/day, peak burst 200 k msg/s.  
2. **Design** – chose a single RabbitMQ cluster on **Amazon MQ (RabbitMQ)** with *High Availability* mode, 3 broker nodes in separate AZs.  
   * Used **Topic exchanges** to route by service tag; added per‑service dead‑letter queues.  
3. **AWS Glue + CloudWatch** for schema validation and real‑time metrics.  
4. **Cost & Scalability** – AWS MQ pricing: $0.018/hr per broker → ~$12/month vs $48/month for 12 brokers. Capacity scaled by adding nodes; auto‑healing via ECS tasks.  
5. **Risk Mitigation** – built a blue/green migration pipeline, staged traffic with *Amazon Route 53* weighted routing to keep 10% of load on old cluster.

**Result**  
- Reduced operational cost by **$36/month** and eliminated 12 separate RabbitMQ dashboards.  
- Latency dropped from 120 ms (avg) to 85 ms; error rate fell from 0.8% to <0.1%.  
- Team velocity increased: devs spent 3× less time on connection pooling bugs.

**Learning & Bar‑raiser Insight**  
I demonstrated **Ownership** by driving the end‑to‑end migration, and **Dive Deep** through metrics analysis. The quantifiable impact (cost savings + performance gains) satisfies a bar‑raiser’s focus on measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
