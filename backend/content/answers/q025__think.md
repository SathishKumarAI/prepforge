---
qid: q025
question: "Explain temperature, top-k, and top-p (nucleus) sampling in LLM decoding."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Establish these are *inference-time* decoding controls, not training hyperparameters - a common misconception worth pre-empting. Assume the interviewer wants both the mechanism and when to use each.

2. **Mental model.** Picture the model's next-token probability distribution; each knob reshapes or trims it before you sample. Temperature reshapes the whole curve; top-k and top-p trim the candidate set.

3. **Reason step by step.** Temperature T divides logits before softmax: T<1 sharpens (conservative), T>1 flattens (creative), T to 0 becomes greedy. Top-k keeps the k most probable tokens then renormalizes - a fixed cutoff. Top-p (nucleus) keeps the smallest set whose cumulative probability crosses p, so the candidate set adapts: narrow when the model is confident, wide when uncertain. That adaptivity is why top-p is often preferred over top-k. They compose.

4. **Traps to avoid.** Don't call them layer counts or loss functions. Don't say temperature "picks" tokens - it only rescales; sampling still happens. Don't confuse top-k's fixed size with top-p's dynamic set.

5. **Sanity-check.** Map settings to tasks out loud: low temperature / low top-p for factual determinism, higher for creative generation. Verify each definition is distinct.
