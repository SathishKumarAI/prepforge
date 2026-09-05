---
qid: ing_af3eba2db6__eli5__local
question: 'Explain: State assumptions — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 324
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:15:17-05:00'
sources: []
---

**What “state assumptions” means**

When you’re designing a big system (like the backend that powers every tweet), you can’t just start coding and hope everything works. You first have to *state your assumptions*—the clear, simple facts you take for granted while planning.

Think of it like building a bridge over a river. Before you lay any concrete, you must decide:

- How wide is the river? (How many users will hit the service at once?)
- Is the water calm or fast‑flowing? (Will traffic spike during a big event?)
- Do you have enough material for strong pillars? (Do you have storage and compute power?)

Those are your assumptions. You write them down so everyone knows what the design is built on, and if later you find out the river is wider than expected, you can revise the bridge instead of fixing broken foundations.

In a system‑design primer, “state assumptions” means:

1. **List the key facts** you’re assuming (e.g., 10 million daily active users, tweets are short strings, data must be written in < 50 ms).
2. **Explain why they matter** for the design decisions that follow.
3. Keep them simple and testable—so if reality changes, you can adjust the plan quickly.

By clearly stating these assumptions early, you give your design a solid footing, just like a bridge needs its measured spans before construction starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
