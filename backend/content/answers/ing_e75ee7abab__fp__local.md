---
qid: ing_e75ee7abab__fp__local
question: What do MMLU, GSM8K, HumanEval, MT-Bench, and SWE-bench each measure - and
  why shouldn't you pick a model for your product based on them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 488
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:18-05:00'
sources: []
---

**What they actually test**

| Benchmark | Core problem it solves | Why the metric matters |
|-----------|-----------------------|------------------------|
| **MMLU (Massive Multitask Language Understanding)** | *General‑purpose reasoning* – a wide array of factual, commonsense and math questions. | Measures breadth of world knowledge encoded in weights. |
| **GSM8K** | *Step‑by‑step symbolic math* – 8 k problems that require intermediate reasoning. | Tests the model’s ability to produce structured, logical derivations rather than just final answers. |
| **HumanEval** | *Program synthesis* – write a function from a docstring and tests. | Captures low‑level API understanding and syntactic correctness in code generation. |
| **MT‑Bench** | *Multilingual reasoning* – open‑ended questions across 30+ languages. | Evaluates language coverage and cross‑lingual transfer of knowledge. |
| **SWE‑Bench** | *Software engineering tasks* (bug fixing, refactoring) with real‑world code bases. | Measures practical software‑engineering fluency and debugging skills. |

**Why you can’t pick a product model from them alone**

1. **Task mismatch** – A high score on GSM8K does not imply the model will write production‑grade APIs; HumanEval focuses on tiny snippets, not large codebases.  
2. **Data leakage & overfitting** – Benchmarks are static; models can be fine‑tuned to the test distribution, inflating scores without real generalisation.  
3. **Metric bias** – Most tests reward *surface‑level* correctness (accuracy) while ignoring robustness, security, latency, or alignment with business constraints.  
4. **Non‑obvious insight:** *Distribution shift matters more than absolute accuracy.* A model that averages 85 % on MMLU may drop to 50 % when faced with domain‑specific jargon or adversarial prompts—exactly the scenario most products encounter.

**Bottom line:** Benchmarks give a useful sanity check but are only one axis. Evaluate your own data distribution, latency constraints, safety requirements, and user‑experience goals before committing to a model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
