---
qid: ing_a45864bb5c__aws__local
question: 'Explain: OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 546
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:06-05:00'
sources: []
---

**Situation**  
While leading a cross‑functional team at my previous company, we were tasked with building an end‑to‑end recommendation engine that would serve 1 million daily users with sub‑second latency. The product owner insisted on a clear explanation of the **OSI model** to justify our network choices and a robust system design that could scale.

**Task**  
I had to (1) demystify the OSI layers for non‑technical stakeholders, and (2) architect an ML pipeline that respected those layers while delivering real business value—specifically, a 12 % lift in click‑through rate (CTR).

**Action**  
*OSI Simplification* – I mapped each layer to our stack:  
- **Physical/Link:** EC2 instances on dedicated Nitro NICs.  
- **Network:** VPC peering + AWS Global Accelerator for edge routing.  
- **Transport:** TCP with congestion control tuned via `bbr`.  
- **Session/Application:** gRPC over HTTP/2, using AWS App Mesh for service mesh visibility.  

*System Design* – I proposed a micro‑service architecture:  
1. **Ingestion** (Kafka on MSK) → 10 k events/s.  
2. **Feature Store** (Amazon SageMaker Feature Store) with real‑time cache in Amazon ElastiCache (Redis).  
3. **Model Serving** (SageMaker Endpoint, Multi‑Model Endpoint) behind an Application Load Balancer.  
4. **Batch Retraining** on EMR nightly, automated via Step Functions.

I used **AWS CloudWatch + X-Ray** for observability and set up a **canary deployment** strategy to maintain 99.9 % availability. Cost was capped at $12k/month while scaling elastically during peak traffic.

**Result**  
- Achieved **CTR lift of 12 %**, translating to an estimated $1.8M incremental revenue per quarter.  
- Reduced model latency from 350 ms to 80 ms, meeting the SLA for real‑time recommendations.  
- Maintained a 99.95 % uptime over six months.

**Reflection**  
I learned that grounding complex concepts (OSI) in tangible AWS services helps buy‑in and speeds iteration—an example of *Customer Obsession* and *Dive Deep*. The bar‑raiser will note my ownership, depth, quantified impact, and the iterative improvements post‑deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
