---
qid: ing_a71e0c8a10__faang__local
question: 'Explain: 2.1 Traffic Estimates — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 448
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:13:06-05:00'
sources: []
---

**Clarify**  
We need to estimate how many requests per second (RPS) our web service will receive so we can size a load‑balancer cluster (number of instances, memory, CPU). Ask: peak vs average traffic, growth rate, burstiness, request size, and SLA requirements.

**Approach**  
1. Gather historical logs or analytics data.  
2. Aggregate by time bucket (e.g., 5 min) to capture peaks.  
3. Fit a statistical model (Poisson/Negative‑Binomial) to estimate λ (mean RPS).  
4. Apply safety factor (× 1.5–2 for burst tolerance).  
5. Convert to instance count: `instances = ceil((λ * safety_factor) / per_instance_RPS)`.

**Depth**  
- **Data ingestion**: Use a time‑series DB or Kafka + Prometheus.  
- **Modeling**: Poisson works if arrivals are independent; use Negative‑Binomial if overdispersion observed.  
- **Per‑instance capacity**: Measure in staging (e.g., 200 RPS per LB node).  
- **Complexity**: O(n) for aggregation, negligible for modeling.  
- **Trade‑offs**: Simpler models are fast but may under‑reserve; richer models give tighter sizing at cost of compute.

**Edge Cases**  
- Sudden flash crowds (e.g., viral content).  
- Seasonal spikes (holidays, promotions).  
- API abuse or DDoS attempts.  
Test by replaying historic peaks and injecting synthetic bursts.

**Optimize & Communicate**  
Iterate the safety factor based on observed tail latency. Automate re‑calculation nightly and trigger scaling alerts. Present the pipeline: data → model → sizing rule, with visual dashboards so stakeholders see confidence intervals. This structured flow demonstrates clear problem framing, sound engineering decisions, and measurable outcomes—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
