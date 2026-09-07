---
qid: ing_27e5bcd585__aws__local
question: 'Explain: Parallelizing across query heads for multi-query attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 458
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:58-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we build systems that give users lightning‑fast responses; *Dive Deep* – we scrutinize every micro‑optimization.  

### Situation  
At my last role, our LLM inference service was bottlenecked by the multi‑query attention (MQA) layer: a single GPU could process only ~4 queries per second, hurting latency for high‑volume API calls.

### Task  
Reduce MQA latency by 80 % while keeping cost per request ≤ $0.0005 and maintaining accuracy.

### Action  
1. **Parallelize across query heads** – split the 12 attention heads into 3 independent groups (4 heads each). Each group runs on a separate CUDA stream, allowing simultaneous dot‑product computations.  
2. **Pipeline with TensorRT & Triton Inference Server** – compile the MQA kernel for each head group and host them as separate inference services in Triton; this isolates failures and lets us auto‑scale per head group.  
3. **AWS Glue & Lambda** – orchestrate the split/merge logic in a lightweight Lambda, keeping stateful GPU usage minimal.  
4. **Cost & Availability** – use Spot Instances (g5.xlarge) for inference nodes, autoscaling based on CPU/GPU queue depth; this reduced per‑query cost from $0.0012 to $0.00045.

### Result  
- Latency dropped from 240 ms → 42 ms (84 % reduction).  
- Throughput increased from 4 QPS → 28 QPS (7×).  
- SLA met for 99.9 % of requests; cost per request fell by 63 %.  

**Bar‑raiser takeaways:** I owned the end‑to‑end pipeline, dived deep into CUDA stream scheduling, quantified impact with real metrics, and iterated on failure modes (head‑group crashes) to build a robust, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
