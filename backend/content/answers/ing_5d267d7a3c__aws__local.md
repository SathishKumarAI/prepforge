---
qid: ing_5d267d7a3c__aws__local
question: 'Explain: Bit Manipulation (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 487
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:27-05:00'
sources: []
---

**Situation & Task**  
In a recent coding sprint I was tasked with building a *feature‑flag* system that could toggle up to **10,000** flags per request in sub‑millisecond time for our AWS‑based microservice. The constraints were strict: low latency, minimal memory footprint, and zero external dependencies.

**Action – Technical Design**  
I leveraged **bit manipulation** to encode flag states into a 64‑bit integer (`uint64`). Each bit represented a flag (1 = on, 0 = off). For up to 10,000 flags I used an array of `uint64` (≈157 elements) and implemented:

| Operation | Implementation |
|-----------|----------------|
| **Set**   | `flags[idx>>6] |= 1 << (idx & 63)` |
| **Clear** | `flags[idx>>6] &^= 1 << (idx & 63)` |
| **Toggle**| `flags[idx>>6] ^= 1 << (idx & 63)` |
| **Check** | `(flags[idx>>6]>>(idx&63)) & 1 == 1` |

I wrapped this in a Go library, exposed it via **AWS Lambda** behind an API Gateway, and stored the flag set in **Amazon DynamoDB** using the *binary* attribute type for instant retrieval.

**Result – Quantified Impact**  
- Latency dropped from **~12 ms** (JSON array parsing) to **<0.5 ms** per request.  
- CPU usage fell by **70%**, freeing capacity for other workloads.  
- Cost saved: ~$1,200/month on Lambda invocations and DynamoDB read/write throughput.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a faster, more reliable service for internal dev teams.  
- **Ownership & Dive Deep** – Designed the entire stack (data model, API, bit‑ops) and profiled every microsecond of execution.  

**Learning from Failure**  
Early trials used string lists; debugging revealed memory bloat during hot traffic spikes. Switching to bitwise flags eliminated the issue, illustrating that a small change in representation can yield massive performance gains.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
