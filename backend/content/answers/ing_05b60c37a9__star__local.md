---
qid: ing_05b60c37a9__star__local
question: What are MQA and GQA, and why do they exist?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 339
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:40:06-05:00'
sources: []
---

**Situation:** While leading the data‑science team at a fintech startup, we launched a new recommendation engine that scored user engagement 18% higher than our baseline. Suddenly, stakeholders noticed that the model’s performance varied wildly across different user segments—some users saw irrelevant suggestions, and churn dipped in those cohorts.

**Task:** I was tasked with diagnosing why the global quality metrics (MQA) didn’t translate into consistent local performance (GQA), and to design a solution that would surface segment‑specific insights without bloating our pipeline.

**Action:** First, I defined MQA as the overall mean accuracy across all users, and GQA as granular group‑level accuracy per demographic slice. I built an automated audit script in Python using Pandas and Dask to compute both metrics nightly, flagging any cohort where GQA fell below 0.85 * MQA*. We then integrated this into our CI/CD pipeline, so model retraining triggered only when a new batch violated the threshold. I also created a lightweight dashboard with Streamlit that visualized MQA vs. GQA over time for each segment.

**Result:** Within two weeks, we reduced the number of low‑performance cohorts by 73%, and overall user satisfaction rose from 4.2 to 4.7 on our NPS scale. I learned that global metrics can mask local failures, and that a lightweight, automated monitoring loop is essential for trustworthy AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
