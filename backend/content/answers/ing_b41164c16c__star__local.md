---
qid: ing_b41164c16c__star__local
question: 'Explain: Context & Memory Management <a name="context-memory"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 324
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:59-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time chatbot for customer support that had to handle 10,000 concurrent users while staying under a 200 ms response time. The model we used was a fine‑tuned GPT‑3 variant with a maximum token limit of 4,096, but our conversations often spanned longer than that.

**Task**  
I needed to design a context‑management system that would keep the chatbot’s memory coherent across multi‑turn interactions without blowing up latency or exceeding GPU memory limits.

**Action**  
First I profiled the average conversation length and found it was 1,200 tokens. I then implemented a sliding‑window buffer that retained only the last 2,000 tokens per session and used a lightweight key–value store (Redis) to persist older turns in compressed JSON. For each request I fetched the relevant context, pruned redundant sentences using ROUGE‑based similarity, and fed it back into the model. To keep GPU memory low I switched from PyTorch eager execution to TorchScript compiled models and offloaded the embedding cache to CPU RAM.

**Result**  
The bot’s average latency dropped from 350 ms to 180 ms, staying well below our SLA. Memory usage per session fell by 45%, allowing us to support 20% more concurrent users. I learned that smart context pruning combined with efficient serialization can make large language models viable in production at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
