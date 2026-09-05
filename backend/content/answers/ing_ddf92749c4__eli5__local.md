---
qid: ing_ddf92749c4__eli5__local
question: How Does the Presence Platform Identify When a User Goes Offline?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 175
total_tokens: 336
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:05-05:00'
sources: []
---

Imagine your phone is a tiny radio station that keeps sending out “hello” signals to the internet every few seconds. The presence platform listens for those signals like a neighbor listening for a friend’s footsteps. When the signal stops coming, the platform knows the user has gone offline.

In technical terms, each device opens a *socket* (a continuous communication line) and periodically sends a small “heartbeat” packet. The server records the time of the last heartbeat. If no heartbeat arrives within a set timeout period—say 30 seconds—the server assumes the connection is lost and marks the user as offline.

So it’s just like hearing footsteps: if they stop, you infer the person has left the room. That’s how presence platforms detect an offline state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
