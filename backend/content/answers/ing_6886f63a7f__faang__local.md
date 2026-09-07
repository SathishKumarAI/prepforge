---
qid: ing_6886f63a7f__faang__local
question: 'Explain: How to prepare — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 578
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:46:36-05:00'
sources: []
---

**Clarify**  
The interviewer is asking *how to prepare a large‑scale language model (LLM) using the DeepSeek framework*.  Confirm assumptions:  
- Do we target pre‑training, fine‑tuning, or inference?  
- What compute budget and data volume are available?  
- Are we limited to open‑source tools or can we use proprietary APIs?

**Approach**  
1. **Data pipeline** – curate a diverse corpus (web text, books, code).  Clean, dedupe, shard for parallel ingestion.  
2. **Tokenizer & vocab** – train SentencePiece/BPE on the corpus; choose a size (~50k tokens) that balances coverage and memory.  
3. **Model architecture** – start from DeepSeek’s transformer backbone (e.g., 24‑layer, 16‑head, 2048‑dim).  Use efficient attention (flash/linear).  
4. **Pre‑training schedule** – use masked LM + causal LM objectives; schedule learning rate with cosine decay and warm‑up; employ gradient checkpointing for memory savings.  
5. **Infrastructure** – multi‑node GPU cluster (A100 or H100), ZeRO‑2/3 for optimizer state sharding, DeepSpeed/Accelerate for data parallelism.  
6. **Evaluation & checkpoints** – periodic perplexity on held‑out set; early stopping if validation loss plateaus.

**Depth**  
- **Tokenization**: 50k BPE → ~0.1 % OOV.  
- **Training cost**: ≈10 M GPU‑hours for a 13B model (~$30k).  
- **Speedup tricks**: use mixed precision (FP16/BF16), fused AdamW, and tensor parallelism to reduce epoch time by ~2×.  
- **Fine‑tuning**: adapter layers or LoRA (≤1 % parameter increase) for domain adaptation; reduces compute by 80%.

**Edge Cases**  
- *Data leakage*: ensure no private user data slips into the corpus.  
- *Tokenization mismatch*: test with unseen tokens to avoid OOV spikes.  
- *Hardware failure*: checkpoint every 10k steps; use fault‑tolerant job schedulers.

**Optimize & Communicate**  
Explain that the key bottlenecks are data sharding and memory, so we prioritize efficient attention and ZeRO sharding.  Highlight trade‑offs: larger vocab reduces OOV but increases embedding memory.  Conclude with a quick sanity check plan (validation perplexity, downstream task performance) to verify readiness before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
