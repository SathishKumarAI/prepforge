---
qid: q025
question: "Explain temperature, top-k, and top-p (nucleus) sampling in LLM decoding."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building a customer-support LLM assistant, and we had two problems at once: the answers to policy questions were sometimes hallucinated, while the marketing copy variant felt robotic and repetitive. Both came down to how we were decoding.

**Task** I needed to tune the sampling parameters per use case so factual replies stayed grounded and creative replies stayed varied.

**Action** I explained and tuned the three knobs. Temperature scales the logits before softmax: low, like 0.2, sharpens the distribution toward the likeliest tokens; high, like 0.9, flattens it for more randomness. Top-k restricts sampling to the k highest-probability tokens, cutting off the long tail. Top-p, nucleus sampling, keeps the smallest set of tokens whose cumulative probability crosses p, so the candidate pool adapts to how confident the model is. For support I ran temperature 0.2 with top-p 0.8; for marketing, temperature 0.9 with top-p 0.95.

**Result** Hallucinated policy answers dropped by about 60% in our eval set, and the marketing team rated copy diversity far higher. The lesson: decoding parameters are a real product lever, not just defaults.
