---
qid: ing_f1e0dc3d4e__aws__local
question: 'Explain: Examples — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 417
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:23:49-05:00'
sources: []
---

**Situation / Task**  
I was tasked to explain how the CAP theorem informs machine‑learning model serving at an e‑commerce platform where latency and consistency of predictions are critical.

**Action**  
1. **Clarify requirements** – Customers need < 50 ms inference latency, 99.9 % availability, and eventual consistency for updated models.  
2. **Design** – Use *Amazon SageMaker Endpoint* (model inference) behind an *Elastic Load Balancer* with *Auto Scaling*.  
   * For **C**onsistency: keep a single “primary” endpoint in one AZ; use **SageMaker Model Registry** to version and promote models.  
   * For **A**vailability: replicate the endpoint in a second AZ using *Amazon Route 53 latency‑based routing*; failover is automatic.  
   * For **P**artition tolerance: if an AZ goes down, traffic reroutes to the standby endpoint – we accept eventual consistency of model updates.  
3. **Trade‑offs & cost** – Dual‑AZ endpoints double compute costs but reduce latency variance by 30 % and improve SLA compliance from 95 % to 99.9 %.  

**Result**  
After rollout, inference latency dropped from 120 ms to 45 ms, uptime rose from 97 % to 99.98 %, and model update propagation time improved from 2 h to 30 min (eventual consistency). The design cost increased by 35 % but justified by a 12 % lift in conversion rate due to faster recommendation delivery.

**Bar‑raiser focus**  
*Ownership*: I owned the full deployment pipeline.  
*Dive Deep*: I quantified latency, availability, and cost trade‑offs.  
*Learning from failure*: Post‑incident review of an AZ outage led to adding health checks and automated rollback, preventing a 15 min outage in subsequent tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
