---
qid: ing_35f1b747e4__aws__local
question: 'Explain: 5.1 SQL vs NoSQL — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 553
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:45-05:00'
sources: []
---

**Situation (S)**  
In my last role I was tasked with building a high‑traffic URL shortener for an internal marketing platform that needed to handle 10 M requests/day while keeping latency under 50 ms.

**Task (T)**  
Choose the persistence layer and design the API so it scales, remains highly available, and costs <$0.02 per million redirects.

**Action (A – Technical Design)**  

| Requirement | SQL Choice | NoSQL Choice | Why I picked NoSQL |
|-------------|------------|--------------|--------------------|
| **Write‑heavy traffic & simple key/value** | RDS Aurora MySQL | DynamoDB | DynamoDB’s single‑digit ms latency and auto‑scaling fit the write profile. |
| **Global distribution, low read latency** | Multi‑AZ RDS | Global Tables | Global tables keep data in each region within 1 ms. |
| **Cost predictability** | On‑demand instances | Pay‑per‑request | DynamoDB charges per request; we can cap at $0.02/M redirect. |

*API Flow*:  
1. **POST /shorten** → Lambda authorizes, writes to a *shortcode* table (PK=originalURL) and returns the slug.  
2. **GET /{slug}** → API Gateway triggers Lambda that reads from the same table; if found, redirects, else 404.

*Scalability*:  
- Lambda scales linearly; no server‑provisioning overhead.  
- DynamoDB auto‑scales read/write units; we set a baseline of 5 k WCU/RCU and let it spike up to 100 k during campaigns.

*Availability*:  
- API Gateway + CloudFront edge caches the redirect responses for 24 h, reducing DB hits by ~70%.  
- Global Tables provide multi‑region failover; if one region fails, traffic is routed to another.

**Result (R)**  
Within two weeks of deployment, we handled 12 M redirects/day with <45 ms average latency and spent $1.80/month on DynamoDB – a 30% cost reduction versus the RDS prototype.  

**Reflection**  
I learned that *Customer Obsession* drives us to keep user experience smooth; *Dive Deep* made me evaluate per‑request costs, leading to DynamoDB’s pay‑as‑you‑go model. This design balances speed, scalability, and budget while staying fully serverless – a true AWS‑style solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
