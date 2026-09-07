---
qid: ing_83d2e550dd__faang__local
question: 'Explain: And there are several popular forecasting models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 671
total_tokens: 903
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:22-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to list and briefly explain the most widely used machine‑learning models for time‑series forecasting (e.g., sales, traffic, weather). I’d confirm whether they want purely statistical methods, deep learning approaches, or a mix of both.

**Approach**  
1. Enumerate classic statistical baselines (ARIMA, SARIMAX).  
2. Cover exponential smoothing families (Holt–Winters, Prophet).  
3. Mention machine‑learning regressors that can ingest lagged features (Random Forest, Gradient Boosting, XGBoost).  
4. Highlight deep learning nets tailored for sequences (RNNs/LSTMs, Temporal Convolutional Networks, Transformers).  
5. Note hybrid or ensemble techniques.

**Depth**  

| Model | Core idea | Typical use‑case | Complexity |
|-------|-----------|-----------------|------------|
| **ARIMA / SARIMAX** | AutoRegressive + Integrated + Moving Average; seasonal extension | Stationary data with clear seasonality | O(p+q) per step, easy to tune |
| **Holt–Winters (ETS)** | Error‑Trend‑Seasonality exponential smoothing | Short‑term retail sales, weather | Linear in time, robust to missing data |
| **Prophet** | Piecewise linear/seasonal trend + holidays | Forecasting with business events | O(n) training, interpretable |
| **Random Forest / Gradient Boost** | Tree ensembles on lagged features | Non‑linear patterns without seasonality | O(m log n), can handle categorical covariates |
| **XGBoost / LightGBM** | Regularized boosting with tree splits | High‑dimensional feature sets (e.g., click‑through) | Fast GPU support, handles missing data |
| **LSTM / GRU** | Recurrent nets that retain hidden state | Long‑range dependencies (traffic flow) | O(seq × hidden) per epoch, needs many epochs |
| **Temporal CNN** | 1D convolutions with causal padding | Parallelizable, captures local patterns | O(k × seq), less memory than RNNs |
| **Transformer (TimeSeries Transformer)** | Self‑attention over sequence | Very long horizons, multi‑step forecasts | O(seq²) attention cost, powerful |

**Edge cases**  
- Non‑stationary series → differencing or trend removal.  
- Sparse data → Prophet’s holiday handling or tree models with missingness.  
- Very long horizons → Transformers suffer quadratic memory; use causal CNNs instead.  
- Real‑time forecasting → online learning with LightGBM or incremental RNNs.

**Optimize & Communicate**  
I’d explain that the choice hinges on data size, seasonality strength, interpretability needs, and latency constraints. I’d suggest starting with a statistical baseline (ARIMA/Prophet) for quick insight, then iteratively adding tree‑based or neural models if performance lags, while monitoring overfitting via cross‑validation on rolling windows. This shows structured thinking, depth of knowledge, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
