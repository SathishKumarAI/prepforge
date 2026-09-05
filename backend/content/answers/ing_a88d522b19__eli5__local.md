---
qid: ing_a88d522b19__eli5__local
question: 'Explain: Scaling Laws: Training vs. Inference Optimal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 242
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:19-05:00'
sources: []
---

Think of a library that’s growing every day.  
*Training* is like building the library: you buy books, arrange shelves, and train librarians. The more books (data) and shelves (compute), the richer the collection becomes, but it takes a lot of effort and money to keep adding them.  
*Inference* is like a visitor asking for a recommendation. Once the library exists, the librarian can quickly point to the right book with only a little extra work—just looking up the title, not rearranging shelves.

**Scaling law** says: if you double the size of the library (more data or more compute) during training, the quality of recommendations improves by a predictable amount. But for inference, you don’t need that huge library to give good answers; a smaller, well‑tuned subset often works best and is cheaper to run.

So, while training scales up linearly with resources to get better models, inference benefits from an *optimal* size—enough to be smart but not so big that it slows you down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
