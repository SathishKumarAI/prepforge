---
qid: ing_74194e7b75__aws__local
question: 'Explain: Decisiveness — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 356
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:21-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led the rollout of a recommendation engine for our e‑commerce platform. After three months of A/B testing, the model’s lift was only **4 %**, far below the target of **12 %**. Senior leadership demanded a quick decision on whether to continue or pivot.

**Action (Decisiveness + Ownership)**  
1. I convened an emergency “Decision‑Day” with data scientists, infra ops, and product managers.  
2. Using real‑time analytics from **Amazon SageMaker** and **CloudWatch**, I presented the cost‑benefit matrix: *$3 M per month* for the current pipeline vs. *$1.2 M* if we switched to a pre‑trained transformer on **AWS Inferentia**.  
3. We agreed to run a 48‑hour “fast‑track” experiment on Inferentia, shutting down the legacy cluster to avoid sunk cost bias.

**Result (Deliver Results)**  
Within two days the new model achieved a **13 % lift**, exceeding target and saving **$1.8 M** annually. The rapid pivot also cut deployment time from 12 weeks to 5 days.

**Learning & Bar‑raiser cues**  
- I owned the decision, refusing incremental fixes that would waste resources.  
- I dove deep into performance logs to quantify impact quickly.  
- Failure was averted by validating assumptions with live data before full rollout.  

*Leadership Principles: Ownership, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
