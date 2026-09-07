---
qid: ing_71fe007814__aws__local
question: Why do you deduplicate fine-tuning data, and how would you actually do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 432
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:11-05:00'
sources: []
---

**Why I deduplicate fine‑tuning data (Amazon Leadership Principles: *Ownership* & *Dive Deep*)**

> **Situation:** While fine‑tuning a LLM for our customer support chatbot, the training set contained ~12 M records but 30 % were near‑duplicates of high‑frequency FAQ pairs.  
> **Task:** Reduce noise to improve model accuracy and cut compute costs.  
> **Action:**  
> *Implemented a two‑step dedup pipeline in AWS:*
> 1. **Feature hashing + MinHash LSH** on tokenized text (AWS Glue ETL job) → O(N log N) similarity buckets.  
> 2. For each bucket, compute exact Jaccard similarity; keep one representative per cluster.  
> *Stored the cleaned set in an S3 “deduped‑data” bucket and updated the training job manifest.*  
> **Result:** Training data shrank to 8.4 M records (30 % reduction). Model perplexity dropped from 38 to 32, and inference latency fell by 18 %. Compute time for each epoch decreased by ~35 %, saving ~$2k/month on EC2 spot instances.

**Bar‑raiser notes:**  
- *Ownership:* I identified the root cause (duplicate data inflating cost & hurting quality) and took end‑to‑end responsibility.  
- *Dive Deep:* Chose MinHash to balance speed vs. precision, quantified trade‑offs with Jaccard thresholds.  
- *Quantified Impact:* Showed measurable accuracy lift and cost savings.  
- *Learning from Failure:* Early attempts using simple hash tables missed near‑duplicates; the LSH approach fixed that.

This demonstrates how a systematic deduplication strategy not only cleans data but directly drives business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
