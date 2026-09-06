---
qid: ing_117cf01130__think__local
question: A model passes bit-exact against the functional simulator on one chip, but
  produces wrong output at rack scale. How do you find it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 555
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:51:18-05:00'
sources: []
---

**1. Clarify the scenario and assumptions**  
   * “Bit‑exact against the functional simulator” → on a single core/clock cycle the RTL behaves as the model predicts.  
   * “Wrong output at rack scale” → when many cores run in parallel (e.g., multi‑node cluster) the final results diverge from the reference.  
   * Assume deterministic code, no hardware faults, and that the functional simulator models a single core only.

**2. Adopt a layered debugging framework**  
   1. **Unit level** – verify each module’s logic in isolation.  
   2. **Integration level** – test communication between modules on a small multi‑core board.  
   3. **System level** – run the full workload across the rack, capturing traces.

**3. Step‑by‑step reasoning**  

| Step | Action | Rationale |
|------|--------|-----------|
| A | Re‑run the single‑chip test on the same hardware that later fails (if possible). | Ensures no hidden hardware differences. |
| B | Enable detailed logging of inter‑core messages and memory traffic during rack runs. | Pinpoints where divergence first appears. |
| C | Compare per‑cycle state of a subset of cores against the simulator, stepping through the same input sequence. | Detects subtle race conditions or timing issues. |
| D | Instrument synchronization primitives (barriers, locks) to see if ordering assumptions break at scale. | Concurrency bugs often surface only with many participants. |
| E | Run a “stress test” that deliberately induces contention (e.g., shared cache lines). | Reveals hidden data‑dependency or memory‑ordering problems. |

**4. Common traps to avoid**  
   * Assuming the simulator’s model of interconnect latency is accurate; it may hide timing hazards.  
   * Ignoring non‑deterministic sources like power‑gating, clock skew, or thermal throttling that only appear at scale.  
   * Over‑reliance on simulation results without real‑hardware validation.

**5. Sanity‑check & communicate**  
   * After each instrumentation run, produce a side‑by‑side trace comparison; any mismatch should be highlighted graphically.  
   * Summarize findings in a concise report: “The root cause was a relaxed memory ordering on the shared L1 cache, which only manifests when >8 cores access the same line.”  

By systematically narrowing from single‑core correctness to system‑wide interactions, you isolate the fault that appears only at rack scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
