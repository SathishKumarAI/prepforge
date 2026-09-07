---
qid: ing_18e8c51d82__faang__local
question: What Is an Agent? — AI Agents Explained - by Sairam Sundaresan and Neo Kim
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 451
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:46-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise definition of an *AI agent*—a software entity that perceives its environment, reasons about it, and acts autonomously to achieve goals. I’ll assume you want the core concepts (perception, decision‑making, action) plus how they differ from a simple script or rule‑based system.

**Approach**  
1. Define the three pillars: *Perception*, *Reasoning/Planning*, *Actuation*.  
2. Explain the “agent loop” that ties them together.  
3. Contrast an agent with non‑agent programs (scripts, batch jobs).  
4. Mention common architectures (reactive vs deliberative) and typical use cases.

**Depth**  
An AI agent is a **percept–action loop**: it receives sensory inputs (e.g., sensor data or user queries), processes them through an internal model (policy network, planner, or symbolic rules), selects an action, and sends that action to the environment. The loop repeats until termination or convergence on a goal.  
- *Reactive agents* map perceptions directly to actions via hand‑crafted rules or learned policies.  
- *Deliberative agents* maintain an explicit world model, perform planning (e.g., A*, MCTS), then execute the first action of the plan.  
Agents can be **goal‑driven** (optimizing a reward function) or **utility‑based**, and may learn online via reinforcement learning.

**Edge Cases**  
- *Partial observability*: agents must maintain belief states.  
- *Non‑determinism*: stochastic policies or robust planning are needed.  
- *Multi‑agent settings*: coordination and communication become critical.

**Optimize & Communicate**  
Emphasize that the agent abstraction cleanly separates perception, reasoning, and action, enabling modular design and scalability. In practice, a hybrid architecture—reactive low‑latency front end plus a deliberative planner behind it—is common in robotics and autonomous vehicles. This framing shows you understand both theory and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
