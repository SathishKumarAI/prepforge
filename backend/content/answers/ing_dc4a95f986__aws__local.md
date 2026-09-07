---
qid: ing_dc4a95f986__aws__local
question: 'Explain: Caching: The Top Cost Lever — Finops And Token Economics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 430
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:36:57-05:00'
sources: []
---

**Situation & Task**  
At my previous fintech startup I was the sole engineer responsible for a real‑time credit‑risk API that processed ~3 M token requests per day. The platform hit 40% of our operating budget on outbound calls to an external AI model—our “token economics” were unsustainable.

**Action & Design**  
I owned the problem, so I introduced a two‑tier cache:

1. **Edge CDN (Amazon CloudFront + Lambda@Edge)** – cached deterministic token responses for 5 min with TTL=300s.
2. **Global DAX cluster (Amazon DynamoDB Accelerator)** – served hot keys from memory for 30 s while background workers pre‑populate the cache.

I added a *cache‑hit ratio* metric to CloudWatch, set alerts at <70% and rolled out a “Token‑Reuse Policy” that amortized expensive AI calls. I also instrumented cost per token in X-Ray, enabling a FinOps dashboard.

**Result**  
Within 4 weeks we reduced outbound API calls by **73 %**, cutting token costs from $0.10 to $0.028 per call—saving ~$1.2M annually. Cache hit ratio climbed to **92 %**; latency dropped from 250 ms to 65 ms, improving user satisfaction (NPS +12).  

**Reflection & Bar‑raiser cues**  
- *Ownership*: I identified the cost lever and drove cross‑team buy‑in.  
- *Dive Deep*: Quantified hit ratios, latency, and cost per token.  
- *Bias for Action*: Deployed a CDN cache in 48 h with minimal risk.  
- *Learning from Failure*: Initial TTL too short; we iterated until the sweet spot.  

This showcases Customer Obsession (reducing user friction), Ownership, and Deliver Results—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
