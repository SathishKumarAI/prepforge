---
qid: ing_25b86cd2c5__star__local
question: 'Explain: AI Research & Engineering — Jobs at Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:11-05:00'
sources: []
---

**Situation:**  
During my final year of graduate school I joined a startup that was building a conversational AI platform for customer support. We were hitting a plateau: our intent classification accuracy hovered around 82 %, and we couldn’t scale the model to handle the 3‑million unique queries per month without overloading GPU clusters.

**Task:**  
I was tasked with improving the model’s precision while keeping inference latency under 200 ms on a single V100, so that the platform could be deployed in production at Anthropic’s cloud edge.

**Action:**  
First, I performed an error‑analysis audit using SHAP values to pinpoint ambiguous intents. Then I redesigned the architecture: replaced the flat BERT encoder with a lightweight DistilBERT + adapter layers, fine‑tuned on our domain data, and introduced a dynamic token‑pruning scheme that dropped low‑importance tokens during inference. To manage latency, I profiled GPU memory usage with NVIDIA Nsight and optimized batch sizes to 64 requests per second. Finally, I set up an automated ML pipeline in Airflow that retrained the model nightly on new data, ensuring continuous improvement.

**Result:**  
Accuracy jumped from 82 % to 92 %, while inference latency stayed below 190 ms. The platform handled a 4× increase in traffic without additional GPU resources, and I presented these findings at Anthropic’s internal AI Engineering meetup, earning an invitation to join their research team as a Machine Learning Engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
