---
qid: ing_862c000342__faang__local
question: 'Explain: When the Path Is Known — AI Agents Explained - by Sairam Sundaresan
  and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 467
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:23-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *“When the Path Is Known”* from Sairam Sundaresan & Neo Kim’s book on AI agents—i.e., how an agent behaves when it already knows its environment and goal.

**Assumptions to confirm**  
- The agent has full knowledge of state space, actions, costs.  
- Goals are deterministic and static (no surprises).  
- No stochasticity or learning required during execution.

**Approach**  
1. Define *known path* as a pre‑computed optimal sequence from start to goal.  
2. Outline the agent’s workflow: read plan → execute actions → monitor for deviation.  
3. Highlight that this is essentially “model‑based planning + execution” with minimal online decision‑making.

**Depth**  
- **Planning phase:** Use classical algorithms (A*, Dijkstra) on a fully known graph to generate shortest path \(P = \langle s_0, a_1, …, a_k\rangle\).  
- **Execution phase:** The agent simply iterates over actions. Since the environment is deterministic, no replanning is needed; it can use a *control loop* that verifies each step succeeded before moving on.  
- Complexity: Planning \(O(|E| \log |V|)\), execution linear in path length.  
- Trade‑off: High upfront computation but negligible runtime overhead.

**Edge Cases**  
- Unexpected obstacles or sensor noise → deviation triggers replanning.  
- Dynamic goals (e.g., moving target) violate the “known” assumption; agent must switch to online planning.  

**Optimize & Communicate**  
- For large maps, pre‑compute and cache frequently used sub‑paths.  
- Use incremental search (D* Lite) if minor changes occur.  
- Narrate that in this scenario the agent is essentially a *pre‑planned robot*: it knows its route, follows it, and only falls back on replanning when reality diverges from expectation.  

This structured explanation aligns with FAANG interview expectations: clear assumptions, methodical plan, technical depth, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
