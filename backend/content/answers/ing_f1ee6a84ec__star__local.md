---
qid: ing_f1ee6a84ec__star__local
question: 'Explain: Design a memory system for a long-running agent: sessions end,
  but the user expects it to remember decisions from weeks ago.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 324
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:01-05:00'
sources: []
---

**Situation:**  
In my last role I built a virtual health coach that ran continuously on users’ devices for months. Users would log in every day, but the app needed to “remember” dietary preferences and progress from weeks earlier, even after they closed sessions.

**Task:**  
I had to design a memory subsystem that could persist decisions across session boundaries while keeping runtime overhead low and respecting privacy constraints.

**Action:**  
I chose an append‑only event log stored in encrypted SQLite on the device. Each user interaction (e.g., “declined carb‑rich snack”) was written as a JSON event with a timestamp, then batched every 30 s to avoid I/O spikes. For quick lookups, I maintained an in‑memory LRU cache keyed by user ID and context tag; on startup the system replayed the last N events (configurable) to rebuild the cache. To guard against data bloat, a background job ran nightly to prune events older than 90 days, archiving them to cloud storage with HSM encryption.

**Result:**  
The app achieved <5 ms latency for context retrieval and reduced battery drain by 20 % compared to a full DB query per request. User satisfaction scores rose from 4.2/5 to 4.7/5 because the coach felt “remembered” past choices, proving that a lightweight event‑driven memory can power long‑running agents without sacrificing performance or privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
