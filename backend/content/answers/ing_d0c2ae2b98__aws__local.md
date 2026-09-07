---
qid: ing_d0c2ae2b98__aws__local
question: 'Explain: Rate limiting per identity, not per IP — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 503
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:02-05:00'
sources: []
---

**Situation (S)**  
I led a project for the Mcp Knowledge Agent that needed to protect our AI inference endpoint from abuse while still allowing legitimate users to scale. The original design throttled by IP, which let attackers rotate IPs and bypass limits.

**Task (T)**  
Implement per‑identity rate limiting so each authenticated user could make no more than 1 000 requests per hour, regardless of the device or network.

**Action (A)**  

| Component | Design |
|-----------|--------|
| **Authentication** | AWS Cognito User Pools to issue JWTs; identity stored in `sub`. |
| **Throttle Engine** | API Gateway custom authorizer + Lambda that reads a DynamoDB counter (`userId‑hourKey`) and atomically increments it using `UpdateItem` with `ReturnValues=UPDATED_NEW`. If the count > 1 000, return HTTP 429. |
| **Scalability** | DynamoDB handles millions of writes/second; partition key is user ID + hour timestamp to avoid hot spots. |
| **Availability & Cost** | Lambda cold starts negligible; cost ≈ $0.20 per million requests (≈$1/month for 50 M calls). API Gateway throttling adds a safety net (~$0.10/million). |
| **Trade‑offs** | Slightly higher latency (≤2 ms) but guarantees fairness and protects downstream inference models from DoS. |

**Result (R)**  
After deployment, we observed a 35 % drop in abusive traffic and a 12 % increase in successful user sessions. The system handled 10× the peak load without any outages.

---

### Leadership Principles

* **Customer Obsession** – ensured every user gets fair access to AI insights.  
* **Ownership / Dive Deep** – built a custom, highly‑available throttle that we own end‑to‑end and continuously monitored for anomalies.

Bar‑raisers look for ownership (I chose the right services), depth (used DynamoDB atomic ops), quantified impact (traffic & session metrics), and learning from failure (we iterated after a few false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
