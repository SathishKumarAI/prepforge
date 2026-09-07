---
qid: ing_e3ef1f89ca__faang__local
question: 'Explain: Monitoring and Alerting — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 551
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:00-05:00'
sources: []
---

**Clarify**  
You’re asked to explain *monitoring & alerting* in ML systems—why it matters, what typical pitfalls look like, and how you’d design robust solutions. I’ll assume we’re dealing with production‑grade pipelines (data ingestion → training → serving) that must run 24/7 with SLAs.

**Approach**  
1. Identify key observability dimensions: data quality, model drift, latency, resource usage, error rates, and infra health.  
2. For each dimension list common failure modes.  
3. Propose a layered architecture (metrics → alerting rules → incident workflow).  
4. Highlight tooling choices and trade‑offs.

**Depth**  

| Dimension | Common Problem | Solution |
|-----------|----------------|----------|
| **Data drift** | Feature distribution shifts cause accuracy drop | Continuous feature monitoring + drift‑score alerts; retrain trigger |
| **Model performance decay** | Validation loss rises after deployment | Online A/B testing + rollback policies |
| **Latency spikes** | Serving infra under heavy load | Auto‑scaling + request queuing with SLA thresholds |
| **Resource exhaustion** | GPU/CPU memory leaks | Prometheus metrics + pod auto‑termination |
| **Feature pipeline failures** | Missing or corrupted raw data | Kafka consumer lag alerts + data validation jobs |
| **Model poisoning attacks** | Adversarial inputs corrupt model | Input anomaly detection & rate limiting |
| **Infrastructure outages** | Network partitions, DB failover | Redundant clusters + health‑check probes |
| **Alert fatigue** | Too many noisy alerts | Aggregation, suppression rules, and incident triage dashboards |

Complexity: Metrics ingestion O(N), alert evaluation linear in rule count. Trade‑offs involve freshness vs overhead (e.g., 1 s vs 10 s polling).

**Edge Cases**  
- Sudden data source schema changes → validation fails; handle with graceful degradation.  
- Model retraining pipeline stalls → fallback to last good checkpoint.  
- Distributed tracing missing → fallback to coarse metrics.

**Optimize & Communicate**  
Iteratively tighten thresholds using Bayesian change‑point detection, reducing false positives. Use a “runbook” that auto‑generates remediation steps. When presenting, start with the business impact (e.g., 1% accuracy loss → $X revenue), then walk through the table, ending with how the design scales to millions of requests and multiple models. This showcases structured thinking, depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
