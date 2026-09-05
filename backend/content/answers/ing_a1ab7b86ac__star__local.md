---
qid: ing_a1ab7b86ac__star__local
question: Why Separate Planner and Coder Agents? — Autonomous Coding Agent
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 344
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:05-05:00'
sources: []
---

**Situation** – At my last gig I was building an autonomous code‑generation platform for a fintech client. Their legacy system needed a new API layer, but the budget only allowed one developer to prototype within two weeks. The risk of bugs was high because the client’s data had strict compliance rules.

**Task** – My goal was to produce a fully tested API module that met security standards while staying on schedule and under $8k.

**Action** – I split the AI workflow into two distinct agents:  
1. **Planner** (GPT‑4 with a custom prompt) first gathered requirements, drafted a high‑level architecture diagram, identified external libraries, and produced a step‑by‑step development plan in JSON.  
2. **Coder** (a fine‑tuned Codex model) then received the plan and wrote code blocks, ran unit tests locally, and iterated until all test cases passed. I used GitHub Actions to trigger the coder on each commit and automatically linted with flake8. The planner also flagged potential compliance pitfalls, which the coder addressed by inserting data‑masking wrappers.

**Result** – We delivered the API module 3 days ahead of deadline, kept costs under $7,500, and achieved a 99% pass rate on security audits. I learned that decoupling planning from execution lets each agent specialize: the planner focuses on strategy and risk mitigation, while the coder concentrates on syntactic correctness and test coverage, dramatically improving reliability and speed in autonomous coding projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
