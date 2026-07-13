---
qid: q004
question: "What is an intelligent agent in AI?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Check whether they mean the classical Russell-Norvig agent or a modern "LLM agent" — cover the textbook definition first, then bridge to the modern usage. Assume a definitions-level answer.
2. **Mental model.** Hold the loop `percept → agent function → action`: something that **perceives** an environment via sensors and **acts** on it via actuators to achieve goals.
3. **Reason step by step.** Give the core definition, then climb the sophistication ladder: simple reflex (condition-action rules) → model-based (keeps internal state) → goal-based → utility-based (maximizes a utility function under trade-offs) → learning agents (improve from experience). Introduce **rationality**: a rational agent picks actions expected to maximize its performance measure given its knowledge.
4. **Traps to avoid.** Don't confuse an agent with a dataset, a loss function, or hardware — those are distractor answers. Don't equate "agent" solely with reflexive if-then rules; that's just one rung.
5. **Sanity-check + delivery.** Test your definition against a thermostat and a chess bot — both should fit as agents at different rungs. Then land the one-liner and connect it: "Modern LLM agents extend this — a language model plus tools and memory that plans and acts autonomously."
