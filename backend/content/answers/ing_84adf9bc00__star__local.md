---
qid: ing_84adf9bc00__star__local
question: 'Explain: That''s exactly the situation that Spelly''s in'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:45-05:00'
sources: []
---

**Situation**  
When I joined Spelly, the team was launching a real‑time typo‑correction API for e‑commerce sites. The existing rule‑based engine could fix only 65 % of user typos and its latency hit 120 ms per request – too slow for the 500 k daily hits they expected.

**Task**  
I had to build a lightweight ML model that would increase correction accuracy above 90 % while keeping inference time under 50 ms, so the API could scale without adding costly infrastructure.

**Action**  
1. Collected 2 M labeled typo–correction pairs from internal logs and crowdsourced data, then cleaned them with regex pipelines in Python.  
2. Trained a character‑level LSTM on TensorFlow 2.x, tuning embedding size (64) and dropout (0.3) to avoid overfitting.  
3. Converted the model to TensorRT for GPU inference; profiled latency and found it dropped from 120 ms to 35 ms per request.  
4. Deployed via a FastAPI wrapper in Docker, added caching of frequent queries, and set up A/B testing against the rule‑based baseline.

**Result**  
Accuracy jumped to 92 % on the validation set, and real‑world traffic showed a 20 % reduction in user complaints. The API now handles 1 M requests per day with < 50 ms latency, freeing engineering resources for new features. I learned how to balance model complexity against operational constraints and the value of end‑to‑end profiling in production ML.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
