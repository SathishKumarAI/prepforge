---
qid: ing_06c7c77a76__eli5__local
question: 'Explain: In-sync replicas — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 275
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:23-05:00'
sources: []
---

Think of a Kafka topic as a shared recipe book that many cooks (producers) add pages to.  
Each page can be copied onto several “in‑sync” copies – the **replicas** – so if one cook’s notebook breaks, the others still have the same page.

When a producer writes a new page it asks how many notebooks must confirm receipt before it feels safe: that’s the **acknowledgment (acks)** setting.

* **acks = 0** – The writer just hands the page to the leader notebook and moves on. No one checks if the copies got it.
* **acks = 1** – Only the leader notebook replies “got it.” The writer stops, but the follower copies might still be catching up.
* **acks = all (or -1)** – Every in‑sync replica must send a thumbs‑up before the writer continues. This guarantees that even if one notebook dies right after, the page is still safely stored elsewhere.

So “in‑sync replicas” are the reliable copies that stay perfectly updated, and “acks” decide how many of those copies the producer waits for before considering its write finished.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
