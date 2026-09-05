---
qid: ing_363fb599b9__eli5__local
question: 'Explain: Caching — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 240
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:41-05:00'
sources: []
---

**Think of a notification system as a busy post office that sends letters (messages) to people’s mailboxes (devices).**  
When the post office gets many requests for the same letter, it would be wasteful to fetch the content from the archive every time. Instead, it keeps a copy on a small “express shelf” near the counter – this is **caching**.

- **Cache**: A fast storage place (like that shelf) that holds recently used data so future requests can be answered immediately.  
- **Eviction policy** (e.g., LRU): When the shelf fills up, the least‑recently requested letter is removed to make room for new ones.

In a notification service, the cache stores recent notifications or user preferences so the system can quickly deliver updates without hitting slower databases. If a cached item expires or is updated, the system refreshes it from the main store and updates the shelf. This keeps the post office (service) swift, reduces database load, and ensures users get timely alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
