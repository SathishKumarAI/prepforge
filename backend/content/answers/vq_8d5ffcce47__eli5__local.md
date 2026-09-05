---
qid: vq_8d5ffcce47__eli5__local
question: How do control which rollback segment I use ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 306
total_tokens: 463
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:44-05:00'
sources: []
---

Imagine your database as a kitchen where every recipe (transaction) needs a little “scratch‑paper” to write down changes before they’re finalized. That scratch‑paper is a **rollback segment** – a place where Oracle keeps the old values so it can undo a transaction if something goes wrong.

You don’t pick this paper for each dish; the kitchen manager (Oracle) decides which roll‑of‑paper to use automatically.  
* **Automatic mode:** The system hands you the best available segment, like a waiter handing you the nearest clean plate.  
* **Manual mode:** You can tell Oracle exactly which segment to use by setting the session parameter `ROLLBACK_SEGMENT` (or using the ROLLBACK SEGMENT clause in old versions). Think of it as telling the kitchen “use the big white sheet, not the tiny blue one.”

If you never set a preference, Oracle’s automatic algorithm will always choose a suitable segment for you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
