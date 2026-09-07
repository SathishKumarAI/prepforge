---
qid: ing_7e2ec9e4e5__aws__local
question: When would you choose RAG vs long-context stuffing vs fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 495
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:35-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I was asked to build an AI‑driven compliance assistant that could answer regulatory questions from users in real time. The product needed 99.9 % uptime, sub‑200 ms latency, and cost ≤ $0.01 per query.

**Action (RAG vs Long‑Context vs Fine‑Tuning)**  
I evaluated three strategies:

| Strategy | When to pick it | Key AWS services | Trade‑offs |
|----------|-----------------|------------------|------------|
| **Retrieval‑Augmented Generation (RAG)** | High knowledge drift, frequent policy changes | Bedrock + Kendra for vector search | Low compute per query; data freshness depends on index refresh. |
| **Long‑Context Stacking** | One or few static documents, low latency needed | Bedrock with GPT‑4o, Lambda to concatenate | Latency grows linearly; risk of exceeding token limits. |
| **Fine‑Tuning** | Stable domain, custom style required | SageMaker Neo + Bedrock | Highest upfront cost and maintenance; slower updates. |

I chose **RAG** because the compliance docs were updated weekly. I built a Kendra index (cost ≈ $0.05/query) and fed top 5 snippets to Bedrock GPT‑4o (≈ $0.003/query). This delivered ~95 % accuracy on our test set and kept latency < 180 ms.

**Result**  
The system achieved **99.9 % availability** and reduced operational cost by **60 %** compared with a fine‑tuned model. I documented the decision matrix, enabling the team to switch to long‑context for static FAQs when needed.

**Leadership Principles Highlighted**  
- *Customer Obsession* – prioritized user latency & accuracy.  
- *Ownership* – designed end‑to‑end pipeline and monitored cost/latency dashboards.  
- *Dive Deep* – quantified trade‑offs with real AWS pricing data.  

This approach demonstrates the bar‑raiser’s focus on measurable impact, technical depth, and continuous learning from production metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
