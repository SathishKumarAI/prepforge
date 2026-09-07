---
qid: ing_2bde4ec9db__aws__local
question: Which retrieval metrics would you use - recall@k, MRR, nDCG - and when does
  each matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 511
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:16-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built an enterprise search platform for a SaaS retailer (10M users). We needed to choose the right retrieval metrics to evaluate our ranking algorithms before launching the new AI‑driven recommendation engine.

**Action – Metric Selection**  
I mapped each metric to business impact and used Amazon’s *Customer Obsession* and *Ownership* principles:

| Metric | When it matters | AWS services & design |
|--------|-----------------|-----------------------|
| **Recall@k** | Measuring coverage for “high‑value” items (e.g., top‑10 product bundles). It tells us how many relevant results appear in the first k. I used *Amazon OpenSearch* with a custom relevance pipeline, storing click logs in *S3* and aggregating recall nightly via *AWS Glue*. |
| **MRR (Mean Reciprocal Rank)** | When we care about the rank of the **first** relevant item – critical for “quick‑answer” queries. I implemented MRR calculation in *Amazon SageMaker* notebooks, feeding predictions from a fine‑tuned BERT model. |
| **nDCG** | For overall ranking quality where higher ranks are more valuable (e.g., search results on the homepage). I used *Kinesis Data Streams* to ingest real‑time click data and compute nDCG in *AWS Lambda* with a 5‑minute window, feeding dashboards in *QuickSight*. |

I chose **Recall@10** for product bundle queries, **MRR** for FAQ bots, and **nDCG@20** for the homepage search.

**Result**  
After deploying these metrics, we iterated on our ranking model 3× faster. Recall@10 improved from 0.42 to 0.68 (38% lift), MRR rose 15%, and nDCG@20 increased 12%. The platform’s conversion rate grew 7%, translating to ~$1.2M incremental revenue in Q4.

**Reflection**  
The key learning: pick metrics that align with user intent, not just algorithmic beauty. By tying each metric to a concrete business outcome, we maintained *Ownership* over the product and delivered measurable results—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
