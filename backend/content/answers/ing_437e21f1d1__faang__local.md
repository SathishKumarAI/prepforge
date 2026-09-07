---
qid: ing_437e21f1d1__faang__local
question: 'Explain: System Design: AI Search Infrastructure — Perplexity AI Interview
  Prep 2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 374
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:13-05:00'
sources: []
---

**Clarify**  
You’re asked to design an *AI‑search* system that scores documents by perplexity (language model confidence). Confirm assumptions:  
• Query size and frequency?  
• Scale of corpus (billions of tokens)?  
• Real‑time latency requirement?  
• Model size (small vs. transformer)?  

**Approach**  
1. **Ingest & Index** – Shard the corpus; compute token n‑gram statistics per shard.  
2. **Model Serving** – Deploy a lightweight LM behind a REST/GRPC gateway; use model parallelism if large.  
3. **Scoring Pipeline** – For each candidate document, stream tokens to the LM, accumulate perplexity, and rank.  
4. **Caching & Approximation** – Cache recent query‑document pairs; approximate perplexity with Bloom filters for early pruning.  

**Depth**  
*Complexity*: Scoring is O(|Q|+|D|) per doc. With 10⁶ docs, use inverted index to reduce candidates to ~1 k.  
*Trade‑offs*: Exact perplexity requires full forward pass; approximations (e.g., fixed‑size context windows) cut latency but increase error.  

**Edge Cases**  
• Very short queries → high variance in perplexity; handle with smoothing.  
• OOV tokens → fallback to subword models.  
Test on synthetic bursts and cold‑start documents.  

**Optimize & Communicate**  
Explain how sharding improves parallelism, why caching reduces repeated LM calls, and how a two‑stage pipeline (filter + full score) balances speed vs. accuracy. Conclude with a latency/accuracy trade‑off chart to show design decisions clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
