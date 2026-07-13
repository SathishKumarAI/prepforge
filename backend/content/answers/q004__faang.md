---
qid: q004
question: "What is an intelligent agent in AI?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll use the classic Russell & Norvig framing and confirm the interviewer wants the agent abstraction (perceive-decide-act) plus the taxonomy, not a specific product like an "LLM agent."

**Approach** — Define the agent-environment loop, give the formal mapping, then classify agent types by sophistication.

**Depth** — An intelligent agent is anything that perceives its environment through *sensors* and acts upon it through *actuators* to achieve goals. Formally it's a function mapping percept histories to actions, ideally choosing actions that maximize a *performance measure*. A rational agent selects the action expected to maximize that measure given its knowledge. Standard taxonomy: simple reflex agents (condition-action rules), model-based reflex agents (maintain internal state), goal-based agents (search/plan toward goals), utility-based agents (optimize a utility function under trade-offs), and learning agents (improve from experience).

**Edge cases** — Partial observability breaks pure reflex agents; stochastic or adversarial environments require utility and planning. Bounded rationality matters—perfect rationality is often computationally infeasible, so we settle for good-enough decisions.

**Optimize & communicate** — I'd connect it to modern systems: a thermostat is a reflex agent; a self-driving car is model-, goal-, and utility-based; an LLM tool-using agent adds planning and memory. Grounding the abstraction in a concrete escalation of examples shows both textbook depth and applied intuition.
