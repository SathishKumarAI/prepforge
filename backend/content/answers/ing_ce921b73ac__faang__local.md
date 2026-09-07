---
qid: ing_ce921b73ac__faang__local
question: 'Explain: Failure Modes and Graceful Degradation — How to Prepare for System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 458
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:40:43-05:00'
sources: []
---

**Clarify**  
You’re asked how to *anticipate* failure modes in a ML system and design it so that when something goes wrong the service still behaves predictably (graceful degradation).  
Assumptions: we have an online inference pipeline (data → preprocessing → model → post‑processing), multiple components can fail, latency and accuracy are both critical.

**Approach**  
1. Enumerate potential failure points (input corruption, feature drift, model outage, compute overload, network partitions).  
2. For each point decide a fallback strategy: default predictions, cached outputs, reduced‑precision models, or circuit breakers.  
3. Instrument health metrics and set thresholds that trigger the fallbacks.  
4. Build tests to simulate failures (chaos engineering) and validate the degradation paths.

**Depth**  
- *Input validation*: reject malformed data, log anomalies.  
- *Feature store guardrails*: if a feature is missing, switch to a fallback feature or use a simpler model.  
- *Model ensemble with voting*: if one model fails, others still produce an answer; weighted voting can lower accuracy loss.  
- *Circuit breaker pattern*: after N consecutive failures, bypass the expensive component and return cached results.  
- *Graceful degradation of latency*: serve a “quick” approximate inference while the heavy model recovers.  
Complexity: each fallback adds O(1) overhead; overall system remains linear in input size. Trade‑offs are between accuracy loss vs. availability.

**Edge Cases**  
- Simultaneous failure of multiple models → fallback to rule‑based logic.  
- Feature drift causing systematic bias → retraining pipeline must be triggered before degradation kicks in.  
- Network partition: use local replicas or edge caches.

**Optimize & Communicate**  
Explain that graceful degradation is about *predictable* behavior, not just uptime. Quantify the acceptable drop in F1‑score (e.g., 5 %) versus SLA compliance. Highlight how monitoring and automated rollback improve resilience. Conclude by stressing continuous testing of failure modes as a core part of the ML ops lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
