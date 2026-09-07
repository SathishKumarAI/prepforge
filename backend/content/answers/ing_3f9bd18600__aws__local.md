---
qid: ing_3f9bd18600__aws__local
question: 'Explain: Running more workloads on the same hardware'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 455
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:35-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to run two new ML inference pipelines (image‑classification and text‑summarization) on the same GPU cluster that already supported our recommendation engine. The goal was to increase throughput by 40 % without adding hardware, while keeping cost per request below \$0.01.

**Action**  
I first *dove deep* into the resource usage patterns of each workload using CloudWatch and NVIDIA‑DCGM metrics. I discovered that the classification model used 12 GB VRAM at peak but only 4 GB idle time, whereas the summarization model was CPU‑bound with sporadic GPU bursts.  

I redesigned the cluster to run *container‑based multi‑tenant inference* on **Amazon SageMaker Neo** and **ECS Fargate**, packing both models into a single ECS task with separate GPU device mounts. I enabled **GPU sharing** via NVIDIA Multi‑Process Service (MPS) and scheduled workloads using an adaptive scheduler that throttles the CPU‑heavy model during GPU peaks.  

To keep *availability* high, I added **Elastic Load Balancing** across two Availability Zones and used **AWS Auto Scaling** to spin up additional Fargate tasks only when queue depth exceeded 200 requests. Cost was reduced by 35 % because we avoided provisioning extra GPU instances.

**Result**  
Throughput rose from 800 inferences/min to 1,120 inferences/min (a 40 % increase). The cost per inference dropped from \$0.012 to \$0.009, meeting the budget target. I documented the design and shared it in a knowledge‑base article that was later used company‑wide for other multi‑tenant ML workloads.

**Leadership Principles Reflected**  
- **Ownership** – I owned the end‑to‑end performance & cost loop.  
- **Dive Deep** – Detailed metric analysis guided every architectural change.  
- **Bias for Action** – Implemented a production‑ready solution in 3 weeks, not months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
