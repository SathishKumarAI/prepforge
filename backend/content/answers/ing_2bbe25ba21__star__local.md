---
qid: ing_2bbe25ba21__star__local
question: 'Explain: KV Cache and Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 374
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:18-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the latency of our conversational AI model that served a global customer‑support chatbot. Each request would load the entire transformer from scratch, causing an average response time of 1.2 s and a GPU memory footprint of 18 GB.

**Task** – Reduce inference latency by at least 30 % while keeping the same accuracy, and make the system scalable to handle 10k concurrent users.

**Action** – I introduced two complementary caching layers. First, I implemented a *KV cache* that stores key‑value pairs from the transformer’s self‑attention for each user session. By reusing these tensors across successive turns, we avoided recomputing attention weights, cutting GPU compute by ~35 %. Second, I added *context caching*: we extracted and persisted high‑level semantic vectors (the last hidden state) after every few messages, so that the next turn could start from a warm context instead of generating it from scratch. This reduced token generation time by 20 % and lowered peak memory usage to 12 GB. I used PyTorch’s `torch.jit` for efficient serialization and Redis for fast in‑memory storage.

**Result** – The combined approach slashed average latency from 1.2 s to 0.8 s (33 % improvement) and reduced GPU cost by 40 %. We also achieved a 5 % higher user satisfaction score on the chatbot’s NPS survey. I learned that thoughtful cache design can deliver measurable performance gains without sacrificing model quality, and that combining multiple caching strategies often yields greater benefits than any single technique alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
