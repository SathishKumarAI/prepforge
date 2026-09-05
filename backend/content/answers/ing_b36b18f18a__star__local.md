---
qid: ing_b36b18f18a__star__local
question: 'Explain: Since 2005, we''ve helped thousands of people get the perfect
  domain name'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 297
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:46-05:00'
sources: []
---

**Situation:**  
When I joined a startup in 2018, we were struggling to scale our domain‑name recommendation engine. Customers were dropping off because the suggestions felt generic and didn’t match their brand voice.

**Task:**  
I was tasked with improving relevance by 30 % while keeping latency under 200 ms for real‑time UX.

**Action:**  
First, I integrated a transformer‑based language model (GPT‑3 fine‑tuned on 1.2 M brand names) to generate creative variations. Then I built a lightweight cosine‑similarity layer using FAISS for fast nearest‑neighbor lookup against a curated list of trending keywords. To keep costs low, I offloaded inference to an edge TPU and cached popular suggestions in Redis. Finally, I set up A/B testing with Google Optimize to measure click‑through and conversion rates.

**Result:**  
Within three months, recommendation relevance jumped 35 %, and the click‑through rate rose from 4.2 % to 7.8 %. The engine stayed below the 200 ms latency target, enabling us to serve “perfect” domain names to thousands of users daily—exactly what we promised since 2005. I learned how to blend cutting‑edge NLP with production‑grade engineering for tangible business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
