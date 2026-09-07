---
qid: ing_ddf92749c4__faang__local
question: How Does the Presence Platform Identify When a User Goes Offline?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 469
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:15:02-05:00'
sources: []
---

**Clarify**  
We’re asked how *Presence* (e.g., Facebook/WhatsApp) can detect when a user’s device goes offline.  
Assumptions: the app runs on mobile with intermittent connectivity; we have server‑side presence service, heartbeat mechanism, and network events.

**Approach**  
1. **Heartbeat ping** from client to server at regular intervals.  
2. **Network state callbacks** (Wi‑Fi/Cellular) trigger immediate status change.  
3. **Server timeout**: if no ping within a threshold, mark offline.  
4. **Graceful disconnect** on app close or system suspend.

**Depth**  
- Client sends a lightweight “ping” every *t* seconds (e.g., 30 s).  
- Server stores last‑seen timestamp per user; uses an in‑memory store (Redis) for O(1) lookup.  
- If `now - last_seen > timeout` (say 2×*t*), flag offline and push update to friends.  
- On Android/iOS, listen to `ConnectivityManager/NetworkReachability`. When the network drops, immediately set status to “offline” and stop heartbeats.  
- For background mode, use OS‑provided keep‑alive sockets or scheduled jobs (WorkManager/BackgroundTasks).  
- Complexity: O(1) per ping; overall system scales linearly with active users. Trade‑off is battery vs. freshness.

**Edge Cases**  
- Sudden power loss → no network event → only server timeout triggers offline.  
- Device in airplane mode but still connected to Wi‑Fi → heartbeat fails, leading to false negative unless we detect local connectivity first.  
- App killed by OS → background service stops; rely on server timeout.

**Optimize & Communicate**  
To reduce battery drain, adapt ping interval based on user activity (idle → longer). Use exponential backoff if pings fail repeatedly. Explain the trade‑offs: tighter intervals give fresher presence but cost battery and bandwidth. I’d present this flow diagram to interviewers, highlighting how each component protects against edge cases while keeping latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
