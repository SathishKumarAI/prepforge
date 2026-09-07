---
qid: ing_a92ef7c7c1__aws__local
question: 'Explain: F8: Receipt-image content extraction failures'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 439
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:05-05:00'
sources: []
---

**Situation** – In 2023 I led a feature that auto‑populates expense claims from scanned receipts in our corporate travel app. After launch, we saw a 27 % spike in manual overrides because OCR was missing key fields (merchant name, total amount) on 32 % of images.

**Task** – Reduce extraction failures to <5 % while keeping cost per receipt under $0.02 and latency ≤300 ms.

**Action**  
1. **Root‑cause dive**: I set up a data pipeline in CloudWatch & Athena that logged OCR confidence scores, image resolution, and failure types.  
2. **Design change** – Switched from the legacy Tesseract engine to Amazon Textract “Expense” mode, added a pre‑processing Lambda that normalizes brightness/contrast using SageMaker’s Image Classification model.  
3. **Fallback strategy** – Implemented a serverless microservice (API Gateway + Lambda) that calls AWS Rekognition for handwritten amounts when Textract confidence < 0.7.  
4. **Cost control** – Leveraged S3 Intelligent‑Tiering to store receipts, and scheduled batch re‑processing during off‑peak hours to amortize compute.  
5. **Metrics monitoring** – Created CloudWatch dashboards; set an alarm if failure >6 %.  

**Result** – Within 2 weeks of deployment:  
- Extraction accuracy rose from 68 % to 97 %, reducing manual reviews by 84 % (≈$12k/month).  
- Latency dropped from 520 ms to 210 ms.  
- Cost per receipt stayed at $0.015.

**Learnings** – Own the end‑to‑end data quality loop, validate assumptions with real traffic data, and iterate quickly using serverless components so we could ship a higher‑quality product without over‑engineering.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
