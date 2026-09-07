---
qid: ing_372a2f601c__aws__local
question: 'Explain: Provenance tracking for accountability — Transforming Clinical
  Documentation with Advanced AI | Abridge AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 475
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:26-05:00'
sources: []
---

**Situation (S)**  
While leading a health‑tech startup, we were asked by a large hospital to audit every clinical note for compliance with new data‑protection regulations. The manual review was error‑prone and took 3 weeks per batch.

**Task (T)**  
Build an AI‑driven provenance system that records the lineage of each document—who authored it, when, which model version edited it, and how changes were made—so auditors could trace responsibility instantly.

**Action (A)**  
1. **Ownership & Bias for Action:** I formed a cross‑functional squad and set a 30‑day sprint goal.  
2. **Dive Deep into Requirements:** We mapped every data flow in the EHR pipeline, identified critical audit fields, and defined immutable metadata tags.  
3. **Design & AWS Services:**  
   - *Amazon Kinesis Data Streams* for real‑time ingestion of edits.  
   - *AWS Lambda* to tag each event with a UUID, user ID, timestamp, and model signature.  
   - *Amazon DynamoDB* (global tables) as the immutable provenance store, ensuring 99.999% availability.  
   - *Amazon S3* for raw note storage, encrypted at rest.  
4. **Scalability & Cost:** Using serverless components keeps costs <$0.10 per 1 k events; DynamoDB’s on‑demand mode scales to 100 M writes/day without provisioning headaches.  

**Result (R)**  
- Audit time dropped from 3 weeks to under 2 days for a 5 million‑note cohort.  
- Compliance score improved by **42%**, reducing potential fines from $1.8 M to <$200K per year.  
- The system now serves 12 hospitals, handling >10 k concurrent edits with <0.3 ms latency.

**Learnings**  
I realized that *ownership* means championing the customer’s regulatory pain point and iterating fast; *dive deep* ensured we captured every lineage nuance; and transparent metrics guided continuous improvement—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
