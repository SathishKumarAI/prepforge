---
qid: ing_7e9a0a850d__think__local
question: 'Explain: Planning patterns — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 491
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:23:03-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Confirm that “planning patterns” refers to recurring design ideas in AI planning systems (e.g., STRIPS, HTN).  
   - Assume the user wants a high‑level explanation of how agents and tools are combined using these patterns.  
   - Note: we’re not diving into code but into conceptual architecture.

**2. Adopt a mental model / framework**  
   - Think of planning as a *loop*: perceive → decide → act → learn.  
   - Map “agents” to the decision‑making entity, “tools” to the effectors or APIs they invoke.  
   - Use the classic *agent‑tool hierarchy* (Agent → Planner → ToolKit) as the scaffold.

**3. Step‑by‑step reasoning**  
   1. **Goal specification**: Agent receives a high‑level goal.  
   2. **Plan generation**: Planner decomposes the goal into subgoals, selecting suitable tools based on capability and cost.  
   3. **Tool selection**: For each subgoal, agent picks an API or physical actuator that can achieve it.  
   4. **Execution & monitoring**: Agent issues tool commands, monitors outcomes, updates belief state.  
   5. **Replanning / learning**: If a tool fails or yields unexpected results, the agent revises its plan (e.g., re‑chooses tools).  

**4. Common pitfalls to avoid**  
   - *Mixing up planning and execution*: Planning is offline; execution is online.  
   - *Assuming perfect tool knowledge*: Agents often need a model of tool uncertainty.  
   - *Overlooking resource constraints*: Tool selection must consider time, cost, and safety.

**5. Sanity‑check & verbalize**  
   - Run through an example (e.g., a household robot that plans to “make tea” using a kettle tool).  
   - Verify each step maps cleanly onto the pattern: goal → subgoals (“boil water”, “add tea”) → tools (kettle, spoon) → execution.  
   - Communicate this flow in plain language, highlighting how agents orchestrate tools through reusable planning patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
