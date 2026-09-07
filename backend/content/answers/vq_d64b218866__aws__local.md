---
qid: vq_d64b218866__aws__local
question: What’s your favorite sport to watch or play?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 446
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:49-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles: Customer Obsession & Ownership.*

**Situation:**  
When I joined my first startup, we needed a way to keep the remote team engaged and motivated during long product cycles. I chose soccer because it’s universally loved and offers clear, data‑driven metrics.

**Task:**  
I had to design an internal “match” platform that would let teams predict outcomes, track player stats, and reward accurate predictions—mirroring a real sports betting experience without the gambling risk.

**Action:**  
- **Requirements & Design:**  
  - Built a microservice architecture in AWS: Amazon API Gateway → Lambda (Python) → DynamoDB for state; used Amazon EventBridge to trigger weekly “match” events.  
  - Integrated with an open‑source soccer data feed (e.g., football-data.org) via AWS Glue to ingest real‑time stats into Redshift for analytics.  
  - Implemented a simple front end on S3 static site hosted by CloudFront, secured by Cognito.

- **Scalability & Cost:**  
  - Serverless components kept the platform *$0.02 per user* monthly; DynamoDB’s on‑demand mode handled spikes during match days without overprovisioning.  

**Result:**  
Within two months, 85 % of our 120 remote employees were actively participating. Prediction accuracy averaged 72 %, driving a **15 % increase in cross‑functional collaboration scores** (measured by internal pulse surveys). When the platform hit an unexpected traffic surge during a high‑profile match, I quickly added a CloudWatch alarm and scaled API Gateway concurrency limits—no downtime.

**Learning:**  
I realized that even a simple “sport” app can embody Amazon’s obsession with customer experience and ownership. By diving deep into AWS services and iterating on real metrics, we delivered tangible business value while keeping costs minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
