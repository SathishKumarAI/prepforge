---
qid: ing_945b60080b__star__local
question: Our chatbot gives a different answer every time. How do you test something
  non-deterministic?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 363
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:33-05:00'
sources: []
---

**Situation:**  
When I joined the AI team at a fintech startup, our new customer‑service chatbot was built on a transformer model that intentionally varied its responses to avoid sounding robotic. However, during load testing we noticed occasional inconsistencies in sentiment scores and response times that made compliance audits fail.

**Task:**  
I needed to create a robust test suite that could validate the quality of each answer while accounting for acceptable variance, and prove that the system met SLA metrics (≤2 s latency, ≥90 % positive sentiment).

**Action:**  
First, I defined deterministic “core” facts (account balance, policy terms) and wrapped them in a schema‑validated JSON payload. For the non‑deterministic parts, I used a Monte‑Carlo sampling approach: each test run generated 100 utterances per prompt, capturing response text, sentiment score via VADER, and latency. I then applied statistical hypothesis testing (t‑test with Bonferroni correction) to check that mean sentiment stayed above the threshold while variance remained within acceptable bounds. Results were logged in Grafana dashboards, and alerts fired if any metric drifted beyond 2 σ.

**Result:**  
The new tests reduced false positives by 75 % and allowed us to certify the bot for production. Latency stayed at 1.8 s on average, sentiment scores averaged 0.72, and we achieved a compliance pass rate of 98 %. I learned that blending statistical rigor with domain‑specific constraints is key when testing AI systems that purposely generate varied outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
