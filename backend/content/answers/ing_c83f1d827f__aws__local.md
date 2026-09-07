---
qid: ing_c83f1d827f__aws__local
question: 'Explain: doing insane things to it by the — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 448
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:59-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a data‑science team that built a real‑time recommendation engine on an auto‑scaling SageMaker cluster. The model had to serve 200k concurrent requests with < 50 ms latency, but we were hitting sporadic spikes that caused node churn and degraded quality. I was tasked with proving the system’s resilience under *deterministic* load bursts before we rolled out to production.

**Action**  
I adopted Will Wilson’s “Testing Distributed Systems w/ Deterministic Simulation” framework:

1. **Requirements & Design** – Defined a deterministic event‑driven model of our inference pipeline (SageMaker endpoint → Lambda orchestration → DynamoDB cache).  
2. **AWS Services** – Built the simulation on **Step Functions** + **EventBridge** to replay events, and used **CloudWatch Synthetics** for latency checks.  
3. **Scalability & Availability** – The simulation ran in a separate VPC with **PrivateLink** to avoid cross‑account traffic; we used **Spot Instances** for cost control.  
4. **Metrics** – Ran 100 deterministic scenarios, capturing mean latency (48 ms), 95th percentile (62 ms), and error rate (< 0.1%).  
5. **Bias for Action & Invent & Simplify** – Added a *Circuit Breaker* Lambda that throttled requests when cache hit‑rate fell below 70%, eliminating cascading failures.

**Result**  
Post‑simulation, the live system saw a **32% reduction in latency variance** and a **0.05% drop in error rate**, translating to $120k saved on instance usage per month. I documented the simulation framework as an internal repo; it’s now used by 4 teams for quarterly reliability reviews.

**Reflection**  
I learned that deterministic replay exposes hidden edge cases early, turning “insane” load patterns into actionable insights. The bar‑raiser will note my ownership of end‑to‑end testing, deep dive into distributed event flow, and quantified impact on cost & performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
