---
qid: ing_9aae2d2d5d__aws__local
question: 'Explain: Latency is killing your AI feature. Walk me through your options.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 565
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:03-05:00'
sources: []
---

**Situation (S)** – In Q3 2024 we launched a recommendation AI that pushed personalized product cards in real time on our e‑commerce site. By the end of the month latency averaged **1.8 s**, exceeding the 500 ms threshold and driving a 12% drop in click‑through rate.

**Task (T)** – Reduce inference latency to <500 ms while keeping cost under $0.05 per request, and maintain >99.9 % availability.

**Action (A)** –  
1. **Profiling & Dive Deep**: Instrumented the pipeline with CloudWatch + X-Ray; identified that 70 % of delay came from SageMaker batch transform latency (cold start).  
2. **Model Simplification**: Trained a distilled model (30 % fewer parameters) and deployed it on **AWS Inferentia** via SageMaker Endpoint, cutting inference time to 180 ms.  
3. **Edge Caching**: Leveraged **CloudFront Functions** + Lambda@Edge to pre‑serve top‑20 recommendations per user segment, reducing backend calls by 40%.  
4. **Auto‑Scaling & Availability**: Configured endpoint with *Multi‑AZ* and *Endpoint Autoscaling* (min 2, max 10); set up CloudWatch alarms for latency spikes.  
5. **Cost Control**: Used Spot Instances for batch jobs; switched to **SageMaker Neo** for on‑prem inference on a subset of traffic, saving ~15 % monthly.

**Result (R)** – Latency dropped from 1.8 s to **180 ms** (90 % improvement). Click‑through rate rebounded by **18 %**, and revenue grew $2M+ over the next quarter. Monthly inference cost fell from $120K to $95K, a **20 % savings**.

---

### Bar‑raiser takeaways
- **Ownership**: Took full responsibility for end‑to‑end latency issue.  
- **Dive Deep**: Used telemetry to pinpoint root cause.  
- **Quantified Impact**: Delivered concrete metrics (latency, CTR, cost).  
- **Learning from Failure**: Documented trade‑offs between model size, inference speed, and edge caching for future feature rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
