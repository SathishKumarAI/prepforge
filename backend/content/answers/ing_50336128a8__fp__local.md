---
qid: ing_50336128a8__fp__local
question: 'Explain: Fan-out-on-write (Push Model) for Normal Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 396
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:55:54-05:00'
sources: []
---

**Fan‑out‑on‑write (push model)**  
When a user posts, the system *immediately* distributes that content to every follower’s feed rather than waiting for each follower to pull it later.  

1. **Problem statement** – A user’s timeline must be current when they log in, but the number of followers can grow from 10 to millions. Pulling would require each follower to query a central service and merge many updates, incurring latency and network traffic that scales *with* the fan‑out.

2. **Why it works** – By pushing at write time we convert a *fan‑out* operation (one user → many followers) into many *fan‑in* operations (many users → one follower). Each follower’s feed is simply an append‑only log; retrieving it is O(1) and independent of how many people follow the poster. The write cost is amortized across all future reads.

3. **Deeper principle** – This is a classic *offline vs online* trade‑off in streaming algorithms: we shift computation from read time to write time, trading higher write latency for constant read latency. It also aligns with information theory—each follower stores the minimal amount of entropy (the post itself) once, avoiding repeated transmissions.

4. **Non‑obvious insight** – The push model’s scalability hinges on *content replication*, not just message distribution. If a user is followed by 10 million people, the system must maintain 10 million small state changes; efficient storage (e.g., partitioned append logs) and garbage collection become critical. Ignoring this can lead to “write‑heavy” hotspots that cripple even a well‑designed push architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
