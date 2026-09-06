---
qid: ing_44a5cb0337__fp__local
question: What is the difference between a kill switch and a circuit breaker for an
  agent, and why do you need both?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 346
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:31:47-05:00'
sources: []
---

**Why two safeguards are needed**

The *kill switch* is a **deterministic hard‑stop**: it cuts power or resets the agent when an external signal (human operator, policy rule, or anomalous state) demands termination. Its design follows the principle of *control theory*: a system’s output must be bounded by a supervisory authority that can intervene instantaneously to prevent catastrophic behavior. The kill switch guarantees **zero‑probability** of continued operation in prohibited modes but does nothing if the agent never triggers its own alarm.

The *circuit breaker* is an **automatic fault detector** embedded in the agent’s runtime. It monitors resource usage, latency, or deviation from expected control signals and, upon exceeding thresholds, interrupts the loop. This follows *fault‑tolerance* principles: a system that can self‑detect and recover from internal anomalies without external prompting.

Both are essential because:

1. **Coverage gap** – The kill switch cannot react to unforeseen internal faults; the circuit breaker cannot respond to intentional misuse or policy violations.
2. **Redundancy** – If one layer fails (e.g., a corrupted kill‑switch command), the other can still halt operation.
3. **Graceful degradation** – The circuit breaker allows temporary throttling or reset, giving operators time to assess before invoking the hard stop.

In short, the kill switch enforces *policy compliance*; the circuit breaker enforces *system integrity*. Together they embody a layered safety architecture that balances control authority with self‑preservation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
