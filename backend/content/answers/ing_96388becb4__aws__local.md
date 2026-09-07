---
qid: ing_96388becb4__aws__local
question: 'Explain: Challenges: — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 487
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:28-05:00'
sources: []
---

**Challenge:** Balancing stateful and stateless designs for ML inference pipelines on a global scale.

**Situation (S)**  
At my previous role we launched a recommendation engine that served 4 M daily requests. The model required per‑user session context, but our existing infrastructure was purely stateless Lambda functions, leading to cache misses and a 12 % latency spike during peak hours.

**Task (T)**  
I had to redesign the inference layer so it could maintain short‑term state without sacrificing the elasticity and cost benefits of a serverless stack.

**Action (A)**  
* **Ownership & Dive Deep:** I mapped every request path, identified the 3 GB of session data that persisted for <5 min.  
* **Design:** Introduced an in‑memory cache layer using Amazon ElastiCache Redis (partitioned by user segment) between Lambda and SageMaker endpoint. The stateful cache was sharded to keep latency <50 ms, while the stateless Lambda still handled request orchestration.  
* **AWS Services & Trade‑offs:**  
  * **Lambda** – for rapid scaling; cost ~$0.0000167 per invocation.  
  * **ElastiCache Redis** – memory‑based stateful store; cost ~$1.20/hr per node, but reduced SageMaker invocations by 35 %.  
  * **SageMaker Endpoint** – heavy model inference; kept as a single endpoint for consistency.  

**Result (R)**  
Latency dropped from 180 ms to 65 ms (70 % improvement). Cost decreased by 28 % while maintaining the same accuracy. The system now handles 6 M requests/day with <99.9 % availability.

---

### What a bar‑raiser looks for

* **Ownership:** Took full responsibility from profiling to deployment.  
* **Dive Deep:** Quantified latency, cost, and cache hit ratios.  
* **Impact:** Demonstrated clear, measurable performance gains.  
* **Learning:** After the first rollout we observed cache evictions during flash sales; we added a TTL‑based eviction policy, turning an initial failure into a more resilient design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
