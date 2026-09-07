---
qid: ing_03945fb558__aws__local
question: 'Explain: Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 491
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:44-05:00'
sources: []
---

**Situation / Task**  
In my last role at a media‑streaming startup I was tasked to replace a flaky integrity check that caused 3 % of our video uploads to be corrupted in production. The goal: build a **checksum validation service** that scales to millions of files per day, keeps latency under 50 ms, and costs <$0.05 per GB processed.

**Action**  
I designed an event‑driven microservice:

1. **S3 Event Notifications → Lambda** – each upload triggers a Lambda (Python) that streams the object in chunks.
2. **Checksum Calculation** – I used AWS SDK’s `hashlib` to compute SHA‑256 on‑the‑fly, writing the digest back as an S3 metadata tag.
3. **Verification API** – A lightweight API Gateway + Lambda that retrieves the stored checksum and compares it with a client‑supplied value.
4. **Monitoring & Alerting** – CloudWatch metrics (`ChecksumMismatches`) trigger SNS alerts; automated remediation via Step Functions re‑uploads.

I also introduced **Amazon Kinesis Data Streams** for audit logs, enabling real‑time anomaly detection. The design supports horizontal scaling: each Lambda runs in parallel per file, and Kinesis shards can be increased on demand.

**Result**  
After deployment, the mismatch rate dropped from 3 % to <0.01 %, improving user satisfaction by 15 pp. Cost per GB fell to $0.02 thanks to Lambda’s pay‑per‑execution model. The system handled peak loads of 5 M uploads/day with <99.9 % availability.

**Leadership Principles**  
- **Customer Obsession** – eliminating corrupted streams directly improved the viewer experience.  
- **Ownership / Dive Deep** – I dissected the existing pipeline, identified bottlenecks, and engineered a fault‑tolerant solution from scratch.  

**Bar‑raiser cues**  
I quantified impact (error rate %, cost), demonstrated deep technical choices (chunked streaming vs full read), and reflected on an initial over‑engineering attempt that was trimmed for simplicity—showing continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
