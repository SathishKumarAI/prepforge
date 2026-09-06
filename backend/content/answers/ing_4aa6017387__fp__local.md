---
qid: ing_4aa6017387__fp__local
question: 'Explain: Running Experiments — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 379
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:43:58-05:00'
sources: []
---

### Why “Pydantic Evals” Exist  
When a model is deployed, we care not only that it *produces* an answer but also that the *format* of that answer matches expectations (e.g., JSON schema). Pydantic Evals formalise this as **validation‑by‑definition**: a function that, given raw output, casts it to a typed model and checks constraints.  

### The Core Principle  
This is an instance of **information‑theoretic compression**.  
- *Raw* text carries entropy;  
- A typed schema compresses the same information into a finite set of fields with semantic meaning.  
If the cast succeeds, we know the output lies in the low‑entropy subspace defined by the schema—hence it is “correct.”  

### How It Works in Practice  
1. **Define** a Pydantic model (e.g., `class Response(BaseModel): id: int; msg: str`).  
2. **Run** an LLM or API call.  
3. **Eval**: `Response.parse_raw(raw_output)`.  
4. If parsing throws, the experiment fails; otherwise it passes and we log the parsed object for downstream use.  

### Non‑Obvious Insight  
Pydantic Evals act as a *semantic filter* that turns unstructured text into a *probabilistic representation*. By converting outputs to typed objects, you can immediately compute likelihoods over discrete outcomes (e.g., `Response.id == 42`) without re‑implementing parsing logic. This bridges the gap between raw generative models and downstream probabilistic reasoning, enabling cleaner pipelines and more robust error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
