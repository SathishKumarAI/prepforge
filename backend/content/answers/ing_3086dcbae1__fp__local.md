---
qid: ing_3086dcbae1__fp__local
question: 'Explain: Smart alerts in ThirdEye, LinkedIn’s real-time monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 468
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:48:05-05:00'
sources: []
---

### Smart Alerts in LinkedIn’s ThirdEye

ThirdEye is a real‑time monitoring platform that watches thousands of metrics on the LinkedIn stack. At its core, a *smart alert* is an instance of **online anomaly detection** coupled with **causal inference** and **human‑centric prioritisation**.

1. **Fundamental problem** – We observe a time series \(x_t\) (e.g., request latency). The goal is to decide in real time whether the current observation deviates from “normal” behaviour.  
2. **Why it must work this way** – Normality is defined by a probabilistic model \(\mathcal{M}\) that learns the joint distribution of metrics under healthy conditions. When \(x_t\) falls outside a high‑confidence region (e.g., 99.9 % quantile), we flag an *anomaly* because the probability of observing such a value under \(\mathcal{M}\) is < 0.001.  
3. **Deep principle** – This is Bayesian change‑point detection: we maintain a posterior over the state (healthy vs. degraded). The alert is triggered when the posterior mass on “degraded” exceeds a threshold.  
4. **Causal pruning** – To avoid *alert fatigue*, ThirdEye propagates an anomaly through a causal graph of metrics. If the root cause can be attributed to a downstream service, higher‑level alerts are suppressed in favour of the originating one.  
5. **Non‑obvious insight** – The real power comes from **continuous learning**: every alert is fed back as labelled data, so \(\mathcal{M}\) refines its notion of normality automatically. This turns a static threshold into an adaptive detector that remains accurate even as workloads evolve.

Thus, smart alerts are not merely “high‑value alarms”; they are *probabilistic change‑point detectors* that learn, reason causally, and minimise noise to deliver actionable insights in milliseconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
