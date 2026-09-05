---
qid: ing_dc7693ee41__eli5__local
question: 'Explain: When would you put a whole contract in the context window instead
  of retrieving over it? Defend the answer with numbers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 232
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:17-05:00'
sources: []
---

Think of a contract like a long novel. If you want a quick summary, you open a few chapters (retrieval) and read only the parts that matter. But if the whole story is short—say it’s a one‑page lease or a 20‑page agreement—you can hand the entire text to an AI in one go. Modern models have a “context window” of about 8,000 tokens (roughly 12 k words). A typical small contract fits comfortably inside that limit, so you avoid the overhead of searching and stitching fragments together.

When the document is longer than the window—over 8,000 tokens—you must split it into chunks and retrieve relevant pieces. For a 30‑page corporate contract (~15,000 tokens), breaking it into sections and pulling only the needed clauses keeps memory usage low and speeds up processing. Thus: put the whole thing in if it’s under ~8k tokens; otherwise, retrieve slices that fit the window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
