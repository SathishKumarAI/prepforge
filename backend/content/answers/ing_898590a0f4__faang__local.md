---
qid: ing_898590a0f4__faang__local
question: 'Explain: Tell me about a time you pushed back on shipping something you
  believed was unreliable.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 412
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:25-05:00'
sources: []
---

**Clarify**  
The interviewer is probing for a concrete instance where I prioritized quality over schedule, and how I convinced stakeholders that shipping a buggy AI model would be detrimental. Key assumptions: the feature was an ML‑driven recommendation engine, release window tight, and there were conflicting priorities from product and engineering.

**Approach**  
1. Gather data on accuracy & failure modes.  
2. Quantify business impact of errors (e.g., churn, revenue loss).  
3. Build a risk matrix and present it to leadership.  
4. Propose a phased rollout with A/B testing to mitigate exposure.

**Depth**  
In Q3 2025 I led the pushback on the “Smart‑Tag” model that had only a 78 % precision after an initial audit. By running a Monte‑Carlo simulation, I estimated a potential $2M loss in monthly revenue if we shipped. Presenting the ROI of delaying by two weeks (≈$1M in avoided churn) convinced the PM and VP of Engineering to adopt a staged rollout: internal beta → limited external cohort → full release. We also added a fallback rule that defaulted to human review for borderline cases, ensuring no user faced incorrect tags.

**Edge Cases**  
The plan failed if the model’s performance suddenly deteriorated during the beta; we mitigated this with real‑time monitoring dashboards and an automated rollback trigger. I also tested scenarios where stakeholder pressure escalated by simulating a “last‑minute push” meeting to rehearse my counterarguments.

**Optimize & Communicate**  
Post‑launch, I instituted quarterly reliability reviews and a “model health” scorecard. For future projects, I’ll pre‑define acceptable error thresholds in the spec and embed them into CI pipelines. This narrative showcases structured reasoning, data‑driven persuasion, and measurable outcomes—core FAANG interview strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
