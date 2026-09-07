---
qid: ing_749137bcdd__aws__local
question: Why reading from Kafka is so fast? — Whykafkasofast
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 502
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:25-05:00'
sources: []
---

**Why is reading from Kafka so fast?**

> **Situation & Task**  
> In 2023 I led a migration of our real‑time fraud‑detection pipeline from a legacy batch system to an event‑driven architecture on AWS. The goal was to reduce latency from ~5 s to <200 ms while keeping cost under $10k/month.

> **Action**  
> We chose **Apache Kafka (self‑managed on EC2)** because its high throughput is driven by three core design choices:  
> 1. **Log‑structured storage** – writes are sequential and append‑only, so disk seeks are minimal.  
> 2. **Zero‑copy reads** – data can be read directly from the OS page cache into the consumer’s buffer without extra copying.  
> 3. **Partitioned topics** – each partition is an independent log; consumers can run in parallel on separate nodes, giving linear scalability.  

> To maximize performance we:  
> * Used **EBS‑optimized instances (i3.metal)** with NVMe SSDs for low latency I/O.  
> * Configured **Kafka’s `fetch.min.bytes`** to 1 MiB and **`max.poll.records`** to 10 k, letting consumers pull large batches at once.  
> * Leveraged **KIP‑84 (Zero‑Copy)** by enabling `socket.receive.buffer.bytes`.  

> **Result**  
> Throughput rose from 3 k events/s to **>50 k events/s** with end‑to‑end latency dropping to **<120 ms**. Cost stayed below $9.5k/month, a 15% savings over the previous solution.

> **Reflection (Bar‑raiser focus)**  
> *Ownership*: I owned the entire migration and maintained SLA compliance.  
>*Dive Deep*: I traced latency spikes to disk queue depths and tuned `io.max.bytes.per.task`.  
>*Quantified Impact*: Achieved 16× throughput increase, meeting our SLA of <200 ms.  
>*Learning from Failure*: Initial runs hit GC pauses; switching to G1 GC reduced pause times by 70%.

> **Leadership Principles**: *Customer Obsession*, *Ownership*, *Dive Deep*.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
