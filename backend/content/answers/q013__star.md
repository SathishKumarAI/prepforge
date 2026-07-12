---
qid: q013
question: "What is prompt engineering and why does it matter?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a legal-tech startup, our contract-summarization feature was producing inconsistent, sometimes wrong summaries from the same LLM, and customers were losing trust. We had a renewal at risk.

**Task** I was asked to improve output quality without the budget or time to fine-tune a model.

**Action** I focused on prompt engineering, the practice of designing the input to an LLM to reliably steer its output. I rewrote our prompt to assign a clear role ("you are a contracts paralegal"), added three few-shot examples of good summaries, gave explicit step-by-step instructions, and constrained the output to a strict JSON schema. I also added a chain-of-thought instruction for the reasoning-heavy clauses and moved key constraints to the end where the model weights them heavily. I A/B tested each change against a labeled eval set.

**Result** Summary accuracy on our eval set jumped from 71% to 94% and format errors basically vanished, all in one week and at zero training cost. That saved the renewal. Lesson: how you ask often matters as much as which model you use.
