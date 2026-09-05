---
qid: ing_0e5267ae55__fp__local
question: When would you skip parsing entirely and retrieve over page images with
  a visual retriever like ColPali?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 366
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:36:16-05:00'
sources: []
---

**When the text is an unreliable proxy for meaning**

A page’s *visual* content—layout, figures, handwritten notes—encodes information that a parser cannot recover.  
1. **Fundamental problem**: Retrieval systems aim to match user intent with evidence. If the evidence is hidden behind images (e.g., scanned PDFs, screenshots, infographics), token‑level parsing will miss it entirely.  
2. **Why visual retrieval must win**: The human eye extracts structure from pixels—whitespace, font size, color hierarchy—without converting them to characters. A visual encoder learns a joint embedding of *appearance* and *semantic salience*, which is invariant to OCR noise, missing fonts, or non‑Latin scripts.  
3. **Deeper principle**: In the space of multimodal embeddings, images and text occupy orthogonal manifolds. When the image manifold contains unique high‑level features (charts, diagrams), projecting only onto the textual manifold discards those axes, violating the *information bottleneck* that should preserve all predictive signals.  
4. **Non‑obvious insight**: Even if OCR succeeds, the *layout context*—which paragraph a figure belongs to or whether a note is footnote vs. body text—is lost in pure tokenization. ColPali’s positional encoding preserves this 2D structure, enabling retrieval of “the chart that shows X” even when no explicit keyword appears.

**Bottom line:** Skip parsing whenever the page contains substantial non‑textual or poorly OCR’d content; a visual retriever will capture the missing axes of meaning and yield better recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
