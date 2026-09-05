---
qid: ing_46edb19c4e__eli5__local
question: 'Explain: Multi-Step Injection Defeats Single-Payload Defenses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 202
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:35-05:00'
sources: []
---

Imagine a locked safe that has one strong lock (the single‑payload defense). A clever thief can’t just pick the lock once; instead, he brings a tiny key that only scratches the lock’s surface. That scratch doesn’t open the safe, but it weakens the lock a little. The thief then comes back with a second small key that fits into the newly created flaw and finally opens the safe. Each step alone is harmless, but together they bypass the defense.

In AI security, “single‑payload defenses” are rules that look for one suspicious piece of code (like a single key) and block it. A “multi‑step injection” sends many small, benign requests in sequence—each passes the rule, but cumulatively they build an attack payload that slips through. The trick is that no single request triggers the alarm, yet the combined effect defeats the protection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
