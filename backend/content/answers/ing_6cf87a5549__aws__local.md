---
qid: ing_6cf87a5549__aws__local
question: 'Explain: Non-Functional Requirements — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 481
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:25-05:00'
sources: []
---

**Non‑Functional Requirements for a ChatGPT‑style system**

> *Leadership Principles:* **Ownership**, **Dive Deep**

**Situation / Task** – In my last role I was tasked to redesign the internal chatbot platform so it could handle 10× more concurrent users while keeping latency under 200 ms and uptime >99.95%.  
**Action** – I broke the NFRs into *performance*, *scalability*, *availability*, *security* and *cost*.  

1. **Performance**: Adopt a *stateless* Lambda front‑end behind an API Gateway with throttling set to 5 k req/s per region.  
2. **Scalability**: Use Amazon SageMaker endpoints in multi‑region, auto‑scaling mode (minimum 2 instances, max 20) and cache responses in Amazon ElastiCache for Redis (TTL 60 s).  
3. **Availability**: Deploy across two AZs with an Application Load Balancer; enable *failover* to a standby SageMaker endpoint that serves only the most recent 10 % of traffic.  
4. **Security**: Enforce IAM‑based access, encrypt data at rest in S3 (KMS) and in transit via TLS 1.2; audit all calls with CloudTrail.  
5. **Cost**: Leverage Spot Instances for SageMaker workers (50 % savings) and use Lambda’s pay‑per‑invocation model; monitor with Cost Explorer to keep spend < $200k/month.

**Result** – The new architecture handled 120 k concurrent users, latency dropped from 350 ms to 110 ms, and the 99.97% uptime exceeded SLA by 0.02%. I reduced cost by 35 % while maintaining compliance with GDPR.  

*Bar‑raiser cues:* Ownership of end‑to‑end solution, deep dive into trade‑offs (e.g., Spot vs. On‑Demand), quantifiable impact on performance and cost, and post‑mortem learning that led to automated rollback scripts for sudden traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
