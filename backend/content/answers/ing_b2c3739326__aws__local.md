---
qid: ing_b2c3739326__aws__local
question: 'Explain: State Management Across Tool Calls — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 522
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:05-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built a conversational AI that spawns multiple external‑tool calls (e.g., booking APIs, NLP services). Each call had to preserve conversational context across stateless Lambda invocations while staying within the 15 min execution window and keeping latency <200 ms for end users.  

**Action – Architecture Pattern**  
I designed a *state‑machine + event‑sourcing* pattern using **Amazon Step Functions** orchestrating micro‑services:

| Component | Role | AWS Service |
|-----------|------|-------------|
| State Store | Immutable audit trail & quick read | **DynamoDB (global tables)**, TTL on inactive sessions |
| Event Bus | Decouple producers/consumers | **SNS/SQS** |
| Tool Adapters | Lambda wrappers around external APIs | **AWS Lambda** |
| Cache Layer | Reduce repeat lookups | **ElastiCache‑Redis** |

*Why this works:*  
- Step Functions keep the orchestration state in a fault‑tolerant, highly available manner (99.95% SLA).  
- DynamoDB’s single‑write capacity units (WCUs) give us 1 ms read latency; with on‑demand mode we paid $0.25 per million writes, keeping cost <$5/month for ~10k active sessions/day.  
- Redis reduces API round‑trips by 70%, cutting overall response time from 350 ms to <200 ms.  

**Result**  
After deployment, end‑to‑end latency dropped by **45%**, and we handled a 3× traffic spike without provisioning extra compute. Customer satisfaction (CSAT) rose from 82% to **90%** in the first month.  

**Leadership Principles Reflected**  
- *Customer Obsession*: We measured latency directly against user experience.  
- *Ownership & Dive Deep*: I owned the entire state‑management stack, debugged production failures by replaying DynamoDB streams, and iterated on cost vs. performance trade‑offs.  

**Bar‑raiser Takeaway**  
A strong answer shows ownership, deep technical reasoning, quantifiable impact, and a learning loop from failure (e.g., handling eventual consistency in Step Functions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
