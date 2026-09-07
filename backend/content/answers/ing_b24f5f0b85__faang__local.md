---
qid: ing_b24f5f0b85__faang__local
question: 'Explain: Navigation Service — Design Google Maps'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 604
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:24-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Navigation Service* like the one behind Google Maps – i.e., real‑time turn‑by‑turn routing for millions of users on mobile/desktop devices.  
Assumptions:  
1. Users request routes from point A to B (often many concurrent requests).  
2. We have a static road network graph with edge weights (distance, travel time).  
3. Traffic data is available as an overlay that can modify edge costs.  
4. Latency ≤ 200 ms for the user experience; throughput ≈ 10⁶ queries/sec.

**Approach**  
1. **Graph abstraction** – store the road network as a compressed adjacency list (e.g., H3 hexes or a contraction hierarchy).  
2. **Pre‑processing** – build a *Contraction Hierarchy* (CH) to accelerate bidirectional Dijkstra; precompute shortcut edges for high‑degree nodes.  
3. **Traffic overlay** – maintain a separate, time‑dependent weight map that can be queried in O(1); update via streaming from traffic sensors.  
4. **Routing engine** – run a *bidirectional* CH search using the current edge weights (static + traffic).  
5. **Caching & batching** – cache recent routes; batch identical queries to reduce duplicate work.

**Depth**  
- CH preprocessing: O(|E| log |V|) time, O(|E|) memory.  
- Query time: O(log |V|) on average (~50–100 edges expanded).  
- Traffic updates are applied lazily; only affected edges are refreshed in the overlay.  
- For navigation, we also compute *turn‑by‑turn* instructions by post‑processing the shortest path and merging consecutive edges into road segments.

**Edge Cases**  
- Disconnected subgraphs (e.g., islands): fall back to nearest accessible node via a global fallback route.  
- Rapid traffic spikes: use a “traffic confidence” metric; if low, revert to static weights.  
- Offline mode: pre‑download local CH segment and cache recent traffic.

**Optimize & Communicate**  
Future improvements:  
1. **Multithreaded routing pool** with per‑user session affinity to reuse partial results.  
2. **Machine‑learning cost models** that predict travel time from raw sensor data, feeding into the overlay.  
3. **Edge pruning** using geographic bounding boxes for large cities to keep search space minimal.

In a production interview I’d explain these trade‑offs, justify CH over plain Dijkstra for latency, and highlight how traffic overlays are decoupled so that updates do not trigger full re‑searches. This demonstrates structured thinking, deep technical knowledge, and awareness of real‑world constraints—all key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
