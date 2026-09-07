---
qid: ing_70d8772e5a__faang__local
question: How do you monitor a deployed LLM system for drift? What kinds of drift
  matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 417
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:04-05:00'
sources: []
---

**Clarify**  
We want to detect *distributional* or *conceptual* shifts in an LLM once it’s serving production traffic.  
Assumptions:  
1. The model is stateless (stateless inference API).  
2. We have access to request/response logs and a small labeled validation set for key downstream tasks.

**Approach**  
1. **Data‑drift monitoring** – compare incoming token distributions, embeddings, or prompt statistics against the training distribution.  
2. **Prediction‑drift monitoring** – measure changes in output quality (e.g., perplexity, BLEU, user‑rated scores) on a held‑out validation set and on live A/B tests.  
3. **Concept drift detection** – track downstream business metrics that depend on the model’s outputs.

**Depth**  
- *Statistical tests*: KS/Chi‑square for token frequencies; cosine‑distance histograms of embeddings.  
- *Autoencoder reconstruction error* over prompts to flag outliers.  
- *Online learning*: maintain a sliding window of recent predictions and compute mean/std of confidence scores.  
- *Signal thresholds*: use control charts (CUSUM) with false‑positive tolerance ~5 %.  
- *Cost trade‑off*: lightweight token stats are O(1) per request; full embedding checks add O(d) but can be batched.

**Edge Cases**  
- Rare but critical prompts may trigger false alarms.  
- Sudden spikes in traffic can mask drift (normalizing by volume).  
- Model updates that intentionally shift output distribution require reset of baseline.

**Optimize & Communicate**  
Start with low‑cost token statistics; if flagged, roll out deeper embedding checks and A/B validation. Explain to stakeholders: “We’ll surface a 2 % drop in perplexity over the last 24 h—likely due to new user demographics.” This keeps monitoring actionable while avoiding noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
