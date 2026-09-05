---
qid: ing_12bb31effd__star__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 315
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:54-05:00'
sources: []
---

**Situation:** In a recent project, we were tasked with creating an automated grading system for open‑ended coding assignments using GPT‑4. The initial prompts produced inconsistent evaluations, and the team needed a reliable “judge” prompt that could interpret student solutions against a rubric.

**Task:** I had to design a judge prompt that would consistently assess correctness, style, efficiency, and documentation, while staying within token limits for cost control.

**Action:** I started by drafting a structured rubric in plain text: each criterion scored 0‑5 with clear descriptors. Then I built the prompt template in Python, using Jinja2 to inject the rubric, the student's code, and an example solution. To keep it short, I used placeholders for lengthy sections and leveraged GPT’s ability to read context from prior messages. I also added a “confidence score” field so the model could flag ambiguous cases for human review. After iterating on 20 prompt variations, I ran a validation set of 100 assignments and compared results against manual grading; I tuned wording until inter‑grader agreement reached 92%.

**Result:** The new judge prompt reduced evaluation time by 70%, cut token usage by 35%, and maintained an average score variance below 0.3 points across all metrics. I learned that a clear, modular rubric combined with templated prompts gives GPT the structure it needs to behave like a consistent human grader.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
