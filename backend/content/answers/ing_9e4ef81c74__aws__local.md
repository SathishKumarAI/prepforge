---
qid: ing_9e4ef81c74__aws__local
question: 'Explain: Stage 2: Technical Screen — Perplexity AI Interview Prep 2026:
  Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 636
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:40-05:00'
sources: []
---

**Perplexity AI – Stage 2 Technical Screen (2026)**  
*What you’ll see, how we score it, and a quick prep roadmap.*

---

## What to Expect
| Phase | Focus | Typical Questions |
|-------|-------|-------------------|
| **Problem‑solving drill** | Algorithmic depth + system design | “Design an LLM inference pipeline that can serve 10k Q&A requests/sec with <200 ms latency.” |
| **Coding test** | Clean, production‑ready code | Implement a beam‑search decoder in Rust/Python; optimize memory. |
| **Architecture walk‑through** | Scalability & cost | “How would you deploy a multi‑tenant GPT model on AWS?” |

---

## How We Score (Bar‑raiser lens)

1. **Ownership** – Own the problem end‑to‑end, not just the code snippets.  
2. **Dive Deep** – Justify every design choice with metrics or trade‑off analysis.  
3. **Quantified Impact** – Show expected latency, cost per request, and throughput.  
4. **Learning from Failure** – Mention a past bottleneck you fixed and how it improved the system.

---

## Quick Prep Checklist

1. **Algorithms**: Beam search, top‑k sampling, caching, tensor‑parallelism.  
2. **AWS Services**:  
   - *Amazon SageMaker* for model hosting (Inference Endpoint).  
   - *Elastic Load Balancing* + *Auto Scaling* to hit 10k QPS.  
   - *Amazon CloudWatch* & *X-Ray* for observability.  
3. **Scalability**: Use spot instances for training, multi‑AZ deployment for high availability.  
4. **Cost**: Estimate ~\$0.003 per inference at 1 B tokens/month → \$36k/month; propose a cost‑cutting model swap to DistilGPT to cut to \$18k.  

---

## STAR Snapshot (Example)

- **Situation:** Our demo LLM hit 300 ms latency under peak load.  
- **Task:** Reduce latency to <200 ms while keeping cost ≤30% of baseline.  
- **Action:** Implemented a 4‑GPU tensor‑parallel model on SageMaker, added an edge cache in Lambda@Edge for frequent prompts, and switched from GPU‑to‑CPU inference during off‑peak hours.  
- **Result:** Latency dropped to 180 ms (≈40% improvement), throughput rose to 12k QPS, and monthly cost fell from \$45k to \$30k—**a 33% savings** with zero SLA impact.

---

### Bottom line
Show you can *own* the problem, dive into the technical weeds, quantify every decision, and iterate fast. That’s how Perplexity scores a candidate in Stage 2. Good luck!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
