---
qid: ing_ca673e69bd__faang__local
question: 'Explain: Now a road, even though it looks — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 639
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:31-05:00'
sources: []
---

## 1️⃣ Clarify  
You’re asking how **Google Maps** models roads that *appear* to exist (e.g., a straight line on the map) but may not actually be traversable—think of a “ghost” road, a closed lane, or a path that looks like a road but isn’t.  
Assumptions to confirm:  

| # | Question |
|---|----------|
| 1 | Do we need real‑time traffic or just static road status? |
| 2 | Is the data source (OpenStreetMap, proprietary survey) guaranteed accurate? |
| 3 | What is the tolerance for false positives/negatives in navigation? |

## 2️⃣ Approach  
1. **Graph Representation** – nodes = intersections, edges = road segments with metadata (`type`, `status`, `speed`).  
2. **Edge Validation Layer** – a lightweight service that flags “look‑alike” roads using:  
   * GPS traces & historical usage logs.  
   * Sensor data (e.g., cameras, LIDAR).  
3. **Dynamic Weighting** – assign a high traversal cost to suspected ghost edges; if no evidence of travel, set weight = ∞ (effectively removing it).  
4. **Fallback Pathfinder** – A* or Dijkstra on the filtered graph for route computation.  

## 3️⃣ Depth  
- **Data Ingestion**: Every new GPS point updates a *confidence score* per edge via Bayesian inference.  
- **Edge Status** (`status ∈ {open, closed, suspected}`) is stored in a distributed key‑value store (e.g., Spanner).  
- **Routing Complexity**:  
  *Graph size*: ~10⁷ edges → O(E log V) with binary heap priority queue.  
  *Real‑time updates*: edge weight changes propagate via event streams; only affected subgraph is re‑shortened, keeping latency < 50 ms.  

## 4️⃣ Edge Cases  
- **New Roads**: Initially `suspected`; once ≥ N passes → transition to `open`.  
- **Seasonal Closures**: Weather alerts trigger status change to `closed` until verified.  
- **Sensor Failure**: Fall back on user‑reported data; if no signal, default to conservative cost.  

## 5️⃣ Optimize & Communicate  
- **Batch Re‑weighting** nightly to amortize I/O.  
- **Caching** popular routes with a TTL of 10 s for low‑latency responses.  
- **Explainability**: expose a debug API that shows the confidence score and last update per edge, helping ops diagnose false positives.  

By blending static GIS data with real‑time telemetry and probabilistic validation, we keep the map accurate while preventing users from being misled by roads that *look* traversable but aren’t.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
