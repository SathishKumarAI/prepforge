---
qid: vq_243fc135de__star__local
question: Is there a simple, elegant way to define Singletons?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 307
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:39-05:00'
sources: []
---

**Situation** – In my last role I was tasked with refactoring an aging analytics library that kept spawning thousands of database connections across microservices. The connection pool manager was a classic singleton but the existing implementation used a global variable and a lot of manual locking, which made unit testing brittle.

**Task** – I needed to replace the ad‑hoc singleton with a clean, thread‑safe pattern that still allowed dependency injection for tests and kept initialization lazy so we didn’t hit the DB until the first request.

**Action** – I implemented a metaclass called `SingletonMeta` that overrides `__call__`. Inside it checks an internal `_instances` dict; if the class isn’t present, it creates the instance under a re‑entrant lock. The connection manager inherits from this metaclass, and its constructor accepts optional config parameters. In tests I monkey‑patch `ConnectionManager._instances` to reset state. This approach uses only built‑in Python features (metaclasses, threading.Lock) and keeps the public API unchanged.

**Result** – After deployment we saw a 40 % drop in connection errors during peak traffic, and unit test coverage of the manager rose from 0 % to 95 %. I learned that leveraging metaclasses for singletons can be both elegant and production‑grade when combined with proper locking and reset logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
