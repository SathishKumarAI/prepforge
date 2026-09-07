---
qid: ing_3c265c1336__faang__local
question: 'Explain: F6: Cost runaway from a buggy task — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 467
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:04:01-05:00'
sources: []
---

**Clarify**  
The interview asks me to describe *F6: “Cost runaway from a buggy task – Computer Use Agent Production.”*  
- We’re dealing with an automated agent that executes tasks on compute resources.  
- A bug causes the agent to repeat or prolong work, inflating cloud costs (CPU, storage, network).  
- The goal is to explain why this happens and how to mitigate it.

**Approach**  
1. Identify the failure mode (infinite loop, data duplication, stale state).  
2. Quantify the cost impact using unit‑cost metrics per resource.  
3. Propose detection (metrics, alerts) and containment (timeouts, retries, circuit breakers).  
4. Suggest design changes (idempotency, id tracking, audit logs).

**Depth**  
- **Root cause:** A stateful task that expects a unique “task ID” but receives duplicates; the agent re‑executes, consuming CPU cycles.  
- **Cost model:** `Cost = Σ(resource_units × unit_price)`. If a buggy loop runs 10× longer than intended, costs scale linearly.  
- **Mitigation:**  
  * **Idempotency keys** – store processed IDs in a distributed cache (e.g., DynamoDB). Reject duplicates.  
  * **Timeouts & watchdogs** – terminate runaway jobs after a threshold.  
  * **Circuit breaker** – if failures exceed N, pause the agent.  
  * **Observability** – monitor `run_time`, `cpu_utilization`, and alert on outliers.

**Edge Cases**  
- Network partitions causing cache misses → false duplicates.  
- Rapidly changing task payloads leading to legitimate repeats.  
- Resource throttling errors masking the bug.

**Optimize & Communicate**  
Explain that fixing the bug reduces not only monetary loss but also improves reliability and SLA adherence. Emphasize trade‑offs: tighter idempotency checks increase storage cost; timeouts may cut useful work if set too low. Conclude by highlighting a balanced design: lightweight cache, aggressive monitoring, and graceful degradation to keep costs bounded while preserving functionality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
