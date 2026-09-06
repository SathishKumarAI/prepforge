---
qid: vq_12af5286ba__faang__local
question: what types of biases can happen through sampling?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 524
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:28-05:00'
sources: []
---

**Clarify**

> *Question:* “What types of biases can occur when we sample data for a data‑engineering pipeline?”  
Assumptions: the sampling is random or stratified, but we’re still prone to systematic errors that affect downstream analytics.

---

**Approach**

1. Identify bias sources (selection, measurement, non‑response).  
2. Explain each with an example.  
3. Discuss mitigation tactics (sampling design, weighting, audits).

---

**Depth**

| Bias | What it is | Example | Impact |
|------|------------|---------|--------|
| **Selection bias** | Sample isn’t representative of the target population. | Pulling user logs only from a 10 % active‑user bucket. | Models over‑estimate engagement for inactive segments. |
| **Sampling bias (under/over‑sampling)** | Certain subgroups are disproportionately represented. | Stratified sample gives 90 % of users from one region. | Skewed geographic insights, unfair pricing models. |
| **Non‑response bias** | Missing data is correlated with the variable of interest. | Users who opt out of telemetry; their crash rates differ. | Underestimates failure rates. |
| **Survivorship bias** | Only surviving entities are sampled. | Analysing only servers that survived a recent outage. | Over‑optimistic reliability metrics. |
| **Measurement bias** | Inaccurate measurement tools skew the sample. | Using a sensor with a 5 % calibration error on IoT devices. | Systematic error in time‑series analysis. |

---

**Edge Cases**

- Small sample sizes → high variance and accidental biases.  
- Time‑varying populations (e.g., seasonality) can make static samples stale.  
- Hidden confounders that affect both sampling probability and outcome.

---

**Optimize & Communicate**

1. **Design**: Use stratified random sampling + oversample rare events; apply post‑stratification weights.  
2. **Validate**: Compare sample distributions to known population metrics (e.g., census data).  
3. **Iterate**: Continuously monitor bias indicators and adjust the sampling scheme.  

Explain this process clearly, emphasizing that reducing bias is a continuous operational discipline rather than a one‑off fix. This demonstrates structured thinking, depth of knowledge, and practical problem‑solving—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
