---
qid: ing_a3c682cbce__think__local
question: When would you fine-tune a model instead of using RAG or prompt engineering
  - and if you do fine-tune, LoRA or full fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 465
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:54:22-05:00'
sources: []
---

**1️⃣ Clarify the problem & constraints**  
- *What is the task?* (e.g., domain‑specific QA, generation style, compliance)  
- *Data availability:* size, quality, labeling effort.  
- *Latency / deployment limits.*  
- *Regulatory or privacy rules (data can’t leave premises).*

**2️⃣ Pick a mental model: “Trade‑off triangle”**  
| Factor | RAG | Prompt‑engineering | Fine‑tune (LoRA vs full) |
|--------|-----|--------------------|--------------------------|
| Flexibility | high (updates via datastore) | low (hard to change) | medium (parameter updates) |
| Data cost | none for model, need corpus | none | requires labeled data |
| Latency | datastore lookup + model | pure inference | inference only |
| Deployment size | base model + vector store | tiny | larger if full‑fine |

**3️⃣ Step‑by‑step reasoning**  
1. **If you can solve with prompts or RAG, try them first** – cheaper and easier to iterate.  
2. **Check data volume:** < 10k labeled examples → LoRA (parameter efficient).  
3. **Need strong domain shift or safety constraints** → full fine‑tune on a secure cluster.  
4. **Deployment environment:** if you can host a 30‑B model + vector store, RAG; if only a single GPU, LoRA.  

**4️⃣ Common pitfalls to avoid**  
- *Assuming “more data = better”*: quality matters more than quantity.  
- *Forgetting that RAG still needs a good retrieval index.*  
- *Over‑fine‑tuning on noisy labels → catastrophic forgetting of base knowledge.*

**5️⃣ Sanity check & verbalize**  
- Summarize the chosen path: “We’ll use LoRA fine‑tune because we have 8k labeled domain examples, need sub‑second inference, and can’t expose data to external APIs.”  
- Confirm with stakeholders that latency, size, and compliance constraints are met.  

Repeat this loop whenever new constraints emerge or data grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
