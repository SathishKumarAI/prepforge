---
qid: ing_7cac416597__aws__local
question: 'Q: When would you self-host vs use API providers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 390
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:51-05:00'
sources: []
---

**Situation & Task**  
I was leading a product that required real‑time image classification for a mobile game. The team debated whether to self‑host an inference engine or pay for a third‑party API (e.g., Google Vision). I needed to decide based on cost, latency, and data privacy.

**Action**  
*Ownership & Bias for Action*: I scoped the problem with a 5‑point rubric—latency (<100 ms), throughput (≥10k requests/sec), data residency, and cost per inference.  
*Dive Deep*: I benchmarked two open‑source models on an EC2 g4dn.xlarge (GPU) and measured 80 ms latency at 12k req/s for a ResNet50 pipeline. The API delivered 90 ms but charged $0.001 per request, totaling ~$36 k/month for projected traffic.  
*AWS Services*: I designed the self‑hosted stack with **ECS Fargate**, **Application Load Balancer** (ALB), and **S3** for model storage, achieving 99.9% availability via an Auto Scaling group and a multi‑AZ deployment.  

**Result**  
I chose to self‑host: monthly cost dropped from $36 k to ~$12 k, latency improved by 20%, and all user data stayed within our VPC—meeting GDPR compliance. The product launch saw a 15% increase in engagement due to faster feedback loops.  

**Bar‑raiser note**  
The interviewer will spot my clear ownership, the deep technical dive (benchmarks, AWS architecture), quantified impact, and learning that external APIs can be cost‑effective only when data privacy is non‑critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
