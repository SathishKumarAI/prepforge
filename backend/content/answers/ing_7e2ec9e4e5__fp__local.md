---
qid: ing_7e2ec9e4e5__fp__local
question: When would you choose RAG vs long-context stuffing vs fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 540
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:33:48-05:00'
sources: []
---

**When to pick Retrieval‑Augmented Generation (RAG), Long‑Context Stuffing, or Fine‑Tuning?**

| Goal | Core Problem Solved | Why It Works | When to Use |
|------|--------------------|--------------|-------------|
| **Fast, data‑driven answers on up‑to‑date facts** | The model’s static knowledge is stale. | RAG injects a *retrieval step*: the LLM sees a short prompt plus evidence retrieved from an external index. The answer is conditioned on both, so it can “borrow” new information without retraining. | When updates are frequent (news, product catalogs) or the domain is vast and you cannot afford to re‑train for every change. |
| **Deep reasoning over long documents** | LLM token limits truncate context, losing causal chains. | Long‑context stuffing keeps the entire source in the prompt; the model can attend to all tokens at once (or via hierarchical attention). No external retrieval needed; the answer is purely generative but grounded in the supplied text. | When a single document or small corpus must be fully understood (legal contracts, research papers) and you cannot rely on sparse retrieval snippets. |
| **Domain‑specific language style or policy** | The base model may misbehave or produce undesired jargon. | Fine‑tuning optimizes weights on in‑domain data; the model internalises new semantics, constraints, and style. It no longer needs external prompts to “remember” facts. | When you need consistent tone, compliance rules, or complex reasoning that depends on subtle domain conventions (medical diagnosis). |

**Non‑obvious insight:**  
RAG is *not* a replacement for fine‑tuning; it’s a *retrieval bridge*. Fine‑tuned models learn to generate from scratch, while RAG learns to *consult*. For tasks requiring both up‑to‑date facts and deep internal consistency (e.g., a chatbot that must adhere to company policy yet answer new product questions), a hybrid—fine‑tune the base on policy, then wrap it with RAG for factual updates—is often optimal.

In short:  
- **RAG** → *When data changes faster than training cycles.*  
- **Long‑context stuffing** → *When you need full document fidelity and can afford large prompts.*  
- **Fine‑tuning** → *When domain semantics or safety constraints must be baked into the model’s weights.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
