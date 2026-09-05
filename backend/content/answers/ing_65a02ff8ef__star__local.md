---
qid: ing_65a02ff8ef__star__local
question: Your agent spends over half its first turn just finding the relevant code.
  How do you fix that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 321
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:11-05:00'
sources: []
---

**Situation** – In a recent reinforcement‑learning project, my autonomous trading bot spent roughly 55 % of its first decision cycle just parsing the repository to locate relevant strategy modules. The rest of the turn was wasted on execution, pushing latency from 120 ms to over 300 ms and hurting back‑test throughput.

**Task** – Reduce the “code‑lookup” overhead so that the agent can make a trade decision within 100 ms while still maintaining full code‑coverage for dynamic strategy selection.

**Action** – I introduced a lightweight in‑memory index built with *ZODB* on startup, mapping function names to byte‑offsets. The agent now loads only the needed snippet via memory‑mapped file reads instead of scanning the disk. I also refactored the repository into micro‑packages and added a versioned hash cache so that unchanged modules are skipped entirely. Finally, I instrumented the lookup with *asyncio* tasks to parallelize parsing across CPU cores.

**Result** – Latency dropped from 300 ms to 85 ms, boosting back‑test speed by 250 %. The bot’s win rate improved by 3 % due to more timely trades. I learned that a small, persistent index can turn an O(n) disk scan into constant‑time access, and that caching strategy is critical when dynamic code loading is required in tight loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
