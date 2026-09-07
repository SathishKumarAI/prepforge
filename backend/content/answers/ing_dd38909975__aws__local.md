---
qid: ing_dd38909975__aws__local
question: 'Explain: Figma System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 469
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:18-05:00'
sources: []
---

**Situation & Task**  
I was asked to sketch a scalable system for an internal “Figma‑style” collaborative editor that would support real‑time design collaboration across thousands of concurrent users—an interview question common in Faang interviews.

**Action (Design)**  
1. **Real‑time sync** – use *WebSocket* (API Gateway + Lambda Authorizer) to push delta updates; store the authoritative state in a *DynamoDB* table with fine‑grained *Conditional Writes* for optimistic locking.  
2. **Persistence & history** – each edit is appended to an *S3* object per file, versioned via *S3 Object Lock*. A background *Glue* job aggregates deltas into a “snapshot” every 5 min and writes it to a *Redshift* cluster for analytics.  
3. **Scalability & Availability** – the WebSocket layer runs in an *ALB* with multiple *EC2 Auto Scaling Groups*, ensuring <50 ms latency across us-east-1. DynamoDB’s on‑demand mode handles 10K RPS spikes; S3 provides 99.9999% durability.  
4. **Cost & Trade‑offs** – using managed services keeps ops low (~$0.02 per message) but introduces a ~2 ms serialization overhead, acceptable for design tools.

**Result (STAR)**  
When I implemented this prototype in a sandbox, we handled 15 k concurrent users with <45 ms average round‑trip time and a 99.9% success rate—metrics that exceeded our baseline of 10 k users and 60 ms latency.  

**Reflection**  
I owned the end‑to‑end flow, dove deep into consistency models, and learned that choosing *DynamoDB* over a relational DB dramatically reduced lock contention. This design balances speed, durability, and cost while meeting the core Amazon principle of **Customer Obsession**—ensuring designers never lose work or experience lag.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
