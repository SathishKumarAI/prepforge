---
qid: ing_74ab21ed85__aws__local
question: 'Explain: Problem — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:41-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that had to expose a new recommendation engine (built with SageMaker) to multiple client apps—web, iOS and Android. Each platform had different latency tolerances and data‑format needs, yet we wanted a single source of truth for model inference.

**Action – API Gateway + Backend‑for‑Frontend (BFF)**  
I proposed an **API Gateway** fronting three **Lambda‑based BFFs**, one per client family.  
- **API Gateway** (REST/HTTP) handled throttling, auth (Cognito), and request validation.  
- Each **Lambda BFF** translated the generic request into the exact schema expected by SageMaker Runtime (`InvokeEndpoint`), added platform‑specific enrichment (e.g., user agent headers), and returned a client‑friendly JSON.  
- The SageMaker endpoint ran in an *Inference Cluster* with Auto Scaling, backed by *EFS* for shared model artifacts.

**Result**  
We cut the average end‑to‑end latency from 350 ms to **180 ms** (50 % improvement) and reduced operational overhead—each BFF was a single deployable unit, so updates were rolled out in minutes. Costs fell by **$12k/month** thanks to Lambda’s pay‑as‑you‑go model versus maintaining dedicated EC2 workers.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Tailored responses for each client platform.  
- **Ownership & Dive Deep**: I owned the end‑to‑end flow and dug into CloudWatch metrics to iterate on timeout and concurrency settings.  

**Bar‑raiser cues**  
- Demonstrated *ownership* by leading both architecture and implementation.  
- Showed *depth* through concrete performance numbers and cost analysis.  
- Learned from an early failure when the first BFF mis‑parsed a header; we added automated unit tests for schema validation, preventing regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
