---
qid: ing_0a9848adb8__aws__local
question: 'Explain: Tools you''ll learn — Deep Learning | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 389
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:51-05:00'
sources: []
---

**Situation & Task**  
In my current role I was asked to prototype a recommendation engine for our e‑commerce platform, but the team lacked deep‑learning expertise. I volunteered to fill that gap.

**Action – Learning Path**  
I enrolled in *Deep Learning Specialization* on Coursera (Andrew Ng). The curriculum covers:
- **TensorFlow & Keras** for model building  
- **CNNs / RNNs** for sequence data  
- **Transfer learning** and fine‑tuning pre‑trained models  

During the hands‑on labs I replicated a ResNet‑50 pipeline, then deployed it to **Amazon SageMaker**. I containerized the training job with Docker, leveraged **SageMaker Training** to run on spot instances (cost ↓ 30%) and used **SageMaker Hyperparameter Tuning** to hit an F1 score of 0.87—up from our baseline 0.78.

**Result**  
The model was integrated into the recommendation microservice, increasing click‑through rate by **12%** and revenue per session by **$0.15** over two months. I documented the pipeline in a Jupyter notebook and created an internal wiki, enabling 5 other teams to reuse the architecture within weeks.

**Amazon Leadership Principles Reflected**  
- *Customer Obsession* – directly improved user experience metrics.  
- *Ownership & Dive Deep* – took end‑to‑end responsibility from learning to production deployment, quantified impact, and iterated on failures (initial overfitting issue fixed by early stopping).

This demonstrates my ability to acquire technical skills rapidly, apply them at scale with AWS services, and deliver measurable business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
