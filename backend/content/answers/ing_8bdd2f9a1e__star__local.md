---
qid: ing_8bdd2f9a1e__star__local
question: 'Explain: Q59: Your LLM costs are 10x higher than expected. Walk through
  your investigation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 341
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:36-05:00'
sources: []
---

**Situation**  
When we launched the new recommendation engine last quarter, our monthly spend on the GPT‑4 inference service jumped from $12k to $120k—ten times higher than the budgeted $12k. The spike happened overnight and was flagged by the billing dashboard before any customer impact.

**Task**  
I had to pinpoint the root cause of the cost surge, confirm whether it was a legitimate usage increase or an anomaly, and devise a mitigation plan that didn’t compromise recommendation quality.

**Action**  
First, I pulled the per‑request metrics from CloudWatch and the OpenAI audit logs. The request count stayed flat at 2 M calls/month, but the average token length ballooned from 150 to 650 tokens. A deeper dive revealed that a recent code change in our content‑filtering middleware was appending verbose debug metadata to every prompt. I rolled back that commit and added a regex sanitizer to strip non‑essential tags before sending prompts. Then I re‑implemented the batching logic to group requests, reducing overhead from 30 % to 12 %. Finally, I set up a daily alert on token usage thresholds.

**Result**  
Within two days, monthly spend dropped back to $13k—within 8% of target—and recommendation latency improved by 4 ms. The exercise taught me the value of real‑time telemetry and cautious feature rollouts when working with pay‑as‑you‑go LLM services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
