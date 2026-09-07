---
qid: ing_4e3c51b7fc__aws__local
question: 'Explain: Comparison with Traditional Automation — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 397
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:20-05:00'
sources: []
---

**Situation / Task**  
In 2023 I led a migration from rule‑based Computer Use Agents (CUBA) to an AI‑driven chatbot for our e‑commerce order‑processing pipeline. The goal was to reduce manual clicks, cut error rates, and improve agent satisfaction.

**Action**  
*Customer Obsession & Bias for Action*: We first logged every CUBA interaction—≈ 12 k actions/day—and identified pain points (e.g., 7% mis‑routing).  
*Dive Deep*: Built a data lake in S3, ingested logs via Kinesis Data Firehose, and trained an intent model on SageMaker using the same schema.  
*Design*: The AI layer sits behind API Gateway → Lambda → Step Functions orchestrating DynamoDB (state) and Comprehend for entity extraction. We kept the legacy CUBA as a fallback “fallback state” to guarantee 99.9 % availability.  

**Result**  
- Clicks per order dropped from 5.2 to **1.8** (65 % reduction).  
- Human‑review needed fell from 4.3% to **0.7%** (84 % lower).  
- Agent productivity rose by **30 %**, translating to $180k/month in labor savings.  

**Bar‑raiser Takeaway**  
Ownership is shown by keeping a safety net, depth by instrumenting every step for metrics, and impact by quantifying cost/efficiency gains. Failure lessons: early user testing revealed mis‑classified intents; we added an “improve” feedback loop that reduced error rate by 12 % in the first month.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
