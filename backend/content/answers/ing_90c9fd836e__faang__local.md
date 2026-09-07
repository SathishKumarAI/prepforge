---
qid: ing_90c9fd836e__faang__local
question: 'Explain: For time series, you use something called'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 480
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:06-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about a common preprocessing step in time‑series ML—using a *moving (or rolling) average* to smooth the signal before feeding it into a model. I’ll assume we’re dealing with univariate, evenly spaced data and that we want to reduce high‑frequency noise while preserving trend.

**Approach**  
1. **Define window size `k`** – the number of consecutive points to average (odd for symmetry).  
2. **Slide the window across the series** – at each step compute `(x_{t-k+1} + … + x_t)/k`.  
3. **Handle boundaries** – either pad with NaNs, mirror, or use a smaller window at edges.

**Depth**  
The moving average is a low‑pass filter: it attenuates components above the cutoff frequency `f_c ≈ 0.5/k` (in samples per unit). It’s linear and computationally O(n) if you update sums incrementally. For multivariate series, apply independently to each channel or use vectorized operations. In Python/pandas:

```python
df['smooth'] = df['value'].rolling(window=k, center=True).mean()
```

Trade‑offs: larger `k` yields smoother output but delays the response (lag ≈ k/2) and can wash out short‑term spikes that might be predictive.

**Edge Cases**  
- **Non‑uniform timestamps** – need interpolation before applying a fixed‑width window.  
- **Missing values** – rolling mean will drop them unless you specify `min_periods`.  
- **Seasonality** – simple moving average can blur seasonal peaks; consider weighted or exponential smoothing instead.

**Optimize & Communicate**  
If performance matters, maintain a running sum and subtract the element that exits the window. For real‑time streaming data, use a circular buffer. I’d explain to interviewers that while a plain moving average is easy to implement, one must balance smoothness vs. lag, and that more sophisticated filters (e.g., Savitzky–Golay or Kalman) may be preferable for highly dynamic signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
