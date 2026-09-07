---
qid: ing_323abe56d9__aws__local
question: 'Explain: Write a SQL query to update the score of a player'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 416
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:38-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation:* At my last role I led a project to revamp the leaderboard for a mobile game that served 3 M daily active users. *Task:* I had to design an efficient way to update player scores after each match while keeping latency under 50 ms. *Action:* I chose Amazon Aurora Serverless (PostgreSQL) for its elastic scaling and built a Lambda function triggered by DynamoDB Streams. Inside the Lambda I ran a single `UPDATE` statement:  

```sql
UPDATE player_stats
SET score = score + :delta,
    last_updated = NOW()
WHERE player_id = :pid;
```

The function used connection pooling via RDS Proxy to reduce cold‑start costs. *Result:* We cut update latency from 120 ms to 35 ms, reduced database write traffic by 40 %, and kept the cost below $0.02 per day.  

**Technical Design**  
- **Requirements:** ACID compliance, high throughput, real‑time updates, cost efficiency.  
- **Design:** Aurora Serverless for auto‑scaling; RDS Proxy to avoid connection churn; Lambda (Python) as stateless compute; DynamoDB Streams for event sourcing.  
- **Scalability & Availability:** Aurora’s read replicas handle 200k concurrent writes; Multi-AZ ensures 99.99 % uptime.  
- **Cost vs Trade‑offs:** Serverless reduces idle capacity costs but introduces a minimal cold‑start latency, mitigated by keeping the pool warm with RDS Proxy.  

**Bar‑raiser cues:** Ownership (I drove architecture choice), depth (understood Aurora’s limits and Lambda cold starts), quantified impact (latency & cost metrics), and learning from failure (initial design used direct connections causing throttling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
