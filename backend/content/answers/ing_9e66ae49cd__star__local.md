---
qid: ing_9e66ae49cd__star__local
question: 'Explain: Pattern Recognition and Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 358
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:54-05:00'
sources: []
---

**Situation:**  
At my last company we had a customer‑support ticketing system where about 30 % of the incoming tickets were mis‑classified into the wrong priority queue, causing SLA breaches and unhappy clients.

**Task:**  
I was asked to build an automated classification model that could predict the correct priority (P1–P4) from ticket text in real time with at least 90 % accuracy, while keeping inference latency under 200 ms per request.

**Action:**  
First I gathered a labeled dataset of 120 k tickets and used spaCy to tokenize, lemmatize, and extract TF‑IDF features. To capture context I added a pre‑trained BERT base model fine‑tuned on our data. I experimented with different classifiers—logistic regression, XGBoost, and a lightweight transformer network—and performed cross‑validation to balance precision for P1 vs recall for lower priorities. After profiling, I distilled the BERT encoder into a 4‑layer DistilBERT model, reducing inference time to 140 ms while retaining 92 % F1 score. I deployed it as an Azure Function behind a caching layer so that repeated queries hit memory first.

**Result:**  
The new system lifted correct priority assignment from 70 % to 93 %, cutting SLA violations by 4× and saving the support team ~15 hours per week in manual triage. I learned how to trade off model complexity against latency, and that a small amount of domain‑specific fine‑tuning can yield huge operational gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
