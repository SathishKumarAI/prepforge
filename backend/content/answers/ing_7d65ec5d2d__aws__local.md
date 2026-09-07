---
qid: ing_7d65ec5d2d__aws__local
question: 'Explain: Workflows vs LangGraph — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 473
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:55-05:00'
sources: []
---

**Situation**  
While building a conversational AI product for a fintech client, I had to decide between two orchestration frameworks: **Workflows (AWS Step Functions)** and **LangGraph (LlamaIndex’s graph‑based approach)**. The goal was to deliver a 30 % faster response time while keeping cost < $1M/yr.

**Task**  
Implement an end‑to‑end reasoning pipeline that can dynamically choose between retrieval, generation, and external API calls, with observability and fault tolerance.

**Action**  
I mapped the problem onto AWS services:  
- **Step Functions** for stateful orchestration (retry logic, parallel branches).  
- **Amazon Bedrock** (LLM) + **Amazon Kendra** (retrieval) as compute nodes.  
- **Lambda** for lightweight data enrichment and API calls.  
For LangGraph, I would have used LlamaIndex’s `Workflow` class with custom callbacks, but it lacked native integration with CloudWatch metrics and didn’t support parallel execution out of the box.

I chose **Step Functions** because:  
1. *Customer Obsession* – It gives end‑to‑end visibility; we can surface latency per state to customers in real time.  
2. *Dive Deep* – We could instrument each task, capture `maxConcurrency` and `timeout`, then tune the model’s context window size.  
3. *Bias for Action* – Quick rollback by rewiring a single state; no redeploy of the entire graph.

**Result**  
- Response latency dropped from 2.8 s to **1.6 s** (43 % improvement).  
- Cost fell to $840k/yr, 16 % below budget.  
- SLA 99.9 % achieved; error rate < 0.02 %.  

**Reflection**  
I learned that while LangGraph is elegant for rapid prototyping, enterprise scale demands built‑in observability and managed retries—something Step Functions delivers. Future iterations will experiment with **Amazon Managed Grafana** dashboards to surface state metrics directly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
