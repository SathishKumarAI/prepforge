---
qid: vq_6c12abc90c__aws__local
question: Do you enjoy giving or receiving gifts more?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 345
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:56:05-05:00'
sources: []
---

**Situation / Task**  
When I joined my last startup, we were building a “gift‑exchange” micro‑service for an internal employee appreciation platform. The product team asked me to lead the UX research and feature rollout. One of our early focus questions was: *Do users prefer giving or receiving gifts?*  

**Action**  
I owned this discovery by running A/B tests on two UI flows—“Send a Gift” vs “Receive a Gift”—and collected data via Amazon CloudWatch metrics and DynamoDB logs. I also conducted 20 in‑depth interviews (customer obsession) to understand emotional drivers. The findings were that users who *received* gifts had a 37 % higher engagement rate, while those who *sent* gifts drove a 22 % lift in retention.  

**Result**  
Based on this dive deep analysis, we released a hybrid flow that highlights the “receive” experience first but auto‑prompts a send option after an open event. Post‑launch, overall platform usage rose by **48 %**, and the monthly active user cohort grew from 12K to 18K in two months—an impact of $1.2M in projected annual revenue (using AWS Lambda for serverless compute and Amazon S3 for asset storage).  

**Reflection**  
I learned that ownership means iterating on data, not assumptions, and that the smallest UX tweak can scale into a multi‑million dollar lift when backed by real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
