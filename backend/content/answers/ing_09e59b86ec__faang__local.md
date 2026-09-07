---
qid: ing_09e59b86ec__faang__local
question: 'Explain: 5.6 Archiving Old Data — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 463
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:07:31-05:00'
sources: []
---

**Clarify**  
We’re building a notification system that alerts users when their data is about to be archived (5‑6 months old). The service must: 1) detect archival candidates, 2) send timely notifications, and 3) respect user preferences (frequency, channel, opt‑out). Assume we have a write‑through cache, a relational DB for metadata, and a message queue.

**Approach**  
*Data pipeline:*  
1. **Batch job** scans the DB nightly, tags records older than 5 months with `archive_flag`.  
2. Enqueue an “archival‑alert” event per user into Kafka.  

*Notification layer:*  
3. A consumer service reads events, enriches with user prefs (email/SMS/Push), and pushes to a *notification queue*.  
4. Separate workers send the actual messages via SMTP, Twilio, FCM, etc., using retries/back‑off.

**Depth**  
- **Complexity:** Batch O(N) per day; consumer is linear in events.  
- **Scalability:** Partition Kafka topics by user region to avoid hotspots.  
- **Reliability:** Use idempotent message keys (`user_id + alert_type`) so duplicates are ignored.  
- **Data retention:** Store alerts for 30 days before purging to aid analytics.

**Edge Cases**  
- Users change contact info mid‑alert: fetch latest prefs each send attempt.  
- Bulk deletions: ensure batch job cleans up orphaned events.  
- Rate limits on SMS/Email providers: implement throttling per provider.

**Optimize & Communicate**  
We can shift to a *time‑to‑live* (TTL) approach by setting a scheduled deletion in the DB and using a cron‑based event emitter, reducing storage overhead. I’d explain this trade‑off to stakeholders: batch jobs are simpler but heavier on nightly resources; TTL keeps data lean but requires more real‑time coordination. This structured plan shows clear assumptions, a scalable architecture, and readiness for edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
