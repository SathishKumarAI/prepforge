---
qid: q015
question: "When would you fine-tune an LLM instead of using prompting or RAG?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** This is a *decision* question, so treat it as a trade-off, not a definition. Assume they're probing whether you'll reach for fine-tuning appropriately (many candidates over-use it). State that you'll compare all three.
2. **Mental model.** Sort by *what each changes*: prompting and RAG leave weights untouched; **fine-tuning updates the weights**. Then map each tool to the problem it actually solves — behavior vs. knowledge.
3. **Reason step by step.** Fine-tune when you need consistent **style/tone/format** hard to specify in a prompt, a **specialized skill/domain behavior**, **lower latency/cost** (bake behavior in, shorten prompts), or strong performance on a **narrow task with ample labeled data**. Prefer **RAG** for *factual, changing knowledge* (docs, policies) — fine-tuning injects facts poorly and goes stale. Prefer **prompting** for quick iteration and general tasks.
4. **Traps to avoid.** The big one: don't fine-tune to "teach today's news" — that's a RAG job. Don't say fine-tuning is always best. Mention **PEFT/LoRA** so you don't imply full-model retraining is the only option.
5. **Sanity-check + delivery.** Litmus test: is the need *behavior* (fine-tune) or *fresh facts* (RAG)? Deliver: "fine-tune for consistent style/behavior on a specific task with enough labeled data; use RAG for changing facts, prompting for speed — and often combine RAG with light LoRA."
