---
qid: ing_a697144df2__think__local
question: 'Q: Why would you still use RAG if frontier models ship 1M-2M token contexts?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 480
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:03:55-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - *Clarify*: “RAG” refers to Retrieval‑Augmented Generation (using external documents).  
   - *Assume*: The “frontier models” are large language models that can process 1–2 M tokens in a single context window, yet we still consider using RAG.  
   - *Goal*: Identify reasons why RAG remains useful despite huge context limits.

**2. Adopt a mental model**  
   - Use the **“capacity vs. relevance” framework**:  
     *Capacity* = how many tokens the model can ingest;  
     *Relevance* = how well the content matches the user’s intent.  
   - Consider other dimensions: latency, cost, knowledge freshness, interpretability.

**3. Step‑by‑step reasoning**  
   1. Compare raw token capacity to practical limits (memory, compute).  
   2. Evaluate whether all 1–2 M tokens are *useful* or mostly noise.  
   3. Examine the cost of feeding that many tokens (GPU hours, memory bandwidth).  
   4. Assess latency: larger contexts mean longer token‑generation times.  
   5. Think about freshness—external retrieval can pull up-to-date facts absent from static pre‑training data.  
   6. Consider interpretability: retrieved passages provide evidence for the answer.

**4. Common traps to avoid**  
   - *Assuming “more tokens = better”*: larger contexts still need relevance filtering.  
   - *Ignoring cost/latency trade‑offs*: a model that can ingest millions of tokens may be prohibitively slow or expensive in practice.  
   - *Overlooking knowledge decay*: static pre‑training data becomes stale; retrieval keeps content current.

**5. Sanity‑check & communicate**  
   - Verify each point against real‑world constraints (GPU memory, inference budgets).  
   - Summarize as: RAG remains valuable when relevance, freshness, cost, and interpretability outweigh the raw token capacity advantage. This structured reasoning can be reused for other “why still use X?” questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
