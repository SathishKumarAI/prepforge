---
qid: ing_5e496c7c60__aws__local
question: How do you build a golden evaluation set for RAG without months of labelling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 449
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:51-05:00'
sources: []
---

**Situation & Task (S)**  
When launching a Retrieval‑Augmented Generation (RAG) model for our customer support bot, I was asked to create a *golden evaluation set* within two weeks—no room for months of manual labeling.

**Action (A)**  
I applied **Customer Obsession** and **Ownership** by building an automated pipeline:

1. **Seed the pool** – Scrape 10 k recent support tickets from S3, tag with Amazon Comprehend for intent & sentiment.
2. **Synthetic augmentation** – Use SageMaker’s *Data Wrangler* to generate paraphrases via a pre‑trained GPT‑4 model, then filter with a rule‑based confidence score (≥0.8).
3. **Active learning loop** – Deploy the RAG model on SageMaker Endpoint; collect top‑5 retrievals per query, let 200 QA pairs be auto‑scored by a custom metric (BLEU + relevance).  
4. **Human‑in‑the‑loop** – Only the lowest‑confidence 10 % are sent to a small annotator team for final validation—≈1 k labels.

**Result (R)**  
The pipeline produced 8 k high‑quality evaluation examples in 12 days, with an overall BLEU‑score of **0.73** vs. the baseline 0.58 (a 26% lift). Cost stayed under $2k by leveraging spot instances and S3 lifecycle policies.

**Reflection**  
I *dive deep* into model drift signals; when a spike in retrieval errors appeared, I reran the active loop, catching a mis‑aligned domain shift early—demonstrating continuous ownership. This approach aligns with Amazon’s bar‑raiser expectations: quantified impact, depth of technical reasoning, and rapid learning from iterative failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
