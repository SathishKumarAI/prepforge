---
qid: ing_6ee5cb8881__aws__local
question: 'Explain: Q: Explain the trade-offs between vision-based computer use and
  API-based tool calling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 468
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:46-05:00'
sources: []
---

**Situation (S)**  
While revamping a home‑automation app at my last company, I had to decide between letting the front‑end send raw images to a custom vision model or calling an existing AWS Rekognition API for object detection.

**Task (T)**  
Deliver 99.9 % uptime and < 200 ms latency for image inference on a budget that could not exceed $5k/month, while keeping the codebase maintainable for future feature pivots.

**Action (A)**  

| Approach | Key AWS services | Trade‑offs |
|----------|-----------------|------------|
| **Vision‑based (self‑hosted model)** | EC2 GPU + SageMaker endpoint | • **Ownership & Invent & Simplify** – full control over model tweaks.<br>• Higher *cost* ($0.5/hr per GPU) and *operational overhead* (model retraining, scaling). |
| **API‑based (Rekognition)** | Rekognition + API Gateway + Lambda | • **Bias for Action** – zero‑maintenance; auto‑scales with request volume.<br>• Lower *latency* (≈ 150 ms) and *cost* ($0.001 per image).<br>• Less control over algorithm updates, potential *vendor lock‑in*. |

I chose the **API‑based** route, citing a 40 % reduction in dev time and $2k/month savings. We added a caching layer (ElastiCache) to hit 95 % of requests locally, cutting API calls by 30 %.  

**Result (R)**  
- Latency dropped from 350 ms → 150 ms.<br>- Monthly cost fell from ~$7k to <$3k.<br>- 99.97 % uptime over six months.  

**Reflection**  
I learned that *Dive Deep* into cost/latency matrices often reveals hidden savings; but I also kept an eye on **Ownership**—the caching layer was a quick win that gave us control without re‑implementing the vision stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
