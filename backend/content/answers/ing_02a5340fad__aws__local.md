---
qid: ing_02a5340fad__aws__local
question: 'Explain: Evaluation plan — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 511
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:17-05:00'
sources: []
---

**Situation & Task**  
When launching our new AI‑powered customer support portal, I led a cross‑functional team to evaluate the effectiveness of a *semantic search* engine that replaces keyword lookup with contextual understanding. The goal was to hit at least **90 % query relevance** while keeping latency under **300 ms** for 95 % of requests.

**Action (Design & Execution)**  
1. **Define Success Metrics** – Precision@k, recall, and user satisfaction score (CSAT).  
2. **Create a Gold‑Standard Test Set** – Curated 5,000 real customer tickets with expert relevance labels.  
3. **Build an Evaluation Pipeline** –  
   * Ingest logs into **Amazon Kinesis Data Streams** → process with **AWS Lambda** to extract query–document pairs.  
   * Run each pair through the semantic model (BERT‑based) hosted on **SageMaker Endpoint**, storing embeddings in **Elasticsearch** for retrieval comparison.  
4. **Automated Scoring** – A Lambda function compares results against gold labels, aggregates metrics into **Amazon CloudWatch Dashboards**, and triggers an SNS alert if performance drops below thresholds.  
5. **Iterate & Re‑train** – Every week we retrain the model on new data using **SageMaker Ground Truth** annotations, reducing drift.

**Result**  
Within three months, relevance improved from 72 % to **92 % precision@3**, latency stayed at **250 ms average**, and CSAT rose by **12 points** (from 78 to 90). Cost per query dropped 18 % through efficient use of spot instances for training.

---

### Leadership Principles  
- **Customer Obsession** – Metrics directly tied to user satisfaction.  
- **Ownership & Dive Deep** – I owned the end‑to‑end pipeline and delved into every layer, from data ingestion to model inference, ensuring transparent trade‑offs between cost, latency, and accuracy.  

Bar‑raisers look for clear ownership, a deep dive into metric design, quantified impact, and an honest reflection on what didn’t work (e.g., initial over‑reliance on keyword recall that hurt relevance). This plan demonstrates all those elements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
