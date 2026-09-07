---
qid: ing_9278872073__faang__local
question: 'Q: How do you detect quality degradation in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 411
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:06-05:00'
sources: []
---

**Clarify**  
We’re asked how to spot a drop in an AI model’s performance once it’s live. Key assumptions: the system has monitoring, logged predictions, and ground‑truth labels (or proxy metrics). We need to decide what “quality” means—accuracy, latency, bias, or user satisfaction.

**Approach**  
1. Define target metrics (e.g., F1, AUC, precision@k).  
2. Collect real‑time prediction data with timestamps and confidence scores.  
3. Compare live metrics against a rolling baseline or pre‑deployment snapshot.  
4. Flag statistically significant deviations using control charts (CUSUM, EWMA) or drift detection algorithms.  
5. Correlate alerts with potential causes: input drift, concept drift, infrastructure changes.

**Depth**  
Implement a pipeline that ingests predictions → aggregates per window → computes metrics → runs hypothesis tests (e.g., two‑sample t‑test). Use exponential smoothing to give recent data more weight. For non‑labelled traffic, use proxy signals like click‑through or downstream KPI changes. Complexity is O(n) per window, but with streaming frameworks it’s near‑real‑time.

**Edge Cases**  
- Sparse labels → rely on unsupervised drift tests.  
- Batch inference vs. online → adjust window size.  
- Concept shift that temporarily improves a metric (e.g., overfitting to new data).  
Test by injecting synthetic label noise and monitoring false positives.

**Optimize & Communicate**  
Refine thresholds with A/B experiments; add anomaly‑explanation dashboards for ops. Explain to stakeholders: “We’re watching the F1 score in 5‑minute windows, flagged a 3σ drop after midnight—likely due to a data pipeline change.” This shows structured thinking, clear communication, and depth suitable for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
