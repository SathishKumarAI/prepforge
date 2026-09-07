---
qid: ing_9d8be15917__faang__local
question: An enterprise customer on Azure wants the model to "know our business."
  Prompting, RAG, or fine-tuning - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 510
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:50:30-05:00'
sources: []
---

**Clarify**  
You’re being asked to advise an Azure‑based enterprise on the best way for its LLM to “know” internal business data—whether via prompting, Retrieval‑Augmented Generation (RAG), or fine‑tuning. Key assumptions:  
- The model must stay compliant with Azure’s security & governance policies.  
- Data volume is moderate (hundreds of KB–few MB).  
- Response latency and cost are critical.  

**Approach**  
1. **Assess data sensitivity & size.**  
2. **Map use‑case requirements:** real‑time accuracy vs. batch inference, need for explainability, update frequency.  
3. **Weigh Azure services:** OpenAI fine‑tuning (Azure OpenAI Service), Cognitive Search + RAG, or prompt engineering with structured prompts.  

**Depth**  
- *Prompting* is cheapest and fastest but limited by token budget; best when data is static and can be encoded in a few examples.  
- *RAG* (Azure Cognitive Search + embeddings) offers up‑to‑date answers without model weight changes, scales linearly with data size, and preserves the base model’s safety filters. Complexity: O(log N) search + token cost per response.  
- *Fine‑tuning* yields higher accuracy for domain‑specific jargon but incurs training time, governance overhead (audit logs), and may violate Azure policy if private data is uploaded to OpenAI. Use only when the model must generate highly specialized language or handle many edge cases.  

**Edge Cases**  
- Extremely large corpora (>10 GB) make fine‑tuning impractical; RAG still works but search latency rises.  
- Regulatory constraints that forbid sending raw business data outside Azure block fine‑tuning.  
- If the model must generate new content (e.g., proposals), fine‑tuning may be required to capture style nuances.  

**Optimize & Communicate**  
Recommend starting with **RAG**: it balances freshness, compliance, and cost while leveraging Azure’s managed search. If later metrics show a need for deeper domain fluency, proceed to *fine‑tune* the base model on a vetted subset of data, ensuring all Azure policy checks pass. Explain trade‑offs in a concise slide deck—highlighting latency, cost per inference, governance, and future scalability—to guide stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
