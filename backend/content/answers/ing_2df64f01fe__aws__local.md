---
qid: ing_2df64f01fe__aws__local
question: Your chatbot starts losing the thread after about ten turns. What are your
  options for managing conversation history?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 497
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:13-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role building a customer‑support chatbot for an e‑commerce platform, the model began to lose context after ~10 turns, causing 18 % of tickets to be reopened for clarification. I was tasked with restoring conversational fidelity while keeping latency <200 ms and cost < $0.02 per interaction.

**Action (A)**  
I evaluated three history‑management strategies:

| Option | AWS Services | Design & Trade‑offs |
|--------|--------------|---------------------|
| 1️⃣ **Short‑term cache in Redis (Elasticache)** | Store last 10 turns per session, TTL = 30 min. | Ultra‑fast (≤5 ms), but limited context length; requires manual truncation logic. |
| 2️⃣ **Persistent store in DynamoDB + Lambda** | Append each turn to a per‑session item; read full history on request. | Scales horizontally, supports unlimited turns, but read latency rises (~10–15 ms). |
| 3️⃣ **Hybrid with S3 for long‑term context & RDS for quick lookups** | Keep recent turns in RDS (PostgreSQL), older ones archived to S3 as JSON blobs. | Balances cost and speed; complexity increases with ETL pipelines. |

I chose the **hybrid approach**: a 5‑turn buffer in Elasticache for immediate context, a DynamoDB table for the full conversation history, and an EventBridge rule that archives sessions >30 min to S3 nightly. Lambda functions compress and index the archived logs for future fine‑tuning.

**Result (R)**  
Post‑deployment, context loss dropped from 18 % to <2 %, improving CSAT by 12 pts. The hybrid design kept per‑interaction cost at $0.018 and maintained sub‑200 ms latency across 10⁵ concurrent users.  

**Reflection**  
I learned that “Dive Deep” into trade‑offs (latency vs. scalability) and “Ownership” of the entire data pipeline are essential to sustain high‑quality AI experiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
