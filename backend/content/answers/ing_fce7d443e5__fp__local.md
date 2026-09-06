---
qid: ing_fce7d443e5__fp__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 493
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:57:24-05:00'
sources: []
---

**Week 2 – Code‑Based Evaluations in AI**

The core problem is *how to measure an LLM’s reasoning ability when the answer is not a single token but a program that must be executed*. A correct solution can only be verified by running the code, so we need a pipeline that transforms a raw text prompt into an executable artifact and then checks its outcome against ground truth.

1. **Parsing & Sanitization**  
   - The model’s output is first parsed into syntactic blocks (functions, loops, imports).  
   - A sandboxed interpreter (e.g., Python `exec` in a Docker container) guarantees that malicious code cannot escape the environment.  
   This mirrors the *information‑theoretic* requirement: we must preserve all the model’s intent while ensuring safety.

2. **Execution & Observation**  
   - The sandbox runs the code and records stdout, exceptions, and resource usage.  
   - The observed trace becomes a *statistical fingerprint* of the model’s reasoning path; deviations indicate mis‑reasoning or overfitting to surface patterns.

3. **Assertion Layer**  
   - A set of unit tests (e.g., `assert result == expected`) formalizes correctness.  
   - Each test is a *constraint* in an optimization problem: minimize violations while respecting the model’s prior knowledge.

4. **Scoring & Calibration**  
   - Accuracy is computed as the fraction of passed tests, but we also weight failures by their severity (runtime error vs. wrong output).  
   - This aligns with *expected‑utility theory*: more costly mistakes reduce overall utility.

### Non‑obvious Insight
Many practitioners treat code evals as black‑box correctness checks, but they actually expose the **model’s inductive biases** about program structure. By inspecting which syntactic patterns (e.g., recursion vs. iteration) frequently lead to failures, we can *refine prompts* or *augment training data* in a principled way—turning evaluation into an iterative design loop rather than a static benchmark.

In short, code‑based evals convert the opaque language generation problem into a tractable *algorithmic verification task*, grounding AI assessment in rigorous execution semantics and probabilistic guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
