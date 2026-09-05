---
qid: ing_e837f312d8__star__local
question: 'Explain: Title: Display Advertising with Real-Time Bidding (RTB) and Behavioural
  Targeting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 362
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:44-05:00'
sources: []
---

**Situation:**  
At my previous agency, we were tasked with launching a multi‑channel campaign for a fast‑food chain that had seen a 15 % drop in online sales over the last quarter. The client wanted to recapture their audience through display ads while staying within a tight $80k monthly budget.

**Task:**  
I needed to design an RTB strategy that leveraged behavioural targeting to boost click‑through rates (CTR) and conversion, all measured against a baseline CTR of 0.8 % and a target cost per acquisition (CPA) of $12.

**Action:**  
I set up a real‑time bidding pipeline using Google Ad Manager coupled with an in‑house Node.js microservice that ingested first‑party cookie data and third‑party audience segments from the Data Management Platform. The microservice applied a linear regression model to predict user propensity scores, adjusting bid prices dynamically (bid‑shading) based on predicted conversion probability. I also integrated frequency capping and dayparting rules, and employed a real‑time dashboard built with Grafana to monitor CPM, CTR, and CPA in 5‑minute intervals. We ran A/B tests to fine‑tune the predictive model every week.

**Result:**  
Within three weeks, our campaign achieved a 2.4 % CTR—three times higher than the baseline—and lowered CPA to $9, saving $12k monthly while driving a 20 % lift in online orders. I learned that coupling behavioural signals with adaptive bidding dramatically improves ROI, and that continuous data‑driven iteration is key to sustaining performance in RTB environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
