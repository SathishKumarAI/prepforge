---
qid: ing_5aee19f5af__aws__local
question: 'Explain: Meta Custom and AI-Round Problems (2026)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 458
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:12-05:00'
sources: []
---

**Situation / Task**  
When I joined the ML Ops team at Amazon in 2025, we were tasked with launching a new *Meta Custom* model that needed to run inference on user‑generated content while respecting privacy constraints and delivering sub‑200 ms latency for 99.9% of requests. The project also required us to address “AI‑Round” bias issues—ensuring the model’s predictions did not systematically favor or penalize any demographic group.

**Action**  
- **Ownership & Dive Deep:** I mapped every data pipeline step, from ingestion in Kinesis Data Streams to feature enrichment on Glue, and built a lightweight audit trail in DynamoDB that logged input features and inference outputs.  
- **Bias Mitigation:** Leveraged SageMaker Ground Truth for balanced labeling, then applied *Counterfactual Fairness* checks in an automated Lambda function that flagged skewed predictions before deployment.  
- **Scalability & Availability:** Deployed the model as a SageMaker endpoint behind an Application Load Balancer with weighted routing to a 3‑AZ Auto Scaling group of 64 m5.large instances, ensuring high availability and automatic recovery from spot instance failures.  
- **Cost Control:** Integrated Spot Instances for batch inference jobs (cost savings ~35%) and used SageMaker Model Monitor to auto‑scale only when traffic exceeded the 95th percentile.

**Result**  
- Latency dropped to an average of 138 ms, meeting the SLA with a 99.7% tail latency under peak load.  
- Bias audit reports showed demographic parity within ±2%, reducing potential regulatory risk by 40%.  
- Operational cost for inference fell from $12k/month to $8.3k/month (≈30% savings).  

**Bar‑raiser takeaways**  
- **Ownership:** I led cross‑functional coordination and drove the end‑to‑end solution.  
- **Dive Deep & Quantified Impact:** Detailed monitoring, bias metrics, and cost analysis demonstrate depth.  
- **Learning from Failure:** Early spot‑instance crashes prompted a rollback strategy that now safeguards future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
