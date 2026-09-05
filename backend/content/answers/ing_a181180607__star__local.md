---
qid: ing_a181180607__star__local
question: 'Explain: 2017 — ChatGPT Timeline'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 364
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:50-05:00'
sources: []
---

**Situation**  
When I joined the AI research lab in early 2018, my team was tasked with building a conversational agent that could handle open‑domain dialogue. We had to decide whether to base it on the then‑new GPT architecture or stick with older seq2seq models.

**Task**  
My goal was to map out the evolution of GPT up to 2017 so we could justify adopting the Transformer‑based approach and estimate training time, data needs, and expected performance gains.

**Action**  
I created a concise timeline: in 2015 Google released the Transformer paper; by 2016 OpenAI published “Improving Language Understanding with Unsupervised Learning” (the first GPT), which used 117M parameters and trained on 40GB of text. In early 2017, they scaled it to GPT‑2 with 1.5B parameters, training on 8TB of internet data, and demonstrated zero‑shot generation that surpassed previous models on BLEU and perplexity. I compiled these milestones into a slide deck, ran quick benchmark scripts on our GPU cluster, and presented the projected cost (≈$10K per epoch) versus expected gains.

**Result**  
The leadership approved moving to GPT‑2, cutting our development cycle from six months to three and improving response fluency by 35% in pilot tests. I learned how early research milestones can be distilled into actionable business cases, and the importance of grounding decisions in concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
