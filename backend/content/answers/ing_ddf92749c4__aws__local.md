---
qid: ing_ddf92749c4__aws__local
question: How Does the Presence Platform Identify When a User Goes Offline?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 446
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:20-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the “Presence” feature for a real‑time collaboration app used by 4 M daily active users. The team needed to detect when a user went offline (network drop, app closed) and update presence status within **2 s** while keeping costs < $0.01 per event.

**Action**  
I designed an *event‑driven* pipeline using AWS:

| Service | Role |
|---------|------|
| **Amazon Cognito Sync** | Pushes client heartbeats every 30 s to a DynamoDB stream. |
| **AWS Lambda** (async) | Consumes the stream, checks last heartbeat timestamp, and if > 45 s marks user “offline”. |
| **Amazon SNS** | Publishes an “offline” event to subscribed services (chat, notifications). |
| **DynamoDB TTL** | Auto‑expires stale presence records after 1 h. |

*Key decisions*:  
- **Timeout = 45 s** balances quick detection vs false positives from brief network hiccups.  
- Using *async Lambda* prevents cold‑start latency; the function scales to > 10k invocations/sec with < $0.02/month.  
- SNS fan‑out ensures eventual consistency across microservices without polling.

**Result**  
Within 3 months we reduced offline‑detection lag from ~15 s to **< 2 s**, improving user engagement by **12%** (measured via session continuity metrics). Cost stayed under budget, and the system handled a peak of 1.5 M concurrent users with 99.9% availability.

---

> *Bar‑raiser notes*: The solution shows ownership (owning the end‑to‑end pipeline), deep dive into AWS services, quantified impact (time & cost savings, engagement lift), and learning from early false‑positive spikes that led to the timeout tweak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
