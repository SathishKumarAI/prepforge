---
qid: ing_97ee169c43__eli5__local
question: 'Explain: Known Biases and Mitigations — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 248
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:36-05:00'
sources: []
---

Imagine a library that only has books written in one language—everyone who reads it will think the world is made of that single language. That’s like **bias** in AI: when the data the model learns from is skewed, the model’s answers lean toward that bias.  

In *RAG* (Retrieval‑Augmented Generation), the model first fetches documents (“the library books”) and then writes an answer. If the retrieval step pulls only biased documents, the final text will repeat those biases. To fix this, we use **mitigations**:  
1. **Diversify the source set**—add more languages or viewpoints so the “library” is richer.  
2. **Filter out harmful content**—remove obviously prejudiced books before they’re read.  
3. **Adjust scoring**—give higher weight to neutral, balanced sources during retrieval.

Think of it as curating a well‑balanced library: with varied shelves and careful screening, the stories we write from them become fairer and more reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
