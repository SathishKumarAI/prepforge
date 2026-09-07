---
qid: ing_6dc518b3de__aws__local
question: 'Explain: Available Target Services — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 562
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:01-05:00'
sources: []
---

**Situation (S)**  
At a previous fintech firm we had to replace our on‑prem queue with a cloud‑native event bus for real‑time fraud alerts. The requirement was: “Send the same message to multiple downstream systems—mobile push, SMS, email and an internal analytics microservice—with minimal latency and guaranteed delivery.”  

**Task (T)**  
I chose **Amazon SNS** as the target service because it natively supports *multiple protocols* (HTTP/HTTPS, SQS, Lambda, Email, SMS, Mobile Push) from a single topic. The goal was to reduce operational overhead while keeping cost < $2k/month and latency < 200 ms.

**Action (A)**  
1. **Topic design** – Created a *central fraud‑alert* SNS topic with two subscriptions:  
   - HTTPS endpoint → API Gateway + Lambda for analytics.  
   - SQS FIFO queue → downstream microservice.  
2. **Dead‑lettering & retry** – Enabled DLQ on each subscription; set `RedrivePolicy` to 3 retries, 1 min back‑off.  
3. **Cost control** – Used *Message Deduplication ID* for FIFO queues and *SNS Topic Policy* to restrict publishing only from the fraud engine.  
4. **Monitoring** – CloudWatch metrics (`NumberOfMessagesPublished`, `DeliveryAttempts`) fed into a Grafana dashboard; alarms on > 5% delivery failures.

**Result (R)**  
- Reduced message‑dispatch time by 65 % (from 600 ms to 210 ms).  
- Cut operational cost from $6k/month (self‑hosted broker) to <$2k/month.  
- Achieved 99.99 % delivery success over six months.  

**Leadership Principles**  
*Customer Obsession*: delivered near‑real‑time alerts that improved fraud detection rate by 30 %.  
*Ownership & Dive Deep*: I architected, implemented, and tuned the entire flow, continuously iterating on metrics until SLA met.

---

### What a bar‑raiser listens for
- **Ownership**: End‑to‑end design, cost & latency trade‑offs.  
- **Dive Deep**: Clear reasoning for SNS vs SQS/Step Functions, DLQ setup.  
- **Quantified Impact**: 65 % latency reduction, $4k/month savings.  
- **Learning from Failure**: Adjusted retry logic after initial burst of missed deliveries; now SLA is stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
