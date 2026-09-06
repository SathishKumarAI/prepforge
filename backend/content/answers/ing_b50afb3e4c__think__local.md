---
qid: ing_b50afb3e4c__think__local
question: Can LLMs learn from a single example? — fast.ai\u2014Making neural nets
  uncool again \u2013 fast.ai
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 410
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:55:28-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - *What does “learn from a single example” mean?*  
     - Is it one‑shot learning (generalize to new inputs after seeing one sample)?  
     - Or memorization of that exact instance?  
   - Assume we’re talking about typical transformer‑based LLMs trained on massive corpora, not specialized few‑shot models.  

**2. Mental model / framework**  
   - *Pretraining + fine‑tuning paradigm*: the network already has a rich prior; a single example is just an additional data point.  
   - *Meta‑learning & in‑context learning*: LLMs can treat new tokens as “instructions” and adapt temporarily via attention, not gradient updates.  

**3. Step‑by‑step reasoning**  
   1. Recognize that the model’s weights are fixed during inference; no back‑prop on a single example.  
   2. In‑context learning works by encoding the example in the prompt; the transformer attends to it when generating responses.  
   3. For true generalization, the model needs more than one diverse instance; one sample can bias predictions but won’t create a robust concept.  

**4. Common traps**  
   - Confusing memorization with learning: LLMs may “recall” the single example verbatim.  
   - Assuming that a single prompt can train new concepts—fine‑tuning requires many examples.  

**5. Sanity‑check & communicate**  
   - Test by giving the model a unique phrase and seeing if it repeats it exactly vs. generating related content.  
   - Explain: “The model can use one example to guide generation in‑context, but it doesn’t update its parameters; full learning needs many examples.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
