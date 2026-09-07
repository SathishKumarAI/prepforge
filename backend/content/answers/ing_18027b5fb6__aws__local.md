---
qid: ing_18027b5fb6__aws__local
question: 'Explain: What’s expected at different levels — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 456
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:19:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Customer Obsession**, **Ownership**, and **Dive Deep**.

**Situation & Task**  
I led the redesign of a mobile health app that delivered personalized nutrition plans using on‑device ML. The goal was to reduce server round‑trips by 80 % while keeping prediction latency under 200 ms on a wide range of Android/iOS devices.

**Action**  
1. **Requirements & Design** – I scoped the problem: *model size ≤ 10 MB*, *CPU usage < 15 %*, *no network latency*.  
2. **Model Selection** – Trained a *MobileNet‑V3* backbone on user meal images, fine‑tuned with transfer learning (≈ 12 h training). Exported to TensorFlow Lite for Android and Core ML for iOS.  
3. **Deployment Pipeline** – Built an S3 + CloudFront CDN for OTA model updates, using AWS Lambda@Edge to version and serve the right model per device architecture.  
4. **Scalability & Availability** – Leveraged Amazon AppConfig to roll out experiments safely; used DynamoDB Global Tables for user metadata with single‑second reads.  
5. **Cost Control** – The entire inference stack cost <$0.02 per inference, saving 60 % over a cloud‑only approach.

**Result**  
- Latency dropped from 1.2 s to 140 ms (≈ 88 % reduction).  
- Server costs fell by 70 %, freeing $150k annually for new features.  
- User engagement increased by 35 % as the app felt “instant”.  

**Learning & Bar‑raiser signals**  
I owned every layer, from data labeling to edge deployment, and iterated on model size vs. accuracy (dive deep). The quantitative impact—latency, cost, engagement—demonstrates ownership and a bias for action that aligns with Amazon’s customer obsession.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
