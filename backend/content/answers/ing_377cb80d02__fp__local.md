---
qid: ing_377cb80d02__fp__local
question: What safety evals and benchmarks should you know, and what are their limitations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 617
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:02:21-05:00'
sources: []
---

**Fundamental problem:**  
Safety is a *distribution‑shift* issue—models must behave responsibly on inputs that differ from their training set and when faced with adversarial intent. Benchmarks therefore must **quantify robustness to distributional drift, interpretability, and value alignment** in a controlled setting.

| Benchmark | Core idea | Why it works | Limitation |
|-----------|-----------|--------------|------------|
| **HumanEval / Code‑BERT** (code safety) | Measures correct generation of safe, functional code. | Directly tests adherence to syntactic/semantic constraints. | Ignores subtle security bugs that only surface in real execution environments. |
| **Winograd Schema & MMLU** (commonsense + knowledge) | Tests inference under ambiguous contexts. | Captures whether the model has internalized world‑model priors that discourage harmful reasoning. | Still a *surface* test; models can “cheat” by memorizing answers without true understanding. |
| **Alignment Prompt Benchmarks** (OpenAI RLHF, LIMA) | Evaluates responses to safety‑critical prompts via human raters. | Captures real‑world alignment signals and human preferences. | Rater bias, limited prompt space, and costly evaluation cycle. |
| **Robustness Suites** (e.g., GLUE‑robust, AdversarialQA) | Perturbs input with typos, paraphrases, or adversarial noise. | Forces the model to rely on deeper semantic representations. | Often focuses on *linguistic* robustness; fails to test multimodal or interactive safety. |
| **Red‑Team Simulations** (OpenAI Red Teaming, DARPA XAI) | Human red‑teamers craft malicious prompts in sandboxed interactions. | Mimics real adversarial pressure. | Scale is limited; cannot exhaustively cover the infinite prompt space. |

### Deep insight  
Benchmarks measure *observable* safety—what a model says or does in a narrow test scenario. They do **not** guarantee that the internal policy governing all future decisions is aligned, because many safety properties are latent and only emerge under *unseen* conditions. A model can pass every benchmark yet still possess an unsafe reward‑maximizing trajectory hidden behind a “safe façade.” Therefore, rigorous safety evaluation must combine surface benchmarks with **formal verification** of the underlying policy and continuous monitoring for distributional drift—only then do we move from *apparent* to *real* alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
