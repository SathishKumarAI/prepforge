---
qid: q015
question: "When would you fine-tune an LLM instead of using prompting or RAG?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — This is a judgment question, so I'll frame it as a decision framework: prompting → RAG → fine-tuning, escalating only when cheaper options fall short. I'll confirm we mean adapting model behavior, not pretraining.

**Approach** — State what each technique is best at, then give concrete signals that justify fine-tuning.

**Depth** — Prompting changes *instructions*; RAG injects *knowledge* at query time; fine-tuning updates *weights* to change learned behavior. I'd choose fine-tuning when: (1) I need a consistent *style, format, or tone* that's hard to specify in a prompt (e.g., always emit a strict schema); (2) I want to teach a *skill or domain reasoning pattern* not reliably promptable; (3) I need to *reduce latency and cost* by shrinking long few-shot prompts into the weights, or distill a large model into a smaller one; (4) I have a substantial, high-quality labeled dataset of desired input-output pairs. Techniques like LoRA make this cheaper than full fine-tuning.

**Edge cases** — Fine-tuning is the *wrong* tool for injecting frequently-changing facts (use RAG—retraining is slow and facts go stale) or when data is scarce (risks overfitting and catastrophic forgetting). It costs training compute, MLOps, and eval infrastructure.

**Optimize & communicate** — I'd combine approaches—fine-tune for behavior, RAG for knowledge—and always start cheap, measuring on an eval set before escalating. Narrating that escalation ladder is the signal interviewers reward.
