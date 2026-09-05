---
qid: ing_b225f48bc4__star__local
question: 'Explain: Iterating on Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:02-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching an AI‑driven code review bot. The first round of evaluations revealed that the model’s “judge” prompt was too generic—developers complained it gave vague feedback and sometimes penalized legitimate edge cases.

**Task:**  
I had to redesign the judge prompt so that it consistently identified correct patterns, provided actionable critiques, and minimized false positives while keeping inference time under 120 ms per review.

**Action:**  
First, I collected a corpus of 5,000 real code snippets with labeled outcomes. Using OpenAI’s `gpt-4o-mini`, I generated five candidate prompts that varied in specificity (e.g., “Evaluate for best‑practice adherence” vs. “Check for security and style violations”). I ran each prompt through our eval pipeline, measuring precision, recall, and latency. The top two prompts were blended: the first part detailed a step‑by‑step rubric, the second asked the model to output a single verdict plus a brief justification. I then performed A/B testing with 200 developers, gathering qualitative feedback and adjusting wording for ambiguous terms like “efficient”.

**Result:**  
The refined prompt increased precision from 68 % to 85 % and recall from 74 % to 88 %, while latency remained below 110 ms. Developers reported a 40 % reduction in follow‑up questions, and the bot’s adoption rate rose by 25 %. I learned that iterative prompt engineering—grounded in real user data and systematic metrics—is essential for reliable AI evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
