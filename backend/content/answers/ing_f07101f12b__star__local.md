---
qid: ing_f07101f12b__star__local
question: 'Explain: Training — How does ChatGPT work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 304
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:53-05:00'
sources: []
---

**Situation:**  
When I joined my startup as a data scientist, we were building an internal chatbot to triage customer support tickets. The product team wanted the bot to understand natural language and suggest relevant FAQ articles, but their existing rule‑based system was slow and inaccurate.

**Task:**  
I had to prototype a conversational model that could generate contextual responses with high precision while staying within our compute budget of a single GPU server.

**Action:**  
First, I gathered 200 k labeled ticket–response pairs from the helpdesk database. Using Hugging Face’s `transformers` library, I fine‑tuned a pre‑trained GPT‑2 base model (117M parameters) with a masked language objective and added a classification head for article recommendation. To reduce inference latency, I applied knowledge distillation to a 30 M parameter DistilGPT variant and quantized the weights to int8. During training, I monitored perplexity and F1 on a held‑out set, stopping when perplexity hit 18 and F1 exceeded 0.78.

**Result:**  
The distilled model served predictions in under 150 ms per request, boosting customer satisfaction scores from 72% to 87% within two weeks of deployment. I learned that careful data curation, fine‑tuning on a relevant corpus, and lightweight distillation can make transformer models production‑ready even on modest hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
