---
qid: q004
question: "What is an intelligent agent in AI?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building an automated warehouse-inventory system where a robot needed to decide on its own when to restock shelves, and my team kept describing it vaguely as "the smart thing." We had a demo deadline in three weeks.

**Task** I had to formalize the design around the concept of an intelligent agent so the architecture was clean and testable.

**Action** I defined the agent explicitly by its parts: sensors that perceive the environment (our shelf cameras and weight sensors), an internal state and policy that maps percepts to actions, and actuators that act on the environment (the restock arm). I made it a goal-based agent, so instead of reacting blindly it evaluated actions against the goal of keeping stock above threshold, and I added a performance measure to score its choices. I implemented the perceive-decide-act loop as an explicit control cycle in code.

**Result** Framing it as a rational agent maximizing a performance measure made the logic modular; we cut stockouts by 34% and the design passed review on the first pass. I learned that naming the sense-think-act loop keeps agent code disciplined.
