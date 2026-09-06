---
qid: ing_6f5c08fd65__think__local
question: 'Explain: Unit Cost per Task — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 444
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:20:58-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - Identify *Unit Cost* (resource usage, time, money) and *Task* (any goal an agent can pursue).  
   - Assume we’re dealing with autonomous agents that self‑direct actions to solve tasks.  
   - Assume cost metrics are measurable and comparable across different agents or configurations.

**2. Adopt a mental model: “Cost per Utility” framework**  
   - Treat each task as a utility function; the agent’s objective is to maximize expected utility minus cost.  
   - Unit Cost becomes a weight on the *resource* dimension of that optimization.

**3. Step‑by‑step reasoning**  
   1. Define the task set \(T = \{t_1,\dots,t_n\}\).  
   2. For each agent \(A_i\), estimate expected resource consumption \(C_{i}(t_j)\) (CPU, time, data).  
   3. Normalize or scale these costs to a common unit (e.g., dollars per task).  
   4. Compare across agents: lower \(C_{i}(t_j)\) indicates higher efficiency for that task.  
   5. Aggregate over all tasks to obtain an overall performance‑cost profile.

**4. Common traps to avoid**  
   - Mixing *execution time* with *financial cost* without conversion.  
   - Ignoring the agent’s success probability; a low cost but low success rate may be misleading.  
   - Overlooking task heterogeneity: one agent may excel on high‑complexity tasks while another shines on simple ones.

**5. Sanity checks & communication**  
   - Verify units (seconds → dollars, FLOPs → energy).  
   - Cross‑check with empirical benchmarks or simulation data.  
   - Communicate results as “Agent X incurs an average of $Y per task in domain Z, which is Z% lower than Agent W.” This explicit, metric‑driven statement makes the evaluation transparent and actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
