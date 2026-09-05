---
qid: ing_ee45854abf__eli5__local
question: 'Explain: Requirement Clarification — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 233
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:23-05:00'
sources: []
---

Imagine you’re building a huge, bustling art gallery that will open online. Before the walls go up, you ask the owner: “What kind of visitors do we expect? How many paintings can each room hold? Will people bring their own canvases?” In system‑design terms, this is **requirement clarification** – gathering clear answers about what the app must do.

1. **Scope** – Do we need only photo posting or also stories, reels, and live streams?  
2. **Scale** – How many users (millions) and how fast will they upload?  
3. **Features** – Likes, comments, feeds, search, notifications, privacy settings.  
4. **Constraints** – Storage limits per image, bandwidth for video, latency tolerance.

By answering these questions first, you know which rooms (databases, caches, CDNs) to build and how big they should be, so the gallery opens smoothly and looks great to every visitor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
