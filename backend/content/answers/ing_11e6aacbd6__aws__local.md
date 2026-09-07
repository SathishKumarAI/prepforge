---
qid: ing_11e6aacbd6__aws__local
question: 'Explain: Token — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 542
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:01-05:00'
sources: []
---

**Answer (Amazon Style)**  

During a recent migration of our recommendation engine from on‑premise to **AWS SageMaker**, I owned the authentication layer that delivered a seamless user experience while keeping costs below $10k/month.

| **Token** | **Cookie** | **Session** |
|-----------|------------|-------------|
| Short‑lived JWT (expires 15 min) signed by Cognito, stateless, carries claims (`sub`, `iat`, `exp`). | Browser cookie that stores the JWT; marked `HttpOnly` & `Secure`. | Server‑side session ID stored in **DynamoDB** or **ElastiCache Redis**, mapped to user state (e.g., cart items). |

### Technical Design  
1. **Auth Flow** – Cognito → JWT → Cookie (client) → API Gateway → Lambda (decodes token, validates `exp`).  
2. **Session Store** – When a user adds an item to the cart, Lambda writes `{sessionId:cart}` into Redis; TTL = 24 h.  
3. **Scalability** – Each Lambda scales to 10k RPS; Redis cluster (cluster mode) handles >1M concurrent sessions with <1 ms latency.  
4. **Availability** – Multi‑AZ deployment of Cognito & Redis ensures 99.999% uptime; failover to a read‑only replica in case of outage.  
5. **Cost** – Lambda: $0.20/1M invocations, Redis: $120/mo (2 nodes), DynamoDB: <$30/mo for infrequent fallbacks.

### Behavioral (STAR)  
- **Situation:** Users reported “session lost” during peak traffic, costing us ~3 % conversion loss (~$45k/month).  
- **Task:** Re‑architect auth to reduce churn.  
- **Action:** Implemented Cognito JWT + Redis session store; added CloudWatch alarms for token expiry errors.  
- **Result:** Session persistence improved from 85 % to 99.7 %, increasing revenue by $52k/month (≈15 % lift).  

**Leadership Principles**: *Ownership* – I took full responsibility from design through rollout; *Dive Deep* – I analyzed CloudWatch logs, identified race conditions, and tuned Redis TTLs; *Bias for Action* – deployed in 2 weeks, not months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
