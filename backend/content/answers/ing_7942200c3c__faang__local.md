---
qid: ing_7942200c3c__faang__local
question: Design streaming chat for mobile. What breaks that doesn't break on web?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 486
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:46-05:00'
sources: []
---

**Clarify**  
> “Design a streaming‑chat feature for a mobile app.”  
We assume: real‑time text/emoji, push notifications, offline support, minimal battery drain, small data footprint, and that the web version already supports WebSocket or long‑polling.

*What can break on mobile but not on desktop?*  
- **Battery & CPU throttling** when a background tab is inactive.  
- **Network variability** (cellular vs Wi‑Fi).  
- **Memory limits** – large message history may crash the app.  
- **Push‑notification latency** – iOS/Android deliver in the background, whereas browsers keep the connection alive.

**Approach**  
1. Use a lightweight WebSocket library with exponential backoff.  
2. Persist messages locally (SQLite/Realm) and stream new ones via delta updates.  
3. Queue outgoing messages when offline; sync on reconnection.  
4. Throttle UI rendering to 30 fps, batch updates.  
5. Employ push notifications for unseen messages.

**Depth**  
- **Connection layer:** WebSocket with heartbeat every 15 s; if no ping‑pong in 30 s, reconnect using backoff (1 s → 2 s → 4 s).  
- **Data layer:** Store last N messages (~200) per chat; older ones purge.  
- **Battery optimization:** Reduce polling frequency when app is backgrounded; use OS push APIs instead of keeping socket alive.  
- Complexity: O(1) for insert/delete in local DB, O(n) for rendering n visible items.

**Edge Cases**  
- Sudden loss of cellular data → queue up to 50 msgs before dropping.  
- Device sleep during a long session → WebSocket may close; test reconnection logic.  
- Push notification arrives while user is typing – merge locally.

**Optimize & Communicate**  
Highlight trade‑offs: keeping socket alive vs battery; larger local cache vs memory limits. Explain how the design ensures graceful degradation—offline queue, push fallback—and that we’d monitor metrics (reconnect count, battery impact) post‑launch to iterate. This demonstrates structured thinking, depth, and communication expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
