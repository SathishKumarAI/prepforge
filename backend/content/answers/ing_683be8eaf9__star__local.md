---
qid: ing_683be8eaf9__star__local
question: 'Explain: Masks for COVID: Updating the evidence — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 341
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:58-05:00'
sources: []
---

**Situation**  
At a mid‑size health tech startup, we were tasked with developing an AI model that could predict the effectiveness of different mask designs against SARS‑CoV‑2 aerosols. The data set was noisy: new studies kept emerging every week, and our initial training set was only 60 % complete.

**Task**  
I had to build a system that could ingest new research papers, extract relevant metrics (filtration efficiency, breathability scores), and quickly retrain the model so we could provide up‑to‑date recommendations for mask manufacturers before their next product launch.

**Action**  
Using fast.ai’s text‑classification pipeline, I first scraped PDFs from PubMed and arXiv, then applied spaCy to parse tables and extract numeric values. I wrapped this in a lightweight ETL that ran nightly on an EC2 spot instance. For the model, I fine‑tuned a pre‑trained RoBERTa backbone on our labeled dataset, adding a custom loss that weighted recent studies more heavily. Every time new data arrived, the pipeline triggered an incremental training job (≈15 min) and deployed the updated checkpoint via S3 + Lambda for inference.

**Result**  
Within two weeks we cut the model’s prediction error from 18% to 9%, and our mask‑design partners reported a 25% faster go‑to‑market time. I learned that marrying robust NLP pipelines with fast.ai’s rapid prototyping can turn chaotic data streams into actionable AI insights, even in a pandemic environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
