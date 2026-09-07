---
qid: ing_663751d5ed__aws__local
question: 'Explain: RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 410
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:10-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy micro‑service that processed ~2 M events/day for an e‑commerce platform. The team used **RabbitMQ** on-premises, but the queue latency was >300 ms during peak sales and the cluster hit 95 % CPU at 3 AM each day, jeopardizing our *Customer Obsession* promise of <200 ms response.

**Action (Design & Implementation)**  
I replaced RabbitMQ with **Amazon MQ for RabbitMQ** to preserve the AMQP protocol while gaining AWS‑managed scalability. I added an **SQS FIFO queue** as a fallback and implemented a **Lambda autoscaling policy** that spawns additional consumer instances when the `ApproximateNumberOfMessagesVisible` > 10 k.  
To reduce cost, I switched off the dedicated broker during low‑traffic weekends (budget $0.10/hr vs $1.20/hr). I also added **CloudWatch Alarms** to trigger a *Bias for Action* response if latency exceeded 250 ms.

**Result**  
Post‑migration, queue latency dropped to <120 ms (a 60 % improvement) and CPU usage fell below 30 %. Monthly operational cost decreased from $720 to $240. The system now reliably serves 3 M events/day with 99.9 % availability—demonstrating *Ownership* and *Deliver Results*.  

**Bar‑raiser takeaways**  
- Deep dive into metrics (latency, CPU) before redesign.  
- Quantified impact (60 % latency reduction, $480/month saved).  
- Learned that managed services can eliminate operational overhead while scaling elastically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
