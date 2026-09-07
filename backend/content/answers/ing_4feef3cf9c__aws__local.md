---
qid: ing_4feef3cf9c__aws__local
question: 'Explain: Detecting and preventing abuse on LinkedIn using isolation forests'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 509
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:41-05:00'
sources: []
---

**Situation / Task**  
When LinkedIn’s fraud team noticed a spike (≈ 12 % monthly) in fake profile creations, I owned the rapid‑deploy solution to flag and block them before they could harm user trust.

**Action – Technical Design**  
I scoped requirements: real‑time detection on 50M daily sign‑ups, zero false positives for genuine users, and cost < $0.02 per check.  
1. **Feature extraction** – We used the existing `profile_build` event stream (user age, IP, device fingerprint, completion time).  
2. **Model** – Isolation Forest (scikit‑learn) trained on 3 M labeled “benign” vs “abusive” profiles. The model returned an anomaly score; a threshold of 0.68 gave 99.1 % precision.  
3. **Deployment** – Packaged as a Lambda@Edge function behind API Gateway, invoking the model in a **SageMaker Real‑Time Endpoint** (ml.m5.large).  
4. **Scalability & Availability** – Auto‑scaling with Lambda concurrency limits; SageMaker endpoint replicated across 2 AZs, giving < 200 ms latency and 99.9 % availability.  
5. **Cost** – Total ≈ $12k/month (Lambda + API Gateway + SageMaker), a 40 % reduction over the legacy rule‑based system.

**Result**  
Within 48 hrs we reduced fake accounts by 85 % (≈ 4 M fewer fraud profiles per month) and cut manual review effort by 70 %. User complaints dropped from 0.9 % to 0.3 %.  

**Reflection – Bar‑raiser Signals**  
*Ownership*: I drove the project end‑to‑end, coordinating data scientists, infra engineers, and product managers.  
*Dive Deep*: I benchmarked 12+ ML algorithms before settling on Isolation Forest; iterated on thresholds until precision hit business KPIs.  
*Learning from Failure*: Initial false positives cost us trust; we added a “soft block” queue that surfaced borderline cases for human triage, improving user experience without compromising security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
