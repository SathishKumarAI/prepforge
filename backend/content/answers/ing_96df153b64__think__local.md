---
qid: ing_96df153b64__think__local
question: How do you select and order few-shot examples? What are the known pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 457
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:05:57-05:00'
sources: []
---

**1. Clarify the goal & constraints**  
   - Ask: *What task am I solving (classification, generation, QA)?*  
   - Note any domain‑specific jargon or data distribution.  
   - Assume a fixed prompt length and that the model will use the examples as context only.

**2. Adopt a “sample‑utility” framework**  
   - **Relevance:** choose examples that mirror the test input’s style, vocab, and difficulty.  
   - **Diversity vs. consistency:** balance covering key sub‑classes without overwhelming the prompt with noise.  
   - **Sparsity:** fewer, higher‑quality samples often beat many mediocre ones.

**3. Step‑by‑step reasoning**  
   1. **Collect a pool** of labeled instances (or generate synthetic ones).  
   2. **Score each candidate** on relevance (cosine similarity in embedding space) and informativeness (entropy, novelty).  
   3. **Greedy selection:** pick the top‑scoring example, then re‑score remaining items excluding overlap with already chosen samples.  
   4. **Order them** so that the most similar or hardest case comes last, letting the model “warm up” and reduce catastrophic forgetting.

**4. Common pitfalls to avoid**  
   - *Over‑fitting to a narrow subset*: too many examples from one sub‑domain misleads the model.  
   - *Prompt bloat*: exceeding token limits dilutes signal.  
   - *Inconsistent formatting*: mixing “Question: … Answer:” with plain text confuses the LM.  
   - *Ignoring label noise*: garbage in, garbage out—clean the pool first.

**5. Sanity‑check & communicate**  
   - Run a quick pilot on a few test samples; if accuracy drops, reconsider relevance or ordering.  
   - Verbally explain: “I chose these because they match the target’s style and cover all key classes, and I ordered them from most generic to most specific so the model can build context progressively.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
