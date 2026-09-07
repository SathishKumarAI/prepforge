---
qid: ing_83e223c1f6__aws__local
question: 'Explain: Functional Programming — Imperative vs Functional vs Object-oriented
  Programming'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 404
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:12-05:00'
sources: []
---

**Situation / Task**  
While leading a fraud‑detection team at my previous company, I was asked to refactor our nightly batch pipeline that ingested ~10 GB of transaction logs. The legacy codebase was heavily imperative and object‑oriented (OOP), causing a 45 % slowdown when scaling from 1 TB to 5 TB per day.

**Action**  
I introduced a functional‑style approach: immutable data structures, pure functions, and higher‑order operations (`map`, `filter`, `reduce`). I rewrote the core pipeline in **Scala + Apache Spark**, leveraging AWS Glue for ETL orchestration.  

- **Imperative/OOP pitfalls:** side‑effects made unit testing brittle; object state required complex locking.  
- **Functional benefits:** stateless transforms allowed automatic parallelism and easier debugging.  
- **AWS services used:** Glue (serverless), S3 (object store), Athena for ad‑hoc queries, CloudWatch for metrics.

I documented the design in a 30‑page whitepaper, ran A/B tests, and achieved a **70 % reduction in runtime** while cutting compute cost by $12K/month. The new pipeline also lowered failure rates from 4.2 % to 0.6 %.

**Result**  
The team adopted the functional paradigm across all data pipelines, improving delivery velocity by 30 %. I received the “Customer Obsession” award for delivering faster fraud alerts to our risk analysts.

**Reflection**  
I learned that *ownership* means not just fixing bugs but re‑architecting systems. The trade‑off was a steeper learning curve; we mitigated it with pair‑programming and internal workshops, ensuring knowledge transfer and sustaining the improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
