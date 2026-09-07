---
qid: ing_6a86d3b079__faang__local
question: When do you fine-tune versus prompt-engineer versus use RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 495
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:42-05:00'
sources: []
---

**Clarify**  
*Problem:* Choose between fine‑tuning a model, engineering prompts, or leveraging Retrieval‑Augmented Generation (RAG) to satisfy a downstream task (e.g., answering domain‑specific queries).  
*Assumptions to confirm:*  
- Data volume & quality (labelled vs unlabelled).  
- Real‑time latency constraints.  
- Regulatory need for explainability.  
- Deployment budget and maintenance capacity.

**Approach**  
1. **Quantify data needs** – estimate how many examples are needed for fine‑tuning to reach target accuracy.  
2. **Profile latency & cost** – benchmark a prompt‑engineered baseline vs a RAG pipeline.  
3. **Risk assessment** – consider drift, hallucination, and compliance.

**Depth**  
- *Fine‑tune:* Requires ≥ 10k high‑quality labelled examples; training costs ~O(N·E) where N = params, E = epochs. Gives best performance when domain knowledge is highly specialized.  
- *Prompt‑engineering:* Zero‑shot/few‑shot with minimal data. Use chain‑of‑thought or instruction tuning; cost ≈ zero but accuracy limited to model’s pre‑training scope.  
- *RAG:* Keeps the base LLM frozen; retrieves relevant documents (via embeddings) and feeds them into the prompt. Complexity: O(D·log N) for retrieval + inference time. Good when knowledge is large, rapidly changing, or must be auditable.

**Edge Cases**  
- Tiny labelled set → fallback to RAG or prompt‑engineering.  
- Highly regulated domain → prefer RAG (auditable sources).  
- Latency‑critical app → lean on prompt‑engineering if performance acceptable.

**Optimize & Communicate**  
Start with a lightweight prompt baseline, measure MRR/accuracy. If shortfall > 10%, move to RAG; only fine‑tune when the task shows persistent domain gaps or legal constraints demand model determinism. Explain trade‑offs: *Fine‑tuning* = best accuracy but high cost and drift risk; *Prompt‑engineering* = low cost, fast iteration; *RAG* = balanced accuracy + explainability with moderate overhead. This structured narrative demonstrates clear decision logic and aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
