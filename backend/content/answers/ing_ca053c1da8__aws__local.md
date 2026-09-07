---
qid: ing_ca053c1da8__aws__local
question: 'Explain: 3.3 Look for Shared Fate — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 402
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:10-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked to redesign the real‑time fraud‑detection pipeline that had been crashing during peak loads. The system’s single point of failure (SPOF) was an on‑premise database that held all transaction metadata; if it went down, every downstream microservice lost state and the entire platform stalled.

**Action & Design**  
1. **Decouple data storage** – I moved the transactional store to Amazon DynamoDB with *Global Tables* for multi‑AZ replication, eliminating the SPOF.  
2. **Event‑driven architecture** – Each transaction is published to an Amazon Kinesis Data Stream; Lambda workers consume events in parallel, write to DynamoDB, and trigger a SageMaker inference endpoint.  
3. **Circuit breaker & fallback** – I added API Gateway with a *Lambda@Edge* health check that routes traffic to a standby cache (ElastiCache Redis) when DynamoDB latency spikes.  
4. **Observability** – CloudWatch metrics + X-Ray tracing were configured to surface any latency anomalies within 30 s.

**Result**  
- Availability improved from **99.7 %** to **>99.999 %** over a 3‑month period.  
- Latency dropped by **42 %** (average 120 ms → 70 ms).  
- Operational cost fell by **18 %** thanks to auto‑scaling and spot instances for the Lambda layer.

**Reflection**  
I learned that “Shared Fate” is not just a technical term; it’s a mindset. By treating each component as a potential SPOF, we can design resilient systems that scale with traffic while keeping costs predictable—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
