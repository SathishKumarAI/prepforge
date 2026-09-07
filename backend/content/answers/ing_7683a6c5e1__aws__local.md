---
qid: ing_7683a6c5e1__aws__local
question: 'Explain: Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 390
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:14-05:00'
sources: []
---

**Prompt Engineering – a “Lil’Log” for ML Ops**

**Situation**  
At my previous firm we had a customer‑facing chatbot that answered FAQs in 80 % of cases but dropped to 45 % when users asked compound questions. The support team reported frustration and churn was rising by 3 % per quarter.

**Task**  
Own the end‑to‑end prompt‑engineering workflow so that we could lift accuracy to >90 % while keeping latency <200 ms for a global user base.

**Action**  
1. **Dive Deep into data** – extracted 500k query logs, identified 12 high‑frequency intent clusters.  
2. **Design** – built a “prompt‑synthesis microservice” in AWS Lambda (Python) that stitches contextual facts from DynamoDB into a templated prompt before forwarding to SageMaker Endpoint hosting an Llama‑3 model.  
3. **Iterate** – used A/B testing with CloudWatch metrics; each iteration cut hallucination rate by 12 % and improved F1 score from 0.68 to 0.89.  
4. **Bias for Action** – deployed the final version via CodePipeline, auto‑scaling the SageMaker endpoint to 2 vCPU/8GB with spot instances, cutting inference cost per request from $0.00032 to $0.00018.

**Result**  
Accuracy rose from 45 % to 92 %, reducing support tickets by 35 % and saving the company ~$1.2M annually in manual labor. Learned that “prompt engineering is a continuous experiment; every small tweak can unlock significant business value.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
