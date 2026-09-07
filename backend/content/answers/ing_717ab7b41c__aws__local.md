---
qid: ing_717ab7b41c__aws__local
question: 'Explain: Linear vs. Agentic RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 391
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:04-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to add real‑time knowledge retrieval to our chatbot platform. The business asked whether we should use *Linear Retrieval Augmented Generation* (RAG) or an *Agentic RAG* that can query external APIs and decide what data to fetch.

**Action – Technical Design**  
I scoped the requirements: low latency (<200 ms), 99.9% availability, and cost ≤ $0.02 per request.  
- **Linear RAG**: Lambda + OpenSearch (vector store) → GPT‑4 via Bedrock. Simple, but each query requires a single pass over the index.  
- **Agentic RAG**: Step‑function orchestrator that runs a *retrieval policy* in SageMaker (RL‑HF), calls external APIs (S3, DynamoDB, third‑party services) through API Gateway, and feeds aggregated facts back to Bedrock.  

I evaluated trade‑offs: Linear gave 1× speed but limited context; Agentic added ~30 ms latency but increased coverage by 45% on complex queries.

**Result**  
We piloted the Agentic design in a staged rollout. After 4 weeks, user satisfaction (NPS) rose from **68 to 82**, and answer accuracy improved by **32%** compared to Linear RAG. Operational cost grew only 12 %, within budget.  

**Reflection – Bar‑raiser Lens**  
I owned the end‑to‑end pipeline, dove deep into latency traces, quantified impact on NPS, and learned that a hybrid approach—using Linear for simple queries and Agentic for complex ones—maximizes both performance and value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
