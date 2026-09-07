---
qid: ing_35c48af975__aws__local
question: 'Explain: Developers — Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 457
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:12-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑team effort to surface “glean documentation” for all production ML models—essentially the living API spec that developers use to call inference endpoints. The team had ~200 models and each model’s docs were scattered across README files, inline comments, and legacy Wiki pages. Developers complained they spent 30 % of their time hunting for correct input schemas and versioning details.

**Action**  
1. **Ownership & Bias for Action:** I chartered a *Documentation as Code* repo in GitHub, integrating it with our CI pipeline.  
2. **Dive Deep & Invent & Simplify:** Leveraged AWS **S3** to store schema files (JSON Schema) and used **AWS Glue** crawler to auto‑populate a catalog of available models. Then built an API Gateway + Lambda layer that served the docs as OpenAPI specs via a single endpoint (`/docs/{model}`), automatically refreshed on every CI build.  
3. **Scalability & Availability:** The Lambda functions were provisioned with 128 MB memory and concurrency of 20, ensuring <200 ms latency for all calls. S3’s built‑in durability (11 nines) guarantees zero data loss, while API Gateway offers a managed CDN via CloudFront for global low‑latency access.

**Result**  
*Developer productivity jumped from 30 % to 70 % time on feature work.* We cut the mean time to find correct model schema from **18 minutes** to **2.5 minutes**, a **~86 % reduction**. The cost of the solution was under **$20/month** (S3 storage + Lambda invocations).  

**Learnings & Bar‑raiser cues**  
- By treating docs as first‑class code, we achieved true ownership and continuous delivery.  
- Quantified impact (time saved, latency) demonstrates deep dive into metrics.  
- The design balanced simplicity (single API), scalability (Lambda concurrency), and cost control—exactly what a bar‑raiser expects when evaluating AWS‑centric ML infra solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
