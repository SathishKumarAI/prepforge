---
qid: ing_bf01e85b64__aws__local
question: What is prompt caching? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 566
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:57-05:00'
sources: []
---

**Prompt Caching – A Quick‑Win for Latency & Cost**

> *Leadership Principles:* **Customer Obsession** (delivering instant responses) & **Ownership** (owning the end‑to‑end cost).

### What it is
A cache that stores a generated prompt–response pair keyed by the exact user query. When an identical or semantically similar request arrives, we return the cached answer instead of re‑invoking the LLM.

### How I implemented it at my last role  
| **Situation** | We were serving 120 k daily prompts to a chatbot on AWS. Latency hit 1.8 s (3× SLA) and GPU spend rose to $12K/month. |
|---------------|-------------------------------------------------------------------|
| **Task**      | Reduce latency below 500 ms and cut inference cost by ≥30%. |
| **Action**    | • Built a Redis‑cluster on **Amazon ElastiCache** with 1 TB capacity, TTL = 24 h. <br>• Added an *embedding‑based similarity* layer (AWS SageMaker Endpoint) to match near‑duplicate queries. <br>• Wrapped the LLM call in a Lambda that first checks Redis; if miss, calls **Amazon Bedrock** and caches result. |
| **Result**    | • Latency dropped from 1.8 s to **0.45 s** (84% improvement). <br>• GPU usage fell by **36 %**, saving ~$4.5K/month. <br>• Cache hit rate grew to 68% within two weeks, proving high reuse. |

### Why it works
- **Scalability:** ElastiCache scales horizontally; we added nodes during traffic spikes.  
- **Availability:** Multi‑AZ replication keeps cache alive even after a node failure.  
- **Cost Trade‑off:** One-time memory cost (~$1K/month) is far less than GPU inference spend.

### What a bar‑raiser looks for
- **Ownership:** I owned both the design and operational monitoring (CloudWatch alarms).  
- **Dive Deep:** Used Redis metrics to tune eviction policy; logged similarity scores to refine thresholds.  
- **Quantified Impact:** Explicit latency & cost figures.  
- **Learning from Failure:** Early prototype hit TTL misconfigurations—fixed by adding a fallback to Bedrock for stale keys.

Prompt caching turned an expensive, slow AI service into a high‑performance, low‑cost product that delights users and satisfies our AWS budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
