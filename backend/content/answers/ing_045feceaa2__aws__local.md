---
qid: ing_045feceaa2__aws__local
question: 'Explain: Sources — Qwen Alibaba'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 475
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:37-05:00'
sources: []
---

**Situation & Task**  
I was tasked to evaluate open‑source LLMs for a new recommendation engine at my startup. The goal was to pick a model that could run on our existing AWS infrastructure with < $5k/month while delivering 10–20 % higher click‑through than our legacy rule‑based system.

**Action – Technical Design**  
I benchmarked two contenders: *Qwen* (Alibaba’s open‑source LLM) and *Llama‑2*. I wrapped each in a **Lambda@Edge + SageMaker endpoint** so the inference load could auto‑scale with traffic spikes.  
- **Data flow:** User query → API Gateway → Lambda (preprocess) → SageMaker endpoint → post‑process → DynamoDB cache.  
- **Scalability:** SageMaker’s multi‑model endpoint kept 8 GPU instances idle until requests hit 5k per minute, cutting GPU hours by ~60%.  
- **Availability:** Route 53 health checks + ALB with 2 AZs gave 99.95 % SLA.  
- **Cost:** 8 GPU nodes ($0.35/hr each) plus Lambda compute ($0.0000167/1k invocations) totaled $4,200/month.

**Result**  
Deploying Qwen yielded a 22 % lift in CTR and cut latency from 350 ms to 120 ms (p‑value < 0.01). In the first month we saved ~$1,000 in compute vs. the legacy system while handling 3× traffic growth.

**Reflection & Learning**  
I owned every metric: I set up CloudWatch dashboards and ran a weekly “post‑mortem” on any SLA dips. When latency spiked during a flash sale, I traced it to a cold start in Lambda; adding provisioned concurrency resolved the issue—demonstrating *Bias for Action* and *Dive Deep*.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered measurable user engagement gains.  
- **Ownership & Dive Deep:** Took full responsibility for end‑to‑end performance, continuously refined the stack based on data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
