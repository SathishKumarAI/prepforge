---
qid: q025
question: "Explain temperature, top-k, and top-p (nucleus) sampling in LLM decoding."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume an autoregressive LLM producing a probability distribution over the next token via softmax over logits. The question is how these three knobs reshape sampling from that distribution.

**Approach** — Explain the softmax baseline, then each parameter as a transformation of the distribution before we sample.

**Depth** — *Temperature* T scales logits before softmax: `softmax(logits/T)`. T<1 sharpens the distribution (more deterministic, favors high-probability tokens); T>1 flattens it (more diverse, riskier); T→0 approaches greedy argmax. *Top-k* truncates to the k highest-probability tokens, renormalizes, then samples — capping the candidate pool at a fixed count. *Top-p (nucleus)* keeps the smallest set of tokens whose cumulative probability ≥ p, then renormalizes. Unlike top-k's fixed count, the nucleus adapts: few candidates when the model is confident, many when it's uncertain. These compose — typically temperature first, then top-k/top-p truncation.

**Edge cases** — High T with no truncation yields incoherent text; top-k=1 or T=0 is greedy and can loop; tiny p over-truncates and kills diversity. Truncation guards temperature's tail risk.

**Optimize & communicate** — I'd recommend top-p (~0.9) with moderate temperature for open-ended generation, low T for factual tasks. Signal: I understand these operate on the same distribution and interact.
