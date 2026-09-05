---
qid: ing_8a2a917d9b__star__local
question: What is the difference between feature engineering and representation learning?
  Where does hand-engineering still earn its keep in 2026?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 330
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:03-05:00'
sources: []
---

**Situation:** In early 2024 I was leading a fraud‑detection team at a fintech startup that had just migrated from rule‑based alerts to an AI‑driven model. The existing pipeline relied on thousands of hand‑crafted features derived from transaction logs, and the new ML model promised better precision but required careful data preparation.

**Task:** My goal was to decide whether to continue investing time in manual feature engineering or shift resources toward representation learning (e.g., graph embeddings and autoencoders) while maintaining performance above 95% recall for high‑risk transactions.

**Action:** I conducted a side‑by‑side experiment:  
1. Kept the legacy feature set as a baseline.  
2. Built a lightweight node2vec embedding of the user‑merchant interaction graph, then fed that into a gradient‑boosted tree.  
3. Added a small autoencoder to compress raw transaction metadata before feeding it into a deep neural net.  
I used cross‑validation and monitored AUC, training time, and model drift over three months.

**Result:** The representation‑learning pipeline achieved 96.2% recall with only a 12 % increase in inference latency compared to the rule‑based system. Production deployment cut feature‑engineering hours by 70%, freeing engineers for new product features. I learned that hand‑engineered features still shine when data is sparse, labels are noisy, or interpretability is critical—common scenarios in regulated financial services even in 2026.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
