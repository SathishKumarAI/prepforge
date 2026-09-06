---
qid: ing_e0433964e8__think__local
question: 'Q62: Your search results are relevant but the LLM ignores them and answers
  from its training data. How do you fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 580
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:46:46-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- *What’s happening?* The LLM retrieves search results (e.g., via a retrieval‑augmented pipeline) but then generates an answer that ignores those snippets, relying on its internal weights instead.
- *Assumptions:*  
  - The system already has a retrieval component feeding documents to the model.  
  - The model is not explicitly conditioned to “use” the retrieved text (e.g., no instruction or prompt engineering).  
  - We can modify prompts, architecture, or training data.

**2️⃣ Mental model / framework**

Use the *retrieval‑augmented generation* pipeline as a three‑step process: **Retrieve → Fuse → Generate**. The bug lies in the *Fuse/Generate* stage—information isn’t being incorporated. Fixes revolve around ensuring the retrieved content is *explicitly present* and *encouraged* during decoding.

**3️⃣ Step‑by‑step reasoning**

1. **Inspect prompt design** – ensure the prompt includes a clear instruction like “Answer using the following sources.”  
2. **Embed the retrieved text directly** into the input (concatenate, prefix with markers).  
3. **Use retrieval‑aware prompting** – add tokens such as `[SOURCE] … [/SOURCE]` and ask the model to reference them.  
4. **Fine‑tune or adapter‑train** on data that pairs queries with source snippets and correct answers; this teaches the model to attend to the snippet.  
5. **Add a “source check” loss** (e.g., penalize hallucinations not supported by any token in the snippet).  
6. **Post‑generation verification** – run an external verifier or re‑score outputs based on overlap with sources.

**4️⃣ Common traps**

- *Overloading the prompt:* too many markers can confuse the model; keep it concise.  
- *Assuming the model will “understand” retrieval without explicit instruction.*  
- *Ignoring token limits:* if the snippet is truncated, the model may still hallucinate.  
- *Forgetting to re‑evaluate after changes* – always benchmark against a baseline.

**5️⃣ Sanity‑check & communicate**

1. **Test with a controlled query** where the correct answer is only in the retrieved snippet.  
2. **Verify that the output cites the snippet** (e.g., includes `[SOURCE]` text).  
3. **Explain to stakeholders**: “We’re feeding the model the exact information and teaching it to reference it, which reduces hallucinations.”  

By systematically tightening the prompt, embedding sources, and optionally fine‑tuning with a retrieval‑aware objective, we align the LLM’s generation with the actual search results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
