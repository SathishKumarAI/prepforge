---
qid: ing_2b5f35bf94__faang__local
question: 'Explain: Pitfall 5: Cost Blindness — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 534
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:23:39-05:00'
sources: []
---

**Pitfall 5 – Cost Blindness in Capability Assessment**

---

### 1️⃣ Clarify  
When we audit an AI system, *cost blindness* means we focus on technical capability (accuracy, latency) while ignoring the full economic impact: training data acquisition, compute hours, storage, and operational maintenance. The question is: **How do we quantify the true cost of a model’s capabilities?**

**Assumptions to confirm:**  
- Availability of cloud billing APIs or on‑prem energy meters.  
- Model deployment environment (batch vs real‑time).  
- Stakeholder definition of “cost” (monetary, carbon, time).

---

### 2️⃣ Approach  
1. **Identify cost drivers**: data ingestion, training epochs, inference throughput, storage, and monitoring.  
2. **Instrument each driver**: use cloud SDKs for GPU‑hour metering; log I/O bytes; capture model size.  
3. **Aggregate** into a single cost metric (USD or CO₂e).  
4. **Normalize** by capability metrics (accuracy, latency) to get *cost per unit performance*.

---

### 3️⃣ Depth  
- **Compute cost**: `Cost = Σ (GPU_hours_i × price_per_hour)`; for on‑prem add energy rate × kWh.  
- **Data cost**: `Σ (bytes_read × price_per_GB)`.  
- **Inference cost**: `Latency * throughput * price_per_second`.  
- **Storage**: `Model_size_GB × price_per_GB_month × retention_days/30`.  

Complexity is O(1) per metric; overall linear in number of monitored resources. Trade‑off: higher granularity (per‑layer FLOPs) increases accuracy but adds overhead.

---

### 4️⃣ Edge Cases  
- **Multi‑tenant clusters**: need fair share attribution.  
- **Spot vs reserved instances**: price volatility must be modeled.  
- **Data privacy costs**: legal compliance fees not captured by raw compute metrics.

Testing involves simulating a 100 % load, then scaling down to see cost elasticity.

---

### 5️⃣ Optimize & Communicate  
Present the *cost‑per‑accuracy* plot; highlight diminishing returns beyond a threshold. Recommend pruning or quantization if cost per unit performance exceeds business tolerance. Explain that this metric drives model selection, hyper‑parameter tuning, and infrastructure choices—ensuring stakeholders see tangible ROI rather than just “smaller error bars.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
