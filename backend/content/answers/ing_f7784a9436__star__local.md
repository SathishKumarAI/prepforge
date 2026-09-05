---
qid: ing_f7784a9436__star__local
question: 'Explain: Interviewer plays a hospital COO: "ER wait times are too long.
  Can AI fix this?" Decompose the problem.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 321
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:40-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a regional health system, the ER was averaging 4 hours for triage-to-doctor time during peak hours. The COO asked if AI could cut that to under 2 hours.  

**Task** – I needed to design a solution that predicted patient flow, optimized staff allocation, and surfaced bottlenecks in real‑time without disrupting current workflows.  

**Action** – First, I built an event‑driven pipeline ingesting EHR vitals, triage codes, ambulance arrivals, and staffing schedules into Snowflake. Using Prophet for trend/seasonality modeling, I forecasted hourly patient volumes with ±10 % accuracy. Then I trained a reinforcement‑learning agent (stable-baselines3) to recommend dynamic nurse‑to-patient ratios per shift, constrained by union rules. For real‑time alerts, I deployed an Azure Functions service that scored incoming patients on acuity and predicted wait times using a gradient‑boosted tree. The system surfaced 15 % of cases that would otherwise exceed the 2‑hour threshold, prompting immediate staffing adjustments.  

**Result** – Within three months we cut average ER wait time from 4 hours to 2.3 hours—a 43 % reduction—and improved patient satisfaction scores by 18 %. I learned that combining predictive analytics with reinforcement learning and real‑time decision support can translate raw data into actionable operational improvements in a regulated healthcare setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
