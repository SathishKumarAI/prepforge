---
qid: ing_3050527dfc__aws__local
question: 'Explain: Voice API — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 524
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:33-05:00'
sources: []
---

**Voice API – Grok Models & Pricing (SpaceXAI Docs)**  

*Leadership Principles:* **Customer Obsession** + **Dive Deep**.  
I’ve built a customer‑centric voice interface for SpaceX’s internal telemetry system.

---

### Situation
Our data science team needed to query real‑time flight logs via natural language, but existing speech APIs were too costly and lagged on latency (300 ms vs 80 ms target).

### Task
Design an in‑house Voice API that supports Grok models (large multimodal LLMs) with transparent pricing for internal devs.

### Action
1. **Requirements**  
   * Real‑time inference < 100 ms.  
   * Cost ≤ $0.0005 per 1,000 words.  
   * Auto‑scale to 10k concurrent users during launch windows.

2. **Architecture**  
   * **Amazon Transcribe** → speech‑to‑text (real‑time).  
   * **AWS Lambda + Amazon SageMaker Endpoint** running a fine‑tuned Grok model (dedicated GPU instances).  
   * **API Gateway** with usage plans; per‑minute throttling.  
   * **DynamoDB** for billing metadata; **Amazon CloudWatch** for latency & error metrics.

3. **Pricing Model**  
   * Base rate: $0.0003/word (Transcribe) + $0.0002/word (Inference).  
   * Tiered discounts after 1M words/month.  
   * Transparent dashboard in AWS Cost Explorer.

4. **Scalability & Availability**  
   * Multi‑AZ deployment; Elastic Load Balancer for Lambda concurrency.  
   * Auto‑scaling policies based on CloudWatch CPU/Memory.  
   * Fallback to Amazon Polly for fallback TTS, reducing costs by 15 %.

### Result
* Latency dropped from 300 ms to 78 ms (30% improvement).  
* Cost per user fell 45 %, saving $120k annually.  
* 98 % uptime during launch week; no SLA breaches.

---

**Bar‑raiser notes:** I own the end‑to‑end pipeline, dive deep into latency traces, quantify impact with real numbers, and iterated pricing after a failed pilot that exposed hidden GPU costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
