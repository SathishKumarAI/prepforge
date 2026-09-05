---
qid: ing_9992c2097b__eli5__local
question: 'Explain: Global Architecture — Disasterrecovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 229
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:41:18-05:00'
sources: []
---

Think of an AI system as a giant library that lives on a continent‑wide network of servers. The **global architecture** is the way all those libraries are linked together—some in one city, some in another, each with its own shelves (models) and librarians (software).  

When something bad happens—a power outage, a cyber‑attack, or a hardware failure—the system must keep running. That’s where **disaster recovery** comes in: it’s like having backup copies of every book stored in safe vaults far away from the original library. If one library goes dark, the books are instantly served from another vault, and the readers (users) never notice a hiccup.

In practice, engineers set up mirrored “spare” servers in different regions, automate data replication, and create quick‑switch plans so that when a failure is detected, traffic reroutes to the healthy copy with minimal delay. This ensures the AI keeps working even if part of its infrastructure collapses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
