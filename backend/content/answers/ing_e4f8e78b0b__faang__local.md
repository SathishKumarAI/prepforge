---
qid: ing_e4f8e78b0b__faang__local
question: 'Explain: Context Rot: Why Context Is a Finite Resource'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 458
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:30:32-05:00'
sources: []
---

## Clarify  
We’re asked why *context* (the window of tokens the model can attend to) is finite.  
Assumptions:  
1. “Context” refers to a language‑model’s token limit (e.g., GPT‑4 8 k).  
2. We consider transformer‑based models and their computational constraints.

## Approach  
1. Explain the transformer architecture and its quadratic cost in sequence length.  
2. Connect that cost to GPU memory and latency, showing why a hard cap is necessary.  
3. Mention practical design choices (positional encodings, memory‑efficient attention).  

## Depth  
A transformer’s self‑attention requires an *N × N* matrix for N tokens.  
- **Memory:** Each entry holds a float; for 32‑bit floats, an 8 k context needs ~512 MB of VRAM just for the matrix (plus activations).  
- **Compute:** FLOPs scale as O(N²); doubling context quadruples GPU cycles, hurting latency and energy budgets.  
- **Positional encodings** also grow linearly with N; beyond a few thousand tokens they become less expressive.  

Thus, practical hardware limits (GPU VRAM, power) force us to set a hard maximum. Models can be extended via techniques like *memory‑efficient attention* or *recurrence*, but the base transformer still has a finite window.

## Edge Cases  
- Very short prompts → underutilized GPU.  
- Long documents → need chunking or streaming; naive concatenation would exceed memory and degrade quality.  
- Mixed‑precision inference reduces per‑token memory, slightly raising limits but not eliminating the quadratic scaling.

## Optimize & Communicate  
We can reduce cost with sparse attention (e.g., Longformer) or rotary embeddings that keep context size fixed while allowing longer effective sequences. In an interview, I’d highlight that the finiteness is a *design trade‑off*: higher capacity vs. feasibility. This demonstrates clear reasoning, technical depth, and awareness of engineering constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
