---
qid: ing_de4afd2b5e__fp__local
question: 'Explain: How to prepare — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 378
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:52:32-05:00'
sources: []
---

**Preparing a compelling “AI” figure from first principles**

The core goal of any scientific illustration is to encode information *efficiently*.  
1. **Identify the message** – decide whether you want to show an architecture, data flow, performance curve, or causal relationship.  
2. **Choose an optimal representation** – the principle of *minimal redundancy* (information theory) says that each visual element should convey new information. For a neural net, a directed graph with weighted edges is often optimal; for performance, a log‑scale line plot maximizes perceptual resolution where variance matters most.  
3. **Map dimensions to human perception** – use the *Cleveland–McGill hierarchy*: position → length → angle → area → color saturation. For instance, encode loss values with line height rather than hue; this leverages our superior acuity for spatial comparisons.  
4. **Apply Gestalt grouping** – proximity and similarity reduce cognitive load, letting viewers infer structure before the caption explains it.  
5. **Validate against human perception models** – run a quick eye‑tracking pilot or use the *Just Noticeable Difference* (JND) to ensure differences you intend to highlight are actually discernible.  

*A non‑obvious insight*: In deep‑learning diagrams, people often overuse color to indicate layer depth. Yet our visual system is far more sensitive to **spatial arrangement** than hue. A simple vertical stack with subtle shading can convey hierarchy as well—if anything clearer—while freeing color for truly categorical variables (e.g., activation type). This subtle shift reduces clutter and aligns the figure with innate perceptual strengths, making the AI story easier to read at a glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
