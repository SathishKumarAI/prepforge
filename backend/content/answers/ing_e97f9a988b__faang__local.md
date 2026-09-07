---
qid: ing_e97f9a988b__faang__local
question: 'Explain: Circuit Breaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 446
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:42:22-05:00'
sources: []
---

**Clarify**  
You’re asking for a *circuit‑breaker pattern* in ML systems—how to stop a model or pipeline from running when upstream signals indicate that it will likely fail or degrade performance.

Assumptions I’d confirm:  
1. The system has measurable health metrics (latency, error rate, resource usage).  
2. There’s a downstream consumer that can tolerate “no‑data” or fallback.  
3. We want to avoid cascading failures in distributed ML services.

**Approach**  
1. Define thresholds for key metrics.  
2. Monitor these metrics continuously.  
3. When a threshold is breached, open the circuit: short‑circuit requests to the model, return cached predictions or error responses.  
4. Periodically attempt to close the circuit once health improves.

**Depth**  
- **Thresholds** can be static (e.g., 5 % error) or adaptive using EWMA/percentile windows.  
- **State machine**: *Closed* → *Open* (on failure) → *Half‑open* (test a few requests).  
- **Fallback strategy**: serve a simpler model, use last‑known‑good prediction, or return “service unavailable.”  
- Complexity: O(1) per request for state checks; monitoring overhead depends on sampling frequency.  
- Trade‑off: tighter thresholds reduce risk but increase false positives.

**Edge Cases**  
- *Spiky workloads*: temporary spikes may falsely open the circuit.  
- *Model drift*: a slowly degrading model may never breach hard limits yet produce poor predictions.  
- *Cold start*: opening immediately on first request can be too aggressive.

**Optimize & Communicate**  
Use exponential back‑off for retries, log state transitions, and expose metrics (open rate, fallback usage) to observability dashboards. When explaining this to interviewers, emphasize the analogy to electrical breakers—protecting downstream consumers while allowing graceful degradation—and highlight how you’d tune thresholds based on SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
