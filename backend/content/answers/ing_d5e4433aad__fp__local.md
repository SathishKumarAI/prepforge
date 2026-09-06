---
qid: ing_d5e4433aad__fp__local
question: 'Q: Why is LLM generation slower than classification?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 366
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:34:56-05:00'
sources: []
---

**Why LLM generation is slower than classification**

At its core, a language model (LLM) solves an *autoregressive* prediction problem:  
\[
P(x_1,\dots,x_T)=\prod_{t=1}^{T}P(x_t|x_{<t})
\]
Each token \(x_t\) must be sampled **after** all preceding tokens have been produced, so the decoder can only compute one hidden state at a time. In contrast, classification is a *parallel* inference problem:  
\[
\mathbf{y}= \operatorname{softmax}(W\,h + b)
\]
where \(h\) is a single forward pass through the network; all class probabilities are obtained in one matrix multiplication.

The sequential nature forces:

1. **Serial computation** – each step waits for the previous hidden state, eliminating GPU‑wide parallelism.
2. **Beam or sampling overhead** – to improve quality we maintain multiple partial hypotheses, multiplying the cost by the beam width.
3. **Memory traffic** – every generated token requires a new attention context and cache update.

These factors make generation \(O(T \times B)\) in time versus classification’s \(O(1)\).  
*A subtle point*: because each token depends on all previous ones, early errors can propagate, so models often employ caching or *fast‑weight* updates to mitigate latency—an optimization that still falls short of the embarrassingly parallel softmax.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
