---
qid: ing_bc982aafc0__aws__local
question: 'Explain: Circuit Breakers — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 460
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:08-05:00'
sources: []
---

**Situation & Task**  
I was tasked to add a fault‑tolerant *circuit breaker* layer for our real‑time recommendation service that calls an external ML inference endpoint (Amazon SageMaker). The goal: keep latency < 200 ms and avoid cascading failures during model degradations.

**Action – Technical Design**  
- **Stateful guard**: A DynamoDB table (`BreakerStatus`) stores per‑model failure counters and timestamps.  
- **AWS Lambda**: Acts as a proxy; before forwarding the request it queries `BreakerStatus`. If open, it returns a cached fallback response (pre‑computed top‑10 items).  
- **Metrics & Triggers**: CloudWatch Alarms monitor error rate (>5 % in 1 min) and latency spikes. When triggered, an SNS topic updates DynamoDB to *open* the breaker for 30 s.  
- **Graceful rollback**: After cooldown, Lambda retries a limited number of times; if successful, counters reset.

**Result**  
During a SageMaker model rollout glitch, our system stayed within SLA—latency increased only by 12 ms and error rate remained <0.3 %. Compared to the pre‑breaker baseline (9 % errors, +350 ms latency), we improved *availability* by **93 %** and saved ~$1k/month in avoided traffic spikes.

**Reflection – Bar‑Raiser Lens**  
- *Ownership*: I owned both the design and its monitoring pipeline.  
- *Dive Deep*: Chose DynamoDB for low‑latency state, tuned CloudWatch thresholds via A/B testing.  
- *Quantified Impact*: Reported SLA lift and cost savings.  
- *Learning from Failure*: Post‑mortem showed we could reduce alarm sensitivity; I iterated the circuit logic to lower false positives.

**Leadership Principles Anchored**  
- **Customer Obsession** – kept user experience stable during ML hiccups.  
- **Ownership** – drove end‑to‑end implementation and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
