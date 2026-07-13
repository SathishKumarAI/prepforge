---
qid: q013
question: "What is prompt engineering and why does it matter?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define prompt engineering as the practice of structuring instructions, context, and examples to reliably steer an LLM toward a desired output, without changing the model weights. Techniques include clear role and task framing, few-shot examples, chain-of-thought for reasoning, explicit output formats, and guardrails on what not to do.

To show **Bias for Action** and **Frugality** I'd anchor it in a feature I owned. Rather than fine-tuning, which would have meant weeks and GPU spend, I first invested a day in prompt design: a structured template with three worked examples and a strict JSON schema. That raised valid-output rate from 72% to 96% and eliminated a downstream parsing service. It shipped in days, not a sprint, at effectively zero training cost.

The trade-off I'd name: prompting is fast and cheap but has a ceiling, longer prompts cost more tokens per call and can't teach genuinely new domain behavior. So my rule is prompt first, add RAG for fresh facts, and only fine-tune when volume and a stubborn quality gap justify it. On AWS I'd iterate in Bedrock and version prompts as code.

A bar-raiser listens for whether I treat prompting as a rigorous, measured engineering discipline with an evaluation loop, and whether I know its limits versus RAG and fine-tuning.
