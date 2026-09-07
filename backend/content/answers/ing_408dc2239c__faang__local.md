---
qid: ing_408dc2239c__faang__local
question: 'Explain: Know whether agents actually complete the job'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 435
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:10-05:00'
sources: []
---

**Clarify**

We’re asked to determine if an autonomous agent (e.g., a robot, software bot) has *actually* finished its task, not just that it reported success.  
Assumptions:  
1. The agent can emit observable signals (logs, telemetry, sensor data).  
2. There is a ground‑truth definition of “job complete” (e.g., item delivered, form submitted).  
3. We have limited bandwidth to query the agent.

**Approach**

1. **Define completion criteria** as explicit predicates over observable outputs.  
2. **Instrument the agent**: add deterministic logging or telemetry that records state changes and final outcomes.  
3. **Implement a verifier** (possibly another ML model) that ingests logs/telemetry and checks the predicates.  
4. **Fail‑fast detection**: if any step fails, flag incomplete status immediately.

**Depth**

- Use *state machines* or *temporal logic* to formalize completion.  
- For noisy telemetry, train a classifier on labeled “completed” vs. “incomplete” logs (accuracy ≥ 0.99).  
- Complexity: O(N) over log length; storage O(1) per event if streaming.  
- Trade‑off: richer instrumentation → higher overhead but more reliable verification.

**Edge Cases**

- Partial success (e.g., delivered to wrong location): verifier must detect mismatch.  
- Sensor failures: fallback to redundancy or sanity checks on secondary sensors.  
- Timing anomalies: ensure timeouts are conservative yet responsive.

**Optimize & Communicate**

- Cache intermediate predicates to avoid re‑processing entire logs.  
- Expose a REST endpoint “/status” that returns `COMPLETED`, `FAILED`, or `IN_PROGRESS`.  
- Communicate confidence scores so operators can decide manual intervention.  

This structured pipeline satisfies FAANG interviewers: clear problem framing, methodical solution plan, depth with complexity analysis, edge‑case robustness, and a concise communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
