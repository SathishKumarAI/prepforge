---
qid: ing_e23691a716__aws__local
question: 'Explain: Distribution shift — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 385
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:01-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑detection team, our model’s accuracy dropped from **92 % → 78 %** within two weeks after a new payment method was introduced. I had to diagnose why the shift happened and redesign the pipeline.

**Action (Dive Deep + Ownership)**  
1. **Root‑cause analysis** – plotted feature histograms before/after change; discovered heavy covariate shift in “transaction time” and “device type”.  
2. **Formal definition** – distribution shift is when the joint input–output distribution \(P_{\text{train}}(X,Y)\neq P_{\text{prod}}(X,Y)\).  
3. **Mitigation strategy** –  
   * Re‑train every 24 h on a sliding window of recent data (AWS SageMaker Pipelines).  
   * Implement **concept drift detectors** (Drift‑Detection Package) to trigger alerts when Kullback–Leibler divergence > 0.1.  
4. **Infrastructure** – S3 for raw logs, Glue for ETL, Athena for exploratory queries, SageMaker Endpoint with auto‑scaling.  

**Result**  
- Accuracy rebounded to **> 90 %** within 48 h.  
- Drift alerts reduced manual triage by **60 %**, saving ~30 k person‑hours annually.  
- Cost impact: 10 % increase in compute but offset by avoided fraud losses (> $4M).  

**Learnings (Bias for Action + Deliver Results)**  
Early monitoring prevented a cascading outage; I now champion “shift‑aware” pipelines across all ML teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
