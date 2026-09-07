---
qid: ing_d5622e00cf__aws__local
question: What are reasoning models, and how does test-time compute change the picture?
  When would you use one versus a standard model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 420
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:22:04-05:00'
sources: []
---

**Situation (S)** – While leading an ML Ops team at a fintech startup, we were asked to deploy a fraud‑detection model into production on **Amazon SageMaker** with strict latency (< 20 ms) and cost constraints.

**Task (T)** – I had to decide between a *standard inference* pipeline and a *reasoning‑model* that performs chain‑of‑thought reasoning at test time, trading off compute for higher accuracy on edge cases.

**Action (A)**  
1. **Dive Deep into the math**: Reasoning models (e.g., GPT‑style chain‑of‑thought) generate intermediate “explanations” before a final decision. Test‑time compute scales linearly with the number of reasoning steps, so I benchmarked 1‑step vs. 3‑step on **SageMaker Inference Realtime** and measured latency (15 ms vs. 45 ms).  
2. **Cost/Availability trade‑off**: Using **AWS Lambda@Edge** for lightweight standard models kept cost < $0.01 per inference, while reasoning models required a **GPU‑optimized SageMaker Endpoint** costing ~3× more but delivering +12% precision on high‑value transactions.  
3. **Bias for Action & Ownership**: I built an A/B test harness (using **Amazon CloudWatch Metrics**) to surface the ROI of the heavier model in real traffic.

**Result (R)** – After 30 days, the reasoning‑model reduced false positives by **18%** on high‑risk accounts, translating to $1.2M annual savings, while latency stayed within SLA due to selective routing via **AWS App Mesh**. The decision was data‑driven and aligned with Amazon’s *Customer Obsession* (better fraud protection) and *Ownership* (end‑to‑end cost/accuracy trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
