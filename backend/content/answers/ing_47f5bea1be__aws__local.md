---
qid: ing_47f5bea1be__aws__local
question: 'Explain: You''re building a web-scale pretraining corpus (FineWeb-style).
  Walk me through the pipeline and how you decide whether each filter earns its place.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 486
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:10-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built a 200 TB web‑scale pretraining corpus for our next‑generation LLMs. The goal was to maximize data quality while keeping ingestion costs under $2M/yr.

**Action**  
1. **Ingest & Deduplication** – S3 + EMR Spark pipelines fetched 10 B URLs, deduplicated with a Bloom‑filter in DynamoDB, cutting size from 200 TB → 120 TB (40 % savings).  
2. **Filter Stack Design** – Each filter was a stateless Lambda that emitted metrics to CloudWatch. Filters:  
   * Language (>90 % English) – 30 % reduction, cost $0.03/GB.  
   * Content‑policy score (AWS Comprehend) – 15 % drop, saved future training bias costs.  
   * URL freshness (S3 lifecycle + CloudWatch alarms) – 10 % cut, ensured relevance.  
   * Robots.txt & crawl‑budget compliance – 5 % drop, avoided legal risk.  

   **Decision rule**: A filter earned a spot only if it reduced volume by ≥5 % or improved downstream perplexity by ≥1 %. We validated with a held‑out validation set and saw perplexity drop from 23 → 21.

3. **Scalability & Cost** – Autoscaling EMR clusters (10 m nodes) processed 5 TB/hr; spot pricing saved 35 %. The final pipeline cost $1.8M/yr, 25 % below budget.

**Result**  
Delivered a 120 TB corpus that lowered training cost by 30 % and improved model accuracy (BLEU +2 points).  

**Leadership Principles** – *Customer Obsession* (deliver better models), *Ownership* (own pipeline from ingestion to validation), *Dive Deep* (metric‑driven filter pruning).  

Bar‑raisers listen for ownership, quantified impact, depth of analysis, and learning from a failed filter that was later removed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
