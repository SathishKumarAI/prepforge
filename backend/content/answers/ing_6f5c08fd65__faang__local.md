---
qid: ing_6f5c08fd65__faang__local
question: 'Explain: Unit Cost per Task — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 449
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:21-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *Unit Cost per Task* as a metric for assessing **agentic AI systems** (self‑directed agents that plan, act, and learn).  
Assumptions:  
- Tasks are atomic operations the agent can perform (e.g., “send email,” “update database”).  
- Costs include compute time, energy, latency, and any human‑in‑the‑loop interventions.  
- We want a comparable figure across agents of different scales.

**Approach**  
1. Define a *task* and its execution window.  
2. Measure all resource expenditures during that window.  
3. Normalize by the number of tasks to yield a per‑task cost.  
4. Compare across agents or configurations.

**Depth**  
- **Compute Cost**: CPU/GPU cycles × unit price (cloud billing).  
- **Energy Cost**: Power draw × time × electricity rate.  
- **Latency Penalty**: If SLA met, zero; else a penalty proportional to delay.  
- **Human Review**: Hourly wage × review hours.  
UnitCost = (Compute + Energy + LatencyPenalty + HumanReview) / #Tasks.  
Complexity is O(1) per task if instrumentation is lightweight; otherwise O(n) for batch logging.

**Edge Cases**  
- *Zero‑cost tasks* (e.g., cache hits): ensure they’re counted to avoid skewing the metric.  
- *Batch vs. single execution*: batching reduces overhead but inflates per‑task cost—must decide policy.  
- *Dynamic pricing*: cloud rates fluctuate; use averaged monthly rates.

**Optimize & Communicate**  
To improve accuracy, instrument agents with a lightweight telemetry agent that batches metrics to reduce overhead. Present the metric in dashboards alongside success rate and SLA compliance to show trade‑offs between speed and cost. Explain clearly how each component influences the unit cost so stakeholders can make informed scaling or architecture decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
