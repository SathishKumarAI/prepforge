---
qid: ing_10c301615f__eli5__local
question: Hold on—what is consensus? — Raft Consensus Algorithm
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 222
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:12-05:00'
sources: []
---

**Raft Consensus Algorithm – a team‑meeting for computers**

Imagine a group of friends planning a road trip. They need to agree on the route, the driver, and who brings snacks. One friend is chosen as *the leader* (like a captain). The leader writes down the plan in a shared notebook and tells everyone to copy it. If the notebook gets lost or someone changes their mind, all friends check the latest version from the leader’s copy. Only when most friends have the same page can they start driving.

In Raft, computers act like those friends. One becomes the *leader*; it sends a log of “commands” to the others (the followers). Each follower confirms receipt by sending back a *heartbeat*. If the leader fails, the group votes for a new one, just as friends would pick a new driver if the current one can’t continue. This simple, human‑like process keeps all computers in sync without confusion or deadlock.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
