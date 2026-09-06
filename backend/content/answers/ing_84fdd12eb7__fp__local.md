---
qid: ing_84fdd12eb7__fp__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 457
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:55-05:00'
sources: []
---

### Step 4: Build Your Judge Prompt  
*Why it matters – the “oracle” that turns raw answers into metrics*

At its core an evaluator is a **probabilistic classifier** that decides whether a model’s output satisfies a task. The judge prompt supplies the *prior knowledge* and *decision rule* that guide this classification. Without a well‑crafted prompt, the downstream scores are noisy or biased.

1. **Formulate the decision boundary**  
   Think of each possible answer as a point in a high‑dimensional semantic space. The judge prompt defines a hyperplane (or a set of constraints) that separates “acceptable” from “unacceptable.” In practice we encode this boundary by explicitly listing the criteria, giving examples of good vs bad completions, and asking the model to *rate* or *choose* based on them.

2. **Control variance with prompt conditioning**  
   The same answer can be judged differently if the prompt is ambiguous. By anchoring the judge with concrete examples and a clear rubric, we reduce inter‑prompt variance—essential for reproducible metrics across runs and models.

3. **Leverage hierarchical reasoning**  
   Rather than a flat yes/no, a multi‑step prompt forces the judge to first evaluate sub‑criteria (e.g., factuality, coherence, style) before aggregating them. This mirrors human grading rubrics and aligns the model’s internal reasoning with the evaluation objective.

4. **Non‑obvious insight: calibration as a regularizer**  
   When the judge is itself an LLM, its confidence scores can be *calibrated* by embedding a temperature or probability estimation step in the prompt. A calibrated judge not only gives binary labels but also a reliable confidence estimate, which can be used to weight samples or trigger re‑evaluation for borderline cases.

**Bottom line:** The judge prompt is the algorithmic definition of “correctness.” By treating it as a carefully engineered classifier—complete with boundary definition, variance control, hierarchical reasoning, and calibration—you turn raw model outputs into robust, interpretable metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
