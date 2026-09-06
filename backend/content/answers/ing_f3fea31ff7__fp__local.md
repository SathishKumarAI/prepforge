---
qid: ing_f3fea31ff7__fp__local
question: 'Explain: Describe MCP''s architecture and its primitives.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 802
total_tokens: 971
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:37:26-05:00'
sources: []
---

## MCP (Memory‑Centric Processor) – Architecture & Primitives  

**Core idea**  
MCP is built around *data locality as the primary cost driver*.  In modern AI workloads, moving a single floating‑point number across sockets can dwarf the compute it enables.  Therefore MCP places **tiny, low‑latency memories (L1‑TLMs)** next to each arithmetic unit and interconnects them with a *low‑bandwidth, high‑fanout* mesh.  The processor thus becomes a *data‑flow graph* that is physically laid out like the algorithm it executes.

**Layered structure**

| Layer | Function | Key design choice |
|-------|----------|-------------------|
| **Tile (Compute + L1)** | SIMD tensor core + 32 KiB on‑chip SRAM | 16‑wide dot‑product pipeline, banked memory for zero‑padding |
| **Cluster** | Two or four tiles sharing a 256 KiB “super‑L1” | Enables *broadcast* of weights to multiple tiles without DRAM traffic |
| **Domain** | Multiple clusters linked by an adaptive routing fabric | Supports irregular graph workloads via on‑the‑fly hop‑count routing |

**Primitives**

1. **Tile‑level GEMM** – 16×16 matrix multiply with fused bias addition and ReLU, all in‑place.  
2. **Cluster broadcast** – one weight vector is replicated to every tile in O(1) time using a *tree‑based multicast* built into the routing fabric.  
3. **Sparse scatter‑reduce** – writes only non‑zero activations back to L1; reduction uses an atomic tree that preserves ordering without a global lock.  
4. **On‑chip DMA** – moves blocks of data between super‑L1 and off‑chip DRAM in 128‑byte bursts, exposing a *streaming* interface that hides latency.

**Why it works**

- **Optimization principle**: By making the memory hierarchy part of the compute graph, MCP turns the expensive “fetch‑compute‑store” cycle into a *single pass* over data.  
- **Information theory angle**: Each tile stores enough context (weights + activations) to reduce entropy locally; the routing fabric is essentially an *entropy compressor* that only propagates significant bits.  
- **Geometry insight**: The mesh of tiles approximates the geometry of convolutional feature maps; distances in the mesh match spatial locality in the tensor, so communication cost aligns with algorithmic data reuse.

**Non‑obvious takeaway**

The most subtle advantage is the *“compute‑first”* scheduling that MCP enforces.  Because each tile can start a new GEMM as soon as it receives the next weight slice—without waiting for a global barrier—the effective pipeline depth grows linearly with cluster size, yielding a *superlinear scaling* in throughput for irregular sparse workloads where traditional CPUs stall on synchronization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
