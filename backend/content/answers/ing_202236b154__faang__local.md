---
qid: ing_202236b154__faang__local
question: Attention is O(n²) in sequence length. Where does that actually bite in
  practice - prefill vs decode?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 505
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:29-05:00'
sources: []
---

**Clarify**  
We’re asked why the quadratic cost of self‑attention (∝ n², where *n* is sequence length) hurts more during *prefill* or *decode*. Assume we’re using a transformer‑style model (e.g., GPT) and that “prefill” means feeding a whole prompt in one pass, whereas “decode” refers to generating tokens one at a time.

**Approach**  
1. Compare the number of attention operations per token for each mode.  
2. Map those ops to real‑world latency on typical GPUs/TPUs.  
3. Highlight where the cost surfaces (memory bandwidth vs compute).  

**Depth**  
- *Prefill*: For a prompt of length *n*, we perform **n²** dot products in the self‑attention matrix. All tokens are processed simultaneously, so the total FLOPs scale as O(n²) per layer. Memory‑bound: we must load all key/value vectors for every token pair; on GPUs this saturates DRAM bandwidth.  
- *Decode*: At step *t*, only the new token attends to **t** previous keys/values. The cost per generated token is O(t), yielding a cumulative O(n²) over the entire sequence, but the *per‑token* work is linear. This allows pipelining and efficient use of compute units; memory traffic is lower because we keep a sliding window of KV pairs.

Thus, **prefill** hits the quadratic term upfront, causing high latency per request (especially for long prompts), while **decode** spreads it over many steps, making each step cheap but incurring cumulative cost.

**Edge Cases**  
- Very short prompts (< 10 tokens): decode may dominate because prefill’s constant overhead is small.  
- Long‑context models (4k+ tokens): prefill latency skyrockets; caching strategies or sparse attention mitigate the blowup.  

**Optimize & Communicate**  
- Use **memory‑efficient attention** (e.g., flash‑attention) to reduce bandwidth in prefill.  
- During decode, exploit *cached KV* and *beam‑parallelism* to keep GPUs busy.  
- When explaining, emphasize that “prefill is a one‑shot quadratic blowup; decode amortizes it linearly.” This demonstrates clear understanding of both algorithmic complexity and hardware realities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
