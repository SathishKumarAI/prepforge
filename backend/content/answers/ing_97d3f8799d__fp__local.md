---
qid: ing_97d3f8799d__fp__local
question: 'Explain: Decoding strategy — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 594
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:28:54-05:00'
sources: []
---

**Decoding strategy – the engine that turns a probability distribution into language**

At its core, a transformer outputs a *conditional* probability mass function  
\(p(y_t \mid y_{<t},x)\) for each next token \(y_t\). The decoding problem is to find a sequence
\(Y=(y_1,\dots,y_T)\) that maximizes the joint likelihood

\[
\max_Y \prod_{t=1}^T p(y_t \mid y_{<t},x)
\]

or, equivalently, the log‑likelihood.  
Different strategies approximate this optimization in distinct ways:

| Strategy | Principle | How it works |
|----------|-----------|--------------|
| **Greedy** | Exact argmax at each step | Pick \(y_t=\arg\max p(y_t)\). Fast but can lock into a local optimum early. |
| **Beam search** | Search over a bounded set of partial hypotheses | Keep the top‑\(k\) sequences at every step, re‑scoring with cumulative log‑probability (often length‑normalised). It trades breadth for tractable optimality. |
| **Sampling** | Stochastic optimisation | Draw \(y_t\sim p(\cdot)\). Adds diversity but can produce incoherent outputs if the distribution has many low‑mass modes. |
| **Top‑k / nucleus (top‑p)** | Probability mass truncation | Restrict sampling to a subset of tokens whose cumulative probability reaches a threshold (either fixed count \(k\) or mass \(p\)). This keeps high‑probability, linguistically sensible words while discarding unlikely ones that would degrade fluency. |

**Why nucleus sampling works well:**  
It implicitly solves the *entropy* trade‑off: by keeping only tokens that cover, say, 90 % of the probability mass, we preserve enough uncertainty to avoid determinism but eliminate the “long tail” of improbable tokens that often produce nonsensical or repetitive phrases. This aligns with the principle of *maximum entropy under constraints*: we maximise diversity subject to a constraint on total probability.

**Non‑obvious insight:**  
In practice, the *effective* beam width is far smaller than \(k\) because many partial hypotheses share identical prefixes and quickly converge in probability space. Thus, beam search often behaves like greedy decoding with a tiny exploration buffer; increasing \(k\) beyond 10 yields diminishing returns unless coupled with diversity‑promoting penalties (e.g., length‑normalisation or coverage rewards). Understanding this collapse explains why modern pipelines favour nucleus sampling over large beams for real‑time generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
