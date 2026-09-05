---
qid: ing_ca053c1da8__eli5__local
question: 'Explain: 3.3 Look for Shared Fate — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 185
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:55:18-05:00'
sources: []
---

Think of a city that relies on one bridge to cross the river. If that bridge collapses, traffic can’t get anywhere—everything stops because there’s only one way through. In computer systems, a **Single Point of Failure (SPOF)** is like that bridge: a single component whose breakdown brings down the whole service.

Designers look for “shared fate” situations—places where many parts depend on one thing—and replace them with backups or multiple paths. For example, instead of one database server, you use several that share data. If one fails, others keep the system running. This approach spreads risk so a single glitch doesn’t cripple everything, just like having several bridges keeps traffic flowing even if one breaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
