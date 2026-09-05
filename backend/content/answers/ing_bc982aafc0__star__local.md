---
qid: ing_bc982aafc0__star__local
question: 'Explain: Circuit Breakers — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 362
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:25-05:00'
sources: []
---

**Situation:**  
When launching a real‑time fraud detection service for a payment platform, our inference API hit a spike of traffic during a marketing campaign. The GPU pool was already saturated, and the request queue started to back up, causing latency to balloon from 120 ms to over 1 second.

**Task:**  
I had to keep the API responsive and protect downstream services from cascading failures while maintaining model accuracy.

**Action:**  
I added a circuit‑breaker layer using Netflix Hystrix integrated with our gRPC gateway. The breaker monitored error rates, latency, and request volume. I set a failure threshold of 5 % errors over 30 seconds, a sleep window of 10 seconds, and a fallback that returned a cached “safe” prediction. To avoid false positives during traffic surges, I tuned the bulkhead isolation to allow up to 200 concurrent requests per GPU worker. I also logged circuit‑state transitions to CloudWatch for alerting.

**Result:**  
During the next campaign peak, latency stayed below 250 ms and error rates dropped from 8 % to 0.4 %. Uptime improved by 15 percentage points over a month, and we avoided an incident that would have impacted 12,000 daily transactions. I learned how fine‑tuned thresholds and proper fallback design can turn a fragile ML service into a resilient component of the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
