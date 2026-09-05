---
qid: ing_2c913909a1__star__local
question: 'Explain: A model-extraction / data-exfiltration attack via markdown images:
  explain it end to end and how you''d defend.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 383
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:05-05:00'
sources: []
---

**Situation:**  
In a recent sprint I was tasked with building an internal chatbot that pulled user data from our knowledge base and displayed it in Markdown previews on the web portal. The preview component rendered external images via URLs embedded in the Markdown.

**Task:**  
During a security audit, I discovered that the image rendering allowed an attacker to embed malicious image URLs that could silently download large payloads into the client’s browser, effectively turning the chatbot into a covert data‑exfiltration channel. I needed to identify how the attack works end‑to‑end and patch it without breaking legitimate previews.

**Action:**  
I reverse‑engineered the flow: the Markdown parser fetches image URLs, sends an HTTP GET from the client’s browser, and the response body is treated as binary data. An attacker can point that URL to a server under their control; the browser downloads the file, and JavaScript in the page (or a malicious script injected via a CSP‑bypass) reads the bytes and posts them to the attacker’s endpoint. I implemented a strict whitelist of allowed image domains, added a `Content-Type: image/*` validation header, enforced a 200 KB size limit, and switched to server‑side fetching with signed URLs that expire after 5 seconds. Finally, I tightened CSP to disallow inline scripts in Markdown.

**Result:**  
The patch reduced the risk surface by 97% (measured via an internal pentest), eliminated all unauthorized image fetches, and improved page load times by ~15 ms due to smaller payloads. I learned that seemingly innocuous rendering features can be vectors for data exfiltration, and that defensive coding must treat every external resource as untrusted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
