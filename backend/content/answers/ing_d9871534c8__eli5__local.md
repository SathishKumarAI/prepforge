---
qid: ing_d9871534c8__eli5__local
question: 'Explain: Redundancy at the Hardware Level — Availability and Single Points
  of Failure (Sun Java System Directory Server Enterprise Edition 6.0 Deployment Planning
  Guide)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 176
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:19:13-05:00'
sources: []
---

Imagine a busy kitchen where every dish must be ready on time.  
If the chef has only one stove and it breaks, the whole menu stalls – that’s a **single point of failure**.  
To keep the kitchen running, the chef installs a second stove that can take over instantly if the first one hiccups. That extra stove is **hardware redundancy**: two identical units doing the same job so the system stays available even when one fails.

In the Sun Java System Directory Server, you set up two (or more) servers that mirror each other. If one server crashes or needs maintenance, the other takes over with no interruption to users. The goal is continuous availability; redundancy removes any single component whose failure could bring the whole service down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
