---
qid: q011
question: "At a high level, how does a large language model (LLM) generate text?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — "High level" means the interviewer wants the core mechanism (next-token prediction, autoregression) plus sampling, not backprop math. I'll confirm we're talking about decoder-style transformers.

**Approach** — Trace the pipeline: tokenize, predict a probability distribution, sample one token, append, repeat.

**Depth** — An LLM generates text **autoregressively, one token at a time**. Input text is split into tokens (subword units) mapped to embeddings. The transformer processes these through stacked self-attention and feed-forward layers, producing at the final position a probability distribution over the entire vocabulary for the *next* token. A decoding strategy selects one token—greedy (argmax), or sampling with temperature, top-k, or top-p (nucleus)—which is appended to the sequence; the model then predicts the next token conditioned on everything so far. This repeats until a stop token or length limit. The model learned these distributions by pretraining on massive text to predict the next token, minimizing cross-entropy loss.

**Edge cases** — Temperature=0 is deterministic but repetitive; high temperature risks incoherence. Fixed context windows limit how much history conditions each prediction. It predicts *plausible* text, not verified truth—hence hallucination.

**Optimize & communicate** — I'd mention KV-caching for efficiency and that instruction-tuning/RLHF shape *what* it generates. Emphasizing "it's next-token prediction sampled repeatedly, not retrieval or reasoning by design" is the key intuition interviewers reward.
