---
qid: ing_32a19c36f4__aws__local
question: 'Explain: 149: Change your software workflow with AI agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 440
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:45-05:00'
sources: []
---

**Situation / Task** – At my previous SaaS company we had a monolithic CI/CD pipeline that took ~30 min to build and test each commit. With the product’s customer‑feedback loop shrinking from weeks to days, I owned the effort to “Change your software workflow with AI agents” so developers could ship faster without compromising quality.

**Action** –  
1. **Customer Obsession & Ownership:** I mapped pain points (manual linting, flaky tests, slow artifact uploads).  
2. **Dive Deep & Invent & Simplify:** Deployed *AWS CodeGuru Reviewer* and *Profiler* as autonomous agents that scan PRs for code smells and performance regressions before merge.  
3. Integrated a lightweight *SageMaker* model (trained on 200k historical commits) to predict build success probability; if <70 % it automatically queued the job in a separate “safe‑build” queue, freeing main pipeline resources.  
4. Leveraged *Lambda* + *Step Functions* to orchestrate conditional logic, ensuring 99.9 % availability and zero downtime.  
5. **Bias for Action:** Rolled out in two weeks with blue/green deployment; monitored metrics via CloudWatch dashboards.

**Result** – Build time dropped from 30 min to 8 min (≈73 % reduction). Defect‑rate post‑release fell by 42 %, and developer satisfaction scores rose from 3.1 to 4.6/5. The AI agents also reduced manual code review hours by 60 hrs/month, freeing engineers for feature work.

**Bar‑raiser Takeaway** – I demonstrated ownership, deep technical dive (model training, cost‑benefit analysis), quantified impact, and iterated quickly after a failed initial model that over‑predicted failures, learning to tune thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
