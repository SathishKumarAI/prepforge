---
qid: ing_1a783b6afd__aws__local
question: 'Explain: Week 3-4: Data Structures (Stack, Linked Lists, Trees)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 395
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:16-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In my senior thesis I built a real‑time recommendation engine for an e‑commerce startup that needed to rank product suggestions within 50 ms while handling 10k concurrent users.

*Task:* I had to design the in‑memory data structures that would enable quick traversal, updates, and rollback of user interaction histories.

*Action:*  
1. **Stack** – Implemented a lightweight LIFO cache for recent click streams using `std::vector` with custom allocator (O(1) push/pop).  
2. **Linked Lists** – Used a doubly‑linked list to maintain a sliding window of the last 100 interactions per user, allowing O(1) eviction and insertion.  
3. **Trees** – Built a balanced AVL tree for term frequency counts, ensuring O(log n) search and update times.  

All structures were wrapped in a thread‑safe wrapper using `std::shared_mutex`. I deployed the service on **Amazon ECS Fargate** with an autoscaling group that spun up 2–4 containers based on CPU usage. The system achieved <45 ms latency for 95th percentile requests, a 30 % improvement over the previous batch‑processing baseline.

*Result:* Reduced recommendation lag by 70 %, boosting conversion rate from 3.1 % to 4.8 %. Post‑mortem analysis revealed that using custom allocators cut memory overhead by 18 %, which directly translated into lower AWS compute costs (~$12k/month saved).  

**Key Takeaway:** Deeply understanding low‑level data structures and aligning them with cloud primitives (ECS, autoscaling) yields measurable business impact while maintaining high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
