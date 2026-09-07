---
qid: ing_2d63a2a6a5__aws__local
question: 'Explain: Tool-Based Resolution, Not Pure Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 399
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:36-05:00'
sources: []
---

**Tool‑Based Resolution vs. Pure Generation**

*Situation*: My team built a content moderation pipeline for an e‑commerce marketplace that had to flag user‑generated images in real time while keeping latency under 200 ms and cost < $0.02 per image.

*Task*: Replace the “pure generation” approach (which used a monolithic LLM to rewrite every image description) with a tool‑based resolution that combines OCR, object detection, and rule engines.

*Action*:  
1. **Architected** a serverless microservice on **AWS Lambda + API Gateway** for ingestion.  
2. Chose **Amazon Rekognition** (OCR & label detection) as the primary “tool.”  
3. Created a lightweight **Python state machine** in **Step Functions** that routes images: if Rekognition confidence < 0.8, it falls back to a custom rule engine using **AWS Glue** jobs; otherwise it returns the auto‑generated tags.  
4. Employed **Amazon DynamoDB** for audit logs and used **CloudWatch Metrics** to track latency and error rates.

*Result*: The system cut moderation latency from 1.2 s to < 200 ms, reduced per‑image cost from $0.12 to $0.015, and improved accuracy by 23% (measured against a manually labeled test set).  

> *Leadership Principles*: **Customer Obsession** – we prioritized user experience; **Ownership** – I drove the end‑to‑end solution and maintained it after handover.

*Bar‑raiser focus*: Ownership of cost & latency, deep dive into AWS service trade‑offs (Lambda vs. EC2), quantified impact on business metrics, and lessons from an initial monolith failure that taught us to decouple generation from resolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
