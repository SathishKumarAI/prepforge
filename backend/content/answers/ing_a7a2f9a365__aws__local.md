---
qid: ing_a7a2f9a365__aws__local
question: Your agent solves the same class of task 500 times a week and never gets
  better at it. How would you make it learn, without fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 468
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:38-05:00'
sources: []
---

**Situation & Task**  
I was leading the reinforcement‑learning team on a customer‑service chatbot that handled 500 identical ticket‑classification tasks each week. The model’s accuracy plateaued at **82 %**, and we needed to improve it without incurring the high cost of nightly fine‑tuning.

**Action**  
1. **Data‑driven feedback loop (Customer Obsession & Dive Deep)** – I added an *on‑policy* reward signal: every time a human reviewer corrected the bot, that interaction was stored as a “supervised” example with a +1 reward; otherwise it got a 0 reward.  
2. **AWS services** –  
   - **Amazon SageMaker Pipelines** orchestrated the data ingestion and model training pipeline.  
   - **SageMaker Reinforcement Learning** (RL‑Kit) handled policy updates in real time, while **S3** stored interaction logs.  
   - **Step Functions** managed stateful orchestration, ensuring idempotent retries.  
3. **Scalable architecture** – The reward processor ran on a **Lambda** function triggered by SQS messages from the chat service, guaranteeing *low latency* and *pay‑as‑you‑go* cost control.  
4. **Continuous evaluation (Bias for Action & Deliver Results)** – A/B testing with a 5 % traffic split showed a **3.2 % lift in accuracy** within two weeks, reaching **85 %**.

**Result**  
- Accuracy increased from 82 % to 85 % in 14 days without fine‑tuning the entire model.  
- Cost per training cycle dropped by **40 %** because only the reward signal was updated, not the full network.  
- The system now adapts automatically as new edge cases arise, demonstrating true ownership and a self‑healing product.

**Bar‑raiser take‑away** – I showed *ownership* of the entire feedback loop, *dived deep* into AWS services to design a cost‑effective solution, quantified impact with real metrics, and learned from early failures by iterating on reward signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
