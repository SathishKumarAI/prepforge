---
qid: ing_ac674bb074__fp__local
question: 'Explain: When do you build an agent versus a fixed workflow? The PM wants
  "an agent."'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 352
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:32-05:00'
sources: []
---

**When to favor an *agent* over a static workflow?**

At its core, the decision hinges on **variability of input and desired output** versus **predictable mapping**.  
A fixed workflow is optimal when you can encode a deterministic pipeline: each step has a well‑defined input, a clear transformation rule, and a predictable output that feeds the next stage. This is the domain of batch ETL, CI/CD pipelines, or simple data‑driven reports—tasks where the *state space* is small and bounded.

An *agent*, by contrast, thrives when the problem involves **highly dynamic environments**: inputs arrive in real time, constraints shift, or multiple goals compete. The agent must decide *which* transformation to apply, *when* to trigger it, and *how* to adapt its policy on‑the fly. This is a classic instance of online decision‑making under uncertainty—essentially an **optimization problem** where the objective function changes with context.

> **Non‑obvious insight:** Agents are not just “smart” versions of workflows; they expose *latent variables* (belief states, confidence scores) that can be leveraged for downstream analytics. By logging these internal signals, you gain a richer dataset than any static pipeline could produce—useful for model debugging, fairness audits, or incremental learning.

So, if your process is **static and fully specified**, build a workflow. If it must **react to evolving data, constraints, or multiple objectives**, invest in an agent that learns and optimizes over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
