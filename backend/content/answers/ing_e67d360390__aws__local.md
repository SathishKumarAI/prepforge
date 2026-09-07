---
qid: ing_e67d360390__aws__local
question: 'Explain: Requirements Clarification — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 424
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:28-05:00'
sources: []
---

**Situation & Task**  
During my last interview for an ML platform role at AWS, the interviewer asked me to outline how I’d approach a system‑design question from a requirements‑clarification perspective. The goal was to show that I could *own* the problem and *dive deep* into trade‑offs.

**Action**  
1. **Clarify business intent (Customer Obsession)** – I started by asking: “Who are the end users? What SLAs do they need for inference latency?” This revealed a 95 % of requests must be <50 ms, and 5 % can tolerate up to 200 ms.  
2. **Identify data & compute constraints (Ownership)** – I confirmed that model weights were ~300 MB, training data >10 TB, and we needed daily retraining.  
3. **Sketch architecture** – *SageMaker Endpoint* for low‑latency inference; *ECS + Fargate* for batch scoring; *Glue* for nightly ETL; *DynamoDB* to store feature metadata. I explained how Auto Scaling on CPU/GPU resources would keep cost below $0.02 per inference while guaranteeing 99.9 % uptime (using Multi‑AZ deployments).  
4. **Quantify impact** – “If we reduce batch size from 1000 → 200, latency drops by 35 %, but costs rise by only 12 %.” I backed this with a cost‑model spreadsheet.

**Result**  
The interviewer awarded me the top score on that segment because I demonstrated *Ownership* and *Dive Deep*, provided concrete metrics, and linked every design choice back to customer needs.  

> **Bar‑raiser note:** Look for ownership (questioning assumptions), depth (trade‑off tables), quantified impact, and reflection on what might fail (e.g., GPU contention).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
