---
qid: ing_e1a744ba43__aws__local
question: 'Explain: Object Storage & CDN — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 441
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:49-05:00'
sources: []
---

**Situation (S)** – I led the launch of a new photo‑sharing feature for a global app that needed to store millions of high‑resolution images and deliver them with sub‑100 ms latency worldwide.

**Task (T)** – Build an object‑storage + CDN architecture on AWS that guarantees 99.999% availability, auto‑scales to 50 M uploads/day, and keeps cost < $0.10 per GB served.

**Action (A)** –  
1. **Storage**: S3 with versioning & lifecycle policies (archive to Glacier).  
2. **Metadata**: DynamoDB for thumbnails, tags, and access control.  
3. **CDN**: CloudFront with edge‑cache invalidation via Lambda@Edge; origin failover to a second bucket in a different AZ.  
4. **Upload path**: Pre‑signed POSTs + multipart upload; SQS triggers a Lambda that validates content type, generates thumbnails, and writes metadata.  
5. **Security**: IAM roles for least privilege, SSE‑S3, and CloudFront signed URLs.

**Result (R)** –  
- 99.999% uptime across 30 edge locations.  
- Latency < 90 ms to 95th percentile users globally.  
- Cost per GB served dropped from $0.18 to $0.07, saving ~35 M USD annually.  

**Leadership Principles** – *Customer Obsession* (fast, reliable image delivery) and *Ownership* (designing a resilient end‑to‑end pipeline).  
**Bar‑raiser cues** – clear ownership of failure domains, deep dive into S3 lifecycle trade‑offs, quantified cost/latency impact, and lessons learned from an initial 2 % cache miss that prompted edge‑cache TTL tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
