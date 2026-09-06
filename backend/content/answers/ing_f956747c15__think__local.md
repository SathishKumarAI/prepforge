---
qid: ing_f956747c15__think__local
question: 'Q55: Your RAG system works great on test data but fails in production.
  What do you check?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 410
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:25:56-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- Confirm what “fails in production” means (e.g., lower recall, higher latency, wrong answers).  
- Assume the RAG stack is identical in dev/test and prod except for data or load.

**2️⃣ Adopt a layered diagnostic framework**  
- **Data layer:** input distribution, tokenization, embeddings.  
- **Retrieval layer:** index freshness, query‑vector quality, similarity metric.  
- **Generation layer:** prompt schema, model version, temperature.  
- **Infrastructure layer:** latency, concurrency, caching.

**3️⃣ Reason step‑by‑step**  
1. *Reproduce a failing example* in a controlled prod‑like environment.  
2. Log the raw input and the vector representation sent to the retriever.  
3. Verify that the same query returns the expected top‑k documents from the index (use a small seed set).  
4. Inspect the retrieved docs: are they relevant, correctly formatted?  
5. Pass those docs through the generator; capture its internal embeddings/attention if possible.  
6. Measure latency at each hop; compare with test numbers.

**4️⃣ Avoid common traps**  
- Don’t assume “same code” means “same data”; prod may have unseen domains or noisy tokens.  
- Don’t overlook index drift (documents added after the dev snapshot).  
- Avoid blaming the LLM alone; retrieval can silently degrade relevance.  
- Beware of hidden environment differences (GPU vs CPU, batch sizes).

**5️⃣ Sanity‑check & communicate**  
- Cross‑validate with a small manual audit: pick a handful of prod queries and manually inspect retrieval + generation.  
- Summarize findings in a concise table: layer → symptom → evidence → hypothesis.  
- Present next steps (e.g., re‑index, adjust tokenizer, retrain embeddings) to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
