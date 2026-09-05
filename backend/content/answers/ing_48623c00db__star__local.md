---
qid: ing_48623c00db__star__local
question: 'Explain: Step 10. Scale to multiple agents — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 379
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:13-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a single‑agent chatbot that could schedule meetings for small teams. By month 6 it was handling ~3,000 requests/day, but the backend hit CPU limits and latency spiked to 2 s during peak hours.

**Task:**  
I needed to scale the system to support up to 20 concurrent agents—each handling a distinct department’s scheduling logic—while keeping response time under 500 ms and cost per request below $0.01.

**Action:**  
1. Decomposed the monolithic agent into micro‑services: intent detection (BERT fine‑tuned on 50k labeled intents), slot filling (CRF with spaCy), and action execution (REST API to calendar).  
2. Implemented a message broker (RabbitMQ) for inter‑agent communication, allowing each agent to run in its own container orchestrated by Kubernetes.  
3. Added autoscaling policies based on CPU/memory thresholds and a request queue length metric.  
4. Leveraged GPU‑enabled nodes only for the NLP service; other services ran on cost‑effective spot instances.  
5. Monitored latency with Grafana, set up alerting, and performed load testing with k6 to validate 95th percentile < 500 ms.

**Result:**  
We scaled from one to twenty agents in three weeks, reducing average latency to 320 ms and cutting infrastructure cost by 35%. The system now supports ~60,000 daily interactions with a per‑request cost of $0.008. I learned that decoupling responsibilities and using container orchestration are key for elastic AI agent workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
