---
qid: ing_bfc34c741a__think__local
question: 'Explain: Database Choice — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 460
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:37:38-05:00'
sources: []
---

**1. Clarify the goal and constraints**  
   * Ask what “database choice” means in the context of a system‑design interview: is it about persistence for user data, analytics, caching, or something else?  
   * Confirm constraints (latency targets, write/read ratios, consistency needs, scaling horizon, budget).  

**2. Adopt a layered mental model**  
   * **Requirements layer** → functional vs non‑functional needs.  
   * **Data‑model layer** → schema shape, relationships, query patterns.  
   * **Performance layer** → throughput, latency, concurrency.  
   * **Operational layer** → deployment environment, monitoring, cost, team skillset.

**3. Step‑by‑step reasoning**  
   1. Enumerate key use‑cases (e.g., “user profile read/write”, “search index updates”).  
   2. Map each use‑case to data‑model requirements (relational vs document vs graph).  
   3. Match models to database families (SQL, NoSQL, NewSQL, time‑series).  
   4. Evaluate trade‑offs: consistency vs availability, ACID vs BASE, scaling patterns (sharding, replication).  
   5. Consider operational overhead: backups, migrations, monitoring.

**4. Common traps to avoid**  
   * Assuming “NoSQL is always faster” – ignore read‑heavy workloads that need joins.  
   * Over‑engineering: adding a cache or CDN when the database can meet latency goals.  
   * Ignoring future growth: picking a database that fits today but will choke at 10× data.

**5. Sanity‑check & communicate**  
   * Re‑state the problem in your own words to confirm understanding.  
   * Summarize the chosen stack and justify each decision with constraints.  
   * Be ready to pivot if interviewer introduces a new requirement (e.g., “we need real‑time analytics”).  

Follow this checklist, keep the discussion structured, and you’ll demonstrate clear, systematic thinking about database selection in system design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
