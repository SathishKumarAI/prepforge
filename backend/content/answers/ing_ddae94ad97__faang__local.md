---
qid: ing_ddae94ad97__faang__local
question: 'Explain: Q97: Llama 4 Maverick (sparse MoE, 17B active / 128 experts) and
  DeepSeek V4 Pro (1.6T total / 49B active) require MoE-aware system design. Walk
  through what changes in your inference serving.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 282
output_tokens: 556
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:14:03-05:00'
sources: []
---

**Clarify**  
We’re comparing two large‑parameter models that use *Mixture‑of‑Experts (MoE)*: Llama 4 Maverick (17B active, 128 experts) and DeepSeek V4 Pro (49B active, 1.6T total). Both require the inference stack to route tokens to a small subset of experts while keeping latency low. I’ll assume we’re deploying on GPU clusters with a batch‑wise transformer pipeline and that we can modify the scheduler, memory manager, and communication layer.

**Approach**  
1. **Routing logic** – expose the expert selector (gating network) as a lightweight service.  
2. **Sparse activation** – allocate only the tensors for active experts per token.  
3. **Communication** – replace dense all‑to‑all with *expert‑centric* collective or RPC to avoid O(N²) traffic.  
4. **Memory layout** – pack expert weights contiguously and use tensor sharding (ZeRO‑2/3) so that only the needed experts reside on each GPU.  
5. **Batching strategy** – group tokens with identical expert sets; fall back to dynamic batching for rare combinations.

**Depth**  
- The gating network outputs a one‑hot or top‑k mask per token. We buffer tokens by expert ID, then perform a *gather* of those tokens into a contiguous tensor before feeding them through the transformer block.  
- Use *torch.distributed.rpc* to fetch expert weights on demand; keep a local cache per GPU and evict least‑used experts when memory is tight.  
- Complexity: routing O(batch × k) where k=active experts, communication O(#exposed_experts × size_of_expert). Latency stays bounded because only the active slice is processed.

**Edge Cases**  
- *Cold start*: first token for a rarely used expert may stall; mitigate with pre‑fetching.  
- *Load imbalance*: some experts receive many tokens, others few—use load‑aware routing or dynamic k to smooth distribution.  
- *Memory fragmentation*: frequent expert swaps can fragment GPU memory; periodic compaction helps.

**Optimize & Communicate**  
To reduce overhead further, we could fuse the gating and embedding lookup into a single kernel, and use tensor cores for sparse matrix multiplication (e.g., TensorRT’s SparseMM). In interviews I’d emphasize that the key trade‑off is between routing precision and memory/compute efficiency—choosing top‑k vs. soft‑max gating directly impacts both latency and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
