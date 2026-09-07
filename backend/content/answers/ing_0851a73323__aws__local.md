---
qid: ing_0851a73323__aws__local
question: 'Explain: The Six Guiding Principles of REST — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 746
total_tokens: 983
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:45-05:00'
sources: []
---

**What I did (Situation)**  
When my team launched a public-facing recommendation engine for our e‑commerce platform, we needed an API that was **simple to consume**, **scalable**, and **cost‑effective** across millions of users. The problem was the legacy SOAP service—slow, hard to version, and tightly coupled.

**What I thought (Task)**  
I mapped out the *Six Guiding Principles* of REST (statelessness, cacheability, uniform interface, layered system, code on demand optional, client‑server separation) to design a new API that would expose our ML model while keeping operational overhead low.

**How I did it (Action)**  
1. **Stateless & Client–Server:** Deployed the inference logic in AWS Lambda behind Amazon API Gateway; each request carried all context, no session state.  
2. **Uniform Interface:** Used standard HTTP verbs (`GET` for predict, `POST` for batch), JSON payloads, and hypermedia links (HATEOAS) to guide clients.  
3. **Cacheable:** Enabled ETag/If‑None-Match headers in API Gateway; results cached in Amazon CloudFront + DynamoDB TTL for 1 h.  
4. **Layered System & Code on Demand:** Offloaded heavy preprocessing to SQS → Lambda chain, keeping the public endpoint thin.  
5. **Scalable & Cost‑Efficient:** Leveraged Lambda’s autoscaling and API Gateway’s request throttling; cost dropped from $12k/month to $3k/month while latency fell 40 % (avg 120 ms).

**Result (Outcome)**  
- 90 % reduction in support tickets for “API timeout” issues.  
- 70 % improvement in developer onboarding time (documented API vs. SOAP).  
- 25 % lift in recommendation conversion rate, directly tied to the faster inference.

---

### Amazon Leadership Principles Reflected

| Principle | How it surfaced |
|-----------|----------------|
| **Customer Obsession** | Built a low‑latency, easy‑to‑use API that improved user experience and sales. |
| **Ownership** | Took full responsibility from design through deployment and monitoring. |
| **Dive Deep** | Instrumented metrics (latency, error rates) to iterate on caching strategy. |
| **Bias for Action** | Quickly prototyped with Lambda + API Gateway instead of re‑engineering legacy code. |
| **Deliver Results** | Quantified impact: latency drop 40 %, cost cut 75 %. |

### What a Bar‑Raiser Looks For

- **Ownership:** End-to-end responsibility, from requirement gathering to post‑launch monitoring.  
- **Dive Deep:** Ability to break down performance bottlenecks (e.g., Lambda cold starts) and implement targeted fixes.  
- **Quantified Impact:** Clear metrics that tie architectural choices to business outcomes.  
- **Learning from Failure:** The cache‑eviction strategy was initially too aggressive; we pivoted after observing stale data issues, documenting the trade‑off between freshness and cost.

---

> *“In building a RESTful service, I didn’t just apply theory—I translated principles into measurable business value.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
