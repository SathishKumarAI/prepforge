---
qid: ing_447243f5cd__aws__local
question: 'Explain: A customer 10x''d their indexed documents and reports answer quality
  "got noticeably worse." Drive the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 526
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:00-05:00'
sources: []
---

**Situation & Task**  
A SaaS client using our document‑search API reported that after a **10× increase in indexed PDFs and internal reports**, their query accuracy dropped from 93 % to 77 %. They were about to roll back the new ingestion pipeline.

> *Leadership Principles:* **Customer Obsession** – we must solve this quickly; **Dive Deep** – investigate root causes rigorously.  

---

### Action (Investigation & Fix)

| Step | What I did | Why it mattered |
|------|------------|-----------------|
| 1️⃣ **Data audit** | Exported query logs, hit‑rate stats, and index shard health from CloudWatch and Elasticsearch metrics. | Identified that the “content‑vector” field was missing for ~18 % of new docs due to a recent bulk‑load script error. |
| 2️⃣ **Root‑cause analysis** | Reviewed the ingestion Lambda (Python 3.11) logs; discovered a race condition in `s3.get_object()` that truncated large files, leading to malformed embeddings. | Pinpointed exact code path and affected documents. |
| 3️⃣ **Remediation** | Updated the Lambda to use S3 transfer acceleration + multipart download; added retry logic with exponential back‑off. Deployed a new **SageMaker endpoint** (t2.medium) for on‑the‑fly embedding of missing vectors. | Restored full document integrity and vector quality. |
| 4️⃣ **Validation & rollback plan** | Ran A/B test: 500 random queries before/after fix; accuracy jumped to 92 %. Automated rollback trigger if <90 % achieved. | Ensured confidence without manual intervention. |

---

### Result

- **Accuracy restored to 92 %** (↑15 % vs baseline).  
- **Latency down 12 ms** per query after removing partial vectors.  
- **Cost impact:** $0.02 extra/month for SageMaker endpoint; saved ~$1,200/year in potential churn from dissatisfied customers.

---

### Bar‑raiser Takeaway

- Demonstrated *ownership* by taking the investigation end‑to‑end.  
- Showed *depth* (Dive Deep) with metrics, logs, and a reproducible test plan.  
- Quantified impact (accuracy %, cost).  
- Learned: always validate bulk ingestion pipelines against size thresholds; implement automated health checks to catch regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
