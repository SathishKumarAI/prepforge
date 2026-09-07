---
qid: ing_afd3916363__faang__local
question: How much data do you need to fine-tune a model? Quality vs. quantity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:32:10-05:00'
sources: []
---

**Clarify**  
You’re asking about the *minimum* amount of labeled data required for effective fine‑tuning and how quality trades off against quantity. I’ll assume we’re starting from a pre‑trained transformer (e.g., GPT‑3, BERT) and that we have a downstream task like classification or generation with a standard evaluation metric.

**Approach**  
1. Estimate the *effective* dataset size needed by comparing model capacity to task complexity.  
2. Identify data quality signals: label noise, class imbalance, domain mismatch.  
3. Run a small pilot (few‑shot) and use learning curves to extrapolate.  

**Depth**  
- **Rule of thumb:** For most NLP tasks, 1 k–10 k labeled examples suffice when fine‑tuning a large pre‑trained model; larger models often plateau around 5 k–20 k.  
- **Quality vs. quantity:** A single high‑quality label can be worth dozens of noisy ones. Techniques like active learning or uncertainty sampling help convert low‑quantity, high‑quality data into maximal gains.  
- **Complex tasks (e.g., multimodal generation)** may need 50–100 k examples to reach near‑baseline performance.  
- **Learning curves**: Plot accuracy vs. training size; a steep rise that levels off indicates the sweet spot.  

**Edge Cases**  
- *Label noise*: If >10% of labels are wrong, you’ll need ~2× more data or robust loss functions (e.g., label smoothing).  
- *Domain shift*: Even large datasets can fail if the source domain diverges; domain‑adaptation techniques become critical.  

**Optimize & Communicate**  
Start with a 1 k pilot, monitor validation loss, and decide whether to gather more data or improve labeling quality. If budget is tight, prioritize high‑confidence samples via active learning. I’d explain this trade‑off by showing the learning curve, citing studies (e.g., “Fine‑tuning BERT requires ~5 k labeled examples for sentiment analysis”), and recommending iterative data curation over brute‑force scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
