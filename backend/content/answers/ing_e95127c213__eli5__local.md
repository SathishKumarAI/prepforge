---
qid: ing_e95127c213__eli5__local
question: 'Explain: Quick Links — Raft Consensus Algorithm'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 253
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:44:32-05:00'
sources: []
---

Imagine a group of friends trying to decide on a movie for the weekend, but they’re spread out across town and can only text each other. They need a reliable way to agree on one choice so everyone’s happy. That’s what Raft does for computers.

**Raft is a “leader election” system that keeps many servers in sync.**  
*Leader*: one server (like the friend who finally suggests the movie) coordinates decisions.  
*Followers*: other servers (the friends who listen).  
If the leader stops texting, the group votes to pick a new leader—just as friends would choose a new “movie picker.”  
When the leader decides on an action (e.g., “watch Inception”), it sends that decision to all followers, and each follower records it. If any follower falls behind, it asks the leader for the missing messages—like asking for the movie list again.

This simple “pick a leader, send decisions, catch up if you miss a message” keeps every server’s data identical, even if some fail or disconnect. Raft turns a chaotic group chat into a dependable, coordinated team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
