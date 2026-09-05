---
qid: ing_eff51430ae__eli5__local
question: 'Explain: Backlogs Can Become Incidents — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 284
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:38-05:00'
sources: []
---

Imagine a busy post office where letters (messages) are queued for delivery to customers (services). If the mailroom gets flooded—say, because too many letters arrive at once—the stack of envelopes grows. That backlog is normal until the pile becomes so large that it blocks the doorway or spills onto the floor. The blockage stops people from getting their mail and can trigger a safety alarm (incident).

In system design, a message queue works like that post office. A small backlog means messages are waiting but nothing critical happens. As traffic spikes, the queue length grows; if it exceeds the system’s capacity to process or store them, it can cause time‑outs, resource exhaustion, or even crash downstream services—just like the blocked doorway. Once an alarm is triggered (e.g., a service stops responding), the backlog has turned into an incident that must be resolved quickly.

Key terms:  
- **Message queue** – a buffer where messages wait before being processed.  
- **Backlog** – the number of unprocessed messages in the queue.  
- **Incident** – a serious problem that disrupts normal operation.  

Understanding this flow helps designers build safeguards (autoscaling, dead‑letter queues) so that a growing backlog never becomes an incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
