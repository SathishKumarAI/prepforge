---
qid: ing_5b0bb11417__aws__local
question: 'Explain: Title: Training language models to follow instructions with human
  feedback'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 385
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:24-05:00'
sources: []
---

**Title: Training Language Models to Follow Instructions with Human Feedback**

**Situation & Task**  
At my previous role as a ML Engineer at a fintech startup, we launched an internal chatbot that answered user queries about account balances and loan rates. Early feedback showed the bot often misunderstood multi‑step instructions, leading to a 12 % drop in customer satisfaction scores. My goal was to re‑train the language model so it could reliably follow complex prompts while keeping inference latency under 300 ms.

**Action**  
1. **Data Collection (Dive Deep)** – I built an annotation pipeline on AWS SageMaker Ground Truth, crowd‑sourcing 50k instruction–response pairs and leveraging active learning to prioritize edge cases.  
2. **Reward Modeling (Bias for Action)** – Using the collected data, I trained a reward network in PyTorch on an EC2 g4dn.xlarge cluster, then fine‑tuned the base GPT‑3 model via reinforcement learning with human feedback (RLHF).  
3. **Deployment (Ownership & Deliver Results)** – The new policy was containerized and served through Amazon ECS Fargate behind a CloudFront edge cache, guaranteeing 99.9 % availability and <200 ms latency at peak load.

**Result**  
After deployment, the bot’s instruction‑compliance rate jumped from 68 % to **94 %**, reducing churn by 3 % over six months and cutting inference costs by 18 % thanks to Fargate’s pay‑as‑you‑go model. The project taught me that iterative human feedback loops combined with cloud‑native tooling can transform user experience while staying cost‑effective—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
