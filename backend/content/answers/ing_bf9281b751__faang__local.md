---
qid: ing_bf9281b751__faang__local
question: 'Explain: Budget Model Comparison — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:48-05:00'
sources: []
---

**Budget‑Model Comparison – A Structured Selection Guide**

| **Clarify** |  
*You’re asked to choose the most cost‑effective AI model for a product under a fixed budget.*  
Assumptions:  
- Same inference latency requirement (≤ 50 ms).  
- Deployment platform is GPU‑free; inference will be batched.  
- Accuracy target ≥ 90 % on the target dataset.  

| **Approach** |  
1. Enumerate candidate families (e.g., BERT‑base, DistilBERT, MobileNetV2, TinyML).  
2. For each, collect: model size, FLOPs, memory footprint, licensing cost, and baseline accuracy.  
3. Build a weighted score combining *Cost* (training + inference) and *Performance* (accuracy–latency trade‑off).  

| **Depth** |  
- Compute per‑inference cost:  
  `C_infer = (FLOPs × price_per_GPU_sec)/batch_size`.  
- Include storage & data pipeline overhead.  
- Use Pareto analysis to prune dominated models.  
- Select the model with highest score that meets latency and accuracy constraints.  

| **Edge Cases** |  
- Model updates: retraining cost may change; plan for incremental fine‑tuning.  
- Data drift: monitor accuracy drop over time—trigger re‑selection if >5 % loss.  
- Hardware shifts: if GPUs become available, revisit FLOPs vs. cost trade‑off.  

| **Optimize & Communicate** |  
Explain that this framework is reusable across domains by swapping the metric weights. Highlight that we’ve balanced upfront engineering effort against long‑term operational spend, a key consideration for FAANG product teams.  

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
