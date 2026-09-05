---
qid: ing_d7c7059309__star__local
question: 'Explain: Resources — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 355
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:28-05:00'
sources: []
---

**Situation**  
At a media startup, our search feature was returning irrelevant results during a campaign that pushed 30 % more traffic. The click‑through rate dropped from 4.2 % to 1.9 %, hurting ad revenue.

**Task**  
I needed to overhaul the indexing pipeline and add a lightweight ML model so that query relevance reflected user intent without slowing response time below 200 ms.

**Action**  
I first profiled Solr’s request handling with *Solr Admin* and discovered the field cache was thrashing. I re‑indexed using a custom `solrconfig.xml` with `docValues=true` for high‑frequency fields, and enabled *sharding* across three cores to parallelize writes. For relevance, I trained a logistic regression model in scikit‑learn on click logs (features: term frequency, position, user location). The model output a score that I pushed into Solr via the `solrcloud` API as an extra field during indexing. Then I tuned the schema’s *copyField* directives to keep the original text and the ML score separate, allowing us to use the *function query* (`score() + 0.3*ml_score`) in the default search component.

**Result**  
After deployment, CTR rose from 1.9 % to 3.8 % (a 100 % lift), while average latency stayed at 180 ms. I learned that combining Solr’s distributed indexing with a lightweight ML inference layer can dramatically improve relevance without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
