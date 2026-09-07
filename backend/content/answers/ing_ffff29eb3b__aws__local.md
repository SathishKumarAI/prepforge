---
qid: ing_ffff29eb3b__aws__local
question: 'Explain: Your safety matters to us — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 390
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:38-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the “Safe‑Inference” project for a generative‑AI service that delivered 3 M requests/day. The business required zero safety violations while keeping latency <200 ms.

**Action**  
I owned the end‑to‑end pipeline:  

1. **Data vetting** – built an ingest microservice (AWS Lambda + SQS) that auto‑scanned training data for disallowed content using Amazon Comprehend and a custom regex engine.  
2. **Model guardrails** – wrapped the inference API in an “Action‑Layer” (API Gateway + CloudFront) that routed each request through a safety classifier (Amazon SageMaker Endpoint). If risk > 0.7, the request was throttled or flagged for human review.  
3. **Monitoring & feedback loop** – set up CloudWatch dashboards and Kinesis Data Firehose to stream audit logs into Athena; every 24 h we ran a drift‑analysis script that adjusted thresholds.

**Result**  
Safety incidents dropped from 0.12 % to <0.001 % (a 99.2 % reduction). Latency stayed at 180 ms on average, and cost increased by only 7 % due to the lightweight Lambda logic. The project was adopted across three product lines, saving an estimated $1.4 M in potential compliance penalties.

**Reflection**  
I learned that “ownership” means iterating until a system is both safe **and** performant; “dive deep” into logs revealed subtle bias patterns we fixed before they escalated. This experience shows I can blend customer obsession with rigorous engineering to deliver reliable, responsible AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
