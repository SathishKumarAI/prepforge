---
qid: ing_e9eee0b424__aws__local
question: 'Explain: Additional terminology: Origin and Edge servers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 435
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:15-05:00'
sources: []
---

**Situation (S)**  
While launching a real‑time recommendation engine for a global e‑commerce platform, I noticed latency spikes during peak traffic.  

**Task (T)**  
I had to reduce response time from 200 ms to <50 ms while keeping cost under $2M/yr.

**Action (A)**  
I mapped the data flow: **origin servers** (the SageMaker endpoints in us‑east‑1) hosted the heavy ML inference models, whereas **edge servers** (AWS CloudFront + Lambda@Edge) performed lightweight pre‑filtering and caching.  

*Design:*  
- Deploy a *multi‑region* SageMaker endpoint for model inference (high availability).  
- Use CloudFront to cache top‑10 predictions per region; on miss, a Lambda@Edge function forwards the request to the nearest origin.  
- Implement API Gateway + Step Functions to orchestrate fallback logic.  

This leverages **AWS services**: SageMaker (ML), CloudFront (CDN/edge), Lambda@Edge (serverless edge compute), and DynamoDB for feature store.

**Result (R)**  
Latency dropped from 200 ms to 45 ms (77% reduction). Traffic at peak increased by 120%, revenue grew $1.4M in the first quarter, and operational cost stayed below budget due to efficient caching.

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivering instant recommendations directly impacts user satisfaction.  
- **Ownership & Dive Deep** – I owned the end‑to‑end pipeline, dissecting latency sources and engineering a scalable solution.

> *Bar‑raiser cue:* Look for ownership of cross‑team systems, deep technical decisions (origin vs. edge trade‑offs), quantifiable impact, and lessons learned from iterative A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
