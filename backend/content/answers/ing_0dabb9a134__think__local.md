---
qid: ing_0dabb9a134__think__local
question: 'Explain: Migrating Live — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 567
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:37:40-05:00'
sources: []
---

**1. Clarify the scope & assumptions**

- Identify what “migrating live” means (shifting production traffic to a new system without downtime).  
- Assume the context is a large‑scale media platform (Canva) handling user uploads, and that the goal is to support 50 M uploads/day.  
- Note constraints: real‑time performance, data consistency, cost, and minimal user impact.

**2. Adopt a mental model**

Use the classic *“Scale‑Up → Scale‑Out”* framework plus *“Blue/Green or Canary” deployment* for zero‑downtime migration.  
Map key concerns: storage capacity, ingestion throughput, processing latency, fault tolerance, monitoring, and rollback strategy.

**3. Step‑by‑step reasoning**

1. **Baseline analysis** – Measure current upload rate, peak times, success/failure rates.  
2. **Capacity planning** – Calculate required storage (e.g., 50 M × avg size) and compute ingest bandwidth (uploads per second).  
3. **Architecture redesign** – Shift from monolithic to micro‑services: separate API gateway, ingestion service, async processing queue, and storage layer (object store + CDN).  
4. **Data pipeline** – Use event sourcing or message queues (Kafka/RabbitMQ) so uploads can be replayed if needed.  
5. **Canary rollout** – Route a small percentage of traffic to the new system; monitor metrics (latency, error rate).  
6. **Blue/Green switch** – Once healthy, redirect all traffic, decommission old services.  
7. **Monitoring & alerting** – Real‑time dashboards for throughput, queue depth, storage usage; set thresholds for automated rollback.  
8. **Cost optimization** – Leverage spot/preemptible instances, tiered storage, and auto‑scaling policies.

**4. Common traps to avoid**

- *Underestimating peak load*: Scale based on average can cause throttling during spikes.  
- *Tight coupling*: Monolithic services hinder independent scaling.  
- *Insufficient monitoring*: Without real‑time alerts you’ll miss cascading failures.  
- *Ignoring rollback paths*: A failed migration without a quick revert will lead to downtime.

**5. Sanity‑check & communicate**

Re‑run the plan against a small subset of data, verify metrics, and confirm that all edge cases (e.g., failed uploads) are handled. When explaining, start with the problem statement, outline the chosen architecture, walk through the migration steps, highlight risk mitigation, and finish with expected performance gains. This structured narrative helps stakeholders grasp both the “why” and the “how.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
