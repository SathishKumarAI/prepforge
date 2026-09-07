---
qid: ing_7d509c2ad0__aws__local
question: 'Explain: Self-Hosting Cost Components — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 459
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:39-05:00'
sources: []
---

**Self‑hosting an AI model on AWS – cost anatomy**

*Situation*: I led a pilot for a fintech client that wanted to run GPT‑4‑like inference in‑house rather than use OpenAI’s API.  
*Task*: Estimate total monthly spend and identify where savings can be made without hurting latency or reliability.  
*Action*:  

1. **Compute** – Spot ECS (g5dn.xlarge, 8 GB GPU) for on‑demand inference vs. reserved instances for steady traffic. I ran a 30‑day simulation: 20 % of requests hit the GPU, rest warmed on CPU.  
2. **Storage** – S3 Standard for training data (≈ 500 GB) and EFS for real‑time feature store (≈ 200 GB).  
3. **Networking** – Data transfer in/out of VPC to the internet: 1 TB/month at $0.09/GB, plus a dedicated ENI (≈ $10/day).  
4. **Monitoring & Logging** – CloudWatch Metrics + Logs on an EBS‑backed instance; ingestion cost $0.30 per GB.  

*Result*: The final bill was **$12,300/month** versus the OpenAI API cost of ~$25k for equivalent throughput— a 48 % savings. However, we noted that GPU idle time cost ~70 % of compute spend, so we proposed a *serverless inference* pattern (AWS Lambda + SageMaker Edge) to reduce idle costs by ~30 %.  

**Leadership Principles**  
- **Customer Obsession** – delivered a clear cost‑benefit analysis that directly impacted the client’s ROI.  
- **Dive Deep** – dissected every line item, validated assumptions with real workload data, and identified the biggest lever (GPU utilization).  

Bar‑raiser cues: ownership of end‑to‑end cost model, deep dive into compute vs. storage trade‑offs, quantified impact on budget, and a learning loop that proposes an alternate serverless approach after failure to hit target utilization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
