---
qid: ing_f6521e116a__faang__local
question: 'Explain: Step 2: Review the scalability article — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 525
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:12:47-05:00'
sources: []
---

## Clarify  
You’re asked to **review the “Scalability” section of Donne Martin’s System‑Design‑Primer** (GitHub).  
Assumptions:  
1. You have a copy of the primer or can access it online.  
2. The goal is to understand how large‑scale systems grow and what trade‑offs exist.  

## Approach  
1. **Locate the section** – open `README.md` → “Scalability” chapter.  
2. **Read actively** – take notes on key concepts: horizontal vs vertical scaling, CAP theorem, sharding, replication, load balancing.  
3. **Cross‑reference** – compare with your own project experience or known architectures (e.g., DynamoDB, Cassandra).  
4. **Create flashcards** – use Anki to memorize definitions and trade‑offs.  

## Depth  
- **Horizontal scaling**: adding more nodes; benefits (cost, fault tolerance) vs challenges (consistency, network latency).  
- **Vertical scaling**: upgrading a single machine; limits set by hardware.  
- **CAP theorem**: Consistency, Availability, Partition tolerance – you can’t have all three simultaneously in a distributed system.  
- **Sharding & replication**: partitioning data to spread load; replicas for read amplification and fail‑over.  
- **Load balancers**: distribute traffic (round‑robin, least connections) and detect unhealthy nodes.  

Complexity notes:  
- Sharding increases query complexity (`O(log n)` vs `O(1)` with a single node).  
- Replication introduces write latency (`O(r)` where *r* is replication factor).  

## Edge Cases  
- **Network partitions**: how the system chooses between consistency and availability.  
- **Hot spots**: uneven data distribution leading to overloaded shards.  
- **Single point of failure** in load balancers or coordination services (e.g., ZooKeeper).  

## Optimize & Communicate  
After reviewing, summarize key takeaways in a 2‑slide deck: “What scales?” and “Trade‑offs to watch.”  
Explain how you’d apply these concepts when designing an interview system (e.g., a URL shortener with millions of hits/day).  
Highlight that understanding scalability isn’t just about adding nodes; it’s about *architectural decisions* that impact latency, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
