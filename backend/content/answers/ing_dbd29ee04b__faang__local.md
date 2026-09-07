---
qid: ing_dbd29ee04b__faang__local
question: 'Explain: Popular Algos of Replication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 612
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:09:26-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for the most widely used *representation‑learning* techniques in ML—methods that map raw inputs into useful latent vectors (e.g., embeddings). I’ll assume they want a quick rundown of the key families and their core ideas.

**Approach**  
1. List the major categories (linear, neural, probabilistic).  
2. For each, give 1–2 flagship algorithms with why they’re popular.  
3. Mention typical use‑cases, strengths, and caveats.  
4. Conclude with trade‑offs and when to pick one over another.

**Depth**

| Category | Algorithm(s) | Core Idea | Typical Use |
|----------|--------------|-----------|-------------|
| **Linear / Spectral** | PCA, LDA, NMF | Project data onto orthogonal axes that capture variance or class separability. | Dimensionality reduction for tabular data; feature engineering. |
| **Probabilistic Graphical** | Factor Analysis, Gaussian Mixture Models, Latent Dirichlet Allocation (LDA) | Model latent variables as hidden factors explaining observed data via probability distributions. | Topic modeling, collaborative filtering. |
| **Neural / Deep** | Autoencoders (AE), Variational Autoencoders (VAE), Convolutional Autoencoders | Encode → bottleneck → decode; learn compact nonlinear embeddings. | Image denoising, anomaly detection. |
| | Word2Vec / GloVe | Predict context or factorize co‑occurrence matrix to produce dense word vectors. | NLP downstream tasks. |
| | Transformer Encoders (BERT, GPT) | Self‑attention over sequences; learn contextual token embeddings. | Language understanding, generation. |

**Edge Cases**  
- *PCA* fails on nonlinear manifolds; *AE* may collapse if bottleneck too small.  
- Probabilistic models assume distributional forms that may not hold in high‑dimensional sparse data.  
- Transformers demand massive GPU/TPU budgets; over‑parameterization can lead to overfitting.

**Optimize & Communicate**  
Explain that the choice hinges on data type, scale, and downstream task. For tabular data, start with PCA or LDA; for images, try Conv‑AE; for text, pick Word2Vec or BERT depending on compute budget. Emphasize validation: use reconstruction error (AE), perplexity (LDA), or downstream accuracy to compare embeddings. This structured narrative shows clear reasoning and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
