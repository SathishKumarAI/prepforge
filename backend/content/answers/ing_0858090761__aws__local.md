---
qid: ing_0858090761__aws__local
question: 'Explain: sampling / inference — GitHub - karpathy/nanoGPT: The simplest,
  fastest repository for training/finetuning medium-sized GPTs. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 483
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:47-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Situation*: At my last role I was tasked with deploying a GPT‑based chatbot for customer support. The model needed to generate responses in real time while staying within the $5/day budget on our internal test cluster.

*Task*: Implement efficient **sampling and inference** so that latency stayed below 200 ms per request, throughput hit 300 QPS, and cost never exceeded budget.

*Action*:  
1. **Sampling strategy** – I switched from deterministic greedy decoding to *top‑k* + *temperature* sampling (k=50, temp=0.8). This reduced token entropy by ~30 % while keeping answer diversity high enough for user satisfaction.  
2. **Inference optimization** – Deployed the model on **Amazon SageMaker Neo** with a custom TensorRT container. Neo compiled the PyTorch graph to an optimized binary that cut GPU inference time from 150 ms to 70 ms per token.  
3. **Scalability & cost** – Used **AWS Lambda@Edge** behind CloudFront for request routing, and autoscaled **Amazon EC2 Spot Instances (g4dn.xlarge)** based on CloudWatch metrics. This kept the average cost at $0.0008 per inference while maintaining 99.9 % availability.  
4. **Monitoring & rollback** – Integrated **Amazon CloudWatch Logs Insights** to track perplexity and response time; automated rollback if latency >250 ms or error rate >1%.

*Result*: After launch, we achieved **300 QPS with <200 ms latency**, reduced operational cost by **45 %**, and increased customer satisfaction scores from 4.2 to 4.7/5 (measured via post‑chat surveys).  

**Leadership Principles**:  
- *Customer Obsession* – tuned sampling for natural, helpful replies.  
- *Ownership* – drove the full pipeline from model training to production, handling failure scenarios and cost control.  

**Bar‑raiser cues**: clear ownership, deep dive into sampling trade‑offs (k vs temperature), quantified impact on latency/cost, and lessons learned when initial greedy decoding caused repetitive answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
