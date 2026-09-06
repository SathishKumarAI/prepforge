---
qid: ing_ae10ea7bc0__think__local
question: 'Explain: How the Internet Works — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 485
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:28:21-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   • Define “URL” as an HTTP/HTTPS address that includes protocol, host, optional path/port.  
   • Assume a typical client‑server model on the public Internet (no private intranet).  
   • Focus on what happens from keypress to receiving HTML, not deeper layers like TLS handshake details unless asked.

**2. Adopt a layered mental model**  
   - *Application layer*: browser parses URL → creates HTTP request.  
   - *Transport layer*: TCP establishes connection to server’s port 80/443.  
   - *Network layer*: IP routing through routers; DNS resolution for hostnames.  
   - *Link layer*: Ethernet/Wi‑Fi frames, ARP for MAC addresses.

**3. Step‑by‑step reasoning**  
   1. Browser parses URL → extracts hostname and path.  
   2. If hostname is not in local cache, browser queries a DNS resolver (recursive).  
   3. Resolver traverses root → TLD → authoritative servers to get IP address.  
   4. Browser initiates TCP SYN to that IP/port; OS sends ARP if needed.  
   5. TCP handshake completes; TLS handshake if HTTPS, exchanging certificates and keys.  
   6. Browser sends HTTP GET (or POST) over the secure socket.  
   7. Server processes request, returns HTTP response with headers + body.  
   8. Browser renders content, may issue additional requests for resources referenced in the HTML.

**4. Common traps to avoid**  
   - Confusing DNS caching with browser cache; they are separate layers.  
   - Assuming every URL always goes through a public DNS; private networks may use local name resolution.  
   - Overlooking that TLS happens *after* TCP, not before.  

**5. Sanity‑check & communicate**  
   • Verify each layer’s responsibility: parsing → DNS → routing → transport → application.  
   • Explain with a simple diagram or bullet list if the audience needs visual aid.  
   • Keep explanations concise but ensure each step is logically linked to the next, so the reader can map the flow from keystroke to rendered page.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
