---
qid: ing_69a543afb3__star__local
question: The customer has no labelled data and no eval culture. How do you establish
  "is it working?" for the deployment?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 392
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:30-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup we rolled out an AI‑driven fraud detection model into production. The client had no labeled transactions and their analytics team didn’t routinely run evaluation reports; they only looked at revenue figures.

**Task:**  
I needed to prove the model was actually catching fraud in real time, build trust with stakeholders, and set up a continuous validation loop without any existing ground truth.

**Action:**  
First, I implemented an online “gold‑standard” feedback pipeline: flagged transactions were routed to a small manual review team for instant confirmation. Those confirmed cases became pseudo‑labels fed back into the model every 12 hours (online learning). Simultaneously I deployed a shadow mode that scored all live traffic while keeping the production scores separate, allowing side‑by‑side comparison. For metrics, I used precision‑at‑k and the area under the precision‑recall curve calculated from the pseudo‑labels, then visualized them in Grafana dashboards with alerts for any drift beyond ±5 %. I also ran an A/B test against the legacy rule‑based system over a 2‑week period to quantify lift.

**Result:**  
Within three weeks we saw a 35 % reduction in undetected fraud and a 12 % increase in true positive rate compared to the baseline. The dashboards became the go‑to for executives, turning an ad‑hoc evaluation into a culture of data‑driven decision making. I learned that building lightweight feedback loops and visualizing actionable metrics can replace missing labeled data and foster an evaluation mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
