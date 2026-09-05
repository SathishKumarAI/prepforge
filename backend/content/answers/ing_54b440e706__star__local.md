---
qid: ing_54b440e706__star__local
question: 'Explain: Perplexity AI ML/AI Questions — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 386
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:24-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an NLP‑driven chat assistant to handle customer inquiries. Our engineering sprint deadline was tight: we had to deliver a fully functional model in three weeks so that the product team could demo it to investors.

**Task** – I needed to evaluate and compare several transformer models (DistilBERT, GPT‑2 small, and our own custom LSTM) to determine which would provide the best balance of speed and accuracy for our domain language. The key metric we agreed on was *perplexity*, a measure of how well a probability model predicts a sample.

**Action** – I prepared a validation set of 10 k real customer messages, tokenized them with SentencePiece, and computed perplexity by exponentiating the cross‑entropy loss:  
\( \text{Perp}(x) = e^{-\frac{1}{N}\sum_{i=1}^{N} \log p(x_i|x_{<i})} \).  
I ran each model on the same hardware, logged GPU usage and inference latency, and plotted perplexity versus throughput. The GPT‑2 small model achieved a perplexity of 18.4 with an average inference time of 45 ms per request, while DistilBERT’s perplexity was 21.7 but it processed twice as many requests per second.

**Result** – We chose the GPT‑2 small model for production: its lower perplexity translated to a 12% reduction in user-reported misunderstandings, and the latency hit our SLA of <50 ms. I learned that perplexity is not just a theoretical score—it directly correlates with real‑world conversational quality, but must always be balanced against compute constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
