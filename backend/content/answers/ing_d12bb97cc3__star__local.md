---
qid: ing_d12bb97cc3__star__local
question: 'Explain: Title: Agent-as-a-Judge: Evaluate Agents with Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 378
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:51-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an autonomous fraud‑detection agent that needed to rate the risk of each transaction in real time. Our internal metrics showed a high false‑positive rate—about 12%—which was hurting user experience and inflating operational costs.

**Task:**  
I had to devise a way to evaluate and improve the agent’s decisions without relying on manual labeling, which would be too slow for the 2 ms latency requirement. The goal was to reduce false positives by at least 30% while keeping true‑positive detection above 95%.

**Action:**  
I introduced an “Agent-as-a-Judge” framework: a second lightweight agent trained on a curated set of high‑confidence decisions from the first agent. This judge agent used a lightweight XGBoost model with SHAP explanations to critique the primary agent’s outputs. We deployed them in a staged pipeline—each transaction first scored by the main agent, then re‑scored by the judge. The judge flagged cases for human review only when its confidence was below 0.7, drastically cutting manual effort. I also set up an online A/B test harness with Grafana dashboards to track precision/recall in real time.

**Result:**  
Within three weeks, false positives dropped from 12% to 8%, a 33% reduction, while true‑positive rate stayed at 96%. The judge agent handled 95% of the re‑scoring autonomously, cutting manual review time by 70%. I learned that using an auxiliary agent as a peer reviewer can create a self‑correcting loop, improving both accuracy and operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
