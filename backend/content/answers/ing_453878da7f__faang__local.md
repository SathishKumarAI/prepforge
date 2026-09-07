---
qid: ing_453878da7f__faang__local
question: 'Explain: Emailing — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 632
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:25:09-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to “explain the top 20 questions about emailing in a machine‑learning context.” I’d first confirm what they mean by *emailing*—spam filtering, content recommendation, click‑through prediction, or something else—and whether the goal is a survey of research topics or an interview‑style Q&A.  

**Approach**  
I’ll treat it as a knowledge showcase: list 20 canonical ML questions that drive email systems, grouping them into categories (classification, ranking, personalization). For each, I’ll give a concise answer and note key algorithms or datasets.

**Depth**  
1. *Spam detection* – Naïve Bayes vs. deep CNNs on text.  
2. *Phishing detection* – graph‑based anomaly detection on link structures.  
3. *Email classification* – hierarchical SVM, BERT fine‑tuning.  
4. *Topic modeling* – LDA, neural topic models.  
5. *Sentiment analysis* – RNNs, transformer‑based sentiment heads.  
6. *User intent inference* – sequence labeling with CRFs.  
7. *Personalized subject line generation* – seq2seq with attention.  
8. *Relevance ranking* – LambdaMART on click logs.  
9. *A/B testing of UI changes* – bandit algorithms.  
10. *Cold‑start for new users* – transfer learning from other domains.  
11. *Spam‑score calibration* – Platt scaling, isotonic regression.  
12. *Anomaly detection in volume spikes* – ARIMA + LSTM hybrid.  
13. *Email thread summarization* – pointer‑generator networks.  
14. *Privacy‑preserving ML* – federated learning on client devices.  
15. *Real‑time filtering* – streaming inference with ONNX runtime.  
16. *Explainability of spam decisions* – SHAP, LIME for text.  
17. *Ad targeting in newsletters* – collaborative filtering.  
18. *Multi‑modal email understanding* (text + image) – vision‑language models.  
19. *Robustness to adversarial rewrites* – adversarial training.  
20. *Compliance with regulations (GDPR, CAN‑SPAM)* – data‑flow auditing algorithms.

**Edge Cases**  
- Non‑English corpora: multilingual embeddings.  
- Evolving spam tactics: continual learning pipelines.  
- Imbalanced classes: focal loss, SMOTE.

**Optimize & Communicate**  
I’d finish by summarizing that these questions cover the full ML lifecycle in email systems—data ingestion, feature engineering, model training, deployment, monitoring, and ethics. I’d highlight trade‑offs (e.g., interpretability vs. accuracy) and suggest a modular architecture that can swap components as new research emerges. This structured answer demonstrates breadth, depth, and clear communication—the hallmark of FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
