---
qid: ing_71cf456922__faang__local
question: 'Q: How do you prevent an agent from "Infinite Recursion" during task decomposition?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:15-05:00'
sources: []
---

**Clarify**  
We’re asked how to avoid infinite recursion when an autonomous agent decomposes a high‑level goal into sub‑tasks that may, in turn, produce the same or larger goals again. The key assumption is that the agent has a *task hierarchy* and a *policy* for generating child tasks. We also assume it can keep state (e.g., task stack) across calls.

**Approach**  
1. **Track visited task types** – maintain a set of “seen” task identifiers.  
2. **Depth or breadth limits** – impose a maximum recursion depth or budget per goal.  
3. **Loop detection heuristic** – if the same sub‑task reappears in the current call chain, abort.  
4. **Deterministic decomposition** – ensure each child is strictly smaller (by some metric).  

**Depth**  
Implement a recursive `decompose(task)` that first checks `if task.id in stack` → *cycle detected* → return error or skip. Push onto `stack`, then for each child:  
- If `depth > MAX_DEPTH` → prune;  
- If `child.size >= task.size` → reject or apply heuristic (e.g., re‑rank).  
After processing, pop from `stack`. Complexity: O(n) per decomposition, with `n` the number of tasks. The stack guarantees linear memory usage.

**Edge Cases**  
- *Non‑deterministic children*: random noise may generate identical sub‑tasks; use hashing.  
- *Dynamic task definitions*: if a child’s definition changes mid‑run, stale IDs can mislead; versioning is needed.  
- *Large breadth*: many siblings could still explode; apply sampling or priority queues.

**Optimize & Communicate**  
Explain that the stack‑based cycle detection is O(1) per check and guarantees termination. Mention that combining depth limits with size checks provides a safety net against pathological task graphs. Finally, note trade‑offs: stricter limits may miss valid decompositions; looser limits risk recursion. This balanced strategy satisfies FAANG interviewers’ focus on structured reasoning, clear communication, and technical depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
