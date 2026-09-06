---
qid: ing_cb9f379b76__fp__local
question: 'Explain: LLM Papers Cheatsheet -- The Definitive Reading List'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 540
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:06-05:00'
sources: []
---

**Why a “cheatsheet” for LLM research is necessary**

Large‑language models (LLMs) solve the *universal sequence prediction* problem: given an input prefix \(x_{1:n}\), predict the next token \(x_{n+1}\).  Formally we approximate the joint distribution  
\[
p(x_1,\dots,x_T)=\prod_{t=1}^T p(x_t|x_{<t}) ,
\]
and learning reduces to minimizing cross‑entropy, an instance of **maximum likelihood estimation**.  The challenge is twofold: (i) *model capacity*—transformers with self‑attention can represent arbitrary context interactions; (ii) *data efficiency*—training on billions of tokens requires regularization, curriculum, and architectural tricks.

A cheatsheet distills the essential papers that solved each subproblem:

| Stage | Core Paper | Key Insight |
|-------|------------|-------------|
| **Attention** | Vaswani et al. 2017 (Transformer) | Scaled dot‑product attention replaces recurrence; enables parallelism and global context. |
| **Scaling Laws** | Kaplan et al. 2020 | Training loss follows a power law in parameters, data, compute; guides “what to grow”. |
| **Pretraining Objectives** | Radford et al. 2018 (GPT‑1) | Autoregressive LM objective is a universal proxy for downstream tasks. |
| **Optimization & Regularization** | Liu et al. 2020 (RMSNorm), Jiao et al. 2023 (AdaFactor) | Adaptive normalization and low‑precision optimizers reduce memory while preserving convergence. |
| **Efficient Decoding** | Holtzman et al. 2021 (Top‑k) | Beam search is unnecessary; stochastic sampling with temperature yields better diversity. |

**Non‑obvious insight:**  
The *self‑attention* mechanism can be viewed as a **dynamic graph neural network** over token positions. Each layer re‑weights edges based on learned content similarity, effectively learning a context‑dependent topology that adapts during training. This perspective explains why transformers generalize beyond fixed positional encodings: the model constructs its own relational structure from data.

By mapping each paper to the problem it solves—attention, scaling, objective, optimization, decoding—a reader can navigate the literature strategically rather than passively reading in chronological order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
