---
qid: ing_0858090761__star__local
question: 'Explain: sampling / inference — GitHub - karpathy/nanoGPT: The simplest,
  fastest repository for training/finetuning medium-sized GPTs. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 329
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:37-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with deploying a lightweight language model for an internal chatbot that needed to run on a Raspberry Pi. The team had been using the Karpathy nanoGPT repo, but every inference call would freeze the Pi because we were sampling from a full softmax over 50 k tokens.

**Task**  
I had to reduce latency and memory usage so that each response generated in under 200 ms while keeping the model’s accuracy above 80% BLEU on our test set.

**Action**  
I replaced the greedy sampler with nucleus (top‑p) sampling, limiting the softmax to the smallest token subset whose cumulative probability exceeded 0.9. I also added temperature scaling (T=1.2) to increase diversity without blowing up the vocabulary size. On the code side, I modified `sample.py` to cache the top‑k logits and used PyTorch’s `torch.topk` for efficient GPU/CPU execution. Finally, I profiled the inference loop with `cProfile`, iteratively pruning unnecessary tensor copies.

**Result**  
Latency dropped from 1.3 s to 0.18 s per response, and BLEU stayed at 82%. The Pi could now handle 10 concurrent chat sessions without stalling. I learned that careful sampler design—balancing top‑p thresholds, temperature, and caching—can drastically improve real‑world inference performance on constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
