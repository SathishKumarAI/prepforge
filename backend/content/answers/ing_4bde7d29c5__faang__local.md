---
qid: ing_4bde7d29c5__faang__local
question: 'Explain: LoRA, QLoRA, and PEFT — Lora Qlora Peft'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 644
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:56-05:00'
sources: []
---

**Clarify**  
You’re asking for a quick comparison of three popular *parameter‑efficient fine‑tuning* (PEFT) techniques used with large language models: **LoRA**, **QLoRA**, and **PEFT** itself (the umbrella term).  
Assumptions:  
- The base model is an LLM trained on billions of tokens.  
- We want to adapt it to a downstream task without full‑parameter training.  

**Approach**  
1. Define each method’s core idea.  
2. Contrast their resource footprints and accuracy trade‑offs.  
3. Summarize when you’d pick one over the others.  

**Depth**  
| Technique | Core Idea | Memory Footprint | Inference Speed | Typical Accuracy Loss |
|-----------|-----------|------------------|-----------------|-----------------------|
| **LoRA** (Low‑Rank Adaptation) | Adds trainable low‑rank matrices to weight updates, freezing the original weights. Only ~2–5 % of parameters are updated. | Minimal; only rank‑\(r\) matrices stored. | No slowdown – same forward pass as base model. | <1 % drop on many tasks (depends on \(r\)). |
| **QLoRA** | Extends LoRA by *quantizing* the frozen weights to 4‑bit (or 8‑bit), dramatically reducing VRAM while still fine‑tuning low‑rank adapters. | ~3–5× smaller than LoRA (≈10 % of full FP16). | Slight overhead from de‑quantization, but often negligible in inference pipelines. | Comparable to LoRA on standard benchmarks; sometimes a few points lower for extreme quantization. |
| **PEFT** (Parameter‑Efficient Fine‑Tuning) | Generic term covering LoRA, QLoRA, adapters, prefix tuning, etc. Focuses on training only a tiny subset of parameters while keeping the backbone frozen. | Depends on chosen method; PEFT is the strategy, not a single algorithm. | Varies by method; all aim for inference‑time parity with full models. | Variable; best practices (e.g., proper rank selection) keep loss <2 %. |

**Edge Cases**  
- Extremely small \(r\) can underfit complex tasks.  
- Quantization may cause catastrophic forgetting if the base model has high entropy layers.  
- Some hardware lacks efficient 4‑bit ops → QLoRA slower than LoRA.  

**Optimize & Communicate**  
When interviewing, emphasize that **LoRA** is the baseline for memory‑efficient fine‑tuning; **QLoRA** is chosen when GPU VRAM is scarce and you can tolerate a tiny accuracy hit; **PEFT** is the overarching strategy you’ll adopt regardless of the specific algorithm. Highlight how each step (freeze, low‑rank adaptation, optional quantization) balances *parameter count*, *speed*, and *performance*. This showcases your understanding of both theory and practical deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
