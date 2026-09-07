---
qid: ing_11273bf8de__aws__local
question: Explain self-attention. What's its computational complexity, and what are
  your options when contexts get long?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 462
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:35-05:00'
sources: []
---

**Situation – Task**  
While leading a research‑to‑prod pipeline for a recommendation engine at Amazon, we discovered that the transformer’s self‑attention blew up when user histories exceeded 10 k tokens—latency hit 2 s per inference and GPU memory ran out.

**Action – Technical & Design**  
I re‑engineered the attention layer to use **linearized (kernel‑based) self‑attention**, reducing complexity from **O(n²·d)** to **O(n·d)**. I compared three alternatives:  
1. *Sparse/Sliding‑window* (Longformer) – 3× faster but still quadratic in the window size.  
2. *Reformer* (hashing + locality‑sensitive hashing) – 4× memory savings, good for very long contexts.  
3. *Performer* (random feature maps) – near‑linear time with minimal accuracy loss.  

I chose Performer because it kept inference < 200 ms on a single **g5.xlarge** instance and allowed us to batch 64 requests on SageMaker Endpoint without GPU oversubscription. I also introduced **AWS Step Functions** to orchestrate chunked inference, caching partial results in DynamoDB for reuse.

**Result – Impact & Metrics**  
Deployment cut per‑user latency from 2 s to 0.18 s (≈10× faster) and reduced GPU hours by 70 %, saving ~$12k/month. The model’s top‑1 accuracy dropped only 0.4 %.  

**Reflection**  
I took ownership of the failure point, dove deep into algorithmic trade‑offs, quantified every change, and iterated until we hit a production‑ready balance between speed, cost, and quality—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
