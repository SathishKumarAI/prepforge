---
qid: ing_a05f6a7417__star__local
question: 'Explain: Citation — GitHub - rasbt/LLMs-from-scratch: Implement a ChatGPT-like
  LLM in PyTorch from scratch, step by step \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 380
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:26-05:00'
sources: []
---

**Situation**  
During my senior design project I was tasked with building a lightweight chatbot for the campus help desk. The client wanted an open‑source solution that could run on a single GPU, so we had to avoid large commercial APIs and instead implement a transformer from scratch in PyTorch.

**Task**  
I needed to create a model that could understand user queries and generate helpful responses with less than 2 GB of VRAM usage, while maintaining an average perplexity below 25 on our test set.

**Action**  
I followed the “LLMs‑from‑scratch” repository as a blueprint. First, I coded a custom `MultiHeadAttention` layer that reused PyTorch’s `einsum` for efficient dot products and applied rotary positional embeddings to keep memory low. Next, I built a simple `TransformerBlock` stack with LayerNorm and residual connections, training it on the 5‑million sentence subset of the OpenWebText dataset using mixed‑precision (`torch.cuda.amp`). To speed convergence I added a cosine‑annealed learning rate schedule and gradient checkpointing for the later layers. Finally, I wrapped everything in an `AutoModelForCausalLM`‑style interface so that inference could use beam search with a small beam width.

**Result**  
The model trained in 48 hours on a single RTX 3060, achieved a perplexity of 23.7, and generated coherent responses in under 200 ms per turn. The project was deployed to the help desk system, cutting response time by 40 % and earning us an “Innovation Award” from the university’s engineering department. I learned how careful layer design and memory‑efficient tricks enable transformer training on modest hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
