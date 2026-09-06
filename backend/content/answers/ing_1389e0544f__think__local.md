---
qid: ing_1389e0544f__think__local
question: When should you split an agent into sub-agents, and what do you pass between
  them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 541
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:00:47-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *What is an “agent” here?* Assume a software component that perceives, decides, and acts (e.g., a robotic or virtual AI).  
- *Why split?* Look for scalability, specialization, safety, or performance constraints.  
- *Scope of “pass between them”*: data, control signals, state, or policies.

**2️⃣ Mental model / framework**  
Use the **“Modular Design + Information Flow”** lens:  
- *Modules* → distinct responsibilities (perception, planning, execution).  
- *Interfaces* → well‑defined contracts (APIs, message formats).  
- *Hierarchy* → top‑level orchestrator vs. low‑level workers.

**3️⃣ Step‑by‑step reasoning**  
1. Identify **bottlenecks**: is a single loop too slow or complex?  
2. Check for **separation of concerns**: can perception be decoupled from decision‑making?  
3. Evaluate *real‑time* vs. *batch* needs; real‑time tasks often go to dedicated sub‑agents.  
4. Consider *fault isolation*: a crash in one sub‑agent shouldn’t bring down the whole system.  
5. Define **communication channels**: e.g., perception → planner (sensor data, belief state); planner → controller (action commands).  
6. Decide on *state sharing* vs. *policy sharing*: do you pass raw observations or a distilled latent representation?  

**4️⃣ Common traps to avoid**  
- Over‑splitting: too many tiny agents increase latency and complexity.  
- Ambiguous interfaces: passing raw data that changes format leads to brittle code.  
- Ignoring synchronization: race conditions between sub‑agents can cause inconsistencies.  
- Forgetting security/robustness: untrusted sub‑agents may leak sensitive state.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “Does each sub‑agent have a single clear responsibility?”  
- Verify that data passed is **minimal yet sufficient** (e.g., send an abstracted belief vector, not raw sensor streams).  
- Communicate the design as: *“We split into Perception, Planning, and Control agents. Perception sends a latent state; Planner receives it and outputs high‑level actions; Control consumes those actions to issue motor commands.”*  

By following this checklist you’ll know when decomposition is beneficial and what exactly to transmit between sub‑agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
