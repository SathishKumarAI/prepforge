---
qid: ing_2eb55dc22f__eli5__local
question: 'Explain: Eviction — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 217
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:49:41-05:00'
sources: []
---

Think of a **cache** as a tiny, super‑fast pantry that keeps the most useful recipes (data) right next to you, so you don’t have to fetch them from the slow kitchen every time.

In Google’s **Guava** library, the cache can *evict*—or discard—recipes automatically when they’re no longer needed.  
- **Size‑based eviction:** If the pantry gets full (say 100 recipes), the least recently used recipe is tossed out to make room for a new one.  
- **Time‑based eviction:** A recipe that hasn’t been opened in, say, 10 minutes gets removed automatically because it’s probably stale.

Eviction keeps the cache lean and fast, just like clearing out old dishes so you can still grab fresh ones instantly. The Guava Wiki and GitHub pages show how to set these rules for your own pantry (cache) with a few lines of code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
