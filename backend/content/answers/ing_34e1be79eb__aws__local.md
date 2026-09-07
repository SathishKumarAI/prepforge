---
qid: ing_34e1be79eb__aws__local
question: 'Explain: Choosing the Right Approach — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 430
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:21-05:00'
sources: []
---

**Choosing Stateful vs. Stateless for ML Pipelines**  
*Leadership Principles: Ownership & Dive Deep*

**Situation:** At my previous company we built a real‑time recommendation engine that processed ~50 k events per second. The team debated whether to keep user session data in the inference service (stateful) or use a stateless Lambda with DynamoDB lookups.

**Task:** I owned the decision and needed to prove which architecture would meet latency (<200 ms), cost ($0.30 M/month), and fault‑tolerance goals.

**Action:**  
1. **Requirements & Trade‑offs** – Defined *stateful* as a containerized inference service on ECS with Redis for session cache; *stateless* as Lambda + API Gateway + DynamoDB Streams.  
2. **Design & AWS Services** – Built two prototypes:  
   - Stateful: ECS Fargate + Elasticache‑Redis, auto‑scaling based on CPU.  
   - Stateless: Lambda (15 ms timeout) + DynamoDB (DAX cache).  
3. **Metrics Collection** – Ran a 72‑hour load test; captured latency percentiles, cold‑start frequency, and EBS read/write ops.

**Result:** The stateless design reduced average latency to 120 ms (vs. 210 ms for stateful) and cut monthly spend from $0.30 M to $0.18 M by eliminating Redis costs. It also eliminated a single point of failure, improving 99.95% availability. I documented the findings in a playbook that is now used across three data‑science teams.

**Learning:** The exercise taught me that *stateful* isn’t always faster; deep analysis of workload patterns and cost models can reveal counterintuitive wins. It reinforced my habit of owning end‑to‑end experiments, diving into metrics, and sharing transparent results with stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
