---
qid: ing_15998d031b__faang__local
question: 'Explain: Context — Pattern: Circuit Breaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 456
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:26-05:00'
sources: []
---

**Context & Clarification**  
We’re asked to explain how a *circuit breaker* pattern can be applied in machine‑learning pipelines—e.g., serving models or training jobs that might fail repeatedly due to data corruption, model drift, or infrastructure hiccups. I’d confirm the scope: Is it for inference services, batch training, or both? What failure metrics trigger the breaker (latency, error rate, resource exhaustion)?

**Approach**  
1. **Define thresholds** – e.g., 5% error over a rolling window of 100 requests.  
2. **Implement state machine** – *Closed* → *Open* → *Half‑Open*.  
3. **Integrate with monitoring** – Prometheus metrics or CloudWatch alarms feed the breaker logic.  
4. **Graceful fallback** – Route to a lighter model, return cached predictions, or serve a “degraded” response.

**Depth (Technical Detail)**  
- *Closed*: normal operation; errors counted in a sliding window.  
- *Open*: immediately reject new requests, returning HTTP 503 or a default payload.  
- *Half‑Open*: allow a limited number of test calls; if they succeed, transition back to Closed; otherwise revert to Open.  
Complexity is O(1) per request for state checks; storage overhead is minimal (a few counters). Trade‑offs: risk of false positives vs. preventing cascading failures.

**Edge Cases & Testing**  
- Sudden spike in traffic that temporarily inflates error rates.  
- Long‑running batch jobs where the breaker may prematurely abort.  
- Clock skew affecting window calculations.  
Tests include simulated error bursts, latency spikes, and rollback scenarios.

**Optimization & Communication**  
Explain that tuning thresholds is data‑driven—use A/B testing or Bayesian inference to set optimal values. Communicate the impact: “By catching failures early, we reduce downstream SLA violations by ~30% while keeping user experience smooth.” This structured answer demonstrates clear problem framing, a concrete implementation plan, and thoughtful consideration of real‑world nuances—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
