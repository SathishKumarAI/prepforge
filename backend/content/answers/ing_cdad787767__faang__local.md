---
qid: ing_cdad787767__faang__local
question: 'Explain: A customer has 2,000 pages of internal PDFs and wants an assistant
  that answers questions over them. Fine-tune or RAG? Walk me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 502
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:38:42-05:00'
sources: []
---

**Clarify**  
We have ~2 k PDF pages (~200–300 KB each). The goal: an assistant that answers user questions using only this internal content (no external knowledge). Constraints? Latency < 1 s, budget limited, data is confidential, and we need explainability.  

**Approach**  
Evaluate two paradigms:  
1. **Fine‑tuning a large LLM** on the PDFs.  
2. **Retrieval‑Augmented Generation (RAG)** that indexes the documents and fetches snippets at query time.

**Depth**  
- *Fine‑tune*: Requires tokenizing all PDFs (~400k tokens), GPU hours, and continuous retraining when docs change. Model size ~13 B → high inference cost; risk of hallucination because the model may over‑generalize beyond the small corpus.  
- *RAG*: Index with a vector store (e.g., FAISS or Pinecone). At query time retrieve top‑k passages, then feed them into a base LLM (few‑shot prompt) to generate an answer. Latency stays low; updates are incremental (re‑embed only changed docs). Guarantees that the model can’t hallucinate beyond retrieved context.

**Edge Cases**  
- If the PDFs contain highly specialized jargon, fine‑tuning might learn it better but at cost of generalization.  
- RAG may retrieve irrelevant passages if embeddings are weak; need re‑ranking or passage filtering.  
- Large documents may exceed prompt limits—split into chunks with overlap.

**Optimize & Communicate**  
Start with **RAG**: build an efficient chunking pipeline, fine‑tune a smaller encoder for domain‑specific embedding, and use a lightweight LLM (e.g., GPT‑4o-mini) for generation. If user demand grows or latency becomes critical, consider *hybrid*: fine‑tune only the top‑k retrieval module or use instruction tuning on the base model to reduce reliance on retrieval. Explain this trade‑off to stakeholders: RAG gives modularity, easier updates, and lower compute, while fine‑tuning offers tighter integration at higher cost.  

**Bottom line:** For 2 k pages with confidentiality and frequent updates, RAG is the pragmatic first choice; fine‑tune only if performance or hallucination becomes unacceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
