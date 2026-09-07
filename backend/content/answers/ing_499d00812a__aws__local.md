---
qid: ing_499d00812a__aws__local
question: 'Explain: LLM & Transformer Fundamentals - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 472
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:57-05:00'
sources: []
---

**Situation – Problem (Customer Obsession)**  
At my previous role I was tasked with building a real‑time FAQ bot for an e‑commerce site that handled ~3 M queries/day. The existing rule‑based system had a 65 % satisfaction score and lagged behind competitor AI bots.

**Task – Deliver Results**  
I needed to replace it with a transformer‑based LLM that could understand context, generate concise answers, and scale to peak traffic without exceeding the $2k/month budget.

**Action – Dive Deep & Ownership**  
1. **Requirements**: 99.9 % uptime, <200 ms latency for 95 % of requests, cost ≤$0.0005 per inference.  
2. **Design**:  
   * Use **Amazon SageMaker Neo** to compile a pre‑trained BERT model (base) into an edge‑optimized version; deploy on **SageMaker Endpoint** with multi‑AZ autoscaling.  
   * Cache frequent answers in **ElastiCache for Redis** (TTL 12 h).  
   * Batch inference during off‑peak hours via **SageMaker Pipelines** to reduce per‑inference cost.  
3. **Trade‑offs**: Chose a smaller model (base vs. large) to meet latency; added a fallback rule engine for ambiguous queries, mitigating risk of hallucination.

**Result – Quantified Impact**  
* 99.95 % uptime over 6 months.  
* Latency dropped from 800 ms to 180 ms (95th percentile).  
* Customer satisfaction rose to **84 %** (+19 pts).  
* Monthly inference cost: $1,720 (<$2k budget).  

**Learned & Bar‑raiser Insight**  
I documented failure cases where the model produced irrelevant answers; this led to a continuous feedback loop (active learning) that improved accuracy by 7 %. The bar‑raiser will note my end‑to‑end ownership, deep dive into trade‑offs, and data‑driven ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
