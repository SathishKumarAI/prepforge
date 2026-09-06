---
qid: ing_cebc572766__fp__local
question: 'Explain: So some indicators about when you might — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 391
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:19:52-05:00'
sources: []
---

When a data‑modeler asks *“Which NoSQL database should I pick?”* the underlying problem is: **how do I encode and retrieve my data with the lowest expected cost while satisfying latency, consistency, and scalability constraints?**  

1. **Cost model:**  
   - Storage \(S\), read throughput \(R\), write throughput \(W\).  
   - For a given workload, expected cost per operation is  
     \[
       C = \alpha S + \beta R + \gamma W
     \]
     where the coefficients depend on the provider’s pricing.  
2. **Latency & consistency:**  
   - A key‑value store (DynamoDB) guarantees sub‑10 ms reads with eventual consistency unless you opt for strongly consistent reads, which cost \(+2\times\).  
   - Document stores (DocumentDB) add a JSON parsing overhead; graph databases (Neptune) pay for multi‑hop traversals.  
3. **Data shape & access patterns:**  
   - If the schema is flat and access is by primary key → DynamoDB.  
   - Nested or semi‑structured data with ad‑hoc queries → DocumentDB.  
   - Relationships that require frequent joins/traversals → Neptune.

**Non‑obvious insight:** *The “best” database often hinges on the **query plan cost**, not just storage size.* Even if a document store stores less per item, its query engine may perform full scans for certain filters, driving up \(R\) and making DynamoDB cheaper overall. Thus, profile a representative workload; compute \(C\) for each candidate. The one with the lowest expected cost—and acceptable latency—wins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
