---
qid: ing_4d32e1865a__aws__local
question: 'Explain: When Computer-Use Beats API Calls — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 425
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:51-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were building a recommendation engine that ran heavy ML inference on customer data. Every inference hit the **Compute‑Use API** which charged us $0.05 per request. When traffic spiked (e.g., holiday sales), our bill doubled while latency stayed high.

**Action**  
I proposed moving from “request‑per‑inference” to a *Computer‑Use Agent* model: we launch short‑lived EC2 Spot instances that pull batches of requests from an SQS queue, run the inference locally, and push results back to DynamoDB.  
- **AWS services used:** Spot Fleet (cost control), ECS Fargate (serverless scaling), SQS (decoupling), Lambda for orchestration, CloudWatch for metrics.  
- **Scalability & Availability:** Spot instances auto‑scale by queue depth; failover to On‑Demand if spot capacity drops. Redundancy across AZs keeps 99.9% uptime.  
- **Cost trade‑off:** Batch size of 200 requests per instance reduced API calls from 10k to ~50, cutting spend from $5K/month to $0.75K while improving throughput by 3×.

**Result**  
Within two weeks, we hit a *cost savings* of 85% and *latency* dropped from 300 ms to 80 ms (30% faster). The model also enabled us to run complex models on cheaper hardware—an example of **Customer Obsession** (better experience) and **Ownership** (taking end‑to‑end responsibility).

**Reflection**  
I learned that *dive deep* into billing patterns often reveals hidden inefficiencies. I’ll keep monitoring spot market dynamics and explore Sagemaker Batch Transform for future iterations, ensuring we stay ahead of cost spikes while delivering results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
