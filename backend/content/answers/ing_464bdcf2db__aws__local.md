---
qid: ing_464bdcf2db__aws__local
question: 'Explain: Latency — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 398
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:35-05:00'
sources: []
---

**Situation / Task**  
I was leading a redesign of our recommendation engine to support a 10× traffic spike while keeping the end‑to‑end latency under 100 ms for every user request.

**Action (Design)**  
- **Latency**: Measured in milliseconds, it’s the time from request arrival to response. I focused on reducing serialization/deserialization and network hops by moving the inference model into an Amazon SageMaker endpoint behind a CloudFront distribution.  
- **Throughput**: Throughput is requests per second; I tuned the SageMaker batch transform job to 5 k RPS using multi‑instance scaling (10 ml.m5.xlarge).  
- **Bandwidth**: The amount of data transferred per second; I compressed model weights with gzip and leveraged Amazon EFS for shared access, cutting bandwidth from 200 MB/s to 80 MB/s.  

I used **AWS Lambda@Edge** to cache the top‑10 predictions locally, reducing round‑trips by 60%. The system achieved **<90 ms latency** on average, handled **12 k RPS**, and cut data transfer costs by **35 %**.

**Result**  
- Customer Obsession: 98 % of users received instant recommendations.  
- Ownership & Deliver Results: I owned the full pipeline, from SageMaker to CloudFront, and delivered measurable performance gains without compromising accuracy.  

**Bar‑raiser takeaways**  
- Demonstrated *ownership* by driving end‑to‑end changes.  
- Showed *deep dive* into latency vs throughput vs bandwidth trade‑offs with concrete metrics.  
- Highlighted learning: initial Lambda cold starts were 200 ms; we mitigated this via provisioned concurrency, turning a failure into an optimization lesson.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
