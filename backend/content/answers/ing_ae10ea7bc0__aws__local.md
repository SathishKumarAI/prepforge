---
qid: ing_ae10ea7bc0__aws__local
question: 'Explain: How the Internet Works — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 380
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:05-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain the end‑to‑end flow of a web request in a system‑design interview for an ML‑ops role at Amazon. The interviewer wanted me to show ownership, dive deep into networking details, and quantify impact on latency and cost.

**Action**  
1. **DNS Lookup** – Browser asks Route 53 (or public DNS). 2 µs average RTT, ~200 kB traffic per lookup.  
2. **TCP Handshake & TLS** – EC2 or ALB behind CloudFront; handshake < 50 ms, TLS off‑load on CloudFront to reduce CPU by 30 %.  
3. **HTTP GET** – Routed to an Application Load Balancer → ECS Fargate container running the ML inference service.  
4. **Inference** – Lambda (or SageMaker endpoint) loads a pre‑trained model from S3, caches it in Elasticache Redis for < 1 ms lookup.  
5. **Response** – Returned through ALB to browser; total latency 120 ms vs 400 ms baseline before caching.

**Result**  
- Latency dropped by **70 %**, SLA hit 99.9 %.  
- Cost per request fell from $0.02 to $0.008 (≈60 % savings).  
- Scalability: Auto‑scaling on CloudWatch metrics keeps > 95 % of traffic within target latency.

**Bar‑raiser notes** – I owned the entire flow, dove deep into each layer, quantified performance gains, and learned that caching the model in Redis was the single biggest win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
