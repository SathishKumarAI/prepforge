---
qid: ing_89d79ca6d8__star__local
question: 'Explain: When is an LLM the wrong tool? Give me real examples where you''d
  push back on a PM.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 351
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:34-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a customer‑support chatbot that would automatically generate replies to user tickets. The product manager wanted us to use an LLM like GPT‑4 for all responses, citing “AI will reduce workload by 70%.”  

**Task:**  
I needed to evaluate whether the LLM was suitable for every type of ticket and demonstrate any risks so we could set realistic expectations.

**Action:**  
First, I ran a benchmark on our top 1,000 tickets: we split them into categories—policy queries, billing disputes, technical bugs, and sentiment‑heavy complaints. The LLM scored 95% accuracy on policy queries but only 65% on sentiment‑heavy complaints because it often misread sarcasm or emotional nuance. I also measured latency; the model added a 2‑second round‑trip per request, which would break our SLA of <1 s for high‑volume tickets. Finally, I mapped out compliance concerns—some policy answers required strict wording that the LLM could inadvertently alter.

I presented these findings in a short demo: showing side‑by‑side responses, latency charts, and compliance flags. I proposed a hybrid workflow—rule‑based templates for billing and sentiment tickets, with the LLM only for straightforward policy questions.

**Result:**  
The PM agreed to the hybrid approach. We reduced ticket turnaround time by 35% instead of the promised 70%, maintained SLA compliance, and avoided potential regulatory issues. I learned that a thorough domain‑specific audit is essential before adopting an LLM, and that clear communication with stakeholders can align expectations with technical reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
