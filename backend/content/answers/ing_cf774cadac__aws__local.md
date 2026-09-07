---
qid: ing_cf774cadac__aws__local
question: 'Explain: Planner-Based Tool Selection — The Complete Guide to Tool Selection
  in AI Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 659
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:58-05:00'
sources: []
---

**Planner‑Based Tool Selection – A Quick Playbook**

**Situation (S)**  
At my last role I led a cross‑functional team that built an autonomous customer‑support bot for a $2 B e‑commerce platform. The bot needed to decide *which* third‑party API (e.g., payment, shipping, recommendation) to invoke in real time while keeping latency under 200 ms and cost below $0.01 per interaction.

**Task (T)**  
Design a planner that selects the optimal tool set for each user request without hardcoding every scenario, ensuring scalability as new services roll out.

**Action (A)**  

1. **Requirements & Constraints** –  
   * **Latency budget:** <200 ms.  
   * **Cost cap:** <$0.01 per request.  
   * **Reliability SLA:** 99.9% uptime for all integrated APIs.  
2. **Planner Architecture** –  
   * **State machine + Goal graph**: Each intent becomes a node; edges are tool invocations with associated cost/latency estimates.  
   * **AWS Step Functions** orchestrates the plan, using **Choice states** to branch on real‑time metrics (e.g., current API queue length from CloudWatch).  
   * **Dynamic cost model** stored in DynamoDB: every API’s per‑call price and average latency; updated via Lambda that ingests CloudWatch alarms.  
3. **Decision Engine** –  
   * **Weighted scoring** = α·latency + β·cost + γ·reliability.  
   * **AWS SageMaker** trains a lightweight model on historical request logs to predict the best tool set per user segment.  
4. **Scalability & Availability** –  
   * Step Functions scales automatically; each state can be retried with exponential back‑off (ensuring 99.9% SLA).  
   * Cost: ~30 % lower than a monolithic approach because only the minimal subset of APIs is invoked per request.

5. **Result (R)** –  
   * Reduced average latency from **350 ms to 180 ms** (↓48%).  
   * Cut API‑usage cost by **$1.2M annually** while maintaining SLA.  
   * Enabled rapid onboarding of new tools—each addition required only updating the DynamoDB table and retraining SageMaker once per quarter.

---

### Leadership Principles Highlighted
- **Customer Obsession**: Deliver fast, inexpensive responses that keep users satisfied.  
- **Ownership**: Built end‑to‑end system, from data ingestion to cost monitoring.  
- **Dive Deep**: Continuously profiled latency and costs; tuned scoring coefficients via A/B tests.  

### Bar‑raiser Takeaway
A candidate should demonstrate *ownership* (owning the whole pipeline), *depth* (understanding Step Functions, DynamoDB, SageMaker trade‑offs), *quantified impact* (latency & cost metrics), and *learning from failure* (how retry logic was tuned after initial SLA breaches).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
