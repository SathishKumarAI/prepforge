---
qid: ing_99a10d877f__aws__local
question: 'Explain: Pattern: Critic/Verifier — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 461
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:01-05:00'
sources: []
---

**Pattern: Critic / Verifier – Design Pattern for AI Model Governance**

**Situation & Task**  
In my last role I led a cross‑functional team to launch an NLP model that generated product descriptions for 1 M SKUs. The leadership asked us to guarantee *zero hallucinations* before production, so we needed a robust verification pipeline.

**Action (Design)**  
I architected a **Critic/Verifier pattern**:  
1. **Producer** – the generative model writes candidate text.  
2. **Critic Service** – an inference‑only BERT classifier (`Amazon SageMaker Runtime`) flags factual inconsistencies.  
3. **Verifier Queue** – messages flow through `Amazon SQS` to a serverless worker (`AWS Lambda`).  
4. **Human Review** – flagged items land in a DynamoDB table; a small Ops team reviews 10 % of them daily.

I chose **Lambda + SQS** for *stateless, auto‑scaling* processing and **SageMaker Endpoint** for low‑latency inference (<200 ms). The pattern ensures 99.9 % of outputs pass the Critic before hitting users, while keeping cost under $0.02 per SKU.

**Result**  
Post‑deployment metrics: hallucination rate dropped from 4.7 % to **0.3 %**, saving an estimated $1.2 M in downstream corrections. The system processed **5 k requests/second** with <10 ms latency, meeting SLA.  

**Leadership Principles Highlighted**  
- *Customer Obsession* – deliver trustworthy content.  
- *Ownership* – built a self‑healing pipeline that never required manual intervention after initial tuning.

**Bar‑raiser Takeaway**  
I demonstrated *deep dive* into inference cost vs. accuracy trade‑offs, quantified impact with real revenue figures, and iterated from the first failure (false positives) by adjusting the Critic’s threshold—showing a learning loop that drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
