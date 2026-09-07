---
qid: ing_17005095d1__aws__local
question: 'Explain: Toxic culture, gaslighting, but with snacks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 435
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:46-05:00'
sources: []
---

**Situation**  
At my previous SaaS firm we had a “snack‑filled” office that hid a toxic, gaslighting environment. 30 % of the workforce reported feeling manipulated or unheard—our quarterly pulse score dropped from 78 to 62 in two months.

**Task**  
Lead a cross‑functional project to surface hidden toxicity, quantify it, and design an automated “culture health” dashboard so leadership could act before attrition spiked.

**Action**  
*Customer Obsession & Ownership*: I gathered employee‑voice data (surveys, chat logs, HR tickets) and built a supervised NLP model in SageMaker to flag gaslighting language.  
*Dive Deep*: The model achieved 86 % F1 on a hand‑labelled validation set; we tuned the threshold to keep false positives <5%.  
I deployed it as a Lambda function that ingests Slack messages via EventBridge, scores them, and writes alerts to DynamoDB. A QuickSight dashboard visualises sentiment trends, incident counts, and snack‑purchase spikes (proxy for morale).  

**Result**  
Within 4 weeks the leadership team saw a 40 % reduction in negative incidents reported; the pulse score rose from 62 to 73. Attrition fell by 12 %. The system cost <$500/month and scaled to 10k messages/day with <0.5 s latency.

**Bar‑raiser notes**  
*Ownership*: I drove the end‑to‑end pipeline.  
*Dive Deep*: Leveraged model metrics, threshold tuning, and real‑time analytics.  
*Quantified impact*: 40 % incident drop, 12 % attrition reduction.  
*Learning*: Initial false positives led to a re‑labeling loop that improved precision—demonstrating iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
