---
qid: ing_b820151fcf__think__local
question: 'Explain: A customer wants an assistant over their internal knowledge base
  and asks whether to fine-tune. Prompting, RAG, or fine-tuning - walk through the
  decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 549
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:06:23-05:00'
sources: []
---

**1. Clarify scope & constraints**  
   *What does “assistant over internal KB” mean?*  
   - Is it a Q&A bot, a conversational agent, or a search‑augmented helper?  
   - What volume of documents, update frequency, and privacy rules apply?  
   - How many users will access it, and what latency is acceptable?  

**2. Choose a mental framework**  
   Use a *cost–benefit–risk* triage:  
   - **Cost**: compute time, storage, licensing.  
   - **Benefit**: accuracy, relevance, user experience.  
   - **Risk**: data leakage, hallucinations, maintenance burden.

**3. Reason through each option**

| Option | Strengths | Weaknesses | When to pick |
|--------|-----------|------------|--------------|
| **Prompting (few‑shot)** | No model changes; cheap to iterate. | Limited recall; can’t use huge KB directly. | Quick prototyping or very small, static data. |
| **RAG (Retrieval‑Augmented Generation)** | Leverages full KB via vector search; keeps base LLM unchanged. | Requires indexing pipeline and real‑time retrieval; risk of stale docs if index not refreshed. | Medium‑size KB with frequent updates, need up‑to‑date answers. |
| **Fine‑tuning** | Model internalizes domain language & facts; no external lookup needed at inference. | High compute cost, longer training cycles, risk of overfitting or forgetting general knowledge. | Small, highly specialized KB where latency must be minimal and updates are infrequent. |

**4. Avoid common traps**

- Don’t assume “more data = better” – quality and relevance matter more than sheer volume.  
- Beware of “hallucination”: fine‑tuned models can still fabricate facts if not properly supervised.  
- Neglecting index refresh in RAG leads to stale answers; plan a schedule.

**5. Sanity‑check & communicate**

Walk the customer through the table, ask follow‑up questions about their update cadence and compliance needs, then recommend:

1. **Start with RAG** – it gives the best balance for most internal KBs.  
2. If latency or offline use is critical, consider a lightweight fine‑tuned model on a subset of high‑impact documents.

End by outlining the implementation steps: vectorize docs → build index → integrate prompt template → monitor drift. This structured walk keeps the decision transparent and actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
