---
qid: ing_117cf01130__fp__local
question: A model passes bit-exact against the functional simulator on one chip, but
  produces wrong output at rack scale. How do you find it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 523
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:43:06-05:00'
sources: []
---

**Why the discrepancy shows up only at rack‑scale**

A single‑chip simulation guarantees *bit‑exactness* because every instruction sees the same deterministic micro‑architectural state (cache contents, branch predictor tables, etc.). When you scale out, additional nondeterminism creeps in: inter‑core coherence traffic, asynchronous clock domains, shared I/O buffers, and external interrupts. The model may be correct locally but violates a *global invariant* that only manifests when many cores interact.

**Strategy to locate the fault**

1. **Formulate a global invariant**  
   Derive from first principles what must hold across all chips: e.g., “the sum of all core‑level counters equals the rack‑level counter” or “memory ordering constraints preserve program‑order for a specific critical path.” This turns the mystery into a concrete assertion.

2. **Instrument the simulator**  
   Add lightweight probes that record the invariant’s value at the end of each epoch (e.g., after every 10 ms of simulated time). Log only the delta relative to the expected value; this keeps trace size manageable.

3. **Run a focused regression**  
   Execute the same workload on the single‑chip simulator and the rack‑scale simulator, feeding identical random seeds. Compare the invariant logs; any divergence pinpoints a specific epoch where the fault surfaced.

4. **Zoom in with “sanity checkpoints”**  
   Within the diverging epoch, inject checkpoints that dump per‑core states (register files, cache tags). Cross‑compare the two simulators to isolate the first difference—often a single coherence miss or a mis‑timed interrupt.

5. **Validate against theory**  
   Check whether the offending state violates an information‑theoretic bound (e.g., a core’s cache line can’t be simultaneously present in two private caches unless coherence is broken). This confirms the root cause rather than just the symptom.

**Non‑obvious insight**

The invariant need not involve high‑level program semantics; it often lives in *low‑level timing*—the exact number of cycles a shared bus transaction takes. Even a single cycle shift can propagate to a rack‑scale error, so measuring *latency budgets* as invariants is surprisingly effective.

By reducing the problem to a mathematically precise invariant and then instrumenting only that metric, you turn an opaque “rack‑scale wrong output” into a tractable, traceable bug.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
