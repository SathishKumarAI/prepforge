---
qid: ing_815ebf6698__eli5__local
question: Product wants the assistant to answer from data no older than 15 minutes.
  How do you design and monitor that freshness SLA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 301
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:49-05:00'
sources: []
---

Think of the assistant as a news reporter who can only quote stories that were published in the last fifteen minutes.  
**Designing the “freshness” rule**

1. **Timer lock** – Every time the assistant gets a question, it checks the clock. If the newest data snapshot is older than 15 minutes, it asks for an update before replying.  
2. **Data‑pull schedule** – The system pulls new information from its sources every minute (or whenever a source sends a push notification).  
3. **Version stamp** – Each piece of data carries a timestamp. When the assistant builds an answer, it only uses items whose timestamps fall inside the 15‑minute window.

**Monitoring that rule**

- **Heartbeat logs** – Every response is logged with the age of the data used. If any log shows an older age, a red flag lights up.  
- **Alert threshold** – If more than 5 % of recent answers exceed the 15‑minute limit in a day, an alert goes to the ops team.  
- **Dashboard view** – A simple gauge shows “Freshness %” so anyone can see at a glance how well the system is keeping up.

With this setup, the assistant behaves like a diligent reporter who never cites stale headlines, and you can spot lapses instantly and fix them before users notice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
