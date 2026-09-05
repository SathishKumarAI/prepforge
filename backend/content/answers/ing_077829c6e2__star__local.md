---
qid: ing_077829c6e2__star__local
question: How do you design a good rubric for model-graded evals, and where does chain-of-thought
  fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 334
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:53-05:00'
sources: []
---

**Situation** – In my last role I was tasked with rolling out a new AI‑powered grading system for the university’s writing courses. The instructor team flagged that previous automated grades were too blunt: they missed nuance in argument structure and style, causing student frustration.

**Task** – My goal was to build a rubric that balanced objectivity with interpretive depth, ensuring each essay received a fair score while keeping the evaluation time under two minutes per paper.

**Action** – I started by mapping out key dimensions (thesis clarity, evidence use, coherence, style) and assigned weightings based on instructor feedback. For each dimension I wrote a set of binary prompts that the model could answer quickly. To capture deeper reasoning, I integrated chain‑of‑thought prompting: the LLM first produces a short justification for each score before giving the final numeric value. This allowed us to audit the grading logic and fine‑tune thresholds with minimal manual review. I used OpenAI’s GPT‑4 API, wrapped in a lightweight Flask microservice that streamed results directly into the LMS.

**Result** – The rubric cut grading time from 5 minutes to under 90 seconds per essay while improving inter‑rater reliability (Cohen’s κ rose from 0.62 to 0.78). Students reported higher confidence in their scores, and we captured a 12 % improvement in overall course grades. I learned that embedding chain‑of‑thought not only improves transparency but also lets us iterate on rubric thresholds with real data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
