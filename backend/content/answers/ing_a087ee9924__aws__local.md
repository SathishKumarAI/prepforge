---
qid: ing_a087ee9924__aws__local
question: 'Explain: Thousands of courses authored by our network of industry experts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 415
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:05-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with scaling the “Industry‑Expert” learning platform that hosts **10 000+ video courses** and supporting a global audience of 200 k active learners who binge‑watch on mobile, tablet, and desktop.

**Action**  
I took full ownership:  

1. **Data‑driven design** – built an end‑to‑end pipeline in AWS using *S3* (object storage), *Lambda* (transcoding & metadata extraction), *Step Functions* (orchestration), and *DynamoDB* for cataloging.  
2. **Scalable streaming** – deployed *CloudFront* with *MediaConvert* to deliver adaptive‑bitrate HLS, guaranteeing 99.9 % availability during peak usage (up to 15 k concurrent streams).  
3. **Cost control** – switched from on‑prem transcoding servers to spot‑enabled *Elastic Transcoder*, cutting video processing costs by **38 %** and reducing billable hours by 4×.  
4. **Customer obsession** – added A/B testing of UI/UX via *CloudWatch* metrics; increased completion rate from 48 % to 65 % in 3 months.

**Result**  
The platform now supports 10× the user base with a **$1.2M annual cost saving**, and course completion jumped **17 percentage points**—a clear win for learners and the business.

> *Leadership Principles:* **Ownership, Dive Deep, Customer Obsession, Deliver Results**.  

Bar‑raisers focus on my end‑to‑end ownership, deep technical dive (AWS services & trade‑offs), quantified impact (cost, adoption metrics), and lessons learned: always iterate on user data before scaling infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
