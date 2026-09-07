---
qid: ing_2a3f914e90__aws__local
question: 'Explain: Behavioural: tell me about a time you had to make progress with
  incomplete information - you couldn''t be told the full context of what you were
  building.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 386
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:58-05:00'
sources: []
---

**Situation / Task**  
At AWS, I led a cross‑functional team to launch an *AI‑powered anomaly detector* for the new IoT‑Edge fleet. The product spec arrived only as high‑level use cases—no data schema, no latency targets, and no clear SLA.  

**Action**  
1. **Own the unknowns** – I scoped a minimal viable dataset by sampling edge logs from 10 devices, then built a prototype in Python using **Amazon SageMaker** for training and **AWS Lambda** for inference.  
2. **Dive deep into assumptions** – I ran *canary* experiments to measure latency (average 150 ms) and accuracy (94% F1). When results fell short of the expected SLA, I iterated on feature engineering and switched from **SageMaker Autopilot** to a custom **TensorFlow‑Lite** model, reducing inference time to <70 ms.  
3. **Bias for action** – Instead of waiting for complete specs, I introduced an *“feature flag”* in the deployment pipeline so new data could be streamed into the model without downtime.  

**Result**  
The final solution processed 2 M events per hour with a 99.9% uptime, cutting false‑positive alerts by **38%** and saving customers ~$120K annually in operational costs. The project was delivered two weeks ahead of schedule, earning a “Customer Obsession” shout‑out from the product manager.  

**Bar‑raiser takeaway**  
I demonstrated ownership by turning ambiguity into a data‑driven roadmap, used deep technical dives to validate trade‑offs, and quantified impact—exactly what Amazon looks for in high‑stakes AI initiatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
