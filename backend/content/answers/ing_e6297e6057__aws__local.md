---
qid: ing_e6297e6057__aws__local
question: 'Explain: Network latency — Conversational AI latency: What is it and why
  it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 385
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:23-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my tenure at a conversational‑AI startup, I was tasked with reducing *network latency*—the round‑trip time from user input to AI response—because it directly impacted customer satisfaction scores (CSAT).  

**Situation / Task:** We saw a 25 % drop in CSAT when latency exceeded 350 ms.  
**Action:**  
1. **Dive Deep** into the request path: identified that most delay came from the speech‑to‑text service and the LLM inference node.  
2. Deployed an *edge‑caching* layer using **Amazon CloudFront + Lambda@Edge** to offload 60 % of static prompts.  
3. Migrated the inference model to **Amazon SageMaker Endpoint** with multi‑AZ deployment and autoscaling, reducing average inference time from 180 ms to 90 ms.  
4. Introduced **AWS Global Accelerator** for cross‑region routing, cutting TCP handshake latency by ~30 %.  

**Result:** Latency dropped from 350 ms to 110 ms (68 % reduction), CSAT rose from 78 % to 92 %, and we saved ~$12k/month in compute costs due to more efficient autoscaling.  

**Leadership Principles Highlighted:** *Customer Obsession*—prioritizing user experience; *Ownership*—taking full responsibility for end‑to‑end latency; *Dive Deep*—analyzing every hop of the network path.  

Bar‑raisers will note my ownership, data‑driven impact, and the trade‑off between added edge services vs. cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
