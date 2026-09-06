---
qid: ing_b7b9868b9e__think__local
question: 'Explain: Now these are generally not used for — Database Design Tips |
  Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 390
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:04:53-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Identify what “these” refers to (likely ML models or techniques).  
- Assume the context is a system‑design interview where you’re asked to pick a database for an ML‑heavy application.  

**2️⃣ Choose a mental model**  
- Think in terms of *data characteristics* → *database features* → *system constraints*.  
- Use the classic “trade‑off triangle” (scalability, consistency, latency) plus ML‑specific concerns (batch vs streaming, feature store).  

**3️⃣ Step‑by‑step reasoning**  
1. List data types: raw logs, processed features, model artifacts.  
2. Map each type to ideal storage (e.g., time‑series DB for logs, columnar store for features, object store for binaries).  
3. Evaluate candidate databases against constraints: write throughput, read latency, schema flexibility, cost.  
4. Rule out options that can’t meet at least one critical requirement (e.g., a relational DB if you need massive horizontal scaling of feature vectors).  

**4️⃣ Common traps to avoid**  
- Assuming “noSQL = best for ML” without evidence.  
- Ignoring the cost/operational overhead of maintaining multiple stores.  
- Forgetting that model training pipelines often need batch‑read capabilities, not just OLTP features.  

**5️⃣ Sanity‑check & verbalize**  
- Double‑check each requirement against your chosen database’s strengths.  
- Summarize: “Because we need high‑write throughput for feature ingestion and low‑latency reads during inference, a columnar store (e.g., ClickHouse) is the best fit; other options fall short on either write scalability or query performance.”  

Use this scaffold to structure any similar interview question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
