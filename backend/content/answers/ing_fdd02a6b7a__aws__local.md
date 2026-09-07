---
qid: ing_fdd02a6b7a__aws__local
question: 'Explain: C2C scaling with predictable communication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 575
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:05-05:00'
sources: []
---

**Situation (S)** – At my previous role I led a real‑time collaborative editing feature for a SaaS product that served 300k concurrent users. The existing peer‑to‑peer (C2C) architecture crashed under a sudden traffic spike, causing latency >200 ms and a 15 % increase in support tickets.

**Task (T)** – I had to redesign the C2C layer so that communication stayed *predictable* while scaling linearly with user load, without blowing up costs or sacrificing availability.

**Action (A)**  
1. **Architectural shift** – Introduced a hybrid model: use **AWS AppSync** (GraphQL) for state sync and **Amazon Chime SDK** for low‑latency media.  
2. **Back‑pressure & throttling** – Added **API Gateway + Lambda Authorizer** to enforce per‑user request limits, backed by **DynamoDB TTL** counters.  
3. **Event sourcing** – Persisted all edits in a **Kinesis Data Stream**, replayable via **Lambda** for audit and recovery.  
4. **Auto‑scaling & cost control** – Enabled **Constrained Scaling** on AppSync resolvers; leveraged **Savings Plans** for Lambda to keep per‑request cost <$0.0002.

**Result (R)** – Post‑launch, peak latency dropped from 200 ms to <50 ms, user churn fell by 12 %, and the feature handled a 4× traffic increase while keeping monthly spend under $5k—30 % below budget.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Directly reduced support tickets and improved UX.  
- **Ownership & Dive Deep** – I owned the entire stack, from GraphQL schema to Lambda code, and iterated on metrics until SLA met.

### Bar‑raiser Checklist  
| Cue | Why it matters |
|-----|----------------|
| Quantified impact (latency, churn, cost) | Shows measurable ownership |
| Deep dive into AWS services & trade‑offs | Demonstrates technical depth |
| Learning loop (post‑mortem on spike) | Reflects continuous improvement |

This solution balances **scalability** (Kinesis + Lambda), **availability** (AppSync’s built‑in retry), and **cost** (Savings Plans, DynamoDB TTL).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
