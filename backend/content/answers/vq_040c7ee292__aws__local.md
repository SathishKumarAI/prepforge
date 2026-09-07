---
qid: vq_040c7ee292__aws__local
question: Do you like to read on the go but are unable to carry your print books everywhere?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 421
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:45-05:00'
sources: []
---

**Situation / Task**  
I noticed that many researchers and students, like myself, want to read technical papers while commuting but can’t carry heavy print books. The goal was to build a low‑latency, cost‑effective “on‑the‑go” reading platform that scales globally.

**Action**  
- **Customer Obsession & Ownership:** I interviewed 200+ users to capture pain points and defined key metrics: *search latency < 150 ms*, *daily active users > 1M*, *cost per user <$0.05*.
- **Dive Deep + Bias for Action:** Built a serverless stack on AWS:
  - **S3** stores PDFs/HTML (immutable, high durability).  
  - **Amazon CloudFront** CDN for sub‑second delivery worldwide.  
  - **AWS Lambda@Edge** extracts searchable text via Amazon Textract at first request, caching the OCR result in DynamoDB (partition key = doc ID).  
  - **Amazon OpenSearch Service** indexes extracted content; queries hit the cluster with < 100 ms response time.  
  - **API Gateway + Cognito** for secure auth and throttling.
- **Invent & Simplify:** Implemented a progressive web app that works offline using IndexedDB, reducing data usage by 30%.

**Result**  
- Achieved *average search latency 120 ms* across all regions.  
- User engagement grew to *1.2 M daily active users* in six months with a *$0.03 per user/month* cost—well below the target.  
- Received “Customer Obsession” award for driving measurable impact.

**Learning**  
Early prototypes underestimated OCR costs; we switched to on‑demand Lambda@Edge, saving 45% and keeping latency low. This iteration taught me that balancing performance with economics is key to sustainable ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
