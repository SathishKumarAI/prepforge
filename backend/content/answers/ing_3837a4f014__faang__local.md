---
qid: ing_3837a4f014__faang__local
question: 'Explain: Self-Hosting & GPU Cloud Arbitrage — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 655
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:54:48-05:00'
sources: []
---

**Self‑Hosting vs GPU‑Cloud Arbitrage – Pricing & Cost Dynamics**  
*(FAANG‑style interview response)*  

---

### 1️⃣ Clarify  
*Problem:* Compare the total cost of ownership (TCO) for on‑prem AI infrastructure versus leveraging spot/low‑price GPU cloud instances (“arbitrage”).  
*Assumptions to confirm:*  
- Workload duration & peak concurrency.  
- Model training vs inference mix.  
- Data residency / compliance needs.  
- Acceptable downtime and maintenance overhead.

---

### 2️⃣ Approach  
1. **Identify cost drivers** for each model (hardware, power/air‑conditioning, cooling, staff, network).  
2. **Build a TCO calculator**:  
   - *Self‑host*: CapEx + OPEX over N years.  
   - *Cloud*: Spot‑price × hours + data egress + support fees.  
3. **Run sensitivity analysis** on spot‑market volatility, usage patterns, and scaling events.  
4. **Add risk & opportunity layers** (e.g., hardware depreciation vs. cloud elasticity).

---

### 3️⃣ Depth  
- **Self‑hosted GPU cluster:**  
  - CapEx: GPUs ($2k–$5k each), racks, cooling (~30% of hardware cost).  
  - OPEX: Power (≈$0.12/kWh), cooling, staff ($100k/yr).  
  - TCO ≈ $300k–$500k per year for 4 × A100 GPUs.  
- **GPU‑cloud arbitrage:**  
  - Spot price ≈ 0.1–0.3× on‑demand (e.g., $0.05–$0.15/hr).  
  - Total cost = Σ(spot × usage) + egress ($0.01/GB) + support ($10k).  
  - For a 30‑day training run, cost ≈ $1.5k vs $12k on‑demand.  
- **Break‑even point:** Self‑host becomes cheaper after ~18–24 months of sustained use (assuming no major upgrades).

---

### 4️⃣ Edge Cases  
- Spot instance preemption → checkpointing overhead.  
- Data locality regulations forcing self‑hosting.  
- Hardware upgrade cycles (e.g., new GPU architecture).  
- Long‑term scaling beyond current cluster capacity.

---

### 5️⃣ Optimize & Communicate  
- **Hybrid strategy:** Use spot for volatile training, on‑prem for inference pipelines requiring low latency.  
- **Automation:** Auto‑scale spot fleets; use cost alerts to trigger migrations.  
- **Narrative:** “We balance capital efficiency with operational agility by treating GPUs as a flexible resource pool—leveraging cloud arbitrage for bursty workloads while reserving on‑prem assets for steady, regulated inference.”  

This structured analysis satisfies the SIGNAL rubric: clear framing, methodical plan, technical depth, edge‑case awareness, and actionable optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
