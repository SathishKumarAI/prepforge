---
qid: q011
question: "At a high level, how does a large language model (LLM) generate text?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** They said "high level," so resist diving into attention math — assume they want the generation *loop* and the training that enables it. State that scope.
2. **Mental model.** The core idea is **autoregressive next-token prediction**: given the tokens so far, output a probability distribution over the vocabulary, pick one, append, repeat.
3. **Reason step by step.** (a) Tokenize input and embed tokens. (b) A **transformer** processes them through stacked **self-attention** and feed-forward layers, emitting a distribution for the next token. (c) **Sample** a token — greedy, top-k, top-p, or temperature-controlled. (d) Append and loop until a stop condition. Then add the training context: self-supervised **pretraining** on massive text, optionally **fine-tuning** and alignment (RLHF) to follow instructions.
4. **Traps to avoid.** Don't say it looks answers up in a database or queries a table — knowledge lives *implicitly in the weights*, which is exactly why it can **hallucinate**. Don't describe it as a decision tree over the vocabulary.
5. **Sanity-check + delivery.** Ask: does my explanation make one token at a time and explain hallucination? If yes, it's coherent. Deliver: "it predicts the next token autoregressively with a transformer, sampling repeatedly until it stops."
