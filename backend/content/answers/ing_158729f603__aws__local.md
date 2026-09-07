---
qid: ing_158729f603__aws__local
question: 'Explain: REST APIs — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 514
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:50-05:00'
sources: []
---

**Scenario (S)**  
I led a cross‑functional team that built *TinyURL*—a RESTful URL‑shortening service for an internal developer portal. The goal was to reduce link length, enforce domain branding, and provide analytics, all while handling 10 M requests/day with <200 ms latency.

**Task (T)**  
Design a highly available, cost‑efficient API that could ingest user requests, generate collision‑free short codes, store mappings, and expose click‑through metrics.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. API Gateway + Lambda | Serverless request handling | Zero‑maintenance compute; auto‑scales to spikes. |
| 2. DynamoDB (partition key = code) | Key‑value store | Single‑write latency <10 ms, global tables for multi‑region availability. |
| 3. Kinesis Data Streams → Lambda → Redshift | Real‑time analytics pipeline | Decouples click tracking from API; allows batch ETL for reporting. |
| 4. CloudFront + Route 53 | CDN & DNS | Sub‑5 ms response globally, custom branded domain. |
| 5. Secrets Manager + Cognito | Security & user auth | Least privilege access to DynamoDB and Kinesis. |

**Result (R)**  
- 99.999% uptime over 12 months.  
- Reduced average link size by 70%, increasing click‑through rate by 15%.  
- Cost per request fell from $0.0005 to $0.0001, saving ~$30k annually.

**Leadership Principles Highlighted**

- **Customer Obsession** – Built a UX‑friendly API with clear error handling and analytics dashboards for developers.  
- **Ownership & Dive Deep** – Tracked latency at each layer; identified DynamoDB throttling as bottleneck and added provisioned throughput, reducing 95th‑percentile latency from 120 ms to <80 ms.

**Bar‑raiser Takeaway**  
Demonstrated ownership by owning the end‑to‑end stack, diving deep into metrics, quantifying business impact, and iterating based on failure modes (e.g., handling code collisions with a retry/entropy scheme).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
