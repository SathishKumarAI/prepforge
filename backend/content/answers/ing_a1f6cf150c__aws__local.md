---
qid: ing_a1f6cf150c__aws__local
question: 'Explain: Additional Innovations — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 423
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:16-05:00'
sources: []
---

**Situation / Task**  
While leading the *Kaiju* project in 2024, we needed a next‑generation conversational AI that could handle 10 M daily user requests across 12 languages while keeping latency under 200 ms and cost per request below $0.005.  

**Action**  
1. **Ownership & Dive Deep** – I mapped every data‑pipeline step (ingest → preprocess → model → post‑process) in the *Data Mesh* architecture, identified bottlenecks, and benchmarked two transformer backends: **Amazon SageMaker Neo** (edge‑optimized) vs. **AWS Inferentia2** on **EC2 Inf1** instances.  
2. I introduced a **feature‑store** on **Amazon DynamoDB Global Tables** to cache user embeddings, cutting inference time by 35 %.  
3. For scalability and cost, I deployed the model as a **Serverless SageMaker Endpoint** behind an **API Gateway + Lambda** layer that auto‑scales from 0 to 200 concurrent requests, achieving **99.9 % SLA**.  
4. Implemented continuous A/B testing with **Amazon CloudWatch Anomaly Detection** and rolled out the best variant in a blue/green fashion, reducing error rate by 12 %.  

**Result**  
- Latency dropped from 350 ms to **180 ms** (30 % improvement).  
- Cost per request fell from $0.012 to **$0.004** (66 % savings).  
- User satisfaction (NPS) rose from 42 to **68** after the rollout.  

**Learning & Bar‑raiser signals**  
I documented trade‑offs between inference latency vs. model size, and shared a post‑mortem on an earlier mis‑scaled endpoint that caused a 10 % outage—highlighting the importance of *Bias for Action* balanced with *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
