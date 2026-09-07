---
qid: ing_dd9a4142e8__faang__local
question: 'Explain: FAANG Must Do Problems — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 569
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:13:54-05:00'
sources: []
---

## Clarify  
The interviewer is asking for a concise description of the “FAANG‑Must‑Do” problem set that often appears in machine‑learning coding interviews at Meta, Google, Amazon, Netflix, and Apple.  
Key assumptions to confirm:  
- We’re focusing on **coding/algorithmic** problems, not research papers.  
- The problems test both ML intuition (feature engineering, model choice) and software skills (data structures, time complexity).  

## Approach  
1. Identify the typical problem categories.  
2. Summarize each category’s core objective.  
3. Highlight common patterns in solutions and pitfalls.  

## Depth  
| Category | Typical Problem | Core Skill Tested | Sample Pattern |
|----------|-----------------|-------------------|----------------|
| **Recommendation** | Predict user‑item ratings (e.g., Netflix “Top N”). | Matrix factorization, collaborative filtering, cold‑start handling. | SVD + bias terms; use sparse matrices for speed. |
| **Ranking / Ranking Losses** | Learning to rank search results. | Pairwise/pointwise loss, AUC optimization. | LambdaRank or pairwise hinge loss with SGD. |
| **Anomaly Detection** | Detect fraud in credit‑card transactions. | One‑class SVM, isolation forest, autoencoders. | Train on “normal” data; threshold by percentile. |
| **Time‑Series Forecasting** | Predict demand for Amazon inventory. | ARIMA vs LSTM, feature lagging, seasonality handling. | Use differencing + Prophet or LSTM with attention. |
| **Computer Vision** | Classify images in a large dataset. | Convolutional nets, transfer learning, data augmentation. | Fine‑tune ResNet50; mixup training for robustness. |
| **Natural Language Processing** | Sentiment analysis on Amazon reviews. | Tokenization, embeddings, RNN/Transformer. | Use BERT fine‑tuning + softmax classification. |

## Edge Cases  
- Imbalanced data (rare positives).  
- Missing values in high‑dimensional feature space.  
- Real‑time inference constraints (latency < 10 ms).  

## Optimize & Communicate  
Explain trade‑offs: e.g., matrix factorization is fast but struggles with new users; deep nets give higher accuracy at cost of compute. Emphasize modular code, unit tests for each component, and profiling to meet FAANG latency requirements. Conclude by stressing that mastering these patterns demonstrates both ML acumen and production‑ready engineering—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
