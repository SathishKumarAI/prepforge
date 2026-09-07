---
qid: ing_b1c78acf6d__faang__local
question: 'Explain: Error Budget — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 454
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:09-05:00'
sources: []
---

**Clarify**  
You’re asking how an *error budget* can be applied to architectural patterns in an AI system—essentially, how we tolerate failures while maintaining reliability and performance.

**Approach**  
1. Define the error budget (e.g., 5 % downtime over a month).  
2. Map that budget onto key components: data pipelines, model serving, inference latency, monitoring.  
3. Choose architectural patterns that give you measurable SLIs/SLAs for each component.  

**Depth**  
| Pattern | Why it helps meet the budget | Key Metrics |
|---------|-----------------------------|-------------|
| **Circuit Breaker + Bulkhead** | Isolates failures so one noisy model or data source doesn’t cascade. | Error rate per service, latency percentile |
| **Feature Flag + Canary Releases** | Gradual rollout of new models lets you rollback if error budget is breached. | A/B test loss, precision drop |
| **Event‑Sourcing / CQRS for training data** | Decouples ingestion from serving; allows replay without impacting inference. | Data freshness lag, ingest failure rate |
| **Serverless Autoscaling (e.g., AWS Lambda)** | Dynamically scales compute to keep latency within budget during traffic spikes. | Concurrency limits hit, cold‑start frequency |

Compute the *error budget consumption* by aggregating failures across these patterns; if consumption exceeds the threshold, trigger mitigation (rollback, throttling).

**Edge Cases**  
- Sudden data drift → model accuracy drops below SLA.  
- Distributed denial‑of‑service on a single inference endpoint.  
- Long‑running batch jobs that exceed their allotted window.

Test by simulating spikes, injecting faults, and verifying circuit breakers open as expected.

**Optimize & Communicate**  
*Improvements*: Add predictive monitoring (ML Ops) to forecast budget usage; employ chaos engineering to validate bulkheads. *Narrative*: “We treat the error budget like a shared fuel tank—each architectural pattern is a valve that controls consumption, and we monitor the gauge in real time.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
