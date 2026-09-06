---
qid: ing_b225f48bc4__fp__local
question: 'Explain: Iterating on Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 374
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:46-05:00'
sources: []
---

**Iterating on Your Judge Prompt – a “Why”‑first walk‑through**

The core problem is that *evaluation* must map a model’s raw output to a scalar quality score. In practice the evaluator (the “judge”) is an LLM prompted with a description of the task, context, and the candidate answer. Because language models are stochastic and context‑sensitive, a single prompt rarely yields consistent or trustworthy judgments.

Why must we iterate?  
1. **Signal amplification** – A poorly worded prompt introduces noise (e.g., ambiguous grading rubric), which the model then amplifies. Re‑engineering the wording reduces this variance, akin to *signal‑to‑noise* improvement in communications.  
2. **Bias mitigation** – Certain phrasings unintentionally cue the judge toward particular answers (confirmation bias). By systematically varying prompt structure we expose and neutralize such biases, paralleling *regularization* in supervised learning.  
3. **Calibration** – The judge’s output distribution must align with human expectations. Iterative refinement tunes temperature, length constraints, and reference examples so that the model’s probability estimates match empirical human scores—an instance of *probability calibration*.  

A non‑obvious insight: **the order of rubric items matters**. Placing the most discriminative criteria first forces the judge to anchor its reasoning early, reducing downstream drift when subsequent qualifiers are added. This mirrors *greedy* feature selection in optimization: early decisions constrain later ones, yielding a more stable global objective.

In short, iterating on the judge prompt is an optimization loop over linguistic variables that balances precision, bias, and calibration—essential for trustworthy AI evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
