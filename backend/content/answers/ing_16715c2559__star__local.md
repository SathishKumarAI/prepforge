---
qid: ing_16715c2559__star__local
question: How would you choose an embedding model? What role does MTEB play, and what
  are its limits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 342
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:29-05:00'
sources: []
---

**Situation:**  
When our team was building a semantic search feature for the company’s internal knowledge base, we had to pick an embedding model that could handle both technical documentation and informal chat logs while keeping inference latency under 50 ms per query.

**Task:**  
I needed to evaluate candidate models (OpenAI’s text‑embedding‑ada‑002, Sentence‑Transformers SBERT variants, and a custom fine‑tuned BERT) against real data, ensuring the chosen model delivered high relevance scores, low latency, and acceptable cost.

**Action:**  
First, I benchmarked each model on a labeled validation set using MTEB’s “Semantic Search” subtask to get a baseline ranking score. Then I performed an ablation: fine‑tuned SBERT on our domain data and compared the MAP improvement versus inference time. I also profiled GPU memory usage and latency on our production hardware. Finally, I ran A/B tests with live users, measuring click‑through rate and time to find answer.

**Result:**  
The fine‑tuned SBERT model achieved a 12 % higher MAP than ada‑002 while keeping latency at ~35 ms per query, reducing inference cost by 30 %. MTEB provided a quick, standardized benchmark, but its synthetic datasets didn’t capture our mixed‑style text, so the final validation had to be domain‑specific. I learned that MTEB is great for initial screening, but real‑world data and latency profiling are critical before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
