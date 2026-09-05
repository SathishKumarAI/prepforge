---
qid: ing_1efb7332a3__fp__local
question: 'Explain: How this role''s interviews changed (2024 → 2026)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 384
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:58-05:00'
sources: []
---

## From “Show Your Code” to “Show Your Reasoning”

In **2024** interviewers still treated AI roles as *software engineering* jobs: candidates were expected to pull a repo, debug a script, and run a benchmark. The underlying problem was simply to prove that the applicant could write correct code—an optimization of syntactic correctness over semantic depth.

By **2026**, the focus shifted to **explainable inference**. The fundamental issue had evolved from “can you program?” to “do you understand why a model behaves as it does?” Interviewers now ask candidates to *derive* a small decision‑tree, explain feature importance, and predict how a perturbation will affect performance. This mirrors the principle of **information geometry**: we no longer care only about the path taken (the code), but also about the *shape* of the model’s loss landscape and its interpretability.

### Why the change matters
1. **Trust & safety** – stakeholders demand transparent decision processes, not just black‑box accuracy.
2. **Regulation** – GDPR and AI Act require explanations for algorithmic decisions.
3. **Collaboration** – data scientists must communicate insights to non‑technical teams; pure coding skills are insufficient.

### Non‑obvious insight
The most subtle shift is the *implicit expectation of causal reasoning*. Interviewers no longer ask “what does this output mean?” but “why would a specific input lead to that outcome?”. This pushes candidates to think in terms of **counterfactuals** and **causal graphs**, skills that are not taught in typical CS curricula yet are essential for responsible AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
