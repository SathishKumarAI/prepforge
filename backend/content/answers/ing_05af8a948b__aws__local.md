---
qid: ing_05af8a948b__aws__local
question: 'Explain: We parse your most complex docs — LlamaIndex | AI Agents for Document
  OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 516
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:38:34-05:00'
sources: []
---

**S – Situation**  
When our product team rolled out a knowledge‑base search feature for enterprise customers, the docs were unstructured PDFs and scanned images. The existing OCR pipeline had a 30 % miss‑rate and took 4 min per document, hurting customer satisfaction (CSAT dropped to 78%).

**T – Task**  
I owned the end‑to‑end solution: parse, index, and surface information via AI agents while keeping latency < 1 s for 90 % of queries.

**A – Action**  
*Architecture:*  
- **Amazon Textract + SageMaker** to extract text & tables from PDFs (OCR).  
- **LlamaIndex** as the vector store; we fine‑tuned a LLaMA‑7B model on our docs for semantic retrieval.  
- **AWS Lambda + Step Functions** orchestrate the OCR → indexing pipeline, enabling parallelism and graceful retries.  
- **Amazon OpenSearch Service** hosts the final searchable index, auto‑scaling with `indexing` & `search` shards.  

*Scalability/Availability:*  
- Lambda concurrency set to 2000, Step Functions state machine handles failures in < 5 min.  
- OpenSearch uses Multi-AZ for HA; we enable cross‑region replication for disaster recovery.  

*Cost:*  
- Spot instances for SageMaker reduce GPU cost by 35 %.  
- Lambda’s pay‑per‑execution model cuts compute spend by 40 % versus our prior EC2 batch.

**R – Result**  
Within two months:  
- OCR accuracy ↑ 92 % (vs. 70 %).  
- Search latency ≤ 800 ms for 95 % of queries.  
- CSAT rose from 78 % to 91 %.  
- Operational cost fell by $120K annually.

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered a fast, accurate search that directly lifted CSAT.  
*Ownership & Dive Deep*: Took full ownership of the pipeline, dissected bottlenecks, and iterated until metrics improved dramatically.  

Bar‑raisers focus on measurable impact, deep technical decisions (model choice, AWS services), and learning from early failures (e.g., replacing Textract with SageMaker when precision lagged).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
