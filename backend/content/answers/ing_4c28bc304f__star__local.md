---
qid: ing_4c28bc304f__star__local
question: 'Explain: Printable score sheet — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 293
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:35-05:00'
sources: []
---

**Situation:**  
During my last hiring sprint at a fintech startup, we were interviewing 30 candidates for senior ML engineer roles. Our interview panel had no standardized way to capture feedback consistently, and the final scores kept varying by up to 20 points between reviewers.

**Task:**  
I needed to design an AI‑augmented printable score sheet that would let each interviewer rate technical depth, problem‑solving speed, and cultural fit on a single page, while automatically normalizing and aggregating the data for quick decision making.

**Action:**  
Using Python and the `reportlab` library I created a PDF template with QR‑coded fields linked to a Google Form. Each rating field fed into an NLP model that extracted key phrases from interviewers’ free text comments, scored them via a custom rubric, and applied z‑score normalization before summing to a final weighted score. The sheet also printed a bar chart of the scores for visual comparison.

**Result:**  
We cut review time by 40 % and reduced score variance to under 5 points. The hiring team could make decisions in 30 minutes instead of an hour, and I learned how to blend lightweight AI with human judgment to improve fairness and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
