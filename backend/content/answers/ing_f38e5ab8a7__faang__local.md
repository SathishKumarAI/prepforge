---
qid: ing_f38e5ab8a7__faang__local
question: 'Explain: Continued Pretraining (Domain Adaptation)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 442
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:05:42-05:00'
sources: []
---

**Clarify**  
You’re asking about *continued pre‑training*—the practice of taking a large language model that was trained on generic data and further training it on domain‑specific corpora (e.g., legal docs, medical records). Confirm: target domain size, downstream task (classification, QA), and whether you’ll fine‑tune after the continued step.

**Approach**  
1. **Collect & clean** domain text (tokenize, deduplicate).  
2. **Initialize** with the base checkpoint.  
3. Run a few epochs of masked language modeling or causal LM training on the new corpus.  
4. **Monitor** perplexity and loss; stop when gains plateau or over‑fitting appears.  
5. **Fine‑tune** on your target task using the adapted weights.

**Depth**  
- Use *same* architecture & hyperparameters to preserve learned representations.  
- Adjust learning rate (e.g., 1/10 of base) and weight decay to avoid catastrophic forgetting.  
- Optionally employ *adapter modules* or *prefix tuning* if you want to keep the original weights intact.  
- Complexity: O(N × T) where N is token count; GPU memory dictates batch size.

**Edge Cases**  
- Extremely small domain corpora → risk of over‑fitting, so use early stopping or data augmentation.  
- Domain shift that conflicts with base knowledge (e.g., slang vs formal language) may degrade generality.  
- Tokenizer mismatch: ensure the same vocab to avoid OOV spikes.

**Optimize & Communicate**  
- Profile GPU usage; if memory is tight, shard the corpus or use gradient checkpointing.  
- Explain trade‑offs: deeper continued pre‑training gives better domain fluency but costs compute and may hurt out‑of‑domain robustness.  
- For interviewers: emphasize that this technique balances *knowledge retention* with *domain specialization*, a core skill for building scalable NLP services at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
