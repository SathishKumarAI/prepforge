---
qid: ing_250106370c__faang__local
question: 'Explain: You Can’t Control What You Don’t Measure'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 441
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:00-05:00'
sources: []
---

**Clarify**  
The statement “You can’t control what you don’t measure” means that in ML, if a metric or feature is not quantified, we cannot optimize or debug it. I’ll assume the context is supervised learning: we care about performance (accuracy, F1, etc.) and want to tune hyper‑parameters.

**Approach**  
1. Identify business‑critical KPIs (e.g., precision on fraud detection).  
2. Map each KPI to a measurable quantity in data or predictions.  
3. Build monitoring pipelines that capture these metrics during training and inference.  
4. Use the collected signals for feedback loops: feature importance, drift alerts, and hyper‑parameter search.

**Depth**  
- **Metric definition**: Choose proper loss/score functions; e.g., cross‑entropy for classification.  
- **Feature engineering**: Quantify raw inputs (one‑hot, embeddings) so model receives numeric tensors.  
- **Monitoring**: Deploy tools like Prometheus or MLflow to log metrics per epoch and deployment version.  
- **Control loop**: Implement automated retraining when drift exceeds a threshold; use Bayesian optimization for hyper‑parameters guided by logged performance.

Complexity: O(n × d) for training, plus O(1) overhead for metric logging per batch. Trade‑off between fine‑grained metrics (high overhead) and coarse aggregates (less insight).

**Edge Cases**  
- *Unobservable phenomena*: e.g., user intent that can’t be labeled—use proxy signals or semi‑supervised learning.  
- *Sparse data*: metrics may be noisy; aggregate over larger windows.  
- *Concept drift*: sudden shifts make past measurements irrelevant unless updated.

**Optimize & Communicate**  
Explain that without measurable proxies, we cannot apply gradient descent to those aspects. Emphasize building a robust measurement pipeline first; then the model is just a controller acting on these signals. Highlight how this disciplined approach aligns with production ML best practices and satisfies stakeholders’ need for transparent, data‑driven decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
