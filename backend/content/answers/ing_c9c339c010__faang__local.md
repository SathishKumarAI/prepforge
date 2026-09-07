---
qid: ing_c9c339c010__faang__local
question: 'Explain: Problem — Pattern: Circuit Breaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 397
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:28:58-05:00'
sources: []
---

**Clarify**  
You’re asking how a *circuit‑breaker pattern* is used in ML pipelines—e.g., to guard against cascading failures when a model inference service or data source goes down. Confirm that we’re focusing on fault isolation, not on model training itself.

**Approach**  
1. **Define the failure domain** (service latency spikes, out‑of‑memory errors).  
2. **Set thresholds** for error rate / response time.  
3. **Open/close logic**: open circuit after N consecutive failures; keep it open for T seconds before a half‑open trial.  
4. **Fallback strategy**: serve cached predictions or default values.

**Depth**  
- **Implementation**: Wrap the inference call in a decorator that tracks `failure_count`, `success_rate`, and timestamps.  
- **Open state**: immediately return fallback; skip downstream calls.  
- **Half‑open**: allow one request to gauge recovery; if it succeeds, close circuit; otherwise reopen.  
- **Metrics**: expose Prometheus metrics (`circuit_state`, `failure_rate`) for observability.  
- Complexity is O(1) per call; memory overhead is constant.

**Edge Cases**  
- *Burst failures*: threshold must account for transient spikes to avoid flapping.  
- *Cold starts*: initial high latency should not trigger the breaker.  
- *Multiple models*: each model gets its own circuit to prevent a single failure from blocking all services.

**Optimize & Communicate**  
Explain that tuning thresholds is data‑driven—use A/B testing of different `max_failures` and `cooldown_periods`. Highlight that this pattern reduces mean‑time‑to‑recover (MTTR) and protects downstream analytics, aligning with FAANG reliability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
