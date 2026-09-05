---
qid: ing_e09f890fa1__star__local
question: 'Explain: Tier 3: Run on a sample (expensive LLM, ~$5/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 322
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:01-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a chatbot for enterprise clients that needed legal compliance answers. Our initial model was fine‑tuned GPT‑4, but the cost per inference (~$5/1K tokens) made it unsustainable at scale.

**Task:**  
I had to demonstrate that we could still deliver high‑quality responses while keeping costs under control, so I proposed a tiered inference strategy: run the expensive LLM only on a carefully selected sample of user queries that were ambiguous or high‑risk.

**Action:**  
First, I built a lightweight rule‑based filter using spaCy to flag sentences containing legal terms and sentiment shifts. Then, I implemented an active learning loop in Python where the model would request human review for flagged samples, and those labeled “complex” would be routed to GPT‑4. The rest of the traffic hit our cheaper LLM (GPT‑3.5). We set a threshold of 2% of total queries per day for the expensive tier, monitored latency with Prometheus, and logged cost metrics in Grafana.

**Result:**  
Within two weeks, the proportion of high‑risk requests dropped from 10% to 1.8%, cutting our daily inference spend from $3000 to $700 while maintaining a 95% accuracy on compliance answers. I learned that combining lightweight heuristics with selective expensive inference can dramatically reduce costs without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
