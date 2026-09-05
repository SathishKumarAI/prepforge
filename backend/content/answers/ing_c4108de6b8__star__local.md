---
qid: ing_c4108de6b8__star__local
question: 'Explain: Devin heads east: Cognition opens its Singapore APAC headquarters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 320
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:05-05:00'
sources: []
---

**Situation**  
When our product team decided to launch a real‑time sentiment analysis engine for the Southeast Asian market, we discovered that existing models trained on North American text performed poorly on colloquial Singaporean English and Mandarin mix. The KPI was a 70 % accuracy threshold by Q3.

**Task**  
I had to adapt the model pipeline so it could understand local slang, code‑switching, and emojis without sacrificing inference speed for our mobile app.

**Action**  
First, I collected a balanced corpus from social media streams using a custom scraper in Python (requests + BeautifulSoup) and labeled 15 k sentences with spaCy’s annotation tool. Then I fine‑tuned a transformer (BERT‑Base) on this data, adding an extra token embedding layer for emojis. To keep latency under 150 ms, I distilled the model to DistilBERT and exported it via ONNX, deploying it on our AWS Lambda edge functions. Continuous integration with pytest ensured every commit kept accuracy above 68 %.

**Result**  
The localized model achieved 83 % accuracy within 120 ms inference time, surpassing the target by 13 %. User engagement in Singapore rose 22 % month‑over‑month, and we received positive feedback from regional product managers. I learned that combining data‑driven fine‑tuning with edge deployment can unlock high‑quality ML experiences even under strict latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
