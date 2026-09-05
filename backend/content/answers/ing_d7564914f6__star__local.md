---
qid: ing_d7564914f6__star__local
question: Explain sequence packing in SFT. What's the attention contamination problem
  and how is it solved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 307
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:28-05:00'
sources: []
---

**Situation:**  
In a recent fine‑tuning run for our chatbot, we were training with Soft‑Target Fine‑Tuning (SFT) on a dataset of user dialogues that ranged from 30 to 300 tokens. The model was over‑fitting on the long examples because shorter sequences were padded to match the longest one in each batch.

**Task:**  
I needed to reduce padding waste, keep the GPU utilization high, and prevent “attention contamination” where padding tokens influence the attention scores of real tokens during training.

**Action:**  
Implemented sequence packing by first sorting batches by length, then concatenating multiple short sequences into a single packed input while inserting special separator tokens. I updated the attention mask to treat these separators as non‑attending boundaries, effectively splitting the attention computation per original sentence. I also added a custom loss weighting scheme so that padding positions contributed zero gradient. This required tweaking the data loader in PyTorch and adjusting the transformer’s `attention_mask` logic.

**Result:**  
Packing cut effective batch padding by ~45%, boosting GPU throughput from 8 to 12 samples/sec. The model’s perplexity on validation dropped from 32.1 to 28.7, a 10% relative improvement, while eliminating spikes in loss that previously occurred at the start of long sequences. I learned that careful masking and batch composition can dramatically improve both efficiency and training stability in SFT pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
