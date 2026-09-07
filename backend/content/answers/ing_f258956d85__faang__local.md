---
qid: ing_f258956d85__faang__local
question: 'Explain: What an AI agent is — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 506
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:03:02-05:00'
sources: []
---

**Clarify**  
We need a concise definition of an *AI agent* and a brief rundown of its “agentic” use‑cases as outlined by Neo Kim (e.g., autonomous decision‑making, goal‑driven behavior). Assume the audience knows basic ML concepts but not the term “agent.”

**Approach**  
1. Define “agent” in AI terms.  
2. Highlight key properties: perception, reasoning, action, learning.  
3. List concrete use‑cases Neo Kim cites (e.g., autonomous vehicles, personal assistants, robotic surgery).  
4. Tie each use‑case to the agent’s core capabilities.

**Depth**  
An **AI agent** is a software or hardware system that perceives its environment through sensors, processes inputs via models/logic, and acts upon actuators to achieve specified goals while learning from feedback. Core properties:  

| Property | What it does | Example in Neo Kim’s use‑cases |
|----------|--------------|--------------------------------|
| **Perception** | Interprets raw data (vision, audio) | Self‑driving car’s LIDAR & camera |
| **Reasoning** | Chooses actions to maximize reward/utility | Personal assistant schedules based on user priorities |
| **Action** | Executes commands in the world | Robotic arm performs precise incisions |
| **Learning** | Improves policy over time | Adaptive traffic‑signal control learns peak patterns |

Neo Kim highlights:  
- *Autonomous vehicles* (real‑time navigation).  
- *Virtual personal assistants* (goal‑driven scheduling).  
- *Industrial robotics* (precision manufacturing).  
- *Healthcare diagnostics* (interpreting imaging, suggesting treatments).

**Edge cases**  
1. **Non‑stationary environments** – agent must detect distribution shifts.  
2. **Sparse rewards** – learning can stall; curriculum or intrinsic motivation helps.  
3. **Safety constraints** – hard‑coded safety rules to prevent catastrophic actions.

**Optimize & communicate**  
- Emphasize that the “agentic” label underscores *goal orientation* and *autonomy*, not just predictive power.  
- Highlight how modular perception‑reasoning‑action pipelines allow scaling across domains.  
- Conclude with a quick note: future research focuses on robust exploration and explainable decision traces to satisfy regulatory demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
