---
qid: ing_1eb365f7d3__faang__local
question: 'Q2: When would you choose RAG over fine-tuning, and vice versa?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 486
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:56:22-05:00'
sources: []
---

**Clarify**  
You’re deciding between *Retrieval‑Augmented Generation* (RAG) and *fine‑tuning* a language model for an AI product that must provide up‑to‑date, domain‑specific answers.  
Assumptions to confirm:  

1. How current is the knowledge required?  
2. What volume of domain data exists?  
3. Are there regulatory constraints on model weights or inference latency?  

**Approach**  
- If data is **small, static, and privacy‑sensitive**, fine‑tune a base LLM.  
- If data is **large, frequently changing, or proprietary corpora** that you can index but not embed into weights, use RAG.  

**Depth**  
| Scenario | Why RAG? | Why Fine‑Tune? |
|----------|----------|----------------|
| Rapidly evolving domain (e.g., latest research papers) | Retrieval pulls fresh docs at inference time; no re‑train needed. | Re‑training would be costly and slow to incorporate new data. |
| Limited labeled data but abundant unstructured text | RAG can leverage large corpora via vector search without supervised signals. | Fine‑tuning needs enough examples for stable gradients. |
| Strong privacy / model‑weight restrictions | Retrieval keeps raw documents off the model; only embeddings are stored. | Fine‑tuning requires exposing all training data to the LLM vendor or storing updated weights locally. |
| Need deterministic, reproducible outputs | Fine‑tuned weights give consistent generation. | RAG introduces variability based on retrieved context. |

**Edge Cases**  
- *Latency*: RAG adds a retrieval hop; test with cache and batching.  
- *Hallucination*: Fine‑tuned models can still hallucinate; monitor for drift.  

**Optimize & Communicate**  
Explain trade‑offs clearly: “RAG gives agility but at the cost of an extra lookup layer, while fine‑tuning offers speed after training but requires data and compute.” Highlight that in practice we often combine both—fine‑tune a base LLM on core knowledge, then RAG for edge cases or frequent updates. This balanced strategy aligns with FAANG’s emphasis on scalable, maintainable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
