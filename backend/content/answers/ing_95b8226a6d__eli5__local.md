---
qid: ing_95b8226a6d__eli5__local
question: 'Q: Your RAG system''s costs have tripled over the last month with no increase
  in query volume. How do you diagnose and fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 291
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:35:06-05:00'
sources: []
---

Imagine your RAG system as a smart librarian who looks up information (the “retrieval” part) and then writes an answer (the “generation” part). Suddenly, the librarian’s bill has tripled even though no one asked more questions.

**Diagnose**

1. **Check the books you’re borrowing** – Look at the *retrieval cost*: are you now pulling from a new, pricey database or using larger chunks of text?  
2. **Inspect the writing style** – The *generation cost* can jump if the model is set to produce longer answers or uses an expensive “large‑model” engine.  
3. **Measure latency and retries** – Longer wait times or repeated queries inflate costs.

**Fix**

- **Limit retrieval scope**: Narrow the search index, use smaller passages, or cache frequent results.  
- **Tune generation settings**: Reduce output length, switch to a cheaper model, or cap temperature/penalties that make the model wander.  
- **Implement request throttling**: If retries are happening, add back‑off logic.

By treating each component like a separate budget line—books and writing fees—you can pinpoint where the money is leaking and tighten it without cutting service quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
