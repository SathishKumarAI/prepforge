---
qid: ing_835579cc5a__star__local
question: 'Q: What is the difference between circuit breaker and retry?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 313
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:59-05:00'
sources: []
---

**Situation**  
When I was building a real‑time recommendation engine for an e‑commerce platform, the model served predictions through a gRPC microservice that pulled data from a third‑party inventory API. During peak traffic we hit sudden latency spikes and the inventory service started timing out.

**Task**  
I needed to keep the recommendation flow smooth without overwhelming the downstream API or causing cascading failures in our system while still retrying failed calls when it made sense.

**Action**  
First, I implemented a **retry** policy with exponential back‑off for idempotent requests—up to three attempts with jitter—to capture transient glitches. Then I wrapped the same call in a **circuit breaker** using Resilience4j: if five consecutive failures occurred within 30 seconds, the circuit opened for 60 seconds, immediately returning a cached fallback response and logging an alert. I tuned the thresholds by monitoring error rates and latency curves, ensuring that retries were attempted only when the downstream service was healthy.

**Result**  
The combined strategy reduced user‑visible latency from 750 ms to 350 ms during traffic spikes and cut the error rate of the recommendation endpoint from 12% to <2%. I learned that retries handle momentary hiccups, while circuit breakers protect overall system resilience by preventing repeated futile calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
