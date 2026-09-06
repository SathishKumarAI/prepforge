---
qid: ing_4d90b2ec83__think__local
question: 'Explain: Web and APIs — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 503
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:10:49-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   *The user wants a conceptual explanation of why web‑level protocols (HTTP over TCP) and API designs favor TCP instead of UDP.*  
   - Assume they know basic networking but not transport nuances.  
   - Assume they care about reliability, ordering, congestion control, and application‑layer semantics.

**2️⃣ Pick a mental framework**  
   *Transport‑Layer properties → Application needs → Design choice.*  
   Map: **TCP** (reliable, ordered, flow‑controlled) vs **UDP** (unreliable, unordered). Then overlay on typical web/API patterns (request/response, streaming, real‑time).

**3️⃣ Step‑by‑step reasoning**  
   1. List TCP features that matter for HTTP/APIs: ACKs, retransmissions, congestion control, connection state.  
   2. Explain how these ensure each request’s payload arrives intact and in the right order—critical for REST semantics (idempotence, consistency).  
   3. Contrast with UDP: no guarantee of delivery or ordering; useful only when latency beats loss (e.g., VoIP, gaming).  
   4. Show real‑world API scenarios where TCP shines (CRUD, file upload) and where UDP can be considered (WebRTC data channels, MQTT QoS 0).  
   5. Conclude with design trade‑offs: overhead vs reliability, header sizes, multiplexing.

**4️⃣ Avoid common traps**  
   - Don’t conflate “speed” with “UDP is faster”; both share the same base layer speed; UDP’s advantage is lack of handshakes.  
   - Avoid saying “TCP is always better”; context matters (e.g., IoT sensors may prefer UDP).  
   - Don’t gloss over congestion control: it protects network health, not just latency.

**5️⃣ Sanity‑check & communicate clearly**  
   - Re‑read to ensure each TCP feature maps to an API need.  
   - Use analogies (mail delivery vs a postcard) to illustrate reliability vs speed.  
   - End with a quick “TL;DR” bullet list of when to choose TCP or UDP in web/API design.

This structured thought process can be reused for any transport‑vs‑application explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
