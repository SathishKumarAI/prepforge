---
qid: ing_0da89633a7__aws__local
question: 'Q: What is "Agentic RAG" and how does it differ from "Advanced RAG"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 572
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:35-05:00'
sources: []
---

**Answer – Amazon Interview Style**

**Leadership Principles:** *Customer Obsession*, *Dive Deep*

---

### **Situation**
In my last role as a solutions architect for a SaaS knowledge‑base platform, we needed to answer user queries with up‑to‑date data from millions of internal documents. The existing “Advanced RAG” (Retrieval‑Augmented Generation) pipeline fetched the top‑k docs via TF‑IDF and fed them into GPT‑4, but latency hit 1.2 s per request, breaking our SLA of 800 ms.

### **Task**
Redesign the retrieval strategy to reduce latency while preserving answer quality—specifically targeting a 40 % performance lift with no loss in F1 score (>0.85).

### **Action**
I introduced **Agentic RAG**:
- **Agentic layer**: A lightweight, rule‑based policy agent (AWS Lambda + Amazon Bedrock “Claude” for reasoning) decides which retrieval strategy to invoke based on query intent.
- **Dynamic retrieval**: If the intent is *fact‑lookup*, use a pre‑indexed vector store in Amazon QLDB (high consistency); if it’s *contextual synthesis*, trigger an external LLM call via Bedrock with fewer docs (k=3) and let the agent refine the prompt.
- **Caching**: Frequently requested prompts stored in ElastiCache Redis, reducing duplicate retrievals by 35 %.

We leveraged **Amazon Kendra** for semantic search and **SageMaker Endpoint** for lightweight embeddings. The architecture scales horizontally via Lambda concurrency limits and maintains high availability (99.9 % SLA) with a cost‑efficiency gain of ~25 % compared to the monolithic Advanced RAG.

### **Result**
Latency dropped from 1.2 s to 0.72 s (40 % improvement). F1 score remained at 0.86. Customer satisfaction scores increased by 12 pts in the post‑deployment survey. The solution was later adopted across three product lines, saving ~$150k annually.

---

**Bar‑raiser Takeaway:**  
- **Ownership:** I took full responsibility for redesigning the pipeline.  
- **Dive Deep:** Analyzed query patterns and latency bottlenecks at the micro‑level.  
- **Quantified Impact:** Delivered measurable speed gains and cost savings.  
- **Learning from Failure:** Iterated on a naive “Advanced RAG” approach that was too monolithic, learning to split responsibilities between policy and retrieval for agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
