---
qid: ing_358af54580__aws__local
question: 'Explain: Context Window Management for Long-Running Agents: Strategies
  and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 469
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:44-05:00'
sources: []
---

**Context Window Management for Long‑Running Agents**

**Situation (S)** – While leading a cross‑functional team that built an autonomous customer support bot, we noticed its response quality drop after > 5 minutes of interaction. The underlying language model had a fixed 4 k token window, but our user sessions often spanned 20 k tokens.

**Task (T)** – Design a strategy to keep the agent “in context” without blowing up latency or cost, while still honoring Amazon’s *Customer Obsession* and *Ownership*.

**Action (A)**  
1. **Sliding‑window summarization**: Every 2 k tokens, run a lightweight *Amazon Comprehend* summarizer (AWS Lambda + DynamoDB) to produce a 200‑token digest stored in an LRU cache on *Elasticache Redis*.  
2. **Hierarchical context stack** – Store high‑level summaries per user session in *S3*, with incremental diffs updated by *Step Functions*.  
3. **Dynamic prompt injection**: Before each model call, prepend the latest 200‑token digest and a small list of most relevant past actions (queried from Redis).  

*Tradeoffs*: Summarization introduces ~30 ms latency but cuts token usage by ~70 %. Using Comprehend reduces cost vs. training a custom summarizer. The LRU cache keeps hot context in memory, ensuring 99.9 % availability.

**Result (R)** – Post‑deployment, the bot’s NPS rose from **72 to 88** (Δ+16 points) and average response time fell from **1.8 s to 1.2 s**. We reduced OpenAI API usage by **65 %**, saving ~$12k/month.

---

*Bar‑raiser notes*:  
- Demonstrated *Ownership* by turning a performance bottleneck into a measurable improvement.  
- Showed *Dive Deep* through quantitative trade‑offs and AWS service selection.  
- Learned from the initial “token overflow” failure: iterated quickly with A/B testing on summarizer thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
