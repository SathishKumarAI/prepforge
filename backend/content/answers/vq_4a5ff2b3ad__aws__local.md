---
qid: vq_4a5ff2b3ad__aws__local
question: WHAT IS OPTIMISTIC VS. PESSIMISTIC LOCKING?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:12-05:00'
sources: []
---

**Situation & Task**  
While redesigning our e‑commerce order service, I had to decide between optimistic and pessimistic locking for the inventory table. The goal was to keep latency under 200 ms while ensuring no oversell during flash sales.

**Action**  
I mapped the trade‑offs:  

| Lock type | Consistency | Contention | Latency |
|-----------|-------------|------------|---------|
| **Optimistic** | Detects conflicts at commit (no lock held) | Low contention → higher throughput | < 50 ms |
| **Pessimistic** | Locks rows immediately | High contention → potential 1–2 s wait | 200–300 ms |

I chose optimistic locking with a version column, implemented via DynamoDB’s *ConditionalWrite* (`attribute_not_exists` + `version`). For high‑volume periods I added a **retry back‑off** (exponential) and a fallback to a short‑lived SQS queue that serializes conflicting updates.  

**Result**  
During the November 24th sale we processed 3 M orders in 12 h, with an average latency of 42 ms and only 0.03% failed transactions (vs 1.2% under pessimistic locking). Cost savings were 18 % on DynamoDB reads/writes due to fewer lock‑related retries.

**Learning & Ownership**  
I documented the retry policy in the team wiki, mentored two interns on conflict resolution patterns, and set up a nightly health check that alerts if conflict rates rise above 0.1%. This proactive ownership reduced manual triage by 70 % during peak traffic.

> **Leadership Principles:** *Customer Obsession* (fast, reliable orders), *Dive Deep* (analyzing lock contention metrics), *Ownership* (designing retries & monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
