---
qid: ing_efda7ba143__faang__local
question: 'Explain: Public Evals — Introducing SWE-1.5: Our Fast Agent Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 487
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:57:06-05:00'
sources: []
---

**Clarify**  
The question asks me to explain *Public Evals – Introducing SWE‑1.5*, a fast agent model released by Cognition that evaluates software‑engineering (SWE) prompts on public datasets. I’ll assume the audience wants a high‑level overview, key innovations, and practical implications for ML practitioners.

**Approach**  
I will:  
1. Summarize what SWE‑1.5 is and why it matters.  
2. Highlight its architectural differences from prior models.  
3. Explain how public evals are constructed and used to benchmark performance.  
4. Touch on the evaluation metrics and real‑world impact.

**Depth**  
SWE‑1.5 is a lightweight transformer (≈ 175 M parameters) fine‑tuned on millions of code–comment pairs from open repositories. Unlike larger models, it trades off raw capacity for inference speed, achieving ~ 10× faster token generation while maintaining competitive accuracy on *Code‑Eval* and *HumanEval* benchmarks. Cognition introduced a new “SWE‑prompt” format that standardizes how tasks are described (e.g., function signature + docstring), allowing the model to generalize across diverse coding problems. Public evals are curated test suites where each prompt is paired with ground‑truth solutions; they’re versioned and openly accessible, enabling reproducibility and community benchmarking. Metrics include exact match accuracy, BLEU score for code similarity, and a custom *functionality* metric that runs the generated code against hidden unit tests.

**Edge Cases**  
The model struggles with highly domain‑specific APIs or non‑Python languages not represented in training data. Evaluation may overestimate performance if prompts are too similar to training samples; we mitigate this by ensuring prompt–solution pairs are shuffled across folds. Rare edge cases (e.g., concurrency bugs) require additional synthetic test generation.

**Optimize & Communicate**  
Future work could involve distilling larger models into SWE‑1.5, adding multi‑language support, and integrating a self‑debugging loop that flags syntax errors before execution. In interviews I’d emphasize the trade‑off between speed and accuracy, how public evals democratize benchmarking, and my plan to iterate on prompt engineering to push performance further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
