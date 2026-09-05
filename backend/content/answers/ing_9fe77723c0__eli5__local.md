---
qid: ing_9fe77723c0__eli5__local
question: 'Explain: Dynamic Programming — Topleetcodeproblems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 278
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:50:57-05:00'
sources: []
---

Think of learning to solve LeetCode puzzles like baking a big cake that has many layers, but you only have a single oven.  
**Dynamic programming (DP)** is the recipe that lets you bake each layer just once and then reuse it whenever another part of the cake needs that same slice.

*Avoided term*: **Subproblem** – a smaller piece of the whole problem that repeats in different ways.  

You start at the base: solve the simplest subproblem (e.g., “how many ways to climb 0 steps?”). Store its answer in a table, like a pantry shelf.  
When you tackle a bigger question (say “climb 5 steps”), you look up the answers for the smaller climbs that make it possible (“climb 4” + one step, “climb 3” + two steps) and add them together. Because those smaller answers were already baked, you never redo the work.

In LeetCode terms, DP turns a problem that would normally explode into many duplicate calculations (exponential time) into a linear‑time walk through a table. It’s the same as baking one layer once and reusing it whenever needed—fast, efficient, and deliciously correct.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
