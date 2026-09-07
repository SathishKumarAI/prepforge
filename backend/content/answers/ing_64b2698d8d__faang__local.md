---
qid: ing_64b2698d8d__faang__local
question: 'Explain: Every prompt I ship keeps getting heavier'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 407
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:25-05:00'
sources: []
---

**Clarify**  
You’re noticing that each new prompt you send to your model consumes more memory or compute than the previous one. Likely causes: longer token sequences, larger context windows, or higher‑level features (e.g., embeddings). Confirm: what tokenizer is used? Are prompts increasing in length? Is the same model architecture deployed?

**Approach**  
1. Log prompt lengths and memory footprints per request.  
2. Profile tokenization → embedding size vs. batch size.  
3. Check if the model re‑allocates buffers each call (e.g., not reusing GPU tensors).  

**Depth**  
- **Token count:** Every additional token expands the attention matrix quadratically (O(n²)), so a 10 % longer prompt can increase compute by ~20 %.  
- **Embedding reuse:** If you allocate new tensors per call, you incur allocation overhead; using pinned memory or reusing buffers keeps GPU usage stable.  
- **Batching & caching:** Small prompts processed individually cause under‑utilization of parallelism. Group similar‑length prompts into batches to amortize kernel launch costs.

**Edge Cases**  
- Extremely short prompts may still trigger full pipeline overhead.  
- Variability in tokenization (e.g., subword splits) can lead to sudden jumps.  
- Memory fragmentation on GPU if buffers aren’t freed correctly.

**Optimize & Communicate**  
- **Token trimming:** Strip unnecessary prefixes or use a fixed context window.  
- **Dynamic batching:** Accumulate prompts until reaching a target batch size before inference.  
- **Cache embeddings:** Pre‑compute static parts of the prompt (e.g., system messages).  

Explain to stakeholders that heavier prompts stem from quadratic attention costs and allocation patterns; mitigations involve better batching, token management, and buffer reuse—yielding predictable latency and lower GPU memory usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
