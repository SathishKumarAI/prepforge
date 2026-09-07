---
qid: ing_90a465f332__faang__local
question: 'Explain: What is TPS, what is QPS, and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 561
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:44-05:00'
sources: []
---

**Clarify**  
The interview asks for a clear definition of *Transactions Per Second (TPS)* vs *Queries Per Second (QPS)*, and why they matter differently in ML‑driven systems.  
Assumptions: we’re discussing throughput metrics that capture how many units of work an ML pipeline can handle per second; “transaction” refers to a complete end‑to‑end request (e.g., inference + response), while “query” is a single read or model call.

**Approach**  
1. Define each metric formally.  
2. Explain the operational context where each appears.  
3. Contrast their granularity, impact on latency, and what they reveal about system health.

**Depth**  

| Metric | Definition | Typical Use‑case in ML |
|--------|------------|-----------------------|
| **TPS (Transactions Per Second)** | Number of full user‑visible operations completed per second. A transaction may involve data ingestion, preprocessing, model inference, post‑processing, and persistence. | End‑to‑end recommendation engines, online fraud detection, batch scoring jobs that wrap multiple steps. |
| **QPS (Queries Per Second)** | Number of individual queries sent to a service or model endpoint per second. Each query is usually a single request for inference. | Serving APIs for image classification, NLP intent extraction, feature‑store lookups. |

**Differences**  
- **Granularity**: QPS counts *calls*; TPS counts *full workflows*.  
- **Latency coupling**: High QPS can mask long processing times if each transaction contains many queries. Conversely, low QPS but high TPS indicates complex, multi‑step pipelines.  
- **Scaling implications**: Scaling for QPS often means adding inference nodes; scaling for TPS may require orchestrating data pipelines, caching, and batch schedulers.

**Edge Cases**  
- A single query that triggers a chain of downstream calls still counts as 1 QPS but can inflate TPS dramatically.  
- Batch inference (e.g., 1000 inputs per request) will lower QPS while keeping TPS high; mis‑interpreting the metric could lead to under‑provisioning.

**Optimize & Communicate**  
When explaining this to stakeholders, emphasize that *TPS* is a business‑level health indicator (throughput of user journeys), whereas *QPS* is an engineering level KPI for model serving. Use visual dashboards showing both metrics side‑by‑side and alert on divergent trends (e.g., QPS stable but TPS dropping → downstream bottleneck). This layered view aligns with FAANG’s emphasis on clear, actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
