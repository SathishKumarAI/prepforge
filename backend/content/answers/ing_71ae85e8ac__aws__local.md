---
qid: ing_71ae85e8ac__aws__local
question: 'Explain: Metric-Driven Optimization — Prompt Optimization Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 422
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:21-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a generative‑AI chatbot for an e‑commerce platform that handled ~50k user queries/day. The business required latency <200 ms and a 95% success rate in answering product questions. My goal was to *metric‑driven optimize* prompt design so we could meet SLA while keeping cost under $10K/month.

**Action**  
1. **Data‑driven baseline** – I instrumented the API with CloudWatch metrics: latency, token count, and error rate per prompt template.  
2. **Prompt “A/B” engine** – Built a lightweight Lambda layer that dynamically swapped prompts based on real‑time confidence scores (using OpenAI’s `text-davinci-003`).  
3. **Cost‑latency trade‑off model** – Used the OpenAI pricing API to compute expected token cost per prompt; added a rule to downgrade to a cheaper model if projected cost exceeded $0.0004/token and latency >150 ms.  
4. **Continuous feedback loop** – Employed CloudWatch Alarms + SNS to trigger an Ops Lambda that logged under‑performing prompts, ran a quick regression test, and updated the prompt pool.

**Result**  
- Latency dropped from 310 ms to 175 ms (≈44% improvement).  
- Token usage fell by 28%, cutting monthly spend from $12.3K to $8.9K.  
- Success rate rose from 88% to 96%.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into metrics, and iterated quickly—aligning with *Ownership* and *Dive Deep*. The experiment taught me that prompt tuning is not a one‑off task but an ongoing optimization loop; failures in early A/B tests drove new hypotheses for better cost–performance trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
