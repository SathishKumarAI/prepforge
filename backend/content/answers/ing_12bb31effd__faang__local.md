---
qid: ing_12bb31effd__faang__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 435
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:05-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *Step 4: Build Your Judge Prompt* in the AI‑Evals framework—a guide that teaches how to design the evaluation prompt that judges model outputs. We’ll assume the reader knows the earlier steps (defining objectives, selecting metrics, curating data) but needs clarity on what a judge prompt is and why it matters.

**Approach**  
1. Define the purpose of the judge prompt.  
2. Outline its key components: context, task, scoring rubric, constraints.  
3. Show how to balance clarity with flexibility so the evaluator can handle varied model responses.

**Depth**  
The judge prompt is a *structured instruction set* fed to an LLM (or human annotator) that tells it exactly what to look for in each candidate answer. It typically contains:  
- **Context** – background or scenario the response should address.  
- **Task description** – the specific question or problem to solve.  
- **Scoring rubric** – weighted criteria (accuracy, relevance, creativity, safety) with example scores.  
- **Evaluation guidelines** – rules for handling partial matches, hallucinations, or ambiguous phrasing.  

By providing explicit scoring thresholds and examples of “good” vs. “poor,” the prompt reduces variance in judgments and aligns evaluations with business goals.

**Edge Cases**  
- Ambiguous wording can lead to inconsistent scores; test by feeding varied responses.  
- Overly restrictive rubrics may penalize creative solutions—balance rigor with flexibility.  
- If the judge is another LLM, guard against “prompt leakage” where it copies model output instead of judging independently.

**Optimize & Communicate**  
Iteratively refine the prompt: run pilot evaluations, analyze inter‑annotator agreement, and adjust wording or rubric weights. Document the final prompt version in a central repository so all evaluators use the same standard—ensuring reproducibility and auditability in your AI‑Evals pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
