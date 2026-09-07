---
qid: ing_88979b3cde__aws__local
question: 'Explain: Performance Comparison — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 393
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:17-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a product that had to decide between an on‑prem AI moderation stack and a managed AWS solution for real‑time content filtering (video, image, text). The business needed 99.9 % accuracy with <200 ms latency at peak traffic of 5 M requests/day.

**Action**  
I scoped the requirements:  
* **Accuracy & drift** → continuous model evaluation.  
* **Latency & throughput** → autoscaling and caching.  

I designed two architectures:

| Architecture | AWS Services | Key Metrics |
|--------------|--------------|-------------|
| **Self‑hosted** | EC2 + SageMaker Training, ECS, Redis | 95 % accuracy; 350 ms latency; $15k/month (compute + storage) |
| **Managed** | Amazon SageMaker Pipelines, Rekognition, Comprehend, Lambda, CloudFront | 99.7 % accuracy; 120 ms latency; $8k/month (data transfer + inference charges) |

I built a proof‑of‑concept with Rekognition for image moderation and Comprehend for text. The managed stack reduced latency by **60 %** and cost by **47 %**, while meeting the accuracy target. I also added CloudWatch dashboards to monitor drift and trigger retraining, ensuring long‑term ownership.

**Result**  
The team adopted the managed solution, cutting operational overhead by 70 %. We maintained a 99.7 % moderation success rate over six months, preventing $2M in potential brand‑damage incidents.  

*Leadership Principles:* **Ownership** (taking end‑to‑end responsibility), **Dive Deep** (profiling and cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
