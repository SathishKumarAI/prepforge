---
qid: ing_cd657d8e40__think__local
question: 'Explain: Agency Levels — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 492
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:31:15-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal*: Teach a beginner how “agency levels” relate to core agent concepts in AI.  
   - *Assumptions*: The learner knows basic ML terms (model, training) but not formal agent theory; they want a concise, intuitive map.

**2️⃣ Adopt an “agent‑as‑system” mental model**  
   - Think of an agent as a loop: **Perception → Decision → Action → Feedback**.  
   - Map each level to how much this loop is *self‑contained* vs. *externally guided*.

**3️⃣ Step‑by‑step reasoning toward the answer**  

| Level | Core Idea | What’s inside the agent? | Example |
|-------|-----------|--------------------------|---------|
| **Level 0 – Reactive** | No memory, pure stimulus–response | Sensors → Rule (if‑then) → Actuator | Simple thermostat |
| **Level 1 – Deliberative** | Adds internal state & planning | Memory + Planner → Evaluate actions → Pick best | Robot navigating a maze with a map |
| **Level 2 – Adaptive** | Learns from experience, updates models | Learning module modifies planner or perception | Self‑improving recommendation system |
| **Level 3 – Autonomous (Self‑Directed)** | Sets its own goals, balances internal & external objectives | Goal‑oriented planner + value function → Continuous self‑refinement | AI that designs experiments to discover new physics |

**4️⃣ Avoid common traps**  
   - *Confusing learning with adaptation*: emphasize that Level 2 explicitly changes the agent’s knowledge base.  
   - *Overloading “autonomous”*: not all autonomous agents are fully self‑directed; many just act without human input.

**5️⃣ Sanity‑check & communicate clearly**  
   - Verify each level adds one new capability (memory, planning, learning, goal‑setting).  
   - Use a short analogy (thermostat → robot → recommender → experimenter) to anchor the hierarchy.  
   - Summarize: “Think of agency as layers of self‑sufficiency; each layer equips the agent with an extra tool—memory, planning, learning, or goal‑setting.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
