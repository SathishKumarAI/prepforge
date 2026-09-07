---
qid: ing_ca1f6a97c2__aws__local
question: 'Explain: Done! Auto-tracing enabled — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 461
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:26-05:00'
sources: []
---

**Situation**  
When I joined the ML Ops team, our internal LLM‑based chat product was hitting a 20 % latency spike during peak hours. The engineering squad had no systematic way to trace inference paths or evaluate model drift in production.

**Task**  
I owned the end‑to‑end “Auto‑Tracing & AI Evals” pipeline: automatically capture token‑level traces, store them for downstream analytics, and run continuous evaluation against a curated benchmark suite. I also needed to surface insights through Langwatch (our custom dashboard) and integrate with Langfuse for experiment tracking.

**Action**  
1. **Trace Capture** – Instrumented the inference API using AWS X-Ray SDK; enabled “auto‑tracing” so every request automatically emitted span data without code changes.  
2. **Storage & Query** – Persisted spans in Amazon DynamoDB (low‑latency reads) and used Athena on S3 for ad‑hoc analytics.  
3. **Evaluation Engine** – Built a Lambda‑driven job that pulls the latest model weights, runs them against Langfuse’s evaluation suite (accuracy, bias, latency), and writes results back to DynamoDB.  
4. **Visualization** – Hooked Langwatch dashboards to Athena queries; added alerts in CloudWatch when drift > 3% or latency > 200 ms.  

**Result**  
- Reduced peak‑hour latency from 350 ms to 210 ms (40 % improvement).  
- Detected a 5 % drop in answer quality after a model update, preventing a potential customer churn spike.  
- Cut evaluation cost by 30 % through serverless Lambda scaling versus on‑prem GPU clusters.

**Learning**  
Ownership drove me to iterate the tracing schema until it captured all critical spans. Diving deep into X-Ray’s propagation helped uncover hidden bottlenecks. I shared findings with cross‑functional teams, turning a technical fix into a product‑value story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
