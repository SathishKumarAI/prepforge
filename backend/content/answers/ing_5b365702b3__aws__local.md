---
qid: ing_5b365702b3__aws__local
question: 'Explain: Cost Per Action — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 388
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:40-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In 2023 my team was tasked with launching an AI‑driven “Computer Use Agent” (CUBA) that automatically optimizes ad spend for a retail client. The goal was to reduce their Cost Per Action (CPA) while maintaining conversion quality.

*Task*: Design a system that measures CPA in real time, learns from user interaction, and re‑routes budget across campaigns without manual intervention.

*Action*:  
- **Data pipeline**: Built an event stream on Amazon Kinesis Data Streams → Lambda → Amazon Redshift for real‑time analytics.  
- **Model**: Trained a LightGBM model in SageMaker to predict conversion probability per click, feeding back into the bidding engine via AWS AppConfig.  
- **Automation**: Implemented a step function that adjusts bids every 5 minutes based on CPA thresholds, leveraging Amazon SNS for alerts.  
- **Cost control**: Used Spot Instances for training and Lambda concurrency limits to cap spend; employed CloudWatch metrics to trigger auto‑scaling.

*Result*: Within two weeks of launch, CPA dropped from $4.80 to $3.10 (35 % reduction) while click‑through rate stayed steady at 1.8 %. Monthly ad spend decreased by $12k, directly improving the client’s ROI by 28 %.

**Bar‑raiser cues**: I owned the end‑to‑end flow, dove deep into latency and cost trade‑offs (e.g., Spot vs On‑Demand), quantified impact with clear KPIs, and iterated on failures—shifting from a batch model to real‑time inference after a 12 % over‑bid spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
