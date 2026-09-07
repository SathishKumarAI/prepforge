---
qid: ing_8679bcb7ab__aws__local
question: 'Explain: So our input in this case is — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 396
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:30-05:00'
sources: []
---

**Situation & Task**  
I led a 12‑person team that migrated Google’s legacy recommendation engine to a micro‑service architecture on GCP, with the goal of reducing latency by 40 % and increasing throughput for 1 billion daily requests.

**Action (Technical)**  
* **Requirements** – Real‑time inference (<50 ms), fault tolerance, zero data loss.  
* **Design** – Decomposed monolith into stateless services; used Pub/Sub for event streaming, Cloud Functions for lightweight transformations, and Vertex AI Pipelines for model training/serving.  
* **AWS‑style choices** – If on AWS: *EventBridge → Lambda → SageMaker*; *DynamoDB* for state persistence; *SQS* for back‑pressure.  
* **Scalability & Availability** – Auto‑scaling with horizontal pod autoscaler, global load balancer (Cloud Load Balancing), and multi‑region failover.  
* **Cost & Trade‑offs** – Opted for serverless where latency allowed; reserved instances for critical inference nodes to cut 25 % on compute spend.

**Result**  
Latency dropped from 120 ms to 70 ms (≈42 %), throughput rose by 1.8×, and cost fell 30 %. A/B tests showed a 5 pp increase in click‑through rate due to fresher recommendations.

**Learning & Ownership**  
I owned the rollback plan: a blue/green deployment with instant circuit breakers. Post‑mortem of a sudden spike led us to add adaptive throttling, illustrating *Bias for Action* and *Dive Deep*. This experience reinforced that building at scale requires treating each micro‑service as an independent product—“own it, ship it, learn from it.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
