---
qid: ing_b767542f81__fp__local
question: 'Explain: You have eight hours to build a coding agent from scratch. Describe
  what you build and, more importantly, what you cut.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 408
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:33:44-05:00'
sources: []
---

**What I build:**  
A *task‑oriented pipeline* that turns a natural‑language prompt into an executable Python script and immediately verifies the result on a sandboxed environment.

1. **Parser → AST** – A lightweight grammar (≈200 LALR rules) that maps verbs (“plot”, “train”) to high‑level actions.
2. **Code generator** – Templates for each action that embed minimal dependencies (`matplotlib`, `scikit‑learn`) and a safety wrapper.
3. **Execution sandbox** – Docker‑based container with a strict resource quota; logs are streamed back in real time.
4. **Feedback loop** – The container’s stdout/stderr is parsed; any assertion failure triggers a brief re‑generation cycle.

**What I cut:**  

| Component | Why it was omitted |
|-----------|--------------------|
| Heavy NLP models (BERT, GPT) | 8 h of training/finetuning would exceed the time budget and yield negligible gains on simple prompts. |
| Full dependency resolver | Installing all pip packages at runtime is slower than bundling a curated set of lightweight libraries. |
| Interactive UI | A CLI suffices for quick iteration; GUIs add unnecessary rendering overhead. |
| Persistent state across sessions | Statelessness reduces complexity, making the agent easier to reset and audit. |

**Non‑obvious insight:**  
The *verification* step is the real engine of correctness, not the generation itself. By treating the container’s output as a probabilistic oracle (success≈1 if `stdout` matches expected regex), we convert an otherwise deterministic pipeline into a stochastic optimizer: each failure triggers a minimal re‑generation that biases toward the “most likely” fix without retraining. This mirrors Bayesian inference where the prior is the template, and the likelihood comes from sandbox feedback—ensuring robustness while staying within an 8‑hour window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
