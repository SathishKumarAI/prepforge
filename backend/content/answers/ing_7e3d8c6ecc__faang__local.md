---
qid: ing_7e3d8c6ecc__faang__local
question: 'Explain: Concept drift vs. Data drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 522
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:38:43-05:00'
sources: []
---

**Concept Drift vs. Data Drift (FAANG‑style answer)**  

| | **Concept Drift** | **Data Drift** |
|---|------------------|---------------|
| **Definition** | The underlying relationship between features and target changes over time. | The marginal distribution of the input data shifts, but the mapping to the target stays the same. |

---

### 1️⃣ Clarify  
The interview question asks: *What is concept drift? How do we detect it and what actions can we take?* I’ll assume we’re dealing with a supervised learning model deployed in production that receives streaming or batch data.

### 2️⃣ Approach  
1. **Explain the phenomenon** – contrast with data drift.  
2. **Detection methods** – statistical tests, monitoring performance metrics, change‑point detection algorithms.  
3. **Mitigation strategies** – retraining schedules, online learning, adaptive models, feature engineering.  

### 3️⃣ Depth  
- **Statistical Tests**: Kolmogorov–Smirnov or Chi‑square on model residuals; sliding window comparison of predictions vs. labels.  
- **Performance Monitoring**: Track AUC/accuracy over time; a significant drop (e.g., >2 % over 3 days) triggers an alert.  
- **Change‑Point Detection**: Algorithms like Page‑Hinkley or ADWIN that flag abrupt changes in the data stream.  
- **Mitigation**:  
  - *Batch retraining*: schedule nightly/weekly updates with latest labeled data.  
  - *Online learning*: update model weights incrementally (e.g., SGD) when a drift is detected.  
  - *Ensemble of models*: maintain multiple snapshots and weight them by recent performance.  

### 4️⃣ Edge Cases  
- **Gradual vs. abrupt drift**: Page‑Hinkley handles gradual shifts; ADWIN better for sudden jumps.  
- **Label scarcity**: In unsupervised settings, use proxy metrics (e.g., calibration error).  
- **Noise vs. drift**: Ensure alerts aren’t triggered by random noise—use smoothing or confidence intervals.

### 5️⃣ Optimize & Communicate  
I’d present a dashboard showing drift score and performance curves, explain that automated retraining pipelines reduce latency, and emphasize the trade‑off between model freshness and training cost. This demonstrates structured problem solving, clear communication, and depth—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
