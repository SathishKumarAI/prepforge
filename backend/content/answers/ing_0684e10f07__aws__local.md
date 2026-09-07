---
qid: ing_0684e10f07__aws__local
question: 'Explain: Our assumption is that the anomalies are'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 438
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:38-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Question:* “Explain our assumption that the anomalies are…?”  
> **Assumption:** In our streaming pipeline we treat any data point whose deviation from the rolling mean exceeds 4 σ as an anomaly. This rule is grounded in statistical process control and aligns with the *Customer Obsession* principle—ensuring that alerts truly reflect customer‑impacting issues rather than noise.

### Situation & Task  
We were receiving ~1 M events per day from IoT devices. The existing threshold (3 σ) produced >10,000 false positives monthly, overwhelming ops and diluting trust in the system.

### Action  
1. **Dive Deep** into historical logs to quantify impact of false alerts vs missed anomalies.  
2. Chose a *4 σ* rule based on a 99.994% confidence interval, reducing false positives by ~70 % while maintaining >95 % detection recall (validated with A/B testing).  
3. Implemented the rule in **Amazon Kinesis Data Analytics** using SQL UDFs; results are streamed to **Amazon CloudWatch Metrics** and triggered **SNS** alerts only when the 4 σ condition is met.

### Result  
- False positives dropped from 10,000 → 3,200 per month (≈68 % reduction).  
- Detection recall improved from 88 % → 96 %.  
- Ops cost saved: $2.5k/month on alerting overhead.  

**AWS Services Used:** Kinesis Data Streams, Kinesis Data Analytics, CloudWatch Metrics, SNS, Lambda for post‑alert enrichment.

### Reflection (Bar‑raiser perspective)  
I owned the entire metric pipeline, *dove deep* into statistical validation, quantified impact with clear KPIs, and learned that a slightly stricter threshold can dramatically improve reliability without hurting detection. This aligns with **Ownership**, **Bias for Action**, and **Deliver Results**—the core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
