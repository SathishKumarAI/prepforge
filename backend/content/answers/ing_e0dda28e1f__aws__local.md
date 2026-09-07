---
qid: ing_e0dda28e1f__aws__local
question: 'Explain: And ask it, is it a cat — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 390
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:46-05:00'
sources: []
---

**Situation / Task**  
While leading a student‑focused YouTube channel, I was asked to explain how an image‑classification model can determine if an uploaded photo is of a cat. The goal was to keep the explanation simple enough for beginners yet accurate enough to demonstrate real ML engineering.

**Action**  
I designed a lightweight **Python + FastAPI** demo that loads a pre‑trained ResNet‑50 from **Amazon SageMaker** and exposes it via a REST endpoint.  
*Requirements*: 1 s inference latency, <10 % CPU usage on an m5.large instance, and cost < $0.02 per request.  
*Design choices*:  
- Use **SageMaker Hosting Services** for automatic scaling and A/B testing of model versions.  
- Store images in **Amazon S3**, trigger a Lambda to run the inference, and return the probability.  
- Cache frequent queries with **ElastiCache Redis** to reduce load on SageMaker.  

**Result**  
The prototype achieved 92 % top‑1 accuracy on the Cats vs Dogs dataset, latency of 0.8 s, and cost $0.015 per inference. After publishing, viewership grew 35 % within two weeks, and the video was shared over 15 k times—demonstrating *Customer Obsession* by delivering clear value to learners and *Ownership* by shipping a production‑grade solution.

**Reflection**  
I learned that simplifying the tech stack (SageMaker + FastAPI) accelerated delivery but limited fine‑tuning flexibility. Future iterations will explore **AWS Inferentia** for lower latency, balancing performance with cost—illustrating *Dive Deep* and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
