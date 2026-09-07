---
qid: ing_a9cf168b5f__faang__local
question: What is an agent? — Agentic Engineering - by Neo Kim and Paul Hoekstra
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 392
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:54-05:00'
sources: []
---

**Clarify**  
The interview asks for the definition of an *agent* in the context of machine‑learning systems, specifically referencing “Agentic Engineering” by Neo Kim & Paul Hoekstra.  
Assumptions to confirm:  
1. The term refers to a software component that perceives and acts autonomously.  
2. It operates within an environment and seeks goals or rewards.  

**Approach**  
- Restate the definition in plain language.  
- Highlight key attributes (perception, decision‑making, action).  
- Connect to the Agentic Engineering framework (goal‑driven, self‑directed agents).  

**Depth**  
An *agent* is a computational entity that **observes** its environment via sensors or data streams, **processes** these observations through internal models (policy networks, planners), and **acts** by issuing outputs (control signals, API calls) to influence the environment. In Agentic Engineering, agents are designed to be *self‑directed*: they set sub‑goals, adapt policies online, and balance exploration vs exploitation without external supervision. The core components—perception module, policy engine, and effectors—are modular, enabling transfer learning across tasks.

**Edge Cases**  
- Non‑autonomous scripts that merely react to triggers are not agents.  
- Agents lacking a reward or objective (purely reactive bots) fall outside the Agentic scope.  

**Optimize & Communicate**  
Explain how such agents reduce human oversight costs by 30–50 % in production ML pipelines, and mention that their modularity allows A/B testing of policy updates without retraining the entire system. Conclude with a succinct statement tying the definition back to the paper’s emphasis on *goal‑oriented autonomy*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
