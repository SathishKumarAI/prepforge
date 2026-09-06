---
qid: ing_b1c78acf6d__fp__local
question: 'Explain: Error Budget — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 384
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:59-05:00'
sources: []
---

**Error Budget – an architectural pattern**

At the heart of any software system is a *trade‑off* between **reliability** and **delivery speed**.  
Reliability demands that every request pass through many safety nets (monitoring, retries, circuit breakers).  
Delivery speed demands that those safeguards be lightweight so latency stays low.

The *error budget* formalises this trade‑off as a quantitative resource:  

1. **Define the Service Level Indicator (SLI)** – e.g., 99.9 % request success.  
2. **Compute the Service Level Objective (SLO)** – the target for that SLI.  
3. **Allocate an error budget** = 1 – SLO (e.g., 0.1 %).  

This budget is a *time‑based resource* (errors allowed over a period). Whenever an operation consumes part of it, the architecture must enforce limits:  

- **Circuit breakers** open when recent failures exceed a fraction of the budget, preventing cascading outages.  
- **Rate limiters** throttle new features until the budget stabilises.  
- **Feature flags** gate experimental code; if its failure rate exceeds the remaining budget, it is rolled back.

The deeper principle is *resource‑bounded optimisation*: we treat unreliability as a consumable commodity, optimising system throughput under a hard cap.  

*Non‑obvious insight:* an error budget turns “failure tolerance” from a qualitative design choice into a **budget accounting problem**. This allows teams to *measure* the cost of risk and make data‑driven decisions about when to roll out new code versus tightening safety nets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
