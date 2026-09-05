---
qid: vq_7a38d0cb83__star__local
question: What do you mean by ‘joins’ in PySpark DataFrame? What are the different
  types of joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 308
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:05:52-05:00'
sources: []
---

**Situation** – In my last role, our data lake was ingesting logs from three micro‑services (auth, payments, and notifications). The analytics team needed a single view of user activity for churn prediction, but the raw tables had only partial keys and inconsistent schema.

**Task** – I had to merge the tables into one PySpark DataFrame so that every row represented a complete user session, while keeping runtime under 12 minutes on our cluster.

**Action** – First I performed a *broadcast join* between the small `users` table (≈50k rows) and the larger `auth_logs` (≈5M rows) to avoid shuffling. Next, I used an *inner join* on `session_id` to combine `payments` with the intermediate result, ensuring only sessions that had both authentication and payment events were kept. For optional notification data, I applied a *left outer join*, so missing notifications didn't drop the session. Finally, I added a *cross join* during a debugging step to verify row counts across partitions.

**Result** – The final DataFrame contained 4.8 M enriched sessions in 9 minutes, a 30% speedup over the previous MapReduce job. I learned that choosing the right join type—broadcast for small tables, outer joins for optional data—can dramatically reduce shuffle and improve performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
