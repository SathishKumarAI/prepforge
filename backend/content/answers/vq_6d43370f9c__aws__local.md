---
qid: vq_6d43370f9c__aws__local
question: Why is data cleansing so important?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 366
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:56:14-05:00'
sources: []
---

**Why Data Cleansing Matters**

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*

### Situation
In my last role as a data engineer for an e‑commerce platform, we launched a recommendation engine that fed 5 M daily users. Early analytics showed a 12 % drop in click‑through rate (CTR) after the first week.

### Task
I was tasked to investigate the performance dip and restore user trust in our AI model.

### Action
1. **Root‑Cause Analysis** – Using Athena & Redshift, I compared raw logs vs. processed features; discovered 18 % of product SKUs had missing or stale attributes (price, category).  
2. **Cleansing Pipeline** – Built an automated Spark job on EMR that:
   * Validates schema and removes duplicates (`dedupe` UDF)  
   * Imputes missing values with median per category (S3 bucket as cache)  
   * Flags outliers (> 3σ) for manual review  
3. **Governance** – Implemented Glue Data Catalog to enforce data quality rules; set up CloudWatch alerts.

### Result
After deployment, CTR rebounded to 23 % (+11 pp), and model accuracy improved from 0.68 to 0.81 AUROC. The cleansing job cost <$200/month versus a projected $1.5k loss per day from incorrect recommendations.

> **Bar‑raiser cue:** I owned the issue, dove deep into data artifacts, quantified impact with clear metrics, and learned that proactive quality gates are cheaper than reactive fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
