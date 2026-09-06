---
qid: ing_b0ab1b10b3__think__local
question: 'Explain: Sales Support — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 440
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:39:36-05:00'
sources: []
---

**1️⃣ Clarify & Assumptions**  
- Confirm that *TPS* and *QPS* refer to *Transactions Per Second* and *Queries Per Second*, respectively, in a sales‑support context (e.g., CRM or e‑commerce).  
- Assume the audience knows basic performance metrics but not the subtle distinction.

**2️⃣ Mental Model / Framework**  
Use a simple “operation vs. request” lens:  
- **TPS** = total number of *transactions* (complete business actions) that can be processed per second.  
- **QPS** = number of *queries* (individual data look‑ups or API calls) a system can handle per second.

Map each to real‑world examples: placing an order vs. searching product catalog.

**3️⃣ Step‑by‑Step Reasoning**  
1. Define “transaction” as a business‑critical, multi‑step event that changes state (e.g., order placement).  
2. Define “query” as a read‑only request for information.  
3. Explain how TPS is limited by write latency, consistency checks, and downstream processes.  
4. Explain how QPS is limited mainly by read throughput and cache hit rates.  
5. Show the difference in scaling: adding replicas helps QPS more than TPS; sharding writes improves TPS.

**4️⃣ Common Traps to Avoid**  
- Mixing up *transactions* with *tasks*.  
- Assuming higher QPS always implies better performance—ignore write bottlenecks.  
- Forgetting that a single transaction can involve many queries, so TPS and QPS are not directly comparable numerically.

**5️⃣ Sanity‑Check & Communicate Out Loud**  
- Re‑state: “TPS measures *how many* full business actions per second; QPS measures *how many* individual data requests.”  
- Use a quick analogy (e.g., a bakery: TPS = cakes baked per minute, QPS = customer orders taken per minute).  
- Ask the listener to give their own example to ensure understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
