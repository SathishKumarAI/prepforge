---
qid: ing_ba21a01b62__aws__local
question: What is the difference between pull and push CDNs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:25-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a project to accelerate image delivery for our global e‑commerce site, I was asked whether we should use a *pull* or *push* CDN strategy.  

- **Situation:** Our catalog grew to 4 M images; latency averaged 350 ms in the EU and we had a 12 % cart abandonment spike during flash sales.  
- **Task:** Reduce image load time below 200 ms globally while keeping cost < $15k/month.  
- **Action:** I evaluated both pull (origin‑based) and push (pre‑loaded) models, mapping them to AWS services:  
  - *Pull:* CloudFront + S3 with origin‑read only permissions.  
  - *Push:* CloudFront + Lambda@Edge that pre‑fetches new images into an edge‑cache bucket on every upload, using Amazon EventBridge to trigger the push pipeline.  
  I ran a controlled A/B test: 50 % of traffic hit the pull CDN; 50 % hit the push CDN.  
- **Result:** The push model cut average EU latency from 350 ms to **180 ms** (≈ 49 % improvement) and reduced cart abandonment by **8 %**, generating an estimated $1.2M in incremental revenue over six months. Cost stayed within budget because the push pipeline only ran on write events (~3 k per day).  

**Leadership Principles:**  
- *Ownership* – I owned end‑to‑end performance.  
- *Dive Deep* – I benchmarked latency, analyzed traffic patterns, and iterated on the architecture.  

**Bar‑raiser cues:** clear ownership, data‑driven impact, trade‑off analysis, learning from the A/B test to refine our CDN strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
