---
qid: ing_9c39c4ac9f__faang__local
question: 'Explain: Pitfall 5: No Graceful Degradation — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 574
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:47:09-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *Pitfall 5: “No Graceful Degradation”* when building AI systems.  
Assumptions I’d confirm:  

- We’re talking about production‑grade models (serving, monitoring).  
- The audience cares about reliability, user experience and cost.  
- “Graceful degradation” means the system still delivers acceptable service when a component fails or data is missing.

**Approach**  
1. Define graceful degradation in AI context.  
2. Enumerate typical failure modes that break it (data loss, model drift, latency spikes).  
3. Show concrete mitigations (fallback models, fallback data sources, circuit breakers).  
4. Highlight trade‑offs and monitoring signals.

**Depth**  

| Failure | Impact if no graceful degradation | Mitigation |
|---------|------------------------------------|------------|
| **Missing feature values** | Model crashes or returns NaNs → bad UX | Impute with defaults, use sub‑models that ignore the missing feature |
| **Model latency spike** | Timeouts cause request failures | Use a low‑latency “quick” model as fallback; employ async buffering |
| **Data drift / concept shift** | Accuracy drops dramatically | Periodic retraining, online learning, fallback to conservative rules |
| **Infrastructure outage (GPU cluster)** | Service unavailable → revenue loss | Multi‑region deployment, auto‑scaling, use CPU fallback |
| **Adversarial input** | Model outputs nonsensical predictions | Input validation + a rule‑based sanity checker |

Complexity:  
- Fallback models add ~O(1) inference time overhead.  
- Circuit breakers add O(log n) for health checks.  
- Retraining pipelines cost O(m log m) where *m* is training data size.

**Edge Cases**  

- Sudden spikes in missingness (e.g., sensor failure). Test with injected nulls.  
- Latency budget exceeded during peak load; simulate queue delays.  
- Drift detection thresholds too tight → false positives; calibrate with A/B tests.

**Optimize & Communicate**  
1. **Prioritize fallback paths** that incur the lowest cost and maintain user trust.  
2. **Instrument health metrics** (latency, error rates, feature coverage) and surface them in a single dashboard.  
3. **Iteratively test** degradation scenarios via chaos engineering.  

Narration: “In production AI, we must never assume perfect inputs or infrastructure. By designing fallback pathways—both at the data and model level—and by continuously monitoring key health signals, we ensure that even when something goes wrong, users still receive a usable service, preserving trust and minimizing revenue impact.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
