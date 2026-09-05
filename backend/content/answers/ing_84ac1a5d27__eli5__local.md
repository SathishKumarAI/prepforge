---
qid: ing_84ac1a5d27__eli5__local
question: Zhipu open-sourced slime, an RL framework that supports both colocated-synchronous
  and disaggregated-asynchronous modes. Why does long-horizon agentic RL need the
  disaggregated, asynchronous design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 250
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:13-05:00'
sources: []
---

Think of a long‑horizon agent as a marathon runner who has to plan miles ahead while also reacting to sudden weather changes. In a **colocated‑synchronous** setup, the runner’s brain (the learning algorithm) and legs (the environment simulation) sit in the same room, taking turns breathing together. They must pause for every step: the brain waits for the legs to finish moving before it can update its plan, and the legs wait for the brain’s decision. This tight coupling is fine for short runs but becomes sluggish when the runner has to consider thousands of steps.

A **disaggregated‑asynchronous** design separates the brain and legs into different rooms that talk over a fast network. The brain keeps generating plans in the background, while the legs keep moving and collecting new data independently. If a sudden rain (a rare event) appears, the brain can immediately adjust its strategy without waiting for the legs to finish their current stride. This decoupling lets long‑horizon agents explore many future possibilities, learn from sparse rewards, and stay responsive to unexpected changes—all while keeping training time reasonable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
