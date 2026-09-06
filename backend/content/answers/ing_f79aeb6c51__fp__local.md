---
qid: ing_f79aeb6c51__fp__local
question: What Are Code-Based Evals? — Ai Evals Comprehensive Study Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 397
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:46:10-05:00'
sources: []
---

### Code‑Based Evals: A First‑Principles View  

The **fundamental problem** in AI evaluation is *verifying that a model’s output satisfies a concrete specification*—e.g., “return the factorial of n” or “generate a 10‑sentence story with no repeated words.” Natural‑language tests leave ambiguity; manual grading is expensive and noisy.  

A code‑based eval replaces the human judge with a **deterministic checker**:  
1. The prompt supplies an input (e.g., `{"n": 5}`).  
2. The model outputs a JSON object or source code.  
3. A small, trusted program parses the output and verifies correctness against a formal specification (unit tests, assertions, type checks).  

This construction mirrors *formal verification* in software engineering: we reduce the evaluation to a decidable property of a program rather than an open‑ended linguistic judgment. It leverages **information theory**—the checker’s deterministic logic compresses all admissible correct outputs into a single “pass” verdict, eliminating variance.  

#### Non‑obvious Insight  
Because the evaluator is *code*, it can test *infinite* families of inputs in a single run (e.g., loop over 1 000 random seeds). Thus, code‑based evals scale evaluation complexity without proportional human effort—a feature often overlooked when people think of “automated grading” as simply scripting a few tests.  

In short, code‑based evals transform the ill‑posed problem of “does this answer make sense?” into a precise *computational* question that can be answered reliably and reproducibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
