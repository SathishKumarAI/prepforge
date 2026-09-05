---
qid: ing_28bbe95689__star__local
question: 'Explain: screen of user or POS right so — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 439
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:52-05:00'
sources: []
---

**Situation:**  
I was part of a startup’s core product team tasked with building a real‑time collaborative document editor for our internal knowledge base. Our existing prototype suffered from frequent merge conflicts and high latency when multiple users edited the same paragraph simultaneously, causing a poor user experience.

**Task:**  
My goal was to design a system that could handle concurrent edits from dozens of users on the same document with sub‑200 ms latency while guaranteeing eventual consistency—essentially the same problem Google Docs solves with Operational Transformation (OT).

**Action:**  
I mapped each edit to an immutable operation object (insert, delete) tagged with a sequence number and user ID. On the client, I implemented a lightweight OT algorithm that applied local operations immediately for instant feedback and then sent them to the server. The server maintained a global operation log per document; it rebroadcasts incoming ops to all participants after transforming them against concurrent ops using the classic “transform” function (e.g., `T(op1, op2)`). I added a version vector so clients could catch up by replaying missed ops, and used WebSocket for low‑latency bi‑directional communication. For scalability, we sharded documents across microservices and cached recent operation histories in Redis.

**Result:**  
After deployment, real‑time collaboration latency dropped from 600 ms to under 120 ms on average, and conflict incidents fell by 92%. The system reliably supported up to 200 concurrent editors per document with 99.9% consistency. I learned that careful sequencing, minimal transformation logic, and efficient network protocols are key to building a robust OT‑based collaborative editor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
