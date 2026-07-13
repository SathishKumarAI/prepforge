---
qid: q016
question: "What is hallucination in LLMs and how can it be mitigated?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll define hallucination as confident but false/unsupported output, and confirm the interviewer wants both *why* it happens and a layered mitigation strategy, not a single fix.

**Approach** — Explain the root cause, then organize mitigations by layer: input, model, and output verification.

**Depth** — A hallucination is when an LLM generates fluent, plausible-sounding content that is factually wrong or unsupported by any source. Root cause: LLMs are trained to predict the *most probable next token*, not to state truth—they have no built-in notion of factual grounding and will confidently fill gaps. Mitigations: *Grounding*—RAG supplies retrieved evidence and citations so answers are anchored to real documents. *Prompting*—instruct the model to say "I don't know," to cite sources, and use chain-of-thought to reduce reasoning errors. *Decoding*—lower temperature for factual tasks. *Post-hoc verification*—cross-check claims against sources, use a second model or rules to validate, and require citations that actually support the claim. *Training*—RLHF and factuality fine-tuning reduce, but don't eliminate, the tendency.

**Edge cases** — RAG still hallucinates if retrieval is wrong or the model ignores context; models may fabricate citations. No method fully eliminates it—residual risk remains for high-stakes use.

**Optimize & communicate** — I'd emphasize defense-in-depth plus human review for high-stakes domains, and measuring hallucination rate on an eval set. Framing it as an inherent property to *manage*, not a bug to fully "fix," signals mature judgment.
