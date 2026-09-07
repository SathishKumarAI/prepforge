---
qid: ing_43a02b0cb8__aws__local
question: 'Explain: The Highway Analogy — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 512
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:03-05:00'
sources: []
---

**Highway Analogy – ML Inference Pipeline**

**Situation & Task (Customer Obsession, Ownership)**  
I was tasked to redesign an image‑recognition service that handled 10 M requests/day for a retail client. The existing model served 90 % of predictions within 2 s but throttled under peak traffic, causing cart abandonment and $3 k/month loss.

**Action (Dive Deep, Bias for Action)**  
1. **Diagnose latency vs throughput vs bandwidth:**  
   *Latency* – per‑request time to first byte.  
   *Throughput* – requests processed per second.  
   *Bandwidth* – total data moved per second (model size × inference count).  

2. **Design**  
   - Deploy the model on **Amazon SageMaker Endpoint** with a **multi‑container Docker image**: one container for lightweight pre‑processing, another for TensorFlow serving.  
   - Use **AWS Lambda@Edge** to cache popular predictions at edge locations (reduces latency by 40 %).  
   - Scale inference containers horizontally using **Auto Scaling** on GPU instances; set a *target utilization* of 70 % to keep costs in check.  
   - Implement **Amazon API Gateway + CloudFront** for request routing, ensuring each request hits the nearest endpoint (bandwidth optimization).  

3. **Metrics & Result**  
   - Latency dropped from 2 s to 0.35 s (85 % reduction).  
   - Throughput increased from 1 k req/s to 8 k req/s, handling peak spikes without throttling.  
   - Cost decreased by 30 % due to efficient scaling and edge caching.

**Result (Deliver Results)**  
Customer churn fell below 0.5 %, revenue grew $250 k/month, and the system achieved 99.9 % uptime across three AZs.

**Bar‑raiser notes:**  
- Ownership: I owned end‑to‑end pipeline.  
- Dive Deep: Quantified each metric, chose AWS services strategically.  
- Impact: Real business metrics tied to design decisions.  
- Learning: Initial over‑provisioning led to cost overruns; pivoted to Lambda@Edge and autoscaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
