---
qid: ing_e730c90d29__fp__local
question: 'Explain: Code Generation — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 421
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:10:47-05:00'
sources: []
---

**Why a “Code‑Generation” cheat sheet matters**

When a large language model (LLM) is asked to write code, it must solve *two intertwined optimization problems*:

1. **Syntactic correctness** – the output must parse under the target language’s grammar.
2. **Semantic fidelity** – the program must implement the user’s intent, i.e., produce the desired function or algorithm.

These objectives conflict: a string that parses perfectly may still be wrong semantically, and a semantically correct fragment can violate style or naming conventions. LLMs implicitly learn a *joint distribution* \(P(\text{code} \mid \text{prompt})\) that balances these constraints via massive pre‑training on code corpora. The cheat sheet distills how researchers evaluate this balance:

| Metric | What it measures | Typical papers |
|--------|------------------|---------------|
| **BLEU / ROUGE** | Lexical overlap with reference snippets | *CodeBERT*, *Codex* |
| **Exact‑Match Accuracy** | Full program compiles and passes tests | *GraphCodeBERT*, *PLBART* |
| **Functional Correctness (F1)** | Proportion of unit‑tests passed | *DeepAPI*, *UniXcoder* |
| **Runtime Efficiency** | Execution time / memory footprint | *EfficientFineTuning* |

The deeper principle is *information bottleneck*: the model must compress user intent into a concise program while preserving enough information for correct execution. A non‑obvious insight is that **syntactic regularity often outweighs semantic depth in training data**—LLMs see millions of small, well‑formed snippets but few full programs with comprehensive tests. Thus, augmenting datasets with *structured unit tests* or *type‑checked examples* can dramatically shift the balance toward functional correctness without sacrificing fluency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
