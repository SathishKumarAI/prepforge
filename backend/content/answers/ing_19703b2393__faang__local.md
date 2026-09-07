---
qid: ing_19703b2393__faang__local
question: 'Explain: Your fine-tuned model''s training loss looked great, but outputs
  in production are worse than the base model. Walk me through your debugging process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 463
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:22-05:00'
sources: []
---

**Clarify**

You’re asked why a fine‑tuned model with low training loss underperforms the base in production.  
Assumptions to confirm:  

1. The evaluation metric in prod matches the one used during training (e.g., BLEU, ROUGE).  
2. Input distribution in production is similar to the fine‑tuning data.  
3. No post‑processing or inference pipeline differences exist.

**Approach**

1. **Reproduce the issue locally** – run a small test set from prod through both models and compare metrics.  
2. **Inspect data drift** – compute feature statistics (token frequencies, length distributions) for fine‑tune vs. prod.  
3. **Validate inference pipeline** – ensure tokenization, padding, beam settings, temperature, etc., are identical.  
4. **Check overfitting signals** – compare training vs. validation loss curves; look for high variance or early stopping mis‑configurations.  
5. **Analyze error patterns** – generate confusion matrices or attention visualizations to see where the fine‑tuned model diverges.

**Depth**

- Use a held‑out validation set that mirrors prod (e.g., same domain, length).  
- If loss curves plateau quickly but metrics drop, consider *label noise* or *class imbalance*.  
- If tokenization differs, even a small mismatch can degrade outputs; confirm the tokenizer’s vocab and special tokens.  
- Overfitting: high training loss drop with minimal validation gain → apply regularization (dropout, weight decay) or augment data.

**Edge Cases**

- Rare token usage in prod not seen during fine‑tune → test OOV handling.  
- Different inference temperature/beam width → run ablation tests.  
- Model checkpoint corruption → verify integrity and re‑load.

**Optimize & Communicate**

Summarize findings: “Data drift + mismatched beam width caused the gap.” Propose fixes: add domain‑specific data, align inference hyperparameters, and set up continuous monitoring of key metrics. Highlight that a systematic pipeline check prevents such regressions in future fine‑tuning cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
