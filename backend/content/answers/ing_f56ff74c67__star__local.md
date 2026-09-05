---
qid: ing_f56ff74c67__star__local
question: 'Explain: ​ What to evaluate — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:13-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an AI‑powered compliance assistant that needed to sift through thousands of regulatory PDFs and pull out relevant clauses for customer queries.

**Task:**  
I had to design a robust evaluation pipeline to ensure the document embeddings and retrieval accuracy met our SLA: 95 % precision on keyword matches and sub‑second response times, while keeping costs under $0.10 per query.

**Action:**  
I set up LangChain’s `DocumentLoaders` to chunk PDFs with `RecursiveCharacterTextSplitter`, then used OpenAI’s `text-embedding-ada-002` for embeddings stored in Pinecone. For evaluation I wrote a custom script that ran 1,000 synthetic queries against the index, comparing retrieved snippets to a ground‑truth set using ROUGE‑L and precision/recall metrics. I also introduced a dynamic prompt template in LangChain’s `LLMChain` that asks the model to verify snippet relevance before returning it, which reduced false positives by 12 %. Finally, I automated the entire pipeline with Prefect, adding alerts when latency exceeded 200 ms.

**Result:**  
After tuning, precision rose from 88 % to 96 %, recall stayed at 93 %, and average latency dropped to 150 ms. The cost per query fell below $0.08. I learned that systematic evaluation—combining retrieval metrics with model‑level verification—can turn a solid baseline into a production‑ready system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
