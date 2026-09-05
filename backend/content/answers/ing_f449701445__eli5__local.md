---
qid: ing_f449701445__eli5__local
question: 'Explain: Storage (5 Years) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 253
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:01:18-05:00'
sources: []
---

**Think of the short‑link service like a long‑term photo album.**  
When someone creates a tiny URL, it’s just a bookmark that points to a full web page (the “photo”). The system must keep every bookmark for at least five years so users can still open their links later—just as you’d keep an album in the attic until you’re sure you’ll need those pictures again.

**How we store it:**  
- **Key‑value table**: Each short code is a key, and the full URL (plus metadata) is the value.  
- **Archival tier**: After a few months of active use, records that are rarely accessed can be moved to cheaper, slower storage—like putting older photos in a sealed box.  
- **Retention policy**: A background job scans for links older than five years and deletes them, freeing space.

So the system is like an organized attic: you keep every photo (URL) on display for 5 years, then recycle it if it’s truly no longer needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
