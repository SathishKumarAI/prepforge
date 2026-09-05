---
qid: ing_50c6d216d2__star__local
question: 'Explain: Behavioural: tell me about a time you drove a significant result
  through ambiguity, and a time you were wrong.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 460
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:50-05:00'
sources: []
---

**Situation (Ambiguity)**  
At my last company we were launching a new AI‑driven recommendation engine, but the product team had no clear KPI—just vague “improve engagement.” The data pipeline was fragmented across three microservices and our model was still in prototyping mode.

**Task**  
Define a measurable goal, unify the data flow, and deliver a working prototype within two months to prove value.

**Action**  
I convened a cross‑functional squad, mapped the data lineage with Apache Airflow DAGs, and introduced a single event stream via Kafka. I chose a LightGBM model because of its speed on sparse features and set up A/B testing in production using feature flags. I also wrote a custom dashboard in Grafana to track CTR and revenue lift in real time.

**Result**  
Within 60 days the recommendation engine increased click‑through rate by 27 % and contributed an extra $1.2 M in monthly revenue. The success turned the vague engagement goal into a concrete metric, and we adopted this pipeline for future AI projects.

---

**Situation (Being Wrong)**  
During a migration to a new NLP platform I assumed that switching from spaCy to Hugging Face Transformers would automatically improve sentiment accuracy because of higher model capacity.

**Task**  
Validate the performance gain before fully integrating the new library into our production pipeline.

**Action**  
I built a side‑by‑side evaluation using the same labeled dataset, ran both models on a 10k sample, and compared F1 scores. I also measured inference latency on our target hardware.

**Result**  
The Transformers model actually underperformed (F1 = 0.68 vs spaCy’s 0.74) and was twice as slow, breaking our real‑time constraints. I reverted to spaCy, documented the findings in a post‑mortem, and instituted mandatory benchmark tests for future library switches. This taught me that higher capacity doesn’t always mean better fit for production needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
