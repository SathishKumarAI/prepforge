---
qid: ing_e8edc1f216__faang__local
question: 'Explain: Building an eval set — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 405
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:41:08-05:00'
sources: []
---

**Clarify**  
We’re asked how to build a *evaluation set* that supports both **model evaluation** (metrics, drift) and **observability** (runtime monitoring). I’d confirm:  
– What metrics matter (accuracy, latency, bias)?  
– Which data streams are available for real‑time feedback?  
– Do we need synthetic or hold‑out data?  

**Approach**  
1. Define target metrics & thresholds.  
2. Curate a *representative* test set: stratified by class, seasonality, edge cases.  
3. Split into static (offline) and streaming (online) subsets.  
4. Instrument production pipelines to capture predictions + ground truth when possible.  
5. Store logs in an observability platform (e.g., Prometheus + Grafana).  

**Depth**  
- Offline: use cross‑validation, compute confusion matrix, ROC AUC, calibration plots. Complexity \(O(n)\) for metrics, \(O(k\log k)\) for ranking.  
- Online: batch predictions every X minutes; compare to delayed ground truth (e.g., click‑through). Compute drift statistics (KS test, population stability index).  
- Observability: expose KPIs as alerts; implement feature‑store monitoring to detect missing values or distribution shifts.  

**Edge Cases**  
- Label scarcity → use semi‑supervised pseudo‑labels.  
- Concept drift during flash sales → retrain quickly.  
- Missing ground truth → fallback to proxy signals (e.g., revenue).  

**Optimize & Communicate**  
Iterate the eval set: add synthetic anomalies, balance minority classes. Automate data freshness checks. In interviews, I’d stress that a robust eval set is not just a test split but an ongoing feedback loop—aligning ML ops with business goals while keeping latency low and monitoring actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
