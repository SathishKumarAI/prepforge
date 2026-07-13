---
qid: q025
question: "Explain temperature, top-k, and top-p (nucleus) sampling in LLM decoding."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain all three as controls over how we sample the next token from the model's probability distribution. Temperature rescales the logits: below 1 sharpens toward the top tokens (more deterministic), above 1 flattens the distribution (more diverse and random). Top-k restricts sampling to the k most probable tokens, cutting the long tail. Top-p, nucleus sampling, instead keeps the smallest set of tokens whose cumulative probability reaches p, so the candidate pool adapts to how confident the model is, wide when uncertain, narrow when peaked.

To show **Dive Deep** I'd anchor it in a decision I owned. Our system had two modes: for factual extraction I set temperature near 0 with tight top-p for reproducible, correct output; for creative copy I raised temperature and used top-p around 0.9 for variety. Tuning these on an eval set cut malformed extraction outputs by about 30% without any model change, effectively free quality.

The trade-off I'd name: higher temperature and wider top-p buy diversity at the cost of coherence and reproducibility, so the right setting is task-specific, not a global default. On AWS I'd expose these as per-request Bedrock parameters.

A bar-raiser listens for whether I understand precisely how each knob reshapes the distribution, especially top-p's adaptive nature versus top-k's fixed cut, and whether I tuned them against measured outcomes.
