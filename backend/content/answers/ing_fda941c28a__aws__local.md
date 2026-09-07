---
qid: ing_fda941c28a__aws__local
question: 'Explain: Strategy 2: Prompt Optimization — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 451
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:48-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team to cut the cost of our generative‑AI service by **20 %** while keeping response latency under 300 ms. The problem was that every prompt triggered a new large‑model inference, driving up compute and data‑transfer charges.

**Action (Prompt Optimization & Pricing)**  
1. **Model‑level caching** – stored embeddings for the top‑1000 most common prompts in **Amazon ElastiCache Redis**, reducing redundant calls to SageMaker endpoints.  
2. **Dynamic prompt truncation** – used a lightweight rule engine on **AWS Lambda** to trim user text to 200 tokens when the semantic similarity score exceeded 0.85, saving ~30 % compute time.  
3. **Tiered pricing model** – introduced “light” and “heavy” inference tiers in our API Gateway; heavy requests routed to GPU‑optimized SageMaker endpoints, light ones to CPU instances, allowing us to bill customers per token processed (AWS Marketplace).  

**Result**  
- Reduced monthly compute spend from $120k to $96k (20 % savings).  
- Latency stayed at 280 ms average.  
- Customer churn dropped by 3 % due to lower perceived cost.

**Leadership Principles Anchored**  
*Customer Obsession* – we re‑priced for transparency and value.  
*Ownership & Dive Deep* – I personally profiled every prompt, identified hot spots, and iterated until the savings hit target.  

**Bar‑raiser cues**  
- Demonstrated ownership by owning the end‑to‑end cost model.  
- Showed depth through token‑level metrics and caching analysis.  
- Quantified impact with exact dollar savings and churn reduction.  
- Learned from an initial over‑aggressive truncation that caused user complaints, leading to a balanced similarity threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
