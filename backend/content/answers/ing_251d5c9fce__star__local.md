---
qid: ing_251d5c9fce__star__local
question: 'Explain: Hallucinated memory writes — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 348
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:04-05:00'
sources: []
---

**Situation** – In my last role I was building a conversational AI that stored user preferences in an external vector store so the bot could recall context across sessions. A spike in traffic (25% over baseline) caused the memory service to throttle, and we noticed the bot occasionally “forgot” recent edits or even returned fabricated details.

**Task** – I had to identify why the agent was writing hallucinated entries into its memory, stop the corruption, and ensure reliable state persistence under load without sacrificing latency.

**Action** – First, I instrumented the write pipeline with a checksum validator that compared the incoming payload against an in‑memory hash before persisting. Then I added a retry guard: if a write failed due to throttling, the agent queued the update locally and retried after a backoff window, preserving order. To detect hallucinations, I introduced a lightweight “sanity check” rule—any memory entry that deviated more than 30% from its previous vector was flagged for manual review. Finally, I refactored the state manager to use optimistic concurrency control with version numbers, so stale writes were automatically rejected.

**Result** – After deployment, hallucinated writes dropped from 12% of all updates to <0.5%. The bot’s recall accuracy improved from 78% to 95%, and we cut memory‑service latency by 18% due to fewer retries. I learned that combining lightweight validation with optimistic locking can keep large distributed agent memories consistent even under high load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
