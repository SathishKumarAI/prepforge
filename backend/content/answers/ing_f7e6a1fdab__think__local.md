---
qid: ing_f7e6a1fdab__think__local
question: 'Explain: Sketch how you would serve a 671B-parameter MoE model with low
  latency under GPU-memory constraints.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 733
total_tokens: 935
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:21:25-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
   * What “low latency” means (e.g., < 10 ms inference).  
   * Which GPUs we have (memory size, interconnect bandwidth).  
   * The MoE architecture: number of experts, routing policy, batch size.  
   * Whether we can pre‑load all parameters or only active ones.

**2️⃣ Choose a mental model / framework**  
   * Treat the MoE as a **dynamic sparse network**: at run time only a subset of experts is activated per token.  
   * View GPU memory as a cache that must hold the “active slice” of the 671 B‑parameter space.  
   * Apply *model parallelism* + *expert sharding* + *data‑parallel routing*.

**3️⃣ Step‑by‑step reasoning toward a solution**  

| Step | Action | Rationale |
|------|--------|-----------|
| A | **Shard experts across GPUs** – split the 671 B params into N groups, each fitting in one GPU’s memory. | Keeps per‑GPU footprint < memory limit. |
| B | **Route only required experts** – use a top‑k or load‑balancing router that selects, say, 2–4 experts per token. | Reduces compute and memory traffic dramatically. |
| C | **Lazy loading / off‑load inactive experts** – store the remaining shards on high‑speed NVMe or remote GPU memory; bring them in just before they’re needed. | Avoids keeping all parameters resident. |
| D | **Use tensor parallelism within each expert** – split large weight tensors across GPUs to balance compute load. | Keeps per‑GPU operations balanced and speeds up inference. |
| E | **Fuse routing with computation** – embed the router into the same kernel that loads the expert weights so no extra memory copy occurs. | Cuts latency from memory hops. |
| F | **Batch‑wise expert caching** – keep a small “hot” cache of recently used experts per GPU, invalidated when batch changes. | Exploits locality across consecutive tokens. |
| G | **Profile and auto‑tune k (number of experts)** – start with the smallest k that meets accuracy; increase only if latency allows. | Keeps compute minimal while maintaining quality. |

**4️⃣ Common traps & how to avoid them**  
   * **Assuming all experts fit in GPU RAM** → leads to OOM crashes.  
   * **Uncoordinated routing** → load imbalance, some GPUs idle while others over‑burdened.  
   * **Separate memory copy for expert weights** → extra latency; instead fuse loading with compute.  
   * **Ignoring interconnect bandwidth** – shuffling large tensors across PCIe can dominate latency.

**5️⃣ Sanity‑check & communicate the plan**  
   * Verify that the maximum per‑GPU resident size = (experts_per_token × expert_size) + overhead < GPU memory.  
   * Confirm that total data transfer per token is ≤ latency budget (use profiling tools).  
   * Present the architecture diagram: shard map, router logic, cache layer, and data flow arrows.  

By iterating on k, sharding granularity, and caching policy while constantly profiling latency, you can serve a 671‑B MoE model under tight GPU‑memory constraints with acceptable real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
