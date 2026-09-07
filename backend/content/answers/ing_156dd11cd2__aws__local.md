---
qid: ing_156dd11cd2__aws__local
question: Why Base62? — Design URL Shortener | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 497
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:40-05:00'
sources: []
---

**Why Base62? – A Customer‑Obsessed Design**

*Situation:*  
Our client needed a URL shortener that could handle 10 M new links per day while keeping the link length ≤7 characters to maximize shareability on mobile and print.

*Task:*  
Choose an encoding scheme that maximizes throughput, minimizes collisions, and remains cost‑effective at scale.

*Action:*  
I evaluated Base16, Base36, and **Base62** (0–9, A–Z, a–z).  
- **Capacity:** 62⁷ ≈ 3.5×10¹² unique URLs → >300× the projected lifetime traffic (≈3.3×10⁹).  
- **Performance:** Base62 is natively supported by many AWS SDKs; conversion uses simple integer‑to‑string logic, avoiding expensive regex or lookup tables.  
- **Collision probability:** With a 64‑bit counter and random shuffling (XOR‑shift), the birthday paradox collision chance stays <10⁻¹² even after billions of inserts.  

*Result:*  
Implemented with DynamoDB for id→URL mapping, Lambda for encoding/decoding, and CloudFront for CDN caching.  
- **Latency:** 30 ms average resolve time (≤2 ms for cache hit).  
- **Cost:** < $0.02 per 1 M requests (DynamoDB read/write + Lambda invocations).  
- **Scalability:** Horizontal scaling handled by DynamoDB auto‑scaling; Lambda concurrency set to 10 k, automatically adjusted.  

*Learnings:*  
- *Ownership*: I owned the encoding choice and documented failure scenarios (e.g., counter exhaustion) with fallback logic.  
- *Dive Deep*: Benchmarked against Base36 and found 2× higher CPU usage for same throughput.  
- *Bar‑raiser cues*: Clear metric targets, risk mitigation plan, and cross‑team ownership (DevOps for cost monitoring).  

**AWS Services Used:** DynamoDB, Lambda, CloudFront, API Gateway, CloudWatch.

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
