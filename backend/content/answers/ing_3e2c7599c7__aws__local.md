---
qid: ing_3e2c7599c7__aws__local
question: How do you optimize LLM inference cost? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 419
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:37-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was tasked to cut the daily inference spend for our LLM‑powered recommendation engine from **$12k** to <$5k while keeping latency <200 ms per request.

**Action (Dive Deep + Bias for Action)**  
1. **Model audit:** profiled 3B‑parameter model → 30% of tokens were low‑entropy, so I applied *dynamic quantization* (int8) and *weight pruning* (25%) using SageMaker Neo.  
2. **Inference strategy:** switched from single GPU per request to a *batching layer* that aggregates up to 64 queries; deployed on **g4dn.xlarge** spot instances with an Auto‑Scaling group (min 1, max 8).  
3. **Caching:** added a Redis cache for the top‑10k most frequent embeddings, hitting 85% of requests instantly.  
4. **Monitoring & rollback:** set up CloudWatch Alarms to trigger a fallback to CPU on spike.

**Result (Deliver Results)**  
- Cost dropped from **$12k → $4.8k** per day (~60 % reduction).  
- Average latency improved from 280 ms to 160 ms.  
- SLA compliance rose to 99.9%.

**Bar‑raiser cues:** I own the entire cost‑impact loop, dive into model internals for pruning/quantization, quantify savings with real numbers, and iterate after a small failure (spot instance churn) by adding retry logic.

*Key Leadership Principles:* **Customer Obsession, Ownership, Dive Deep, Bias for Action.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
