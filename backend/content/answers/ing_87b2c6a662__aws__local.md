---
qid: ing_87b2c6a662__aws__local
question: 'Explain: Generative AI with Large Language Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 388
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:03-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the rollout of a *generative‑AI* service that powers our internal knowledge base chat bot. The goal was to cut support ticket volume by 30 % while keeping latency under 500 ms for 99.9 % of requests.

**Action**  
I scoped the problem with **Customer Obsession** and **Dive Deep**:  
1. Collected baseline metrics (average ticket cost $45, current response time 1.2 s).  
2. Designed a stateless architecture on **Amazon SageMaker** for model hosting and **API Gateway + Lambda** for request routing—ensuring horizontal scalability with auto‑scaling policies.  
3. Implemented a *prompt‑engineering* layer that reduces token usage by 25 % without degrading answer quality, saving $0.04 per inference (≈ $1.2M annually).  
4. Added real‑time monitoring via **CloudWatch** and A/B testing to iterate on prompt templates.

**Result**  
After three months:  
* Ticket volume dropped 32 %, exceeding the target.  
* Response latency averaged 420 ms, with a 99.95 % SLA.  
* Cost per inference fell from $0.08 to $0.06, yielding an annual savings of ~$1.5M.  

**Reflection (Bar‑raiser lens)**  
I owned every layer—from data ingestion to deployment—ensuring end‑to‑end visibility. By diving into token‑level logs I identified a bottleneck and applied a lightweight cache in **ElastiCache**, illustrating my bias for action and continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
