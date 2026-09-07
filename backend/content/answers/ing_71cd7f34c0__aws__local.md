---
qid: ing_71cd7f34c0__aws__local
question: 'Explain: Sources — Mistral'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 416
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:38-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a project to build an in‑house LLM based on the open‑source *Mistral* architecture. The goal was to ingest and curate a high‑quality, multilingual dataset while keeping data costs under **$200k/yr**.

**Action (Dive Deep + Ownership)**  
1. **Data‑source taxonomy:** I mapped 12 content streams—public APIs, partner feeds, web scrapers, and internal logs. For each stream I defined a *data quality score* (relevance, freshness, bias).  
2. **Infrastructure design:**  
   - **S3** for raw ingestion; **Glue** to catalog and clean; **Lambda** for real‑time validation; **DynamoDB** to store metadata and scoring.  
   - A *dedicated SageMaker endpoint* ran a lightweight tokenizer that filtered out low‑score text before it hit the training pipeline, cutting unnecessary GPU hours by 35%.  
3. **Cost controls:** I introduced spot instances for preprocessing jobs and reserved instances for nightly retraining, reducing compute spend from $48k to $29k.

**Result (Deliver Results)**  
The curated corpus grew to **15 GB of high‑quality text**, yielding a Mistral fine‑tuned model that outperformed the baseline by **12% in BLEU score** on our internal benchmark while staying within budget.  

**Bar‑raiser focus** – I demonstrated ownership (end‑to‑end pipeline), deep technical dive (service choices, cost trade‑offs), quantified impact (BLEU +12%, $19k saved), and a lesson: early validation reduces downstream compute waste—an iterative improvement we now apply to all data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
