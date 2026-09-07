---
qid: ing_22d151855a__faang__local
question: 'Explain: Monitoring Metrics — Performancetuning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 446
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:16-05:00'
sources: []
---

**Clarify**  
We’re asked how to monitor and tune the performance of a machine‑learning system in production.  
Key assumptions: we have a continuous‑delivery pipeline, real‑time inference, and SLA requirements (latency, throughput, accuracy).  

**Approach**  
1. **Define metrics** – latency, error rate, AUC/accuracy, drift scores, resource usage.  
2. **Instrument pipelines** – add timestamps at each stage, log predictions, capture feature distributions.  
3. **Set thresholds & alerts** – e.g., 95th‑percentile latency > 200 ms triggers an alert; accuracy drop > 1% signals model decay.  
4. **Root‑cause analysis** – correlate metric spikes with input drift, data pipeline changes, or infrastructure load.  
5. **Automated tuning loop** – when alerts fire, retrain on recent data, update hyperparameters via AutoML or Bayesian optimization, redeploy.  

**Depth**  
- *Latency*: measure per‑request and batch inference times; use percentile histograms to capture tail behavior.  
- *Accuracy/Drift*: compute online metrics (e.g., ROC‑AUC) and drift tests (KS test on feature distributions).  
- *Resource*: CPU/GPU utilization, memory pressure; ensure autoscaling policies align with observed load.  
Complexity: O(n) per request for metric collection; model retraining is the heavy cost but can be scheduled during low traffic windows.  

**Edge Cases**  
- Sudden spike in data volume → queue back‑pressure, increased latency.  
- Concept drift without label feedback → unsupervised drift detection only.  
- Model updates causing regression → A/B testing before full rollout.  

**Optimize & Communicate**  
Iteratively tighten thresholds, add predictive alerts (e.g., forecasted latency spikes). Document the monitoring stack and recovery playbooks so that any engineer can act quickly. This structured, metrics‑driven loop is what FAANG teams use to keep ML systems reliable at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
