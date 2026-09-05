---
qid: ing_84fdd12eb7__eli5__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 260
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:36-05:00'
sources: []
---

### Step 4: Build Your “Judge” Prompt

Think of your AI system as a student taking a test and the **judge prompt** is the teacher’s grading rubric.  
Just as a teacher writes clear, specific instructions—“score each answer from 1 to 5, give a brief reason”—the judge prompt tells the evaluation model exactly what to look for in the AI’s output.

**How it works**

1. **Define the task** – e.g., “Does the response explain why clouds are blue?”  
2. **Set the criteria** – list what counts as correct (scientific explanation, use of evidence) and what doesn’t.  
3. **Ask for a score** – give a numeric range (0–5).  
4. **Request a short justification** – so you know why the model gave that score.

The judge prompt must be *unambiguous*; if it’s vague, the evaluator will guess, just like a confusing rubric leads to inconsistent grading. By giving a clear, concrete rubric, you turn subjective evaluation into repeatable, comparable results—exactly what AI Evals aims for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
