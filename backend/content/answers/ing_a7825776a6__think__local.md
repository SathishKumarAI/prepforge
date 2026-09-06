---
qid: ing_a7825776a6__think__local
question: 'Explain: Choosing a pattern — Multi-agent patterns in LlamaIndex | Developer
  Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 465
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:06:26-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**

- *Goal:* Understand why you’d pick a multi‑agent pattern when using LlamaIndex (the index‑builder library for large language models).  
- *Assumptions:*  
  - The user has basic familiarity with LlamaIndex’s single‑agent use.  
  - They want to split responsibilities among several agents (retrieval, reasoning, execution, etc.).  

**2️⃣ Mental model / framework**

Think of the system as a **pipeline**:  
- *Input* → *Agents* (each specialized) → *Output*.  
Use LlamaIndex’s **AgentExecutor** abstraction to glue them. The pattern is chosen when you need modularity, parallelism, or distinct logic per step.

**3️⃣ Step‑by‑step reasoning**

1. **Identify tasks** that naturally separate (e.g., data retrieval vs. policy enforcement).  
2. **Map each task to an agent type** (retrieval agent, query‑planning agent, etc.).  
3. **Decide on communication**: sequential (one feeds the next) or concurrent (parallel calls).  
4. **Implement agents** using LlamaIndex’s `Agent` base class and register them with a shared index.  
5. **Configure the executor** (`MultiAgentExecutor`) to orchestrate execution order, handle failures, and aggregate results.

**4️⃣ Common traps**

- *Over‑engineering:* Adding too many agents for trivial tasks can increase latency.  
- *State leakage:* Agents must not unintentionally share mutable state unless intended.  
- *Version mismatches:* Ensure all agents use the same LlamaIndex version to avoid API drift.

**5️⃣ Sanity‑check & verbalize**

- **Check fit:** Does each agent solve a clear subproblem?  
- **Verify isolation:** Can you replace or test an agent independently?  
- **Explain aloud:** “I’m using a multi‑agent pattern because I need separate retrieval and reasoning steps, so I’ll build two agents and let the executor coordinate them.”  

By following this process, you can decide when and how to apply LlamaIndex’s multi‑agent patterns effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
