---
qid: ing_8731d550bd__star__local
question: What is causal masking, why is it needed, and how is it implemented?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 290
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:57-05:00'
sources: []
---

**Situation:**  
During a product‑launch sprint for our next‑gen chatbot, the team noticed that the transformer model was leaking future context during training, leading to overfitting and inflated perplexity scores.

**Task:**  
I had to implement causal masking so the decoder could only attend to past tokens, restoring proper autoregressive behavior without sacrificing inference speed.

**Action:**  
First, I reviewed the attention matrix shape (batch × head × seq_len × seq_len). I then generated an upper‑triangular mask with `torch.triu` and filled future positions with a large negative value (`-1e9`). This mask was broadcast to match the batch and head dimensions. During forward passes, I added it to the raw attention logits before softmax, ensuring zero probability for future tokens. I also profiled GPU memory usage, tweaking the mask’s dtype to `float16` to keep RAM under 12 GB on our A100s.

**Result:**  
After masking, perplexity dropped from 28.4 to 18.7 (≈34% improvement), and training time increased by only 5%. The model now generates coherent, context‑aware responses, and I documented the mask implementation for future onboarding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
