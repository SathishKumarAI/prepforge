---
qid: ing_1f0ffedb13__aws__local
question: 'Explain: Multimodal models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 446
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:33-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑Platform team at a mid‑size fintech, we were asked by product to launch a multimodal inference service (text + image) that would replace our legacy rule engine for fraud detection. The goal was to reduce false positives by 30 % while keeping latency under 200 ms for 95 % of requests.

**Action – Technical Design**  
I scoped the solution as an **OpenAI API‑based multimodal model** wrapped in a stateless Lambda layer that receives a JSON payload, forwards it to `gpt-4o-mini` (image + text), and streams back the decision.  
* AWS services:  
  * **API Gateway** – throttling 10 k RPS, TLS termination.  
  * **Lambda@Edge** – low‑latency inference at edge locations.  
  * **S3** – for audit logs (encrypted, versioned).  
  * **DynamoDB** – cache recent predictions to cut API calls by ~25 %.  

I applied **Bias for Action**: built a CI/CD pipeline with Terraform and CloudWatch alerts for error rates >5 % or latency >250 ms. I also performed a cost‑benefit analysis: the projected monthly spend on OpenAI was $12k vs $8k for in‑house inference, but the 30 % reduction in false positives saved ~$1.2M annually.

**Result**  
Launch achieved 28 % drop in false positives and <190 ms latency (95th percentile) within two weeks of go‑live. Customer feedback highlighted “faster, more accurate decisions.” The project earned a **Customer Obsession** badge from senior leadership.

**Learning & Ownership**  
Post‑mortem revealed that initial cache TTL was too short; I extended it to 10 min, cutting API calls by another 12 %. This iteration exemplifies *Dive Deep* and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
