---
qid: ing_1eb365f7d3__think__local
question: 'Q2: When would you choose RAG over fine-tuning, and vice versa?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 481
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:43:52-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *Task*: Is it a one‑off query system or an evolving product?  
- *Data*: Do you have labeled examples for supervised learning?  
- *Latency*: Can your users tolerate a retrieval step plus generation, or do they need instant responses?  
- *Cost*: Consider storage/compute for indexing vs. GPU time for fine‑tuning.

**2️⃣ Adopt the “resource–benefit” framework**  
| Criterion | Retrieval‑Augmented Generation (RAG) | Fine‑Tuning |
|-----------|-------------------------------------|-------------|
| Data volume | Works with large, unlabelled corpora | Requires enough labeled data to avoid overfitting |
| Adaptability | Easy to add new docs on the fly | Needs retraining for updates |
| Explainability | Source documents are visible | Model weights opaque |
| Latency | Retrieval + generation (slower) | Single forward pass (faster) |
| Cost | Indexing & storage; inference cost per query | GPU hours for training, then cheap inference |

**3️⃣ Reason step‑by‑step**  
1. List the constraints from Step 1.  
2. Map each constraint to the table above.  
3. If *data scarcity* or *need for frequent updates*, lean RAG.  
4. If *high precision on a small, well‑defined domain* and *low latency*, lean fine‑tuning.

**4️⃣ Avoid common traps**  
- Don’t assume “more data = better” – unlabeled data in RAG can hurt if irrelevant.  
- Forget that RAG’s retrieval step may dominate latency for large indexes.  
- Overlook the fact that fine‑tuned models can still hallucinate; source documents help debug.

**5️⃣ Sanity‑check & verbalize**  
- Re‑state your decision: “Because we have limited labeled data and expect frequent content changes, RAG gives us up‑to‑date answers with minimal retraining.”  
- Ask a colleague to challenge each assumption—e.g., “What if latency becomes critical?” This forces you to re‑evaluate the trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
