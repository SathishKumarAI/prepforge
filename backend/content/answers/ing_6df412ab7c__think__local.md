---
qid: ing_6df412ab7c__think__local
question: 'Explain: User Data — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 439
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:17:02-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Ask whether “User Data” means only user‑profile info or also listening history/behavior.  
   - Assume a large, highly available system (millions of users, real‑time recommendations).  
   - Note constraints: latency (< 100 ms for a playlist request), storage cost, GDPR compliance.

**2️⃣ Adopt a layered mental model**  
   - *Data ingestion* → *Storage & indexing* → *Processing & ML pipelines* → *Serving layer*.  
   - Think in terms of CAP trade‑offs: consistency for user data vs. availability for recommendations.

**3️⃣ Step‑by‑step reasoning**  
   1. **Collect raw events** (play, skip, search) via event bus (Kafka).  
   2. Persist immutable logs to a cold store (S3/BigQuery).  
   3. Build a *user profile* table in a fast key‑value store (DynamoDB/Cassandra).  
   4. Run batch jobs (Spark/Beam) to update embeddings, affinity scores.  
   5. Serve recommendations from a low‑latency cache (Redis) backed by the ML model.

**4️⃣ Common traps to avoid**  
   - Mixing real‑time and batch pipelines without clear boundaries → latency spikes.  
   - Ignoring GDPR “right to be forgotten” → stale data in caches.  
   - Over‑optimizing storage cost at the expense of query speed for personalization.

**5️⃣ Sanity‑check & verbalize**  
   - Verify each component meets its SLA (e.g., ingestion < 1 s, serving < 50 ms).  
   - Walk through a user request: “User X → fetch profile → pull cached recommendations → fall back to batch model.”  
   - Summarize the trade‑offs you made (consistency vs. availability, cost vs. speed) so interviewers see your holistic view.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
