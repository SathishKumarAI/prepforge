---
qid: ing_12bb31effd__fp__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 422
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:24-05:00'
sources: []
---

**Step 4 – Building Your Judge Prompt**  
*Why it matters:* The judge prompt is the AI’s “rubric.” It translates a human‑crafted evaluation criterion into a formal specification that the model can parse and follow consistently. Without it, the evaluator will drift: some submissions get generous scores for style, others are penalised for syntax, and overall reliability collapses.

**Fundamental problem solved:**  
We want an automated grader to produce *comparable*, *reproducible* scores across thousands of responses. The judge prompt forces the model to treat each answer as a data point in a constrained feature space: accuracy, completeness, logic flow, etc. By explicitly listing criteria and scoring ranges, we turn the evaluation into a constrained optimisation problem—minimise deviation from the rubric while maximising information gain about the answer.

**Derivation:**  
1. **Define dimensions** – accuracy, depth, clarity, novelty, adherence to format.  
2. **Quantify each dimension** with a numeric scale (e.g., 0–5).  
3. **Encode thresholds** for “acceptable” vs. “needs improvement.”  
4. **Provide context examples** so the model learns boundary cases.  
5. **Ask it to output a structured JSON**: `{accuracy:4, clarity:3,…}` – this format is parseable and eliminates free‑text noise.

**Non‑obvious insight:**  
Because language models optimise for *likelihood*, they will naturally favour verbose, generic responses if the prompt doesn’t penalise excess. By embedding *penalties* directly into the rubric (e.g., “If length > 300 words, subtract 1 point”), you steer the model toward concise, high‑information content—mirroring human grading heuristics that value brevity and precision.

**Result:**  
A judge prompt that turns subjective evaluation into a reproducible, probabilistic scoring engine, enabling large‑scale, trustworthy AI assessments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
