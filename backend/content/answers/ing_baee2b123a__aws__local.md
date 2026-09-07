---
qid: ing_baee2b123a__aws__local
question: 'High-Risk AI Classification: Does AI-Generated Code Qualify?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 554
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:16-05:00'
sources: []
---

**Situation (S)**  
In my last role at a fintech startup we were required to comply with the EU AI Act’s “high‑risk” classification for any software that could impact user financial decisions. The legal team flagged *any* automatically generated code as potentially high‑risk, even if it was only a small helper function.

**Task (T)**  
I had to build an automated pipeline that could *prove* whether AI‑generated snippets were low‑risk or not, while keeping our release cadence intact and staying under the $5k/month budget for compliance tooling.

**Action (A)**  
1. **Requirements & Design** – The solution needed:  
   - Source‑code provenance tracking (Git metadata + LLM prompt hash).  
   - Static analysis to detect “critical” constructs (e.g., transaction logic).  
   - Human‑review queue only for flagged snippets.

2. **Implementation** – Leveraged AWS:
   - *CodeCommit* for immutable history, tagging commits with a `generated=true` flag.  
   - *AWS Lambda* + *SageMaker inference* to run an LLM (GPT‑4) that classifies snippets into “low” or “high” risk.  
   - *Amazon CodeGuru Reviewer* for automated code quality checks.  
   - *Step Functions* orchestrate the flow, sending Slack alerts and creating Jira tickets.

3. **Scalability & Cost** – Lambda invocations are <5 ms per snippet; at 200 PRs/day we stay under $2k/month. The system auto‑scales with Step Functions and uses spot instances for SageMaker to keep costs low.

4. **Result (R)** – Within two weeks of deployment, the legal team approved our pipeline, eliminating manual reviews by 95% and cutting compliance audit time from 3 days to <6 hrs. We also reduced false positives by 40% after iterative tuning.

**Leadership Principles Highlighted**  
- *Ownership* – Took full responsibility for end‑to‑end compliance automation.  
- *Dive Deep* – Built a data‑driven classifier and quantified impact on audit time.  

**Bar‑raiser Takeaway** – The answer shows ownership, deep technical reasoning (AWS services, cost trade‑offs), quantifiable business value, and learning from iterative failure (false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
