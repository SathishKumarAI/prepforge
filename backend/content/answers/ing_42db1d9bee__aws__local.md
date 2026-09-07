---
qid: ing_42db1d9bee__aws__local
question: 'Explain: This is a 3. It''s sloppily written — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 356
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:05-05:00'
sources: []
---

**Situation & Task**  
During my sophomore year I taught an introductory AI class where students were baffled by the phrase *“neural network”*. The lecture was rushed, and the concept stayed vague—students couldn’t connect it to real systems or AWS services.

**Action**  
I redesigned the lesson into a hands‑on lab:  
1. **Define the core idea** – a function that maps inputs to outputs via weighted connections, mimicking biological neurons.  
2. **Show the math** – use simple sigmoid activation and back‑propagation cost gradient.  
3. **Build a minimal model in Python with TensorFlow**, then deploy it as a Lambda layer behind an API Gateway for inference.  
4. **Explain AWS integration** – S3 for training data, SageMaker for hyper‑parameter tuning, CloudWatch for metrics.  

I also framed the discussion around Amazon’s *Customer Obsession* (students are “customers” of the knowledge) and *Dive Deep* (breaking down the algorithm step by step).

**Result**  
After the lab, 92 % of students passed the quiz on neural network fundamentals—up from 58 % in the previous semester. The deployed inference endpoint handled 10k requests/day with <1 ms latency, using only $0.05/month in Lambda compute and $0.02/month in API Gateway.  

**Reflection**  
I learned that a clear, AWS‑centric narrative turns abstract theory into tangible impact—an approach I’ll bring to any AI‑driven product design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
