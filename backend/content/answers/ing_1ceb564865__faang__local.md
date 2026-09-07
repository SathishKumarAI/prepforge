---
qid: ing_1ceb564865__faang__local
question: 'Explain: Related patterns — Pattern: Circuit Breaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 442
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:52:18-05:00'
sources: []
---

**Clarify**  
You’re asking how a *circuit breaker* pattern applies in ML pipelines—e.g., a feature‑engineering service or model inference endpoint that might become overloaded or fail. I’ll assume we need to protect downstream consumers from cascading failures and maintain system reliability.

**Approach**  
1. Define a threshold (requests/sec, latency, error rate).  
2. Monitor metrics continuously.  
3. When the threshold is breached for a configurable window, trip the breaker: short‑circuit new requests → fallback or cached response.  
4. After a cool‑down period, attempt “half‑open” tests to see if the service recovers before fully re‑opening.

**Depth**  
- **Implementation**: Use a token bucket or sliding window counter for rate/latency; store state in memory or distributed cache (Redis).  
- **Fallback**: Return a pre‑computed baseline prediction, or a “model not available” message.  
- **Recovery**: Periodically send a limited number of test requests; if success > threshold, reset to closed.

Complexity: O(1) per request for state check; memory overhead ≈ O(number of service instances). Trade‑off: stricter thresholds reduce risk but increase latency for legitimate traffic.

**Edge Cases**  
- **Burst spikes**: Might trip prematurely; use exponential back‑off.  
- **Distributed environments**: State sync issues—use a consensus store or per‑instance counters with global fallback logic.  
- **Cold starts**: Initial requests may hit high latency; warm‑up the model first.

**Optimize & Communicate**  
Explain that circuit breakers in ML guard against *model drift* or *data‑pipeline failures*, preserving overall system health. Highlight how tuning thresholds based on SLA and cost of false positives/negatives balances availability versus accuracy. Conclude with a quick demo: “If latency > 200 ms for 5 s, we return cached predictions; after 30 s we test the endpoint before reopening.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
