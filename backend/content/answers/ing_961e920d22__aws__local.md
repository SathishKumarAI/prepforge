---
qid: ing_961e920d22__aws__local
question: 'Explain: Interval (5 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 658
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:18-05:00'
sources: []
---

**Answer – “Interval (5 Problems) — Blind 75”**

> **Situation:**  
> In my last role I was tasked to build an automated grading engine for a training platform that had > 50k students and needed real‑time feedback on coding challenges. The backend already stored 75 canonical problems (the *Blind 75* list) but the interval‑based scoring logic was missing.

> **Task:**  
> Design a scalable, low‑latency service that computes a student’s score as a function of time‑intervals between submissions for each of the five core problem categories. The system had to support 10k concurrent users and deliver results within 200 ms.

> **Action (Technical):**  
> *Requirements:*  
> – Persist raw timestamps per submission.  
> – Compute “interval penalties” per category:  
>   `score = baseScore – Σ α_i · Δt_i` where Δt_i is the elapsed time between successive submissions in category i.  

> *Design:*  
> 1. **Data Layer:** DynamoDB with a composite key `(studentId, problemId)` and GSI on `category`.  
> 2. **Compute Layer:** AWS Lambda (Python) triggered by Kinesis Data Streams that ingest each submission event. The Lambda aggregates intervals in an in‑memory map per student, writes the updated score to a DynamoDB “Scores” table.  
> 3. **Caching:** ElastiCache Redis for hot students’ current scores to satisfy the <200 ms requirement.  
> 4. **Monitoring:** CloudWatch metrics on `ComputeLatency` and `ScoreAccuracy`.  

> *Scalability & Cost:*  
> – Lambda scales horizontally; cost ≈ $0.0000167 per 100 ms of execution.  
> – DynamoDB auto‑scales to 1M RCU/WCU with provisioned throughput, cost ~$150/month at peak.  
> – Redis cache (~2 GB) keeps hot data in memory, reducing read latency by ~70 %.  

> **Result:**  
> The new interval scoring engine cut average response time from 1.4 s to **0.18 s** (92% reduction). Student engagement rose 15%, and the platform’s monthly revenue grew $120k due to higher completion rates.

> **Reflection (Bar‑raiser focus):**  
> • *Ownership:* I championed the end‑to‑end solution, from data modeling to deployment.  
> • *Dive Deep:* I profiled Lambda cold starts, tuned DynamoDB indexes, and validated interval formulas with statistical regression.  
> • *Learned from Failure:* Early iterations over‑estimated penalty weights (α_i), leading to student frustration; we iterated via A/B testing until the model aligned with learning outcomes.

---

**Leadership Principles Highlighted:**  
- **Customer Obsession** – Delivering instant, fair feedback for learners.  
- **Ownership** – Driving architecture and operational excellence from start to finish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
