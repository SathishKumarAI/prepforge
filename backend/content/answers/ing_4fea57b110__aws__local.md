---
qid: ing_4fea57b110__aws__local
question: 'Explain: Study map — Forward Deployed Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 433
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:25:31-05:00'
sources: []
---

**Situation & Task**  
At my previous role, I was asked to build a *Study Map*—an interactive knowledge graph that surfaced the most relevant research papers for new AI projects. The goal was to reduce literature‑search time by **70 %** and increase cross‑team adoption of best practices.

**Action**  
I took full ownership:  

1. **Data ingestion & NLP** – Scraped arXiv, ACL Anthology, and internal repo using AWS Glue (ETL) and Amazon SageMaker for a transformer model that tags papers by topic and citation impact.  
2. **Graph storage** – Deployed Neptune as a fully‑managed graph database; used Gremlin queries to surface “next‑step” papers with an average latency < 200 ms.  
3. **API & UI** – Built a REST API on API Gateway + Lambda (Python) and a lightweight React front end hosted on S3+CloudFront, ensuring 99.9 % availability.  
4. **Cost control** – Leveraged Spot Instances for SageMaker training and reserved Neptune capacity; total monthly spend stayed under $2k.

**Result**  
Within three months, teams reported a **73 % reduction in research time**, leading to an extra 5–6 sprints of product development. Adoption rose from 10 % to 68 % of new AI projects.  

**Reflection**  
I learned that *Bias for Action* and *Dive Deep* are inseparable: rapid prototyping exposed latency bottlenecks, prompting me to switch from single‑node Neptune to a multi‑AZ cluster—an architectural pivot that preserved SLA while keeping cost low.

---

> **Bar‑raiser check:** Demonstrated ownership, deep technical design (Neptune + SageMaker), quantified impact (73 % time savings, 68 % adoption), and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
