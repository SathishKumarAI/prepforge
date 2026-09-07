---
qid: ing_9cc85bd220__faang__local
question: 'Explain: Implement single-step decode with a KV cache in PyTorch, for causal
  multi-head attention. Then say what changes for a long-context serving system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 1016
total_tokens: 1269
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:36-05:00'
sources: []
---

**Clarify**  
You’re asking how to perform *single‑step* (autoregressive) decoding of a transformer with causal multi‑head self‑attention, using a key/value cache (`KVCache`) in PyTorch, and what changes when the model serves very long contexts (e.g., 8 k tokens). I’ll assume:  
- The model is pre‑trained; only the forward pass matters.  
- We use `torch.nn.MultiheadAttention` or a custom implementation that accepts pre‑computed K/V tensors.  
- “Long‑context” means the cache size grows beyond the GPU memory available for a single batch.

**Approach**  
1. **Cache structure** – maintain two buffers: `cache_k` and `cache_v`, each of shape `[num_heads, seq_len_cached, head_dim]`.  
2. **Forward at step t** –  
   - Compute Q for the new token (`[batch, 1, d_model]`).  
   - Concatenate cached K/V with the newly computed ones (or just use cache for K/V).  
   - Apply scaled dot‑product attention: `softmax(Q·Kᵀ / √d_k) · V`.  
3. **Update cache** – append new K/V to `cache_k/v` after each step.  
4. **Memory efficiency** – store cache on the same device as the model, avoid copying per call.

**Depth**  
```python
class KVCache:
    def __init__(self, num_heads, head_dim):
        self.k = torch.empty(0, num_heads, head_dim, device='cuda')
        self.v = torch.empty(0, num_heads, head_dim, device='cuda')

def step_forward(x, attn, cache: KVCache):
    # x: [1, batch, d_model]
    q = attn.in_proj_q(x)          # shape (1,b,d)
    k_new, v_new = attn.in_proj_kv(x).chunk(2, dim=-1)

    # reshape for multi‑head
    q = q.reshape(1, x.size(0), attn.num_heads, attn.head_dim).transpose(0, 2)   # [heads,b,1,dh]
    k_new = k_new.reshape(1, x.size(0), attn.num_heads, attn.head_dim).transpose(0, 2)
    v_new = v_new.reshape(1, x.size(0), attn.num_heads, attn.head_dim).transpose(0, 2)

    # concatenate cache
    k_cat = torch.cat([cache.k, k_new], dim=0)   # [heads, seq+1, dh]
    v_cat = torch.cat([cache.v, v_new], dim=0)

    attn_weights = (q @ k_cat.transpose(-2, -1)) / math.sqrt(attn.head_dim)
    attn_scores = F.softmax(attn_weights, dim=-1)
    out = attn_scores @ v_cat
    out = out.transpose(0, 2).reshape(x.size(0), -1, attn.embed_dim)

    # update cache
    cache.k = k_cat
    cache.v = v_cat
    return out
```
- **Complexity** per step: `O(heads * seq_len_cached * head_dim)` for the attention matrix.  
- Cache growth is linear in sequence length; memory ≈ `2 * heads * seq_len * head_dim`.

**Edge Cases**  
- **Empty cache** at start: handle by initializing with zeros or skipping K/V concat.  
- **Device mismatch**: ensure cache tensors live on GPU; otherwise copy overhead kills speed.  
- **Batch size >1**: our implementation keeps batch dimension separate; test with varied sizes.

**Optimize & Communicate**  
For a *long‑context* serving system (e.g., 8 k tokens):  
- **Chunked attention**: split cache into fixed‑size blocks, recompute only the last `block_size` keys/values per step.  
- **Sparse / FlashAttention**: replace dense dot‑product with GPU‑optimized kernels that exploit causality to reduce memory bandwidth.  
- **Memory‑offload**: offload older cache slices to CPU or NVMe; reload on demand (paged KV).  
- **Quantization**: use 8‑bit K/V tensors to cut RAM by ~4×, trading a few percent of perplexity.

Narrate the reasoning by first explaining the causal masking logic, then showing how the cache eliminates redundant recomputation, and finally describing how block‑wise or sparse attention keeps latency bounded even as context grows. This demonstrates structured problem solving, clear communication, and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
