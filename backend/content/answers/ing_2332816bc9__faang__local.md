---
qid: ing_2332816bc9__faang__local
question: 'Explain: System Design BASICS: Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 623
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:03-05:00'
sources: []
---

## 1️⃣ Clarify  
The interview asks for a concise explanation of **horizontal vs. vertical scaling** in the context of machine‑learning system design.  
Assumptions I’d confirm:  
- We’re talking about production ML workloads (training or inference).  
- The goal is to increase throughput/latency under higher load, not just storage capacity.  

## 2️⃣ Approach  
1. Define each scaling type.  
2. Contrast their characteristics (cost, complexity, fault tolerance).  
3. Give typical ML use‑cases where each shines.  
4. Highlight trade‑offs and when to combine them.

## 3️⃣ Depth – Core Answer  
| Scaling | What it means | Typical ML scenario | Pros | Cons |
|--------|---------------|---------------------|------|------|
| **Vertical (Scale‑Up)** | Add more CPU, GPU, RAM or faster disks to a single node. | Small‑to‑medium models that fit in one machine; hyper‑parameter search on a powerful workstation. | Simple deployment; no distributed coordination; lower latency for single‑request inference. | Limited by hardware caps; single point of failure; cost grows steeply. |
| **Horizontal (Scale‑Out)** | Replicate many identical nodes and distribute work across them. | Distributed training (data‑parallel SGD), large‑scale inference clusters, batch jobs on Spark/Hadoop. | Linear capacity increase with node count; fault tolerance via replication; cheaper per‑unit compute. | Requires distributed algorithms or load balancers; higher network overhead; consistency complexity. |

**Key trade‑offs:**  
- *Cost*: Vertical scaling often cheaper for small workloads; horizontal costs drop per request at scale.  
- *Latency*: Vertical gives lower single‑request latency (no inter‑node hops). Horizontal can introduce communication delay but mitigates it with batching or model sharding.  
- *Fault tolerance*: Horizontal inherently tolerates node failures; vertical is a single point of failure unless you add redundancy.

## 4️⃣ Edge Cases & Testing  
- **Model size > node memory** → must go horizontal (shard weights).  
- **Real‑time inference with strict SLA** → combine vertical (fast GPU) + horizontal (load balancer).  
- **Training with very large datasets** → data‑parallel horizontal scaling; check for stragglers.  

Test by simulating node failures, varying batch sizes, and measuring throughput vs. cost.

## 5️⃣ Optimize & Communicate  
- When answering, first state the core definition to show understanding.  
- Use a table or bullet list for clarity—FAANG interviewers love visual quick‑references.  
- End with a recommendation: “For most production ML pipelines, start horizontal for inference and add vertical GPU nodes only if you hit latency limits.”  

This structured flow demonstrates problem‑solving skills, clear communication, and depth of technical knowledge—all key to scoring high on FAANG’s SIGNAL interview framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
