---
qid: ing_71577cb3c2__aws__local
question: 'Explain: Tsinghua KEG — the Knowledge Engineering Group at Tsinghua'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 519
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:41-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Tell me about your experience with the Tsinghua Knowledge Engineering Group (KEG) and how you leveraged AI there.”*

---

### Situation & Task  
While leading a cross‑functional team at Tsinghua KEG, we were tasked to **reduce manual knowledge curation time for 200+ academic papers** in our digital library. The goal: cut effort from **8 hrs/week per curator** to under **2 hrs** while maintaining 95 % precision on entity extraction.

### Action (Technical & Design)  
1. **Data‑driven requirement analysis** – surveyed curators, identified bottlenecks, and set a KPI of *< 2 hrs* and *≥ 0.90 F1*.  
2. **Model stack** – built a transformer‑based NER model fine‑tuned on 15k labeled abstracts (BERT‑base + CRF).  
3. **AWS services** – deployed with **Amazon SageMaker** for training, **SageMaker Neo** to compile the model for low‑latency inference on an **EC2 g4dn.xlarge** spot fleet.  
4. **Pipeline** – built a serverless ETL in **Lambda + Step Functions**, storing interim data in **DynamoDB**; used **Amazon S3** for raw PDFs and **Athena** for query analytics.  
5. **Scalability & cost** – autoscaled Lambda to 200 concurrent invocations, keeping monthly spend < $200 (vs. $1,500 pre‑automation).  

### Result (Quantified Impact)  
- Curator time dropped from **8 hrs → 1.6 hrs** (80 % reduction).  
- Precision improved to **92 % F1**, exceeding the target.  
- Annual cost savings of **$15k** and a 40 % reduction in error‑review cycles.  

### Reflection & Learning  
I owned every failure point: when the model mis‑classified domain‑specific terms, I added an active‑learning loop that reduced errors by 30 %. This experience reinforced *Customer Obsession* (curators’ productivity) and *Dive Deep* (profiling model internals). It also taught me to balance **bias for action** with rigorous testing—ensuring reliability before scaling.  

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
