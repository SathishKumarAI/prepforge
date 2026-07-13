---
qid: q016
question: "What is hallucination in LLMs and how can it be mitigated?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Two-part ask: define it, then mitigate it. Assume they want the *root cause* too, since that justifies the mitigations. Say you'll connect cause to fix.
2. **Mental model.** Root cause first: the model is optimized to predict **plausible next tokens**, not to verify truth — it has no built-in fact-checker. So hallucination is a feature of the objective, not a bug you fully delete.
3. **Reason step by step.** Define it: fluent, confident output that is factually wrong or fabricated (invented citations, dates, APIs). Then derive mitigations from the cause: **RAG** to ground answers in authoritative sources; **prompting** to cite sources or say "I don't know"; **lower temperature** for conservative outputs; **verification/guardrails** (post-hoc fact-checks, tool use, validation); and **fine-tuning/alignment** on high-quality data.
4. **Traps to avoid.** Don't confuse hallucination with a crash, a refusal, or rising training loss — those are distractors. Don't claim any single method eliminates it; that overpromises.
5. **Sanity-check + delivery.** Verify each mitigation actually attacks the "predict-plausible-not-true" cause. End honestly: no method fully removes hallucination, so critical apps keep a **human in the loop**. Deliver: "confident but factually incorrect output; mitigate with grounding (RAG), careful prompting, lower temperature, and verification."
