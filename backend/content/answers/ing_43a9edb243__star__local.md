---
qid: ing_43a9edb243__star__local
question: How would you evaluate answer quality for an answer engine, continuously
  and at scale?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 406
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:18-05:00'
sources: []
---

**Situation** – At my previous company I was responsible for the new AI‑powered FAQ engine that served over 5 M monthly users on a SaaS platform. After launching beta, our support team flagged that many answers were either irrelevant or too generic, and we needed an automated way to monitor quality without manual reviews.

**Task** – Build a continuous, scalable evaluation pipeline that scores each answer’s relevance, factual accuracy, and user satisfaction in real time, feeding back into the ranking model.

**Action** – I designed a multi‑signal system:  
1. *User interaction metrics* (click‑through, dwell time, up‑vote/down‑vote) collected via Mixpanel and stored in ClickHouse for low‑latency queries.  
2. *Automated QA checks* using a lightweight BERT classifier that flags factual inconsistencies against our knowledge base; it runs as a sidecar on each microservice.  
3. *Human‑in‑the‑loop sampling* – every 10,000 answers are randomly sampled for expert review in a JIRA workflow, with feedback parsed by an NLP engine to update the model’s loss function.  
We orchestrated this pipeline with Airflow and Kubernetes, using Prometheus alerts when quality scores dip below thresholds.

**Result** – Within three months we reduced user complaints by 42 % (from 8.3 % to 4.7 %) and increased overall satisfaction scores from 4.1 to 4.6/5. The automated pipeline cut manual review time by 70 %, freeing the content team to focus on high‑impact updates. I learned that combining behavioral signals, lightweight model checks, and periodic human oversight creates a robust quality loop at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
