---
qid: ing_3e98bfd18a__star__local
question: Do I need experience working at a big company to get a job at Meta?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 310
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:34-05:00'
sources: []
---

**Situation:**  
During my senior year of university, I led a team of four on a capstone project to build an image‑recognition model for a local non‑profit that needed to tag wildlife photos in real time. The dataset was noisy and the deadline was only two weeks before graduation.

**Task:**  
We had to design a scalable pipeline that could process 10,000 images per day with less than 5 % misclassification while keeping inference latency below 200 ms on modest hardware.

**Action:**  
I chose TensorFlow Lite for edge deployment and implemented transfer learning from EfficientNet‑B0. To handle the noisy labels, I added a confidence‑thresholding layer and used mixup augmentation to reduce overfitting. For scaling, I containerized the model with Docker and orchestrated it via Kubernetes on Google Cloud Run, setting up autoscaling based on CPU usage. I also wrote automated unit tests in PyTest and set up CI/CD pipelines with GitHub Actions.

**Result:**  
The final system achieved 92 % accuracy, met the latency target, and processed 12,000 images/day—outperforming our initial goal by 20 %. The project was showcased at a regional tech fair, earning us an “Innovation Award.” This experience proved that deep technical skills, effective problem‑solving, and clear communication are what Meta looks for, not just the size of your previous employer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
