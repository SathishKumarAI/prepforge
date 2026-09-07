---
qid: ing_8798f14788__aws__local
question: 'Explain: Q42: Design an evaluation system for comparing two LLMs on open-ended
  tasks.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 474
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:49-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a production‑grade evaluation system that compares two large language models (LLMs) on open‑ended tasks—e.g., story generation or policy drafting—so we could decide which model delivers higher business value.

**Action – Design & Implementation**  
1. **Data pipeline**: Use **Amazon S3** for raw prompts and outputs, **AWS Glue** to parse JSONL, and **Amazon Athena** for ad‑hoc scoring queries.  
2. **Scoring engine**: Implement a multi‑metric scorer (BLEU, ROUGE, perplexity, and a custom “relevance” score from a fine‑tuned BERT) as a **Lambda@Edge** function triggered on S3 upload. This keeps latency low (<200 ms per batch).  
3. **Aggregation & analytics**: Store aggregated scores in **Amazon Timestream** for time‑series analysis, and visualize trends with **QuickSight** dashboards that automatically flag statistically significant differences (t‑test, p<0.01).  
4. **Cost control**: Use **SageMaker Processing Jobs** only for heavy model inference; batch the calls to avoid per‑token charges, and schedule Lambda invocations during off‑peak hours to leverage spot pricing.

**Result**  
The system processed 50 k prompts daily with an average cost of $0.02 per prompt—30% cheaper than our legacy on‑prem setup. We detected that Model A outperformed Model B by 12% in ROUGE and 8% in relevance, leading to a 5% lift in downstream user satisfaction scores (measured via A/B testing).  

**Reflection & Bar‑Raiser Lens**  
I took full ownership of the end‑to‑end pipeline, dove deep into metric selection to avoid “bandwagon” biases, quantified impact through clear business KPIs, and learned that early integration with Athena reduced debugging time by 40%. This aligns with **Customer Obsession** (accurate metrics → better user experience) and **Ownership** (complete responsibility from data ingestion to dashboard).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
