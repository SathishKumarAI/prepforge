---
qid: ing_b0ab1b10b3__faang__local
question: 'Explain: Sales Support — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 491
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:33:57-05:00'
sources: []
---

**Clarify**  
You’re asking about two common performance metrics in cloud‑based or SaaS sales support systems: **TPS (Transactions Per Second)** and **QPS (Queries Per Second)**. I’ll assume we’re measuring the back‑end service that handles customer inquiries, not the front‑end UI, and that “sales support” refers to a real‑time help desk or chatbot.

**Approach**  
1. Define each metric in the context of a sales‑support API.  
2. Explain how they are measured (instrumentation).  
3. Highlight what each tells us about system health.  
4. Contrast them, noting where one is more useful than the other.

**Depth**  

| Metric | Definition | What it reveals |
|--------|------------|-----------------|
| **TPS** | Number of *complete* transactions processed per second (e.g., a full “add to cart” + payment flow). | Throughput, capacity, how many end‑to‑end business actions the system can sustain. |
| **QPS** | Number of individual *queries* or requests per second (e.g., each REST call to `/search`, `/help`). | Fine‑grained request load, latency hotspots, API health. |

Measurement:  
- TPS is counted at the transaction boundary—usually a database commit or a business‑logic completion event.  
- QPS is captured by web server logs or middleware counters per HTTP endpoint.

**Edge Cases**  
- **TPS underestimates** when many short queries belong to one logical transaction (e.g., multiple “search” calls before purchase).  
- **QPS can overstate load** if a single heavy query spawns dozens of sub‑requests; latency may be masked.  
- High TPS with low QPS suggests batch processing; high QPS with low TPS indicates many lightweight requests.

**Optimize & Communicate**  
For scaling sales support, we monitor both: use QPS to auto‑scale API nodes (reacting to spikes in user queries) and TPS to guarantee SLAs for checkout flows. In conversations, explain that TPS is the business‑level metric, while QPS is the operational pulse; together they give a full picture of performance and capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
