---
qid: ing_192f998bce__aws__local
question: Walk me through how you'd take an AI feature from idea to production in
  two weeks. What does v1 actually look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 608
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:05-05:00'
sources: []
---

**S – Situation**  
A product manager pitched a “smart FAQ” chatbot for our help‑desk portal that could answer 30 % more user queries without human intervention. We had two weeks to ship v1.

**T – Task**  
Build an MVP that can ingest FAQ content, generate concise answers with GPT‑4, and surface them in the web UI, while keeping latency <2 s and cost <$0.05 per request.

**A – Action**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1️⃣ Data prep | **S3 + Glue** | Extract FAQ JSON → clean → store in Parquet for fast access. |
| 2️⃣ Model | **SageMaker Endpoint (Inference)** with a pre‑tuned `gpt-4o-mini` model | Low‑latency, auto‑scaling; managed by SageMaker to reduce ops overhead. |
| 3️⃣ Orchestration | **Step Functions** → Lambda | Handles request routing, caching via **ElastiCache Redis**, and fallback logic. |
| 4️⃣ API | **API Gateway + Lambda Authorizer** | Exposes `/faq/answer`; throttles at 500 RPS, ensures secure access. |
| 5️⃣ Monitoring | **CloudWatch + X-Ray** | Capture latency, error rates; auto‑alert on >2 s or >1% errors. |
| 6️⃣ Cost control | Lambda concurrency limits & SageMaker *on-demand* pricing | Keeps spend < $120/week. |

**R – Result**  
- Delivered v1 in 12 days.  
- Real‑time latency: 1.8 s (avg).  
- Accuracy: 78 % correct answers (validated against 200 manually scored queries).  
- Cost: $95/ week, below the $120 budget.  

---

### Bar‑raiser cues

| Cue | Why it matters |
|-----|----------------|
| **Ownership** – I owned end‑to‑end design and hand‑rolled a rollback plan for model drift. |
| **Dive Deep** – Ran latency diagnostics with X‑Ray; discovered a 300 ms cache miss that I fixed in 2 hrs. |
| **Quantified Impact** – Forecasted 30 % query reduction → $10k/month savings on support staff. |
| **Learning from Failure** – Post‑launch, we saw a spike in ambiguous queries; added a fallback “please clarify” flow and updated the FAQ dataset. |

> *Customer Obsession* & *Ownership*: I kept user experience at the core by iterating fast and validating against real users before launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
