---
qid: ing_46dde9b4ee__star__local
question: 'Explain: Data for Fine-Tuning — Data Engineering For Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 358
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:24-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building a conversational agent to handle customer support tickets. The existing language model performed well on generic queries but struggled with domain‑specific terminology and compliance jargon, leading to a 35 % error rate on high‑value tickets.

**Task**  
I was tasked with preparing a curated dataset for fine‑tuning the base GPT‑4 model so that it could understand our proprietary lexicon, regulatory references, and internal escalation protocols—all while keeping data privacy in mind.

**Action**  
First, I set up an Airflow DAG to extract ticket logs from our PostgreSQL database, anonymize PII using a deterministic hashing scheme, and enrich the text with metadata (ticket priority, product line). Next, I used Spark to perform token‑level filtering: removing stop words that were irrelevant to compliance, normalizing domain abbreviations, and tagging named entities. The cleaned corpus was then split into training (80 %), validation (10 %), and test (10 %) sets with stratified sampling on priority levels. Finally, I scripted the data pipeline in Python, leveraging Hugging Face’s `datasets` library to stream batches directly into the fine‑tuning job on AWS SageMaker, ensuring each epoch saw a shuffled mix of scenarios.

**Result**  
After two training cycles, the fine‑tuned model cut the error rate from 35 % to 8 %, and response times dropped by 22 %. I learned that rigorous data engineering—cleaning, anonymizing, and metadata enrichment—is as critical for AI success as model architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
