---
qid: ing_2d728c2416__aws__local
question: 'Explain: Solution Walkthrough — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 436
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:53-05:00'
sources: []
---

**Solution Walkthrough – Whiteboard Exercise (AI)**  
*Leadership Principles: Customer Obsession & Ownership*

**S**ituation  
At my last role I was asked to design a real‑time fraud detection pipeline for a payments app that processes 5 M transactions/day. The client demanded sub‑1 s latency and 99.9% precision.

**T**ask  
Create a whiteboard diagram, explain architecture, trade‑offs, cost & scaling, then justify the choice of services.

**A**ction  
1. **Ingest:** Kinesis Data Streams → *Auto Scaling* shards (start with 10, auto‑adjust to ~30).  
2. **Feature Store:** DynamoDB Global Tables (replicated in us-east-1/us-west-2) for low‑latency lookups; TTL to purge stale data.  
3. **Model Inference:** SageMaker Endpoint (Multi‑Model Serving) behind an Application Load Balancer with *target tracking* scaling policy (CPU < 70%).  
4. **Post‑process & Alerting:** Lambda + SNS for rule‑based overrides; results go to Redshift Spectrum for audit.  
5. **Observability:** CloudWatch metrics + X-Ray tracing; S3 cold‑store for model logs.

**R**esult  
- Latency < 800 ms for 99.8% of requests.  
- Cost reduced by 35% versus a monolithic EC2 solution (from $12k to $7.8k/month).  
- Early detection increased fraud recovery by 18% YoY.

**Bar‑raiser focus:**  
- *Ownership* – I owned every component and presented risk mitigation.  
- *Dive Deep* – I quantified shard counts, CPU thresholds, and cost per inference.  
- *Learning from failure* – After a spike, I added Kinesis buffer and auto‑scale, preventing outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
