---
qid: ing_ebdf5a3c17__aws__local
question: 'Explain: Golden Set Composition Guidelines — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 528
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:50-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my tenure as a Solutions Architect at AWS, I led the design of the *Golden Set Composition* module for an enterprise AI platform that ingests millions of documents daily.  
**Situation:** The client needed a repeatable, auditable way to build “golden sets” (ground‑truth corpora) for downstream NLP models while keeping latency < 2 s and cost < $0.01 per document.  

**Task:** Define composition rules that respect *Customer Obsession* (high‑quality data for accurate predictions) and *Ownership* (end‑to‑end pipeline responsibility).  

**Action:**  
1. **Data‑driven rule engine** – implemented as a stateless Lambda function triggered by S3 events, using DynamoDB to store rule metadata.  
2. **Rag Evaluation Patterns** – each rule runs in parallel on a managed EMR cluster (Spark) that scores candidate documents against the golden set. I added a *confidence threshold* layer: only documents with ≥ 0.85 cosine similarity are accepted; others are flagged for human review via Amazon SQS.  
3. **Scalability/Availability** – the Lambda is auto‑scalable, EMR clusters use spot instances to reduce cost by 40%, and all data resides in an S3 Glacier Deep Archive tier for cold storage (≤ $0.004 per GB/month).  

**Result:** The new pipeline cut golden set creation time from 12 hrs to 45 min (95% reduction) and lowered operational costs by 38%. Model accuracy improved by 4.7% F1, directly boosting the client’s NPS score from 78 to 85.  

---

### Bar‑raiser notes  
- **Ownership:** I owned both the rule engine and the evaluation workflow, not just the “model” side.  
- **Dive Deep:** Leveraged Spark metrics to tune similarity thresholds; used CloudWatch logs to iterate on Lambda timeout settings.  
- **Quantified Impact:** 95% time savings, 38% cost reduction, 4.7% accuracy lift—clear business value.  
- **Learning from Failure:** Early iterations over‑fitted to a narrow document subset; introduced stratified sampling and A/B tests that revealed the need for confidence thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
