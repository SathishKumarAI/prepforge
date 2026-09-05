---
qid: ing_240a6eac05__star__local
question: 'Explain: and then we''ll be able to access — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 365
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:20-05:00'
sources: []
---

**Situation:**  
During my final year of university, I was part of a capstone team building an automated sentiment‑analysis tool for a local e‑commerce platform. Their customer support tickets were growing by 35% per month, and the manual triage process was causing delays.

**Task:**  
I needed to design and implement a machine‑learning pipeline that could classify ticket texts into “urgent,” “non‑urgent,” or “spam” with at least 90 % accuracy, so the support team could prioritize responses in real time.

**Action:**  
I started by scraping 15,000 labeled tickets and used NLTK to clean and tokenize the data. I experimented with several feature extraction methods: TF‑IDF vectors, word embeddings via GloVe, and a custom n‑gram model. For modeling, I compared Logistic Regression, Random Forest, and a lightweight LSTM in Keras. After hyperparameter tuning with GridSearchCV, I settled on a 2‑layer LSTM (128 units each) trained for 12 epochs, which leveraged the sequential nature of language better than bag‑of‑words approaches. I deployed the model as a FastAPI service behind Docker containers, exposing an endpoint that the ticketing system could call in under 200 ms.

**Result:**  
The final system achieved 92.7% accuracy and reduced triage time by 40%, cutting average response time from 3.5 hours to 2.1 hours. I learned how crucial data preprocessing is, the trade‑off between model complexity and inference latency, and the importance of containerizing ML services for production scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
