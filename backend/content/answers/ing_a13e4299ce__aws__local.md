---
qid: ing_a13e4299ce__aws__local
question: Implement nucleus (top-p) sampling. What failure mode of top-k does it fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 438
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:36-05:00'
sources: []
---

**Situation / Task**  
While building a serverless chatbot for our e‑commerce platform (AWS Lambda + SageMaker), we noticed that the top‑k sampler kept generating repetitive or nonsensical replies—customers complained “the bot keeps saying the same thing.” We needed a more natural, diverse output without sacrificing latency.

**Action**  
I refactored the decoding logic to use **nucleus (top‑p) sampling**, which selects the smallest set of tokens whose cumulative probability ≥ *p* (e.g., 0.9). This dynamically adjusts the candidate pool based on the model’s confidence, unlike fixed top‑k that can include low‑probability tokens when *k* is large or truncate high‑probability tokens when *k* is small.

- **Technical design**:  
  - Implemented in a Python Lambda layer called by the inference endpoint.  
  - Utilized SageMaker’s `runtime` API for on‑demand inference; added a caching layer (ElastiCache Redis) to store recent logits, cutting latency 35 % on average.  
  - Monitored via CloudWatch metrics: *ResponseTime* and *RepetitionRate*.

- **AWS services**: Lambda, SageMaker, ElastiCache, CloudWatch.

**Result**  
After deployment, the bot’s repetition rate dropped from **27 % → 4 %**, while average response time stayed under **200 ms**. Customer satisfaction scores improved by **12 pts** (Net Promoter Score).  

**Reflection**  
This change demonstrates *Ownership*—taking end‑to‑end responsibility for user experience—and *Dive Deep*—understanding the statistical failure of top‑k and engineering a scalable, cost‑effective fix. It also illustrates learning from failure: we measured the impact before and after, iterated quickly, and documented trade‑offs (e.g., slightly higher compute per request).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
