---
qid: ing_7e2ec9e4e5__faang__local
question: When would you choose RAG vs long-context stuffing vs fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 554
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:38:33-05:00'
sources: []
---

**Clarify**  
You’re deciding between three strategies for feeding knowledge to a LLM: Retrieval‑Augmented Generation (RAG), *long‑context stuffing* (concatenating many tokens into one prompt), and fine‑tuning the model on domain data. Key assumptions:  
- **Data size & freshness** – is new content arriving frequently?  
- **Latency requirements** – can you afford a retrieval round‑trip?  
- **Deployment constraints** – do you have GPU/TPU for training, or only inference‑only access?  
- **Explainability needs** – must the model cite sources?

**Approach**  
1. List use‑case priorities (accuracy, up‑to‑date knowledge, speed).  
2. Map each priority to a strategy’s strengths/weaknesses.  
3. Pick the one that satisfies the most critical constraints; fall back to hybrid if needed.

**Depth**  
| Strategy | Best Use | Pros | Cons |
|---|---|---|---|
| **RAG** | Dynamic knowledge, frequent updates, source‑traceable answers | No re‑training; lightweight inference; sources can be shown. | Retrieval latency; index maintenance; potential hallucination if docs poor. |
| **Long‑context stuffing** | One‑shot generation over fixed corpus (e.g., a long policy document) | Simple pipeline; no external retrieval; model sees all context at once. | Token limit (~8k–32k); expensive compute per inference; static knowledge. |
| **Fine‑tuning** | Domain‑specific style/terminology, high accuracy on niche tasks | Model internalizes patterns; no runtime overhead. | Training cost & time; data drift requires re‑training; black‑box. |

**Edge cases**  
- *High data velocity*: RAG outperforms both stuffing and fine‑tuning.  
- *Strict latency*: long‑context may be too slow, fine‑tune is fastest but stale.  
- *Regulatory compliance*: need auditable source → RAG wins.

**Optimize & Communicate**  
Explain the trade‑off diagram to stakeholders: “If we value up‑to‑date facts and explainability, go RAG; if inference speed is paramount and knowledge is static, fine‑tune; otherwise use long‑context for a quick prototype.” Highlight that hybrid approaches (e.g., fine‑tuned base + RAG) can capture the best of both worlds. This structured narrative demonstrates clear reasoning, technical depth, and practical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
