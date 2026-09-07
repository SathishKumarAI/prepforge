---
qid: ing_11c3621bf2__aws__local
question: 'Explain: Latency Estimation — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 499
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:50-05:00'
sources: []
---

**Situation** – While building a real‑time recommendation engine for an e‑commerce platform (≈ 5 M daily users), the team needed a quick latency estimate to decide whether to use SageMaker endpoints or a Lambda‑based inference stack.

**Task** – Deliver a back‑of‑the‑envelope latency figure within 24 h that would guide the architecture decision and justify budget allocation.

**Action** –  
1. **Profile components**: Gathered CPU, GPU, memory usage from a single SageMaker `ml.m5.xlarge` instance (inference time = 120 ms) and from a container on Fargate (`c5.large`) (inference time = 200 ms).  
2. **Scale assumptions** – 10 k concurrent requests → request‑level latency ≈ CPU × (1 + 0.05 × concurrency).  
3. **Formula** – `Latency ≈ Baseline + α·log(concurrency)`; solved for α using the two data points, yielding ~ 6 ms per log unit.  
4. **Result projection** – For 10 k requests → latency ≈ 120 ms (SageMaker) vs 200 ms (Fargate).  

**Result** – The estimate guided us to provision a SageMaker endpoint with auto‑scaling, saving ~ $3K/month versus the cost of maintaining a custom Fargate cluster. Latency stayed below the 150 ms SLA for 95% of traffic, meeting our customer obsession goal.

---

### Design & AWS Services
- **SageMaker Endpoint** (managed scaling, warm pool) → high availability, low cold‑start latency.  
- **Lambda + API Gateway** as fallback for burst traffic.  
- **CloudWatch Metrics** for real‑time monitoring; auto‑scale based on `Invocations` and `Duration`.  

### Bar‑raiser Takeaway
- Demonstrated *Ownership* by proactively estimating impact and *Dive Deep* into profiling data.  
- Quantified the trade‑off (latency vs cost) and learned that a simple log‑based model can guide critical architecture decisions under time pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
