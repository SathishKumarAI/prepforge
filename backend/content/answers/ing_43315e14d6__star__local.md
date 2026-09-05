---
qid: ing_43315e14d6__star__local
question: 'Explain: The decision framework: prompt → RAG → fine-tune'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 315
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:10-05:00'
sources: []
---

**Situation:**  
In a fintech startup, we were building an AI‑powered compliance assistant that had to scan regulatory documents and answer customer queries in real time. Our internal data set of policies was huge but constantly updated, so the model needed up‑to‑date knowledge without re‑training from scratch.

**Task:**  
Design a workflow that lets the system generate accurate answers quickly while staying compliant with evolving regulations, all within our limited GPU budget.

**Action:**  
I first created a prompt template that framed each user question as “Given the current regulatory text, what is the best compliance response?” Next, I integrated Retrieval‑Augmented Generation (RAG): a vector store built on FAISS indexed every policy paragraph; the model fetched top‑k relevant snippets before generating. Finally, to improve domain specificity, I fine‑tuned a distilled LLaMA model on 10 K annotated Q&A pairs from our internal audit team, using LoRA adapters so training cost stayed low.

**Result:**  
The end‑to‑end system cut response latency by 35% (from 3.2 s to 2.1 s) and boosted answer accuracy measured by a compliance score from 78% to 92%. I learned that coupling smart prompting, efficient retrieval, and lightweight fine‑tuning yields a production‑ready AI tool without heavy compute overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
