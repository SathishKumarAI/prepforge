---
qid: ing_c72d3754ec__star__local
question: 'Explain: Why Binary Scores Work Best — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 343
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:02-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with evaluating a large language‑model pipeline that generated medical discharge summaries. The product team required a quick, reliable metric to flag unsafe or incorrect content before it reached clinicians.

**Task:**  
I had to design an evaluation framework that could be run nightly on 1,200 samples per day, detect critical errors, and provide actionable feedback for the devs—all within our CI budget of 30 minutes.

**Action:**  
I chose a binary scoring system (safe = 0, unsafe = 1). First, I defined a strict rule set: any hallucinated diagnosis or dosage deviation automatically triggered a “1.” Using Langwatch and Langfuse, I built an evaluation script that wrapped the model output in a prompt, sent it to OpenAI’s moderation API, and parsed the binary flag. The simplicity of the 0/1 outcome allowed me to aggregate counts per day, compute a safety rate, and surface top‑5 failure cases via a Slack webhook. I also added a confidence threshold so that borderline scores were escalated for human review.

**Result:**  
The nightly pipeline processed all samples in ~18 minutes, achieving an 87% safety compliance rate after two weeks of tuning. The binary metric cut evaluation complexity by 70%, enabling the team to iterate on model changes rapidly. I learned that when stakes are high and resources tight, a crisp binary score turns noisy probabilities into clear, actionable signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
