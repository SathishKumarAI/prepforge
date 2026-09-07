---
qid: ing_229c906781__aws__local
question: 'Explain: So there''s there''s a hierarchy of tables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 364
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:54-05:00'
sources: []
---

**Situation & Task**  
I was hired by an e‑commerce startup to design the data layer for their recommendation engine. Their existing schema had flat product catalogs and user logs; it couldn’t support multi‑level category hierarchies or dynamic brand–style relationships needed for personalized suggestions.

**Action – Design**  
1. **Schema**: Created a *Category* table (id, parent_id) to model arbitrary depth using adjacency lists, a *Product* table linked to the deepest leaf category, and a *BrandStyle* cross‑reference table for brand‑specific style tags.  
2. **ETL**: Built an AWS Glue job that reads raw logs from S3, normalizes them into `user_event` fact tables, and writes back to Redshift.  
3. **ML Pipeline**: Leveraged SageMaker training jobs on the normalized data, storing feature vectors in Amazon DynamoDB for low‑latency inference via a Lambda edge function.  

**Result**  
- Query latency dropped from 2 s to <200 ms (95th percentile).  
- Recommendation click‑through rate increased by **18%** within two weeks of deployment.  
- Cost per training job fell 32% by moving to Spot instances and using Redshift Spectrum for on‑demand analytics.

**Reflection & Ownership**  
I iterated the schema after observing a 12 % data skew; adding materialized paths eliminated that bottleneck. The experience reinforced that *ownership* means continuously refining architecture even post‑launch, while *Dive Deep* ensures every metric informs design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
