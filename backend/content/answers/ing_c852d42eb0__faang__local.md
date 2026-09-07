---
qid: ing_c852d42eb0__faang__local
question: 'Q11: What is the difference between an agent and a workflow?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 454
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:06-05:00'
sources: []
---

**Clarify**  
You’re asking how an *AI agent* differs from a *workflow*. I’ll assume you mean: (1) an autonomous entity that perceives and acts on data, and (2) a prescribed sequence of tasks that may or may not involve AI. Clarify whether the workflow is purely procedural or can include ML components.

**Approach**  
- Define each concept in isolation.  
- Highlight key attributes: autonomy, adaptability, statefulness.  
- Contrast use‑cases and design implications.

**Depth**  
| Feature | Agent | Workflow |
|---------|-------|----------|
| **Purpose** | Actively pursue goals (e.g., recommend content). | Execute a fixed pipeline (e.g., ETL batch job). |
| **Autonomy** | High: selects actions based on observations. | Low: follows pre‑defined steps, no decision making. |
| **Adaptability** | Learns from interaction; policy updates over time. | Static unless manually edited or re‑triggered. |
| **Statefulness** | Maintains internal model/knowledge (policy, memory). | Stateless or only transient state between stages. |
| **Feedback loop** | Continuous reward / loss signals refine behavior. | One‑shot or scheduled; feedback often external. |
| **Implementation** | Reinforcement learning, decision trees, policy networks. | BPMN, Airflow DAGs, shell scripts. |

**Edge Cases**  
- A workflow that calls an ML model still isn’t an agent—lack of goal‑driven selection.  
- An agent with a fixed rule‑base behaves like a workflow; the distinction blurs if you remove learning.

**Optimize & Communicate**  
Explain that choosing between them hinges on *goal‑oriented adaptability* vs *predictable repeatability*. For interviewers, stress how to justify architecture: use an agent when outcomes depend on evolving data and user feedback; use a workflow for deterministic, audit‑friendly processes. This framing showcases clear reasoning, technical depth, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
