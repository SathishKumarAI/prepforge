---
qid: ing_8886ee9f31__aws__local
question: 'Explain: Summary — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 500
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:02-05:00'
sources: []
---

**Situation (S)**  
I was tasked at my previous startup to expose a real‑time recommendation engine via HTTP/HTTPS so that mobile clients could fetch personalized content with < 200 ms latency during peak traffic (~10 k RPS).

**Task (T)**  
Build a highly available, low‑cost API layer that scales automatically, guarantees end‑to‑end encryption, and integrates seamlessly with the existing SageMaker model.

**Action (A)**  
1. **API Gateway + Lambda@Edge** – I used Amazon API Gateway for throttling, request validation, and TLS termination.  
2. **Lambda@Edge / App Runner** – The Lambda function forwarded requests to a containerized inference service on AWS Fargate, leveraging the SageMaker endpoint via the `boto3` SDK.  
3. **Caching with CloudFront** – Frequently requested recommendations were cached in CloudFront edge locations (TTL = 60 s) to reduce latency and cost.  
4. **Observability** – X‑Ray traced each request; CloudWatch Alarms triggered auto‑scaling on Fargate based on 95th percentile latency.

**Result (R)**  
- Latency dropped from 1.2 s to **180 ms** at peak load, a **85% reduction**.  
- Cost fell by **30 %** thanks to CloudFront caching and Lambda’s pay‑per‑use model.  
- Uptime improved to **>99.9 %**, meeting SLAs.

---

### Leadership Principles Reflected
- **Customer Obsession** – Delivered a fast, secure API that directly improved user experience.  
- **Ownership & Dive Deep** – I architected every layer (API, compute, cache) and tuned metrics until performance goals were met.

---

### Bar‑raiser Takeaways
- **Quantified Impact:** Clear latency and cost numbers demonstrate ownership.  
- **Depth:** Detailed service choices (API Gateway, Lambda@Edge, CloudFront) show deep understanding of trade‑offs between scalability, availability, and cost.  
- **Learning from Failure:** Early trials with a monolithic EC2 host caused 500 errors under load; moving to serverless eliminated that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
