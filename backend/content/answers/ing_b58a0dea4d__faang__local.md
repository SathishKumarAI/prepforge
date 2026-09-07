---
qid: ing_b58a0dea4d__faang__local
question: 'Explain: >> Well, I would guess on very — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 525
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:45:33-05:00'
sources: []
---

**Clarify**

> “Explain anomaly detection: its algorithms, how they work, and where we use them.”  
Assume the interviewer wants a concise overview of classic methods (statistical, distance‑based, density, clustering, classification) and real‑world applications (fraud, fault detection, health monitoring).  

**Approach**

1. Classify by assumption: parametric vs non‑parametric, supervised vs unsupervised.  
2. For each class, pick a representative algorithm and describe its core idea.  
3. Map algorithms to use‑cases, noting strengths/weaknesses.

**Depth**

| Algorithm | Core Idea | Complexity | Typical Use |
|-----------|-----------|------------|-------------|
| **Z‑score / Mahalanobis** | Assumes Gaussian; flag points > kσ or far in covariance space | O(n·d) per point | Finance fraud, sensor outliers |
| **Isolation Forest** | Randomly splits features; anomalies isolated quickly | O(t·n·log n) | Network intrusion, click‑stream anomalies |
| **Local Outlier Factor (LOF)** | Density around a point vs neighbors’ density | O(n²·d) naïve, optimized with KD‑trees | Image defect detection |
| **One‑Class SVM** | Finds decision boundary around normal data | O(n³) training; linear after kernel trick | Manufacturing process control |
| **Autoencoder (deep)** | Reconstructs input; high reconstruction error signals anomaly | Depends on network size | Video surveillance, medical imaging |

**Edge Cases**

- High dimensionality → distance concentration; use dimensionality reduction.  
- Imbalanced data → many normals → thresholds must be tuned carefully.  
- Streaming data → need incremental or online variants (e.g., streaming Isolation Forest).

**Optimize & Communicate**

- For large‑scale deployments, prefer *Isolation Forest* or *LOF with approximate neighbors*.  
- Explain trade‑offs: statistical methods are fast but brittle to non‑Gaussianity; tree‑based methods scale better and capture complex patterns.  
- Wrap up by highlighting that choosing an algorithm hinges on data characteristics (size, dimensionality, labeled samples) and latency constraints.

> **TL;DR:** Anomaly detection spans simple statistical tests to sophisticated neural nets; pick based on assumptions about normality, scalability needs, and whether you have labels or not.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
