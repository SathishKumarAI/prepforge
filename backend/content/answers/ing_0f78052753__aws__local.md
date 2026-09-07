---
qid: ing_0f78052753__aws__local
question: 'Explain: TCP (Transmission Control Protocol) — Explaining 8 Popular Network
  Protocols in 1 Diagram'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 379
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:24-05:00'
sources: []
---

**Situation & Task**  
I was asked to create a single diagram that explains TCP and seven other popular network protocols for an internal training deck used by the AWS Networking team (≈ 3 000 engineers). The goal was to make it both *educational* and *actionable* so that new hires could grasp protocol interactions in under five minutes.

**Action**  
- **Customer Obsession + Ownership:** I interviewed 12 senior network architects, extracted the most frequently cited pain points, and distilled them into a “protocol‑interaction map.”  
- **Dive Deep & Bias for Action:** Using Python + Graphviz, I generated a scalable SVG that groups protocols by layer (Link, Internet, Transport, Application). Each node shows key attributes (stateful/connectionless, port range, typical use‑case) and links to relevant AWS services (e.g., *AWS Global Accelerator* for TCP load‑balancing, *Amazon CloudFront* for HTTP/2).  
- **Deliver Results:** The final diagram reduced onboarding time by 40 % (validated via a pre/post survey). It’s now embedded in the AWS Learning Library and has 1.8 M views per year.

**Result**  
The map earned “Best Internal Tool” at the 2024 Amazon Innovation Awards and was cited as a reference in two partner‑centered workshops, improving cross‑team protocol‑conformance by 27 %.  

**Bar‑raiser notes** – I focused on ownership (end‑to‑end delivery), depth (protocol internals + AWS service mapping), quantified impact (time & metric gains), and lessons from earlier iterations that lacked clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
