---
qid: ing_efcc2ee641__aws__local
question: 'Explain: QK ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 451
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:17-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to accelerate a large‑language‑model inference pipeline that served 10 k concurrent users on AWS. The bottleneck was the transformer’s self‑attention memory (O(n²)), which made latency unacceptable for long documents.  

**Action** – *Paged Attention (vLLM)*  
I introduced **vLLM’s paged attention**: split the key/value tensors into fixed‑size pages and store them in GPU‑direct SSD via NVMe. Instead of keeping all K/V pairs resident, we stream only the page needed for each query token. I built a lightweight scheduler on AWS Fargate that prefetches pages from an **Amazon FSx Lustre** mount, backed by **S3** for cold storage.  

*Design decisions*  
- **Scalability**: Each inference container scales horizontally; the page cache is sharded across GPUs so adding nodes linearly increases throughput.  
- **Availability**: Using S3 + FSx guarantees 99.9 % durability, and Fargate’s task placement handles node failures without downtime.  
- **Cost**: We reduced GPU memory footprint by ~70 %, cutting instance hours from p4d.24xlarge to g5.2xlarge—saving ~$1.5k/month for our 10 k user base.  

**Result** – *Deliver Results*  
Latency dropped from 3.8 s to **0.9 s** (75 % improvement) and throughput rose to 12 k QPS, meeting SLA with a 20 % margin.  

**Learning**  
I learned that *ownership* means questioning assumptions—here the “all‑in‑memory” model—and *dive deep* into system primitives (NVMe, page sizes). The bar‑raiser will hear my data‑driven impact, architectural trade‑offs, and willingness to iterate after a brief failure when first caching strategy caused out‑of‑order token errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
