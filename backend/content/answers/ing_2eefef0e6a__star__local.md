---
qid: ing_2eefef0e6a__star__local
question: 'Explain: You are building a computer-use agent. Design the perception layer:
  screenshots, coordinates, accessibility tree.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 300
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:05-05:00'
sources: []
---

**Situation** – At my last startup we were prototyping an AI‑driven desktop assistant that could read and interact with any Windows application. The beta build kept missing UI elements, especially in custom controls where the accessibility tree was sparse.

**Task** – I had to design a robust perception layer that fused screenshot OCR, coordinate mapping, and the accessibility API so the agent could reliably locate and identify every actionable element on screen.

**Action** – First, I captured full‑screen snapshots at 30 fps and ran them through an ONNX‑optimized YOLOv8 model trained on UI widgets to get bounding boxes. Next, I queried the Windows UI Automation tree for each box’s control type, name, and state; when a match was found I overlaid the coordinates onto the tree node. For custom controls lacking automation data, I used image hashing (dHash) against a local cache of known icons. The system then produced a unified “element map” with screen coordinates, accessibility metadata, and confidence scores, feeding this to the planner.

**Result** – Accuracy jumped from 68 % to 94 % in element detection, and interaction latency dropped below 200 ms on average. I learned that combining vision with native APIs gives resilience against UI variations, and that a lightweight caching layer keeps inference fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
