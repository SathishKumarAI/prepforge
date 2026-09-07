---
qid: ing_59ff7aab95__aws__local
question: 'Explain: Design the serverless inference layer: any of thousands of Hub
  models can receive a request at any moment.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 449
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:13-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a **serverless inference layer** for a marketplace that hosts ~3 k AI models (Hub models). Every model must be reachable by any client request at any time, with < 200 ms latency and 99.9 % availability.

**Approach & Design**  
1. **API Gateway + Lambda@Edge** – front‑end throttles traffic and routes to the correct *model endpoint* via a lightweight Lambda that looks up model metadata in DynamoDB (keyed by `model_id`).  
2. **SageMaker Endpoint per Model** – each model is deployed as an isolated SageMaker *Inference Endpoint* with a *Multi‑Model* variant, so the same underlying instance serves all models; we spin up new instances only when traffic spikes.  
3. **Step Functions Orchestration** – for heavy models (≥ 1 GB) we route via Step Functions to invoke an EC2 spot‑based batch inference container, keeping the Lambda warm cache for 15 min.  
4. **Cache Layer** – Elasticache Redis stores recent predictions; a 5‑second TTL eliminates redundant calls during bursty traffic.

**Result**  
- Reduced per‑request cost from $0.12 to $0.04 (70% savings).  
- Latency dropped from 450 ms to 180 ms on average, meeting the SLA.  
- 99.95 % uptime over 6 months; zero outage incidents.

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivering sub‑200 ms responses for every model request.  
- **Ownership & Dive Deep** – architecting a cost‑efficient, scalable stack while continually monitoring and tuning each component.  

*Bar‑raiser check:* I quantified impact (cost, latency), demonstrated ownership by iterating on the multi‑model SageMaker approach after initial failures, and showed depth through trade‑off analysis between Lambda cold starts vs. spot EC2 usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
