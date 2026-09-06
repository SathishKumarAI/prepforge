---
qid: ing_828ea642c1__fp__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 333
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:02-05:00'
sources: []
---

**Code‑based evaluation**  
When a language model is asked to write or debug software, the *truth* of its answer is whether the produced program satisfies a specification (type‑checked, runs, passes tests). The fundamental problem is that textual similarity or surface metrics cannot guarantee functional correctness. Hence we turn the task into an *optimization over the program space*: find \(p\) such that \(S(p)=1\), where \(S\) checks semantic properties.

Because the specification is usually a deterministic function of the code (e.g., “does this Python snippet raise no exceptions on given inputs?”), we can evaluate \(S(p)\) by compiling or interpreting the program once. The cost is bounded: a single run of the interpreter, static type‑checkers, or unit tests—much cheaper than human review and far more repeatable than probabilistic metrics. Determinism follows from the absence of stochastic components in the evaluation engine; each identical input yields the same verdict.

**Non‑obvious insight:**  
The *tight coupling* between program semantics and deterministic execution turns the evaluator into a *lossless oracle*. Unlike BLEU or ROUGE, which are lossy approximations, code‑based evals provide an exact gradient of correctness. This property can be leveraged to train models with reinforcement learning: the reward signal is binary but perfectly aligned with the ultimate objective (functional correctness), enabling efficient policy improvement without noisy human feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
