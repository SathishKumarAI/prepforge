---
qid: ing_55b74043c0__star__local
question: 'Explain: G&A — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 349
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:21-05:00'
sources: []
---

**Situation**  
When I joined Glean as a data scientist, the product team was struggling to keep up with the influx of user queries on their internal search platform—search latency had risen from 120 ms to 350 ms during peak hours.

**Task**  
I was tasked with designing an efficient “G&A” (General & Administrative) job pipeline that could ingest, preprocess, and serve embeddings for millions of documents while keeping the cost per query under $0.0005.

**Action**  
First, I mapped the data flow in Airflow, splitting the ingestion into three micro‑tasks: 1) a Spark job to chunk PDFs into sentences, 2) a TensorFlow inference job that generated sentence embeddings using Sentence‑BERT, and 3) an incremental update step that pushed new vectors to our Faiss index via a Kafka stream. I introduced schema‑based validation in the ingestion step to catch malformed files early, reducing downstream failures by 15 %. To cut compute costs, I switched from on‑prem GPU nodes to spot instances and added a caching layer for frequently queried embeddings.

**Result**  
The new G&A pipeline processed 1.2 million documents daily with an average latency of 95 ms—over 60 % faster than before—and lowered infrastructure spend by 22 %. I learned that thoughtful job decomposition, coupled with right‑tool selection and cost‑aware scheduling, can dramatically improve both performance and budget adherence in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
