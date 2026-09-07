---
qid: ing_ea574ef682__faang__local
question: How Does the Presence Platform Identify Whether a User Is Online?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 539
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:44:49-05:00'
sources: []
---

**Clarify**  
You’re asking how a presence platform (e.g., Slack, Discord) determines if a user is “online.” I’ll assume we need to explain the typical design: detecting activity, heartbeats, and server‑side state, while considering privacy and scalability.

**Approach**  
1. **Client‑to‑server heartbeat** – periodic pings from each client.  
2. **Activity detection** – track user input or device wake events.  
3. **Server aggregation & expiration** – mark “online” if recent ping/activity; otherwise “offline.”  
4. **State propagation** – push status to other users via websockets or pub/sub.

**Depth**  
- *Heartbeat*: Every 30 s, the client sends a lightweight message (`{userId, ts}`) over an open websocket.  
- *Activity*: If the user types or moves the mouse, we reset an “activity timer” and optionally send an immediate status update (“active”).  
- *Server logic*: On receiving a heartbeat, store `lastSeen = now`. A background job marks a user offline if `now – lastSeen > 2×heartbeat_interval` (e.g., 60 s).  
- *Propagation*: Use a publish/subscribe layer (Redis Pub/Sub or Kafka) so that each presence change is broadcast to all friends/channels in O(1) per subscriber.  
- *Complexity*: Heartbeat handling is O(1) per user; offline cleanup runs in O(U) per sweep but can be incremental with sorted sets.  
- *Trade‑offs*: Shorter intervals give fresher status but increase bandwidth; longer intervals save traffic but may misclassify a user who closed the app abruptly.

**Edge Cases**  
- Network partitions: client may miss heartbeats → temporary “offline” until reconnect.  
- Battery‑saving modes: mobile clients might throttle heartbeats; fallback to “away.”  
- Multiple devices: merge per‑device states (e.g., online if any device is active).  

**Optimize & Communicate**  
We can use adaptive heartbeat intervals—increase on idle, decrease when user is actively interacting—to reduce traffic. For scaling, shard the presence store by user ID and let each shard maintain its own sorted set of `lastSeen` timestamps, enabling constant‑time lookups. In an interview I’d emphasize that this design balances real‑time accuracy with resource efficiency, a key consideration for FAANG‑scale systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
