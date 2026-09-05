---
qid: ing_0ee389cbc6__fp__local
question: How do SSDs work? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 392
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:37:16-05:00'
sources: []
---

**What is an SSD?**  
A Solid‑State Drive (SSD) stores data in tiny memory cells built from *floating‑gate* or *trapped‑charge* transistors that retain charge without power. Each cell can hold one bit (or two, if the transistor’s threshold voltage is finely quantised). The cells are arranged in an array of *blocks* and *pages*. When a page is written, its entire block must first be erased—a process that resets all cells to a known “erased” state.

**Why this architecture?**  
The physics of charge retention imposes two hard constraints:  
1. **Write‑erase asymmetry:** Writing can only increase the threshold voltage; erasing must reset it for an entire block.  
2. **Limited endurance:** Each erase cycle degrades the silicon, so a finite number of writes per cell is inevitable.

To reconcile these, SSD controllers maintain a *logical‑to‑physical mapping* (flash translation layer). They write new data to fresh cells and mark old pages as stale, deferring physical erasure until garbage collection can reclaim entire blocks. This mirrors the *external memory algorithm* in computer science: keep writes sequential (fast) and defer costly random erasures.

**Non‑obvious insight:**  
Most people think SSDs are simply “faster flash.” In reality, their speed stems from **algorithmic optimisation**—the translation layer turns a highly irregular physical medium into a *sequential* logical interface. The controller’s garbage‑collection policy is essentially an online scheduling problem: minimise write amplification while respecting wear limits. Understanding this gives you the real lever to tweak performance and longevity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
