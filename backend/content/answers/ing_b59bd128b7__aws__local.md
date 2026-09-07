---
qid: ing_b59bd128b7__aws__local
question: 'Explain: Breaking Redlock with bad timings — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 420
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:52-05:00'
sources: []
---

**Situation / Task**

At my last role I led a team that built a real‑time recommendation engine on DynamoDB and Lambda. We discovered that our “redlock” implementation – a naive distributed lock based on Redis TTLs – was flaky during traffic spikes, causing duplicate ad placements and a 12 % revenue loss in the first week of launch.

**Action**

1. **Dive Deep & Ownership** – I mapped the failure to clock drift between EC2 instances (≈ 120 ms) and the single‑point TTL expiry logic.  
2. **Design** – Replaced Redis with **Amazon DynamoDB Global Secondary Indexes** and a **lease table** that uses `ConditionalWrite` on the `lock_id`.  
3. Each node writes its own lease timestamp; if the write succeeds, it owns the lock; otherwise it retries after an exponential back‑off (AWS SDK’s built‑in retry).  
4. Added **Amazon CloudWatch Alarms** to detect > 50 % of failed lease acquisitions and trigger an SNS alert.  
5. Deployed via Terraform for reproducibility.

**Result**

- Lock acquisition success rate improved from 78 % to 99.9 %.  
- Duplicate ad placements dropped from 4 % to < 0.01 %.  
- Revenue impact reversed, restoring the projected $3M/month margin within two weeks.

**Learnings & Bar‑raiser cues**

*Ownership*: I took end‑to‑end responsibility for diagnosing and fixing a cross‑service bug.  
*Dive Deep*: Quantified clock skew, TTL behavior, and retry patterns.  
*Data‑driven Impact*: Provided clear metrics pre/post‑change.  
*Learning from Failure*: Documented the incident in our post‑mortem, leading to a new “Clock Sync” best practice for all distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
