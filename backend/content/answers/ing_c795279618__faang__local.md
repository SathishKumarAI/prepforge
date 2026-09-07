---
qid: ing_c795279618__faang__local
question: 'Explain: FTP (File Transfer Protocol) — Explaining 8 Popular Network Protocols
  in 1 Diagram'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 472
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:24:23-05:00'
sources: []
---

**Clarify**  
You want a single visual that maps **FTP** among the *eight* most‑used network protocols (HTTP, HTTPS, FTP, SFTP, SSH, SMTP, DNS, TCP/IP).  Confirm the list and whether you need protocol layers or just endpoints.

**Approach**  
1. Pick a two‑layer diagram: *Application Layer → Transport Layer*.  
2. List each protocol under its layer with an icon/label.  
3. Show the data flow arrow (client ↔ server) for each.  
4. Highlight FTP’s role (file transfer over TCP).

**Depth**  
- **Transport Layer** – TCP (reliable stream).  
- **Application Layer** –  
  - HTTP/HTTPS (web),  
  - SMTP (email),  
  - DNS (name resolution),  
  - FTP/SFTP (file),  
  - SSH (remote shell),  
  - Telnet (legacy remote access).  

```mermaid
flowchart LR
  subgraph Transport["TCP"]
    A(TCP)
  end
  subgraph Application["Application Layer"]
    HTTP[HTTP] -->|GET/POST| A
    HTTPS[HTTPS] -->|TLS over TCP| A
    SMTP[SMTP] -->|Mail| A
    DNS[DNS] -->|Query/Response| A
    FTP[FTP] -->|PORT, PASV| A
    SFTP[SFTP] -->|SSH| A
    SSH[SSH] -->|Shell| A
  end
```

**Edge Cases**  
- UDP‑based protocols (e.g., DNS over TLS) won’t appear.  
- File transfer via FTP requires a *control* and *data* channel; the diagram simplifies this.

**Optimize & Communicate**  
Add color coding: blue for HTTP/HTTPS, green for file protocols, orange for security (SSH/SFTP). Explain that FTP is the classic, unencrypted file protocol over TCP, whereas SFTP uses SSH for secure transfer. This visual lets interviewers instantly see how each protocol sits in the stack and where FTP fits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
