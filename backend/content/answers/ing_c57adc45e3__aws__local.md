---
qid: ing_c57adc45e3__aws__local
question: 'Explain: Pattern: Corrective RAG (CRAG) — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 433
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:23-05:00'
sources: []
---

**Corrective RAG (CRAG) – a retrieval‑augmented generation guardrail**

*Situation & Task:*  
At my last role I led the AI product that served 1 M daily users with real‑time legal document summarization. A spike in “red‑flag” queries—legal jargon misinterpreted by the LLM—caused compliance violations and a 12 % churn jump.

*Action (Design):*  
I architected **CRAG**, a two‑stage pipeline that *retrieves* relevant statutes from an encrypted S3 bucket, *filters* them through a lightweight regex/ML classifier on Lambda, then *injects* the vetted snippets into the LLM prompt.  
- **AWS services:** DynamoDB for policy store, Athena for quick statute lookups, SageMaker endpoint for the filter model, and Bedrock (Claude) for generation.  
- **Scalability & Availability:** Auto‑scaling Lambda + provisioned concurrency guarantees 99.95 % latency <200 ms; S3 bucket region replication ensures 99.9 % durability.  
- **Cost trade‑off:** Switching from on‑prem GPU inference to Bedrock cuts GPU hours by 70 %, saving ~$30k/month while keeping model quality.

*Result:*  
Post‑deployment, misinterpretation incidents dropped 94 %, churn fell below 2 %, and we achieved a 15 % lift in user satisfaction scores.  

**Leadership Principles:** *Customer Obsession* – protecting users from legal risk; *Ownership* – delivering end‑to‑end solution without hand‑offs.  
Bar‑raisers look for ownership depth, quantifiable impact, and lessons learned—CRAG’s iterative A/B tests taught us that a hybrid rule+ML filter outperforms pure ML in high‑stakes domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
