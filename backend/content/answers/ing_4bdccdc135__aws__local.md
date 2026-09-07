---
qid: ing_4bdccdc135__aws__local
question: 'Explain: Software Engineer, Agent - Insurance — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 654
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:48-05:00'
sources: []
---

**Situation (S)**  
At my previous company we launched a new *Agent‑Powered Insurance* platform that let independent agents quote policies in real time. The product was built on AWS and required a recommendation engine to surface the best policy mix for each customer. We were hitting 40 % conversion but struggled with latency on the inference layer, causing a 12 % drop in agent satisfaction scores.

**Task (T)**  
I was tasked to redesign the ML pipeline so that the model could serve predictions under 200 ms while handling a peak of 10k concurrent agents, and at the same time keep operational costs below $5K/month.

**Action (A)**  
1. **Dive Deep & Ownership** – I profiled the current SageMaker endpoint with CloudWatch traces, identified CPU bottlenecks and a single‑point failure in the model registry.  
2. **Design** – Migrated to *Amazon SageMaker Neo* for model compilation targeting Graviton3 instances, enabling 4× inference speed. Implemented *AWS Lambda@Edge* to cache top‑10 policy recommendations per ZIP code (reducing round‑trip latency).  
3. **Scalability & Availability** – Configured Auto Scaling on the Neo endpoint with a target utilization of 70 %. Added an SQS dead‑letter queue for failed requests and integrated CloudWatch Alarms to trigger a fallback Lambda that returns a generic policy set.  
4. **Cost Optimization** – Switched from on‑demand to spot instances for training jobs, saving 35 % on GPU compute. Deployed the inference endpoint in a single region with an S3 lifecycle policy to archive old model artifacts.

**Result (R)**  
*Latency dropped from 650 ms to 120 ms,* boosting agent satisfaction scores by **15 %** and increasing conversion rates to **48 %** (+8 %). Operational cost fell to **$4.2K/month**, a **16 %** reduction, while maintaining 99.99 % uptime.

---

### Amazon Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the end‑to‑end ML pipeline and its impact on agents’ experience. |
| **Dive Deep** | Conducted granular performance profiling, identified hidden bottlenecks, and validated fixes with A/B tests. |

---

### What a Bar‑Raiser Looks For

1. **Ownership** – I led the initiative from diagnosis to production deployment.  
2. **Depth (Dive Deep)** – Detailed metrics and tracing proved my understanding of underlying systems.  
3. **Quantified Impact** – Clear before/after numbers show real business value.  
4. **Learning from Failure** – The fallback Lambda and dead‑letter queue were built after observing prior outage patterns, turning a failure mode into a resilience feature.

---

> *“In building the recommendation engine, I didn’t just fix latency; I re‑architected the entire inference workflow to scale with business growth while keeping costs in check.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
