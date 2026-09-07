---
qid: ing_b798caf1fb__faang__local
question: 'Explain: Online evaluation — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 431
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:53-05:00'
sources: []
---

**Clarify**  
We need to explain *online evaluation*—how an AI system continuously measures its performance while in production, and how *observability* gives us visibility into that process. I’ll assume we’re talking about supervised models (e.g., recommendation or fraud‑detection) deployed as APIs.

**Approach**  
1. Define the metrics of interest (accuracy, latency, error rates).  
2. Show how to capture those metrics in real time: request/response logs, feature drift checks, and A/B test counters.  
3. Explain feedback loops: automatic retraining triggers when thresholds are crossed or manual review pipelines.  

**Depth**  
- **Metric collection**: use a streaming platform (Kafka) feeding into an OLAP engine for near‑real‑time dashboards.  
- **Label acquisition**: online labels via user interactions, click‑through rates, or human annotators; otherwise rely on proxy signals.  
- **Model drift detection**: compare feature distributions to training data using KS tests; monitor predictive score distribution shifts.  
- **Alerting & rollback**: if error rate > X% for Y minutes, trigger a canary rollback and alert ops.  
- Complexity is O(1) per request for metrics, but batch drift checks are O(n) over recent window.

**Edge cases**  
- Cold‑start users → missing features → imputed defaults may bias evaluation.  
- Non‑stationary environments (seasonal spikes) can cause false positives in drift detection.  
- Label lag: if ground truth arrives after hours, online metrics may be stale.

**Optimize & Communicate**  
To improve, we could use *online learning* to update weights incrementally, reducing retrain cycles. For communication, I’d present a simple diagram: Request → Model → Response ↔ Metrics Collector → Dashboard → Alert System. Emphasize that observability isn’t just logs—it’s the full pipeline of metrics, drift checks, and automated actions that keep AI reliable at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
