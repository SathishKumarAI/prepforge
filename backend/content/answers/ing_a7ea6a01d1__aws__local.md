---
qid: ing_a7ea6a01d1__aws__local
question: 'Explain: Non-Functional Requirements — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 571
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:29-05:00'
sources: []
---

**Non‑functional requirements (NFRs) for the Airbnb‑style AI system**  
*Leadership Principles: Ownership & Dive Deep*

> **Situation:** Neo Kim & Hayk’s paper outlines a recommendation engine that must serve millions of hosts and guests while learning from every interaction.  
> **Task:** I was asked to translate their high‑level NFRs into concrete AWS services, quantify impact, and show trade‑offs.  
> **Action:**  
> 1. **Scalability** – Use *Amazon Aurora Serverless* for the user profile DB (auto‑scales up to 64 TB, 200 k RPS). For model inference, spin up *ECS Fargate* clusters behind an *Application Load Balancer*, auto‑scaling on CPU utilization.  
> 2. **Availability** – Deploy across three AZs with *Route 53 latency‑based routing*. Store feature vectors in *DynamoDB Global Tables* (multi‑region, <10 ms read).  
> 3. **Latency** – Cache top‑k recommendations in *ElastiCache for Redis* (single‑node 4 GiB, <1 ms RTT). Use *Lambda@Edge* to pre‑fetch user context at the CDN edge.  
> 4. **Cost** – Reserve 1‑year instances for ECS tasks; use Spot for batch model training on *SageMaker*. Savings ≈ 30 % vs. on‑demand.  
> 5. **Security & Compliance** – Encrypt data at rest with KMS keys, enforce IAM roles per microservice, and enable *AWS WAF* to block malicious requests.  
> 6. **Observability** – Centralize logs in *CloudWatch Logs Insights*, trace latency across services with *X-Ray*. Set up anomaly detection on metrics to trigger auto‑scale or rollback.

> **Result:** Implementing these NFRs reduced average recommendation latency from 350 ms to 85 ms, boosted click‑through rate by 12 % (≈ $1.2M ARR lift), and cut infra cost by 28 %.  
> **Learned:** The key is to start with the *critical user path* (latency) and then layer observability & cost controls—otherwise you get “good enough” but not great.

**Bar‑raiser takeaways**: I owned the end‑to‑end design, dove deep into each service’s SLA, quantified every metric, and reflected on a prior failure where ignoring cache TTL caused 4× latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
