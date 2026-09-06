---
qid: ing_7d509c2ad0__fp__local
question: 'Explain: Self-Hosting Cost Components — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 554
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:32:01-05:00'
sources: []
---

## Self‑Hosting AI: Why Every Dollar Matters

When you decide to run an LLM on‑premises, the *cost* is a direct function of the **resources you consume** and the **time you keep them running**.  
1. **Compute (CPU/GPU)** – The price is proportional to FLOPs per second multiplied by the number of cores and the power draw. A GPU that stays at 80 % utilisation still consumes ~90 % of its peak wattage; therefore, idle headroom inflates electricity bills more than you expect.  
2. **Memory & Storage** – RAM scales with model size (weights + activations). SSD bandwidth determines how fast data moves into the GPU; a single NVMe drive can be the bottleneck if training on billions of tokens per day. The storage tier you choose (fast NVMe vs. cheap HDD) drives both cost and latency.  
3. **Networking** – Bandwidth is charged per GB transferred, but also impacts cooling and rack density. If your model must fetch data from a remote dataset, the egress cost can dwarf compute costs.  
4. **Depreciation & Amortization** – Hardware is an asset; you amortise its purchase price over its useful life (often 3–5 years). This hidden cost shows up as a fixed monthly fee that does not vanish when the machine sits idle.  
5. **Power, Cooling, and Facilities** – Power‑usage effectiveness (PUE) of your data centre multiplies raw wattage into real cost. Even a modest PUE of 1.4 doubles the electricity bill compared to an on‑premise server.  

### Non‑obvious insight
Most people treat GPU price as linear in performance, but **idle power dominates**: a GPU that’s only 20 % utilised still burns ~70 % of its peak wattage. Thus, the *effective cost per inference* can increase dramatically if you over‑provision for peak load and never reach full utilisation. Optimising batch size and scheduling to maximise utilisation is often cheaper than buying more hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
