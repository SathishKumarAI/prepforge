---
qid: ing_117cf01130__faang__local
question: A model passes bit-exact against the functional simulator on one chip, but
  produces wrong output at rack scale. How do you find it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 494
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:21-05:00'
sources: []
---

**Clarify**

We’re told a silicon‑based AI accelerator runs *bit‑exact* against its functional simulator on a single chip but fails when many chips are stacked together (rack scale).  
Assumptions to confirm:  
1. The failure is deterministic and reproducible at rack scale.  
2. All per‑chip logic, memory, and interconnects are identical.  
3. External factors (power, cooling, clock skew) differ between single‑chip and rack tests.

**Approach**

1. **Isolate the fault domain** – start with a *single‑chip* test that reproduces the error by injecting the same workload used in rack mode.  
2. **Add one chip at a time** – incrementally scale from 1→2→4… chips, recording the exact point where divergence occurs.  
3. **Log every interface** – trace data paths, bus transactions, and clock signals; capture timing diagrams.  
4. **Cross‑check with simulation** – run the same multi‑chip scenario in a cycle‑accurate simulator (e.g., Gem5 + RTL) to pinpoint mismatches.

**Depth**

- Use *packet‑level tracing* on inter‑chip links; compare packet contents and timestamps between silicon and simulator.  
- Verify that the *clock distribution network* maintains required skew tolerances; a violation can cause metastability in state machines.  
- Inspect *power delivery*: rack scale introduces higher current draw, potentially causing voltage droops that alter logic thresholds.  
- If errors appear only after a specific number of chips, suspect *global resource contention* (e.g., shared DRAM controller or crossbar bandwidth).

**Edge Cases**

- Clock domain crossing bugs may surface only under high load.  
- Thermal gradients across the rack could shift transistor parameters.  
- Power‑rail noise might be amplified when many chips share a common supply.

**Optimize & Communicate**

Once the root cause is identified (e.g., clock skew beyond spec), propose design fixes: tighter PLL lock ranges, better power‑plane decoupling, or adding guardbands in timing constraints. Explain how each mitigation improves robustness and why it won’t regress single‑chip performance. Conclude with a plan to re‑validate both silicon and simulation across all scales.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
