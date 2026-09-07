---
qid: ing_5ae4ced0f8__aws__local
question: 'Explain: How do you use AI coding tools in your own work? Walk me through
  your workflow on a recent task.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 346
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:11-05:00'
sources: []
---

**Situation & Task**  
In the last sprint I was tasked with refactoring our legacy recommendation engine to reduce latency by 30% while keeping cost under $2k/month. **Customer Obsession** drove me to focus on the end‑user’s experience—faster recommendations mean higher conversion.

**Approach (AI coding tools)**  
1. **Prompt engineering** – I used GitHub Copilot + Claude 3 for boilerplate code, feeding it a concise prompt that included the current function signature and performance goal.  
2. **Auto‑completion & linting** – Copilot suggested an async pipeline; I ran the snippet through Amazon CodeGuru Reviewer to catch concurrency bugs and security gaps.  
3. **Unit‑test generation** – Claude produced edge‑case tests (e.g., empty catalog, high‑traffic spike).  
4. **CI/CD integration** – The generated tests were pushed to GitHub Actions with a custom step that ran *AWS CodeBuild* using a GPU‑enabled image for quick inference profiling.

**Result**  
- Latency dropped from 350 ms → 210 ms (≈40% improvement).  
- Monthly compute cost fell from $3.5k → $1.8k, staying well below the target.  
- Deployment time reduced by 60%, freeing two developer‑days per sprint.

**Learnings & Ownership**  
I documented each prompt and its outcome in a knowledge base, ensuring repeatability—a true bar‑raiser expectation for ownership and knowledge sharing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
