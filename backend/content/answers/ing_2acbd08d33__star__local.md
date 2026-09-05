---
qid: ing_2acbd08d33__star__local
question: 'Explain: `computer` — GUI Automation (optional) — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 338
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:33-05:00'
sources: []
---

**Situation:**  
During a summer internship at a fintech startup, our team was tasked with automating the nightly reconciliation script that ran on Windows servers. The existing batch file worked but required manual login each night, which led to 30 % downtime during peak traffic.

**Task:**  
I needed to build an automated workflow that would log into the server, trigger the Python reconciliation program, capture its output logs, and email a summary to stakeholders—without any human intervention.

**Action:**  
First, I scripted the core logic in Python: `reconcile.py` pulled transaction data from our PostgreSQL DB, ran statistical checks, and produced an HTML report. For GUI automation, I used **Pywinauto** to launch the Windows Task Scheduler UI, input credentials stored securely in Azure Key Vault, and schedule the job. To make the process robust, I wrapped the entire sequence in a `try/except` block that logged failures to a local SQLite DB and sent alerts via Slack using the Slack API. Finally, I packaged everything into a Docker image so it could run on any Windows Server with minimal setup.

**Result:**  
The automated pipeline reduced manual login time from 15 minutes to zero and cut nightly downtime by 95 %. The report email now includes a CSV attachment that stakeholders use for daily KPI dashboards. I learned how to blend low‑level GUI automation with cloud‑native secrets management to create a reliable, maintainable workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
