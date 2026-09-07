---
qid: ing_54b9c57def__aws__local
question: 'Explain: Problems — Consistenthashing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 661
total_tokens: 889
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:52-05:00'
sources: []
---

**Problem:**  
Consistent hashing is the backbone of distributed ML model serving – it lets us route inference requests to the right node without reshuffling all keys when servers scale up or down.

---

## STAR (Behavioral)

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| I led a team that had to deploy 200+ inference endpoints for an NLP service. | Ensure zero‑downtime scaling while keeping latency < 50 ms. | Implemented consistent hashing with virtual nodes, using AWS ElastiCache Redis as the hash ring coordinator and EC2 spot instances for compute. Added health‑check hooks in ECS to move keys out of failed pods immediately. | Reduced model‑rollout time from 3 hrs to 20 min, cut request latency variance by 35 %, and saved $12k/month on unnecessary over‑provisioning. |

---

## Technical / System Design

1. **Requirements**  
   * **Scalability:** support 10× traffic spikes with < 2× cost increase.  
   * **Availability:** 99.99% uptime for inference.  
   * **Cost:** minimize EC2 instance count while keeping memory footprint low.

2. **Design**  
   * **Hash Ring:** Redis sorted set (`ZADD`) stores virtual node hashes → fast O(log N) lookup.  
   * **Node Registration:** Each ECS task publishes its IP and weight; a Lambda function updates the ring on `START`/`STOP`.  
   * **Routing Layer:** API Gateway + Lambda uses the ring to forward requests to the correct target group (ALB).  
   * **Fail‑over:** Health checks in ALB trigger immediate removal from ring; stale entries expire after 30 s.

3. **AWS Services**  
   * ElastiCache Redis – hash ring store (high availability via multi-AZ).  
   * ECS + Fargate – model containers (auto‑scaling).  
   * API Gateway + Lambda – lightweight routing.  
   * CloudWatch Alarms – auto‑scale on latency metrics.

4. **Trade‑offs**  
   * **Pros:** Near‑constant key distribution, minimal data movement, easy scaling.  
   * **Cons:** Slightly higher read latency due to extra hop; mitigated by caching the ring locally in each Lambda (TTL 5 s).  

---

## Bar‑Raiser Lens

* **Ownership** – I took end‑to‑end responsibility for both ML inference and infra.  
* **Dive Deep** – Profound analysis of hash collision probabilities, Redis eviction policies, and spot instance churn.  
* **Quantified Impact** – 35 % latency reduction, $12k/month savings.  
* **Learning from Failure** – Early pilots with a monolithic ring caused hot‑spots; pivoted to virtual nodes after profiling CPU spikes.

---

> *“Customer Obsession + Ownership” → deliver a seamless, cost‑effective inference experience that scales without friction.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
