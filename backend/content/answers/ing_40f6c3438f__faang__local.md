---
qid: ing_40f6c3438f__faang__local
question: 'Explain: Padding side — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 634
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:15:08-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *padding side* in the context of Hugging‑Face text‑generation pipelines (e.g., `AutoTokenizer`, `TextGenerationPipeline`). Assume we’re dealing with batch inference where sequences are padded so that tensors have equal length, and we want to know why left or right padding matters for generation.

**Approach**  
1. Define what padding side means and its default settings.  
2. Explain how tokenizers handle it when packing inputs for generation.  
3. Discuss the impact on model attention masks and decoding logic.  
4. Cover practical implications (e.g., `past_key_values` caching, GPU memory).  

**Depth**  
- *Padding side* is a tokenizer attribute (`padding_side`) that can be `'left'` or `'right'`.  
- **Right‑pad** (`'right'`): pads after the actual tokens. This aligns with the causal attention mask used in transformers; the model never attends to padding because it lies outside the sequence length. During generation, the decoder appends new tokens on the right, so the pad stays at the end and never interferes.  
- **Left‑pad** (`'left'`): pads before the actual tokens. This is useful when using models that expect left‑aligned context (e.g., some language models trained with left padding). However, for causal decoders it introduces a problem: the model’s attention mask must exclude the padded prefix, and the decoder’s autoregressive loop must skip over these positions to avoid generating nonsense. Hugging‑Face handles this by shifting the `attention_mask` so that only the real tokens are attended to; but when using caching (`past_key_values`), left padding can waste memory because the cache must hold key/value pairs for the padded positions unless you trim them manually.  
- In practice, most generation pipelines default to **right‑padding** because it preserves the natural flow of decoding and keeps the attention mask simple: `[1]*len(seq) + [0]*pad_len`.  

**Edge Cases**  
- Models trained with left padding (e.g., GPT-NeoX on certain configs) may produce artifacts if you use right padding during inference.  
- Very long batches can lead to excessive padding at the left side, causing GPU memory blow‑up and slower generation due to extra key/value cache slots.  
- Mixing paddings in a batch will break attention masks; always keep one convention per model.

**Optimize & Communicate**  
- For production text‑generation services, stick with right‑padding unless you have a specific left‑pad model.  
- If left padding is required, pre‑trim the padded tokens before passing to the decoder or use `tokenizer.pad_token_id` and adjust the attention mask accordingly.  
- Communicate that padding side primarily affects memory usage and decoding speed; it does not change the semantics of generated text if handled correctly.

*Word count: ~200*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
