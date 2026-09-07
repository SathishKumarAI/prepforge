---
qid: ing_f83b8315ad__faang__local
question: 'Q: How do you prevent "Infinite Loops" where agents keep talking to each
  other without solving the task?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 424
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:17:06-05:00'
sources: []
---

**Clarify**  
The interview asks how to stop a multi‑agent system from entering an endless cycle of exchanges that never converges on a goal (e.g., two bots ping‑ponging without completing the task). I’ll assume: *agents communicate over a shared channel, each can send/receive messages, and we have a defined task objective*.

**Approach**  
1. **Define a convergence metric** (e.g., number of unique state changes or goal progress).  
2. **Set explicit communication limits** per round or per agent.  
3. **Introduce a back‑off / priority policy** so that agents defer when the system is stalled.  
4. **Add a watchdog scheduler** that terminates or resets an agent if it exceeds its quota.

**Depth**  
- *Message budget*: assign each agent a finite token count; decrement on send, replenish slowly.  
- *Progress counter*: after every message, check if global state changed; if not for *k* rounds → trigger reset.  
- *Priority queue*: agents with higher priority get to act first; lower‑priority agents wait, breaking symmetry that often causes loops.  
Complexity: O(1) per message for token update; overall O(n·m) where n = agents, m = messages, negligible overhead.

**Edge Cases**  
- Malicious agent that always sends but never changes state → caught by budget exhaustion.  
- Stale global state due to network lag → use versioning or timestamps to detect stagnation.  
- Multiple independent loops in the same system → each loop gets its own watchdog.

**Optimize & Communicate**  
Start with a simple token counter, then layer on adaptive back‑off if we observe frequent resets (suggesting too strict limits). Explain that these mechanisms trade off responsiveness for safety: tighter budgets reduce latency but may abort legitimate long conversations. In practice, tune the budget and threshold based on empirical profiling of typical dialogue lengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
