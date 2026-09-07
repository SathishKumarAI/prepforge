---
qid: ing_fdcf6521de__aws__local
question: 'Explain: This video is on the basics of — System Design BASICS: Horizontal
  vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 480
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:05-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: A client wanted to launch a recommendation engine that would serve millions of users per day while keeping latency under 200 ms.  
> *Task*: Design the scaling strategy for the inference layer.  
> *Action*: I mapped out two options: **vertical** (bigger, faster CPUs/GPUs on a single instance) and **horizontal** (many smaller instances behind an Elastic Load Balancer).  
>   - For vertical scaling I calculated that a single `ml.m5.4xlarge` could process ~2 k requests/sec but would hit CPU saturation at 70 % load, leading to 400 ms latency once traffic spiked.  
>   - For horizontal scaling I designed an auto‑scaling group using **Amazon SageMaker Endpoint** with a target utilization of 50 %. The group could spin up to 200 `ml.m5.large` instances within 30 s, guaranteeing sub‑200 ms latency even during flash sales.  
> *Result*: After deployment, the system handled 1.2 M requests/sec with average latency 120 ms and cost savings of **32 %** compared to a purely vertical approach.  
> *Learnings*: I realized that for ML inference workloads, horizontal scaling offers better elasticity and cost‑efficiency; however, it requires careful monitoring (CloudWatch metrics) and graceful warm‑up logic to avoid cold starts.

---

### Bar‑raiser checklist

| What they listen for | Why |
|----------------------|-----|
| **Ownership** – I chose the right AWS service (SageMaker Endpoint), not just “scale up.” | Shows end‑to‑end responsibility. |
| **Dive Deep** – Detailed cost/latency calculations, instance choice, auto‑scaling thresholds. | Demonstrates technical depth. |
| **Quantified Impact** – 1.2 M req/s, 120 ms latency, 32 % cost savings. | Makes success measurable. |
| **Learning from Failure** – Recognized cold‑start issue and added warm‑up logic. | Shows iterative improvement mindset. |

This answer aligns with Amazon’s Leadership Principles while delivering a concrete, data‑driven design solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
