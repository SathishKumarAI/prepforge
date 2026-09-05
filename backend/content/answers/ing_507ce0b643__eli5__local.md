---
qid: ing_507ce0b643__eli5__local
question: 'Walk me through the latency budget of a query: query understanding → retrieval
  → rerank → LLM answer. Where do you spend and where do you cut?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 342
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:44:47-05:00'
sources: []
---

Think of a smart assistant as a well‑trained librarian who has a tight schedule for each book request.

1. **Query understanding** – the librarian first reads your note (the text you typed) to figure out what you’re really asking for. This is quick because it uses a lightweight spell‑checker and keyword list; it takes about 10 % of the total time.

2. **Retrieval** – next, she pulls the relevant books from the shelves. The shelf is organized by topics (index), so finding the right volumes is fast, but scanning many pages still costs around 30 %. That’s where most latency sits.

3. **Rerank** – she then looks at each book’s cover and blurb to decide which one best matches your request. A small “top‑k” filter (usually 5–10 books) keeps this step cheap, about 15 %.

4. **LLM answer** – finally, the librarian reads the chosen pages aloud using a sophisticated voice model. This is the most expensive part—generating natural language can take up to 45 % of the budget.

**Where to cut:**  
- Reduce retrieval time by keeping only the most promising books in the first pass (better indexing).  
- Shorten rerank by limiting the number of candidates.  
- Trim LLM output length or use a lighter model for routine answers.  

By tightening each stage, you keep the overall response swift and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
