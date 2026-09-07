---
qid: ing_3d956e8e84__aws__local
question: What are the major features of SSDs? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 643
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:02-05:00'
sources: []
---

**Answer – Amazon Interview Style**

*Leadership Principles:* **Ownership**, **Dive Deep**  
I took full ownership of translating a vague product question into an actionable design narrative and dug deep into the underlying hardware concepts.

---

### Situation
During my first quarter at AWS, I was tasked with architecting a new *Serverless ML Inference Service*. The core requirement: keep latency below 5 ms while serving millions of concurrent requests. The team needed to decide between traditional spinning disks, HDDs, and SSDs for the underlying data store.

### Task
I had to evaluate which storage medium would deliver the performance and cost profile that met our SLA and scale targets.

### Action
1. **Defined Key Metrics**  
   * **Random I/O latency (ms)** – critical for small inference payloads.  
   * **Throughput (IOPS)** – drives capacity under peak traffic.  
   * **Cost per GB/month** – directly impacts the service’s unit economics.

2. **Analyzed SSD Characteristics**  
   * **Flash-based NAND** → no moving parts ⇒ <1 ms latency for 4 KB reads.  
   * **Parallelism** – multiple channels and planes provide ~10,000‑20,000 IOPS per drive.  
   * **Endurance (TBW)** – modern TLC/NAND supports >600 TBW, ensuring >5 years of heavy use.  
   * **Scalability** – NVMe SSDs in EC2 instances can be attached at 16 Gbps bandwidth; Amazon EBS‑io1 offers 64,000 IOPS per volume.

3. **Design Decision & Trade‑offs**  
   * Adopted **EBS‑io1 SSDs** for the inference cache layer:  
     * **Latency:** <0.5 ms read, <1 ms write.  
     * **Cost:** $0.10/GB/month vs. $0.05 for HDD (but saves $2M/year in latency penalties).  
   * Implemented a **tiered caching** strategy: SSD cache + S3 Glacier archival to balance cost and durability.

4. **Prototyped & Benchmarked**  
   * Simulated 1 M concurrent requests → achieved 99th‑percentile latency of 4.2 ms, meeting SLA.  
   * Reduced overall service cost by 12% compared to a HDD-only baseline.

### Result
The SSD‑based design delivered sub‑5 ms latency at scale and cut operational costs by **$2.3 M annually** while maintaining data durability and high availability. I documented the trade‑offs, shared findings in a cross‑functional review, and our team adopted this architecture across three production ML services.

---

### Takeaway
By owning the decision, diving deep into SSD fundamentals, and quantifying impact, we aligned engineering excellence with Amazon’s *Customer Obsession* and *Deliver Results* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
