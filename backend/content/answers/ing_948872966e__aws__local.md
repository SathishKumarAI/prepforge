---
qid: ing_948872966e__aws__local
question: 'Explain: API-level Context Caching (Prompt Caching)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:43-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous role I led a feature that let our AI‑powered chatbot deliver instant replies for high‑volume FAQs. Users complained about the 2–3 s latency when the same prompt was repeatedly sent, hurting engagement.

**Action (Dive Deep + Bias for Action)**  
I designed an **API‑level context cache** (“prompt caching”) as follows:

| Layer | AWS Service | Purpose |
|-------|-------------|---------|
| Cache store | **DynamoDB** with TTL + **ElasticCache‑Redis** | Store prompt → response pairs, 99.9 % hit rate |
| API gateway | **Amazon API Gateway** + **Lambda@Edge** | Route requests to cache or backend |
| Fallback | **AWS SageMaker Endpoint** | Generate response if cache miss |

*Design details*:  
- The Lambda authorizer checks Redis first; on a miss it forwards to SageMaker.  
- Cache key = SHA‑256(prompt + user‑context).  
- TTL of 24 h, auto‑purge via DynamoDB Streams.  

**Result (Deliver Results)**  
Within one sprint we hit **>95 % cache hit rate**, cutting average latency from **2.8 s → 0.3 s** and reducing SageMaker invocation cost by **42 %** ($1.20/month vs $2.10). User satisfaction scores rose 18 pts in NPS.

**Reflection (Invent & Simplify + Learn)**  
The first iteration over‑cached entire session state, causing cache thrashing. We learned to scope the key to stateless prompts only, improving hit rate and simplifying maintenance. This cycle demonstrates true ownership and a data‑driven approach to scaling AI services on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
