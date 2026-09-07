---
qid: ing_aeaa49a1a4__aws__local
question: 'Explain: Throughput'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 594
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:32-05:00'
sources: []
---

**Throughput** is the number of inference requests or training steps an ML system can process per second (or minute).  

---

### Behavioral – *STAR*  
**Situation:** Our recommendation engine had to serve 10 M daily users with <200 ms latency, but a spike during holiday sales pushed throughput to 2.5× the peak.  
**Task:** Scale inference capacity without exceeding our $500k/month budget.  
**Action:** I owned the solution: I profiled the model (GPU vs CPU), split the pipeline into *pre‑processing*, *model* and *post‑processing* stages, then deployed a **SageMaker Endpoint** behind an **Application Load Balancer** with auto‑scaling based on target CPU < 70%.  
I introduced **batch inference** for non‑real‑time jobs, moving them to **AWS Batch** + **ECS Fargate**, and used **Amazon CloudWatch** metrics to trigger scaling.  
**Result:** Throughput increased from 1,200 req/s to 4,800 req/s (+300 %) while keeping latency <180 ms; cost dropped 15 % by shifting idle GPU hours to spot instances.

---

### Technical – *Design & Trade‑offs*  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Load balancer | ALB | Handles HTTP/HTTPS, path‑based routing, auto‑scaling target groups. |
| Inference | SageMaker Endpoint (multi‑model) | Managed scaling, GPU/CPU mix, easy A/B testing. |
| Batch jobs | AWS Batch on Fargate | Cost‑effective for large offline inference; no server maintenance. |
| Monitoring | CloudWatch + SNS | Real‑time alerts, auto‑scale triggers. |

**Scalability:** Auto‑scaling ensures linear growth with traffic; batch jobs decouple from real‑time load.  
**Availability:** Multi‑AZ endpoints and ELB health checks give 99.95 % SLA.  
**Cost:** Spot instances + batch reduce idle capacity; trade‑off is slightly higher latency for batch runs.

---

### Bar‑raiser cues  

- **Ownership:** Took full responsibility from profiling to deployment.  
- **Dive Deep:** Quantified CPU/GPU usage, latency buckets, and cost per inference.  
- **Quantified Impact:** 300 % throughput lift, 15 % cost savings.  
- **Learning from Failure:** After an unexpected spike that caused a timeout, I added request throttling and revisited the batch window—resulting in smoother scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
