---
qid: q011
question: "At a high level, how does a large language model (LLM) generate text?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was mentoring a group of backend engineers integrating an LLM into our product, and they kept treating it like a database that "looks up" answers, which led to buggy assumptions about determinism and correctness.

**Task** I needed to explain how an LLM actually generates text so they'd build the integration with the right mental model.

**Action** I walked them through it step by step. The model tokenizes the prompt into subword tokens, then predicts the next token as a probability distribution over the vocabulary, conditioned on everything so far. It samples one token from that distribution, appends it, and repeats autoregressively until it hits a stop condition. I showed how temperature and top-p control how the sampling picks from the distribution, which is exactly why the same prompt can give different outputs. I demoed this live by setting temperature to 0 and showing near-deterministic results.

**Result** Once they understood it predicts one token at a time rather than retrieving facts, they added retry logic and validation, cutting malformed responses by 60%. The key lesson: an LLM is a next-token predictor, not a lookup table.
