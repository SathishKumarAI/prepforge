---
qid: ing_15095447c6__aws__local
question: 'Explain: SQL generation & self-correction — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 573
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:12:42-05:00'
sources: []
---

**Situation (S)**  
In my last role I led a team that built an internal “Text‑to‑SQL” agent for our data lake. The goal was to let analysts ask natural‑language questions and get instantly accurate results while keeping the data quality high.

**Task (T)**  
We had to design a system that could generate SQL from free text, validate it against schema constraints, execute safely on Redshift, and auto‑correct errors with minimal latency (< 1.5 s).

**Action (A)**  
I scoped requirements:  
* **Model** – fine‑tuned an Llama‑2‑7B on 200k QA pairs; added a lightweight “validation layer” that checks for table/column existence and SQL injection patterns.  
* **Pipeline** – implemented as a Lambda chain:  
  * Lambda 1 (Text → Prompt) → Bedrock inference → Lambda 2 (Post‑process & validate).  
  * If validation fails, the agent re‑generates with a “fix” prompt; we cap retries at two to avoid runaway costs.  
* **Execution** – SQL is routed through Redshift Data API via a short‑lived IAM role, ensuring no direct credentials are exposed.  
* **Observability** – CloudWatch metrics (generation latency, validation pass rate) feed into an SNS alert for > 10 % failure.  

I also introduced a “self‑learning” loop: failed queries were logged and used to augment the training set quarterly.

**Result (R)**  
Within 3 months we saw a **32 % drop in analyst query time** (from 8 s to 5 s) and a **27 % reduction in manual error corrections**. Cost stayed below $0.03/query thanks to Bedrock’s pay‑per‑token model, and the Lambda architecture kept us under a 99.9 % SLA for query generation.

---

### Leadership Principles  
* **Customer Obsession** – Delivered instant answers that cut analysts’ work time dramatically.  
* **Ownership / Dive Deep** – Took full responsibility from data prep to error handling, iterating on the model until validation hit > 95 %.  

### Bar‑raiser Checklist  
* Demonstrated ownership by owning end‑to‑end pipeline and cost control.  
* Showed deep dive through precise latency metrics, failure‑mode analysis, and iterative learning loop.  
* Quantified impact with concrete percentages.  
* Highlighted lessons: initial model produced 18 % invalid SQL; after adding the validation layer and re‑generation prompt we achieved > 95 % success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
