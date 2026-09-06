---
qid: ing_ac238c51c4__think__local
question: 'Explain: Infinite Loops — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 426
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:22:20-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- “Infinite loops” refers to programmatic cycles that never terminate under normal execution.  
- “Computer‑use agents” are software entities (bots, scripts, services) that interact with a computer system on behalf of a user or other process.  
- Assume the reader knows basic programming constructs but not deep formal theory.

**2️⃣ Choose a mental model**  
- View an agent as a *finite state machine* (FSM).  
- An infinite loop corresponds to the FSM entering a *recurrent state* with no exit condition.  
- Map this to common runtime structures: while‑true, for‑(;;), recursive calls without base case.

**3️⃣ Step‑by‑step reasoning**  
1. Identify where an agent’s control flow can repeat ad infinitum (e.g., polling a resource).  
2. Examine the loop guard or termination predicate—does it depend on external input that may never change?  
3. Consider side effects: if the loop mutates state, is there a path to break out?  
4. Relate to *liveness* properties in concurrent systems; an infinite loop violates liveness.

**4️⃣ Common traps to avoid**  
- Confusing “busy‑wait” with true non‑termination—busy waits can be intentional but still halt progress.  
- Assuming all loops are safe because they’re bounded by a counter; counters may overflow or be reset.  
- Overlooking asynchronous callbacks that resume the loop.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “If I pause execution at any point, can I resume and ever exit?”  
- Explain in plain terms: “An infinite loop is like a person shouting ‘I’m stuck’ forever; the agent never reaches the next step.”  
- Verify with a simple example (e.g., `while(true){}`) and show how adding a break or condition fixes it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
