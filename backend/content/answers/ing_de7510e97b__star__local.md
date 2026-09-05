---
qid: ing_de7510e97b__star__local
question: 'Explain: Master-slave and master-master — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 332
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:36-05:00'
sources: []
---

**Situation:**  
While leading the backend team for our e‑commerce platform, we hit a traffic spike during Black Friday. Our current PostgreSQL cluster was a single master with read replicas, and the write latency started creeping past 200 ms.

**Task:**  
I needed to redesign the database architecture so that writes stayed fast while still providing strong consistency across all nodes, without breaking existing application logic or causing downtime.

**Action:**  
I evaluated a master‑slave (primary‑replica) setup versus a master‑master (multi‑primary) model. I chose a **master‑master** approach using PostgreSQL’s logical replication and Postgres XL for multi‑write support. I configured two geographically separate masters with conflict resolution rules based on last‑write‑wins, added a lightweight load balancer to route writes to the nearest master, and set up read replicas for analytics. We also introduced a “transactional queue” layer in Redis to buffer bursts during peak periods.

**Result:**  
Write latency dropped from 200 ms to under 50 ms, even at 5k TPS. Read performance improved by 30 % due to balanced query routing. The change caused no downtime, and we gained the flexibility to deploy updates in one region without affecting another. I learned that choosing replication topology hinges on consistency needs, geographic distribution, and the cost of conflict resolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
