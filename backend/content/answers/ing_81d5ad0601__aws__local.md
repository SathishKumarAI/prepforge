---
qid: ing_81d5ad0601__aws__local
question: 'Explain: Agentic Filtering and Plan Revision — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:21-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an *Agentic Retrieval Augmented Generation (RAG)* system for our customer support chatbot. The goal was to reduce hallucinations by letting the model **filter** retrieved passages and **re‑plan** its answer generation in real time, while keeping latency under 200 ms.

**Action**  
1. **Agentic Filtering** – I designed a lightweight policy network that scores each candidate passage on relevance & factuality (using BERT embeddings + a learned confidence head). The top‑k passages are ranked; any below a threshold are dropped before the language model sees them, cutting hallucinations by 40 %.  
2. **Plan Revision** – After the initial generation, I implemented a *plan‑revision loop*: the output is parsed into sub‑tasks (e.g., “explain policy”, “provide example”), each re‑queried with updated prompts. This iterative refinement improved answer accuracy from 78 % to 92 % measured against a curated QA set.  
3. **AWS Stack** – Lambda for stateless filtering, Step Functions to orchestrate the plan loop, DynamoDB for caching passage scores, and SageMaker endpoints for the policy & LLM. Autoscaling was driven by CloudWatch metrics; we kept cost < $0.02 per request.

**Result**  
Latency stayed 180 ms avg; hallucination rate dropped 40 %; user satisfaction (NPS) rose from 68 to 81 in three months.  

**Reflection**  
I practiced *Ownership* by owning the end‑to‑end pipeline, *Dive Deep* by iterating on scoring thresholds, and *Bias for Action* by prototyping the loop within a sprint. The biggest failure was an over‑aggressive filter that removed useful context; we learned to weight factuality vs. completeness in the policy loss. This experience reinforced that true agentic control comes from lightweight, data‑driven modules that can be rolled back quickly—exactly what Amazon values when scaling AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
