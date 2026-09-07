---
qid: ing_6e12ad58c3__aws__local
question: 'Explain: Multi-Head Attention — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 409
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:40-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a team that built an on‑prem LLM for a financial client. The model had to process 10 M documents per day while staying under $1 M/yr in inference cost. I needed to explain and optimize *Multi‑Head Attention* (MHA) so the architects could justify the compute budget.

**Action**  
I dissected MHA into three linear projections per head, a scaled dot‑product attention, and a concatenation step. Using AWS **SageMaker Neo** + **Inferentia** I benchmarked 8‑head vs. 12‑head configs: 12 heads reduced perplexity from 23.4 to 20.1 (≈14 % relative error drop) while keeping GPU utilization at 65 %. I added a *sparse attention* variant (Sparse Transformer) that cut FLOPs by 40 % with negligible accuracy loss, enabling us to stay within the cost envelope.

I documented the trade‑offs—more heads → better expressivity but higher memory; sparsity → lower latency but requires careful checkpointing. The architecture was deployed on **ECS** with spot instances, yielding a 30 % reduction in operational spend versus baseline.

**Result**  
The client saw a 20 % lift in downstream NLP accuracy (e.g., entity extraction), a 35 % drop in inference latency, and stayed under the $1 M/yr budget.  

**Leadership Principles**  
- **Customer Obsession**: Tailored MHA design to meet strict latency & cost constraints.  
- **Ownership / Dive Deep**: Took end‑to‑end responsibility for model fidelity, performance, and economics, iterating until metrics met targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
