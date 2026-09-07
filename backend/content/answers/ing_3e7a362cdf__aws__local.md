---
qid: ing_3e7a362cdf__aws__local
question: 'Explain: Drawbacks — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 477
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:19-05:00'
sources: []
---

**Situation / Task**  
When building a recommendation engine for our global e‑commerce platform, I had to decide how to shard the user‑item matrix: vertically (by feature) or horizontally (by user). The goal was to keep latency < 50 ms while scaling to 10M active users.

**Action**  
I ran a proof‑of‑concept on **Amazon DynamoDB** and **AWS Glue**. For vertical partitioning I stored each feature set in a separate table; for horizontal, I used a single table with a composite key (userId + itemId). I measured read/write throughput, consistency, and cost using the AWS Cost Explorer.

- *Vertical*: 3× higher read capacity due to many small tables, increased operational overhead, and more complex query logic.  
- *Horizontal*: Single table simplified indexes, allowed **partition key hot‑spotting** mitigation with a hash prefix, and reduced overall provisioned throughput by ~35 %.  

I also simulated a failure scenario: a sudden spike in user activity caused the vertical scheme to exceed its provisioned capacity, triggering throttling (30 % request latency increase). The horizontal design auto‑scales smoothly.

**Result**  
Adopting horizontal partitioning cut read latency from 120 ms to **45 ms**, reduced DynamoDB costs by **$12k/month**, and lowered operational incidents by 40 %. I documented the trade‑offs in a whitepaper that is now part of our data‑engineering playbook.

> **Leadership Principles**  
> *Customer Obsession* – we delivered faster recommendations, improving conversion.  
> *Ownership* – I owned the end‑to‑end evaluation and rolled out the new schema company‑wide.  

**Bar‑raiser cues**  
- Clear ownership of metrics and trade‑offs.  
- Deep dive into AWS service limits (throughput, hot‑spotting).  
- Quantified impact (latency, cost, incident reduction).  
- Learning: realized that vertical partitioning can hurt scalability when feature count grows; now we pre‑evaluate shard strategy before committing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
