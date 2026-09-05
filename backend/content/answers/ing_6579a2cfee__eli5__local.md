---
qid: ing_6579a2cfee__eli5__local
question: 'Q: TTT-E2E compresses context into weights via test-time training. Where
  does this fit in the L1-L4 hierarchy, and what new failure mode does it introduce?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 289
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:17:02-05:00'
sources: []
---

Think of a language model as a library that can answer any question by looking up books (the raw data).  
The L1–L4 hierarchy is like the way we organize that library:  

* **L1** – the physical shelves (raw weights).  
* **L2** – the catalog index (how the model knows where to find information).  
* **L3** – the librarian’s rules for reading the books.  
* **L4** – the final answer we give to a user.

TTT‑E2E (“test‑time training end‑to‑end”) is a *smart librarian* who, while answering a question, rewrites its own index on the fly to fit that particular query. It compresses the whole context into new weights—like reshaping the shelves so only the needed books are left.

Because this rewriting happens during use, it slips between L3 (rules) and L4 (answers). The new failure mode is **“context leakage”**: the temporary re‑weighting can accidentally keep traces of the original question in the model’s memory, making it harder to answer a second, unrelated query correctly. It’s like having a sticky note on a shelf that still shows what you just looked up—next time you’re distracted by it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
